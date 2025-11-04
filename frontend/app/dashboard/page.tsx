"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
    id: number;
    email: string;
    apiCalls: number;
    remainingCalls: number;
    isAdmin: boolean;
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        fetchUserProfile();
    }, []);

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

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-600">{error || 'Failed to load dashboard'}</div>
            </div>
        );
    }

    const isOverLimit = user.apiCalls >= 20;

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold">AI Storyteller</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">Welcome, {user.email}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* API Usage Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isOverLimit ? 'bg-red-100' : 'bg-green-100'
                                            }`}>
                                            <span className={`text-sm font-medium ${isOverLimit ? 'text-red-600' : 'text-green-600'
                                                }`}>
                                                API
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                API Calls Used
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                {user.apiCalls} / 20
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="relative pt-1">
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div
                                                style={{ width: `${Math.min((user.apiCalls / 20) * 100, 100)}%` }}
                                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${isOverLimit ? 'bg-red-500' : 'bg-green-500'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                    {isOverLimit && (
                                        <p className="text-sm text-red-600">
                                            ⚠️ You have exceeded your free API limit. You can still use the service.
                                        </p>
                                    )}
                                    {!isOverLimit && (
                                        <p className="text-sm text-gray-600">
                                            {user.remainingCalls} calls remaining
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* LLM Test Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-blue-600">AI</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                AI Story Generator
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                Ready to Use
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link
                                        href="/llm-test"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        Start Generating Stories
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Account Info Card */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-gray-600">👤</span>
                                        </div>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                Account Type
                                            </dt>
                                            <dd className="text-lg font-medium text-gray-900">
                                                {user.isAdmin ? 'Administrator' : 'User'}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="text-sm text-gray-600">
                                        <div>Email: {user.email}</div>
                                        <div>Status: Active</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Admin Link */}
                    {user.isAdmin && (
                        <div className="mt-6">
                            <Link
                                href="/admin"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Go to Admin Panel
                            </Link>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}