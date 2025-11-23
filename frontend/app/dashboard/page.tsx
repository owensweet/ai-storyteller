"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
    id: number;
    email: string;
    apiCalls: number;
    remainingCalls: number;
    isAdmin: boolean;
}

interface StorySegment {
    id: number;
    text: string;
    timestamp: Date;
}

// Genre options
const GENRES = [
    { id: 'action', label: 'Action', prompt: 'with intense action sequences and thrilling battles' },
    { id: 'adventure', label: 'Adventure', prompt: 'featuring exciting adventures and exploration' },
    { id: 'slice-of-life', label: 'Slice of Life', prompt: 'depicting everyday life and relatable experiences' },
    { id: 'thriller', label: 'Thriller', prompt: 'with suspenseful and tension-filled moments' },
    { id: 'mystery', label: 'Mystery', prompt: 'containing intriguing mysteries and puzzles to solve' },
    { id: 'romance', label: 'Romance', prompt: 'with heartfelt romantic relationships and emotions' },
    { id: 'horror', label: 'Horror', prompt: 'featuring scary and unsettling elements' },
];

// Location settings
const LOCATIONS = [
    { id: 'fantasy', label: 'Fantasy', prompt: 'Set in a magical fantasy world with mythical creatures and ancient powers' },
    { id: 'sci-fi', label: 'Sci-Fi', prompt: 'Set in a futuristic science fiction world with advanced technology and space travel' },
    { id: 'realistic', label: 'Realistic', prompt: 'Set in a contemporary realistic world similar to our own' },
    { id: 'alternate-history', label: 'Alternate History', prompt: 'Set in an alternate history timeline where key events unfolded differently' },
];

// Action buttons for story continuation
const ACTION_BUTTONS = [
    { id: 'more-action', label: 'More Action', prompt: 'Add more action and excitement to the story' },
    { id: 'more-intrigue', label: 'More Intrigue', prompt: 'Increase the intrigue and mystery' },
    { id: 'more-comedy', label: 'More Comedy', prompt: 'Add humorous and comedic elements' },
    { id: 'more-drama', label: 'More Drama', prompt: 'Heighten the dramatic tension' },
    { id: 'more-emotion', label: 'More Emotion', prompt: 'Deepen the emotional connections' },
    { id: 'plot-twist', label: 'Plot Twist', prompt: 'Introduce an unexpected plot twist' },
    { id: 'character-focus', label: 'Character Focus', prompt: 'Focus more on character development' },
    { id: 'world-building', label: 'World Building', prompt: 'Expand on the world and setting' },
    { id: 'faster-pace', label: 'Faster Pace', prompt: 'Speed up the pacing of the story' },
    { id: 'slower-pace', label: 'Slower Pace', prompt: 'Slow down and add more detail' },
];

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    // Story generator states
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [storySegments, setStorySegments] = useState<StorySegment[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [randomActions, setRandomActions] = useState<typeof ACTION_BUTTONS>([]);
    const [generationError, setGenerationError] = useState('');

    const abortControllerRef = useRef<AbortController | null>(null);

    // Get 3 random action buttons
    const getRandomActions = useCallback(() => {

        const shuffled = [...ACTION_BUTTONS].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 3);
    }, []);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    useEffect(() => {
        // Set initial random actions
        setRandomActions(getRandomActions());
    }, [getRandomActions]);

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log('[FRONTEND DEBUG] Token from localStorage:', token ? 'Found' : 'Not found');

            if (!token) {

                console.log('[FRONTEND DEBUG] No token found, redirecting to login');

                router.push('/auth/login');

                return;
            }

            console.log('[FRONTEND DEBUG] Making profile request with token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/users/profile`, {
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('[FRONTEND DEBUG] Profile response status:', response.status);

            if (response.ok) {

                const data = await response.json();

                console.log('[FRONTEND DEBUG] Profile data received:', data);

                setUser(data.user);

            } else {
                console.log("user profile could not be fetched, rerouting")

                router.push('/auth/login');
            }
        } catch (err) {
            setError('Failed to load user profile');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include',
            });

            router.push('/auth/login');

        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    // Genre selection handler
    const toggleGenre = (genreId: string) => {
        if (hasSubmitted) return; // Prevent changes after submission

        setSelectedGenres(prev => {

            if (prev.includes(genreId)) {

                // Deselect if already selected
                return prev.filter(id => id !== genreId);

            } else if (prev.length < 3) {

                // Add if under limit
                return [...prev, genreId];

            } else {

                // At limit, don't add
                return prev;

            }
        });
    };

    // Location selection handler
    const selectLocation = (locationId: string) => {
        if (hasSubmitted) return; // Prevent changes after submission

        setSelectedLocation(locationId);
    };

    // Build prompt from selections
    const buildPrompt = (isInitial: boolean, actionPrompt?: string) => {
        const genrePrompts = selectedGenres

            .map(id => GENRES.find(g => g.id === id)?.prompt)
            .filter(Boolean)
            .join(', ');

        const locationPrompt = LOCATIONS.find(l => l.id === selectedLocation)?.prompt || '';

        if (isInitial) {
            return `Write an engaging story opening chapter (80 words, 4-5 sentences). ${locationPrompt}. The story should be ${genrePrompts}. Create an intriguing beginning that sets up the characters, setting, and initial conflict.`;
        } else {
            const previousStory = storySegments.map(s => s.text).join('\n\n');
            return `Continue this story (80 words, 4-5 sentences). ${actionPrompt}\n\nPrevious story:\n${previousStory}\n\nContinue the story naturally:`;
        }
    };

    // Parse SSE stream
    const parseSSELine = (line: string): string | null => {
        if (!line.startsWith('data:')) return null;

        const json = line.slice(5).trim();

        if (json === '[DONE]') return null;

        try {
            const parsed = JSON.parse(json);
            return parsed?.choices?.[0]?.delta?.content ?? '';
        } catch {
            return null;
        }
    };

    // Generate story segment
    const generateStory = async (actionPrompt?: string) => {

        setIsGenerating(true);
        setGenerationError('');

        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
            return;
        }

        abortControllerRef.current = new AbortController();

        // Add 45 second timeout like working llm-test page
        const timeout = setTimeout(() => abortControllerRef.current?.abort(), 45000);

        const isInitial = storySegments.length === 0;
        const prompt = buildPrompt(isInitial, actionPrompt);

        let accumulatedText = '';

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/llm`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        model: 'mistral',
                        messages: [
                            { role: 'system', content: 'You are a creative storyteller who writes engaging, concise story segments.' },
                            { role: 'user', content: prompt }
                        ],
                        max_tokens: 150,
                        temperature: 0.8,
                    }),
                    signal: abortControllerRef.current.signal,
                }
            );

            clearTimeout(timeout);

            if (!response.ok || !response.body) {
                const text = await response.text().catch(() => "");
                throw new Error(`HTTP ${response.status}: ${text || response.statusText}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) throw new Error('No response body');

            let buffer = '';

            while (true) {

                const { done, value } = await reader.read();

                if (done) break;

                buffer += decoder.decode(value, { stream: true });

                const lines = buffer.split('\n');

                buffer = lines.pop() || '';

                for (const line of lines) {

                    const content = parseSSELine(line);

                    if (content) {
                        accumulatedText += content;
                    }
                }
            }

            // Process remaining buffer
            if (buffer) {

                const content = parseSSELine(buffer);

                if (content) accumulatedText += content;
            }

            // Add new story segment
            if (accumulatedText.trim()) {
                const newSegment: StorySegment = {
                    id: storySegments.length + 1,
                    text: accumulatedText.trim(),
                    timestamp: new Date(),
                };
                setStorySegments(prev => [...prev, newSegment]);

                // Generate new random actions for next continuation
                setRandomActions(getRandomActions());
            }

        } catch (err: any) {
            clearTimeout(timeout);
            if (err.name !== 'AbortError') {
                console.error('Story generation error:', err);
                setGenerationError(err.message || 'Failed to generate story');
            }
        } finally {
            setIsGenerating(false);
        }
    };

    // Handle initial submit
    const handleSubmit = () => {
        if (selectedGenres.length === 0 || !selectedLocation) {
            setGenerationError('Please select at least 1 genre and 1 location setting');
            return;
        }

        setHasSubmitted(true);
        generateStory();
    };

    // Handle action button click
    const handleActionClick = (actionButton: typeof ACTION_BUTTONS[0]) => {
        generateStory(actionButton.prompt);
    };

    // Handle save story
    const handleSaveStory = () => {
        // Download code here
        console.log('Save story clicked - download implementation by colleague');
        console.log('Story segments to save:', storySegments);
    };

    // Handle new story
    const handleNewStory = () => {
        setSelectedGenres([]);
        setSelectedLocation('');
        setStorySegments([]);
        setHasSubmitted(false);
        setGenerationError('');
        setRandomActions(getRandomActions());
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-red-600">{error || 'Failed to load dashboard'}</div>
            </div>
        );
    }

    const isOverLimit = user.apiCalls >= 20;
    const canSubmit = selectedGenres.length > 0 && selectedLocation && !hasSubmitted && !isGenerating;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">

                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">AI Story Generator</h1>
                        </div>

                        <div className="flex items-center space-x-4">

                            <div className="text-sm text-gray-600">
                                <span className="font-medium">{user.email}</span>
                                <span className="ml-2">API Calls: {user.apiCalls}/20</span>
                            </div>

                            {user.isAdmin && (
                                <Link
                                    href="/admin"
                                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200"
                                >
                                    Admin
                                </Link>
                            )}

                            <button
                                onClick={handleLogout}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                            >
                                Logout
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                        <strong>Instructions:</strong> Please select up to 3 genres and 1 location setting to generate your story.
                    </p>
                </div>

                {/* Genre Selection */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Select Genres <span className="text-sm font-normal text-gray-600">(Choose up to 3)</span>
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {GENRES.map(genre => {
                            const isSelected = selectedGenres.includes(genre.id);
                            return (
                                <button
                                    key={genre.id}
                                    onClick={() => toggleGenre(genre.id)}
                                    disabled={hasSubmitted}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isSelected
                                        ? 'bg-green-500 text-white shadow-lg transform scale-105'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        } ${hasSubmitted ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                                        }`}
                                >
                                    {genre.label}
                                </button>
                            );
                        })}
                    </div>
                    {selectedGenres.length >= 3 && !hasSubmitted && (
                        <p className="mt-3 text-sm text-amber-600">
                            Maximum 3 genres selected. Deselect one to choose another.
                        </p>
                    )}
                </div>

                {/* Location Setting Selection */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Select Location Setting <span className="text-sm font-normal text-gray-600">(Choose 1)</span>
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {LOCATIONS.map(location => {
                            const isSelected = selectedLocation === location.id;
                            return (
                                <button
                                    key={location.id}
                                    onClick={() => selectLocation(location.id)}
                                    disabled={hasSubmitted}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isSelected
                                        ? 'bg-green-500 text-white shadow-lg transform scale-105'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        } ${hasSubmitted ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                                        }`}
                                >
                                    {location.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Submit Button */}
                {!hasSubmitted && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={handleSubmit}
                            disabled={!canSubmit}
                            className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 ${canSubmit
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg transform hover:scale-105'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {isGenerating ? 'Generating Story...' : 'Generate Story'}
                        </button>
                    </div>
                )}

                {/* Message after submission */}
                {hasSubmitted && storySegments.length === 0 && isGenerating && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-yellow-800 text-center">
                            Generating your story... Please wait.
                        </p>
                    </div>
                )}

                {/* Message about editing */}
                {hasSubmitted && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-amber-800 text-center">
                            To edit your genre or location selections, please click "New Story" to start over.
                        </p>
                    </div>
                )}

                {/* Error Display */}
                {generationError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-red-800 mb-3">
                            <strong>Error:</strong> {generationError}
                        </p>
                        <button
                            onClick={handleNewStory}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                        >
                            New Story
                        </button>
                    </div>
                )}

                {/* Story Segments Display */}
                {storySegments.length > 0 && (
                    <div className="space-y-4 mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Your Story</h2>
                        {storySegments.map((segment, index) => (

                            <div
                                key={segment.id}
                                className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm font-semibold text-blue-600">
                                        Segment {index + 1}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {segment.timestamp.toLocaleTimeString()}
                                    </span>
                                </div>

                                <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                                    {segment.text}
                                </p>

                            </div>
                        ))}
                    </div>
                )}

                {/* Action Buttons (shown after first story generation) */}
                {storySegments.length > 0 && !isGenerating && (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Story</h3>

                        {/* Random Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                            {randomActions.map(action => (
                                <button
                                    key={action.id}
                                    onClick={() => handleActionClick(action)}
                                    disabled={isGenerating}
                                    className="px-4 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Save and New Story Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t">

                            <button
                                onClick={handleSaveStory}
                                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                            >
                                Save Story
                            </button>

                            <button
                                onClick={handleNewStory}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                            >
                                New Story
                            </button>

                        </div>
                    </div>
                )}

                {/* Loading indicator during generation */}
                {isGenerating && storySegments.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                        <p className="text-sm text-blue-800 text-center animate-pulse">
                            Generating next part of your story...
                        </p>
                    </div>
                )}

            </main>
        </div>
    );
}