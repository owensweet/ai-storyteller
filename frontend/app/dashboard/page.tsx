"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getMessage } from '@/utils/messages';

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
    { id: 'action', label: getMessage('genres.action'), prompt: getMessage('genres.action_prompt') },
    { id: 'adventure', label: getMessage('genres.adventure'), prompt: getMessage('genres.adventure_prompt') },
    { id: 'slice-of-life', label: getMessage('genres.slice_of_life'), prompt: getMessage('genres.slice_of_life_prompt') },
    { id: 'thriller', label: getMessage('genres.thriller'), prompt: getMessage('genres.thriller_prompt') },
    { id: 'mystery', label: getMessage('genres.mystery'), prompt: getMessage('genres.mystery_prompt') },
    { id: 'romance', label: getMessage('genres.romance'), prompt: getMessage('genres.romance_prompt') },
    { id: 'horror', label: getMessage('genres.horror'), prompt: getMessage('genres.horror_prompt') },
];

// Location settings
const LOCATIONS = [
    { id: 'fantasy', label: getMessage('locations.fantasy'), prompt: getMessage('locations.fantasy_prompt') },
    { id: 'sci-fi', label: getMessage('locations.sci_fi'), prompt: getMessage('locations.sci_fi_prompt') },
    { id: 'realistic', label: getMessage('locations.realistic'), prompt: getMessage('locations.realistic_prompt') },
    { id: 'alternate-history', label: getMessage('locations.alternate_history'), prompt: getMessage('locations.alternate_history_prompt') },
];

// Action buttons for story continuation
const ACTION_BUTTONS = [
    { id: 'more-action', label: getMessage('actions.more_action'), prompt: getMessage('actions.more_action_prompt') },
    { id: 'more-intrigue', label: getMessage('actions.more_intrigue'), prompt: getMessage('actions.more_intrigue_prompt') },
    { id: 'more-comedy', label: getMessage('actions.more_comedy'), prompt: getMessage('actions.more_comedy_prompt') },
    { id: 'more-drama', label: getMessage('actions.more_drama'), prompt: getMessage('actions.more_drama_prompt') },
    { id: 'more-emotion', label: getMessage('actions.more_emotion'), prompt: getMessage('actions.more_emotion_prompt') },
    { id: 'plot-twist', label: getMessage('actions.plot_twist'), prompt: getMessage('actions.plot_twist_prompt') },
    { id: 'character-focus', label: getMessage('actions.character_focus'), prompt: getMessage('actions.character_focus_prompt') },
    { id: 'world-building', label: getMessage('actions.world_building'), prompt: getMessage('actions.world_building_prompt') },
    { id: 'faster-pace', label: getMessage('actions.faster_pace'), prompt: getMessage('actions.faster_pace_prompt') },
    { id: 'slower-pace', label: getMessage('actions.slower_pace'), prompt: getMessage('actions.slower_pace_prompt') },
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
            setError(getMessage('errors.failed_load_profile'));
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers: HeadersInit = {
                'Content-Type': 'application/json',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include',
                headers,
            });

            localStorage.removeItem('token');
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
            } else {
                console.warn('No content received from LLM');
                setGenerationError(getMessage('errors.no_content_received'));
            }

        } catch (err: any) {
            clearTimeout(timeout);
            if (err.name !== 'AbortError') {
                console.error('Story generation error:', err);
                setGenerationError(err.message || getMessage('errors.story_generation_failed'));
            }
        } finally {
            setIsGenerating(false);
        }
    };

    // Handle initial submit
    const handleSubmit = () => {
        if (selectedGenres.length === 0 || !selectedLocation) {
            setGenerationError(getMessage('errors.select_genre_location'));
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
            <div className="min-h-screen bg-violet-50">
                <div className="text-lg">{getMessage('dashboard.loading')}</div>
            </div>
        );
    }

    if (error || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-red-600">{error || getMessage('errors.failed_load_dashboard')}</div>
            </div>
        );
    }

    const isOverLimit = user.apiCalls >= 20;
    const canSubmit = selectedGenres.length > 0 && selectedLocation && !hasSubmitted && !isGenerating;

    return (
        <div className="min-h-screen bg-purple-50">
            {/* Navigation */}
            <nav className="bg-purple-700 shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">

                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-white">{getMessage('dashboard.title')}</h1>
                        </div>

                        <div className="flex items-center space-x-4">

                            <div className="text-sm text-purple-100">
                                <span className="font-medium">{user.email}</span>
                                <span className="ml-2">{getMessage('dashboard.api_calls')}: {user.apiCalls}/20</span>
                            </div>

                            {user.isAdmin && (
                                <Link
                                    href="/admin"
                                    className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors"
                                >
                                    {getMessage('dashboard.admin')}
                                </Link>
                            )}

                            <button
                                onClick={handleLogout}
                                className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition-all shadow-sm hover:shadow"
                            >
                                {getMessage('dashboard.logout')}
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                        <strong>Instructions:</strong> {getMessage('dashboard.instructions')}
                    </p>
                </div>

                {/* Genre Selection */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        {getMessage('dashboard.select_genres')} <span className="text-sm font-normal text-gray-600">{getMessage('dashboard.choose_up_to_3')}</span>
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
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105'
                                        : 'bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 hover:border-violet-200'
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
                            {getMessage('dashboard.max_genres')}
                        </p>
                    )}
                </div>

                {/* Location Setting Selection */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        {getMessage('dashboard.select_location')} <span className="text-sm font-normal text-gray-600">{getMessage('dashboard.choose_1')}</span>
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
                                        ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105'
                                        : 'bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 hover:border-violet-200'
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
                            className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${canSubmit
                                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                        >
                            {isGenerating ? getMessage('dashboard.generating_story') : getMessage('dashboard.generate_story')}
                        </button>
                    </div>
                )}


                {/* Message after submission */}
                {hasSubmitted && storySegments.length === 0 && isGenerating && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-yellow-800 text-center">
                            {getMessage('dashboard.generating_wait')}
                        </p>
                    </div>
                )}

                {/* Message about editing */}
                {hasSubmitted && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 shadow-sm">
                        <p className="text-sm text-amber-800 text-center">
                            {getMessage('dashboard.edit_selections')}
                        </p>
                    </div>
                )}

                {/* Error Display */}
                {generationError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 shadow-sm">
                        <p className="text-sm text-red-800 mb-3">
                            <strong>Error:</strong> {generationError}
                        </p>
                        <button
                            onClick={handleNewStory}
                            className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-sm hover:shadow"
                        >
                            {getMessage('dashboard.new_story')}
                        </button>
                    </div>
                )}

                {/* Story Segments Display */}
                {storySegments.length > 0 && (
                    <div className="space-y-4 mb-6">
                        <h2 className="text-xl font-bold text-gray-900">{getMessage('dashboard.your_story')}</h2>
                        {storySegments.map((segment, index) => (

                            <div
                                key={segment.id}
                                className="bg-white border border-violet-100 rounded-xl shadow-md p-6 border-l-4 border-l-violet-500 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm font-semibold text-blue-600">
                                        {getMessage('dashboard.segment')} {index + 1}
                                    </span>
                                    <span className="text-xs text-slate-500">
                                        {segment.timestamp.toLocaleTimeString()}
                                    </span>
                                </div>

                                <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">
                                    {segment.text}
                                </p>

                            </div>
                        ))}
                    </div>
                )}

                {/* Action Buttons (shown after first story generation) */}
                {storySegments.length > 0 && !isGenerating && (
                    <div className="bg-white border border-violet-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">{getMessage('dashboard.continue_story')}</h3>

                        {/* Random Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                            {randomActions.map(action => (
                                <button
                                    key={action.id}
                                    onClick={() => handleActionClick(action)}
                                    disabled={isGenerating}
                                    className="px-4 py-3 bg-violet-50 text-violet-700 border border-violet-200 rounded-lg font-medium hover:bg-violet-100 hover:border-violet-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Save and New Story Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-violet-100">

                            <button
                                onClick={handleSaveStory}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-200 shadow-sm hover:shadow"
                            >
                                {getMessage('dashboard.save_story')}
                            </button>

                            <button
                                onClick={handleNewStory}
                                className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-200 shadow-sm hover:shadow"
                            >
                                {getMessage('dashboard.new_story')}
                            </button>

                        </div>
                    </div>
                )}

                {/* Loading indicator during generation */}
                {isGenerating && storySegments.length > 0 && (
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-4 mt-4 shadow-sm">
                        <p className="text-sm text-violet-800 text-center animate-pulse font-medium">
                            {getMessage('dashboard.generating_next')}
                        </p>
                    </div>
                )}

            </main>
        </div>
    );
}