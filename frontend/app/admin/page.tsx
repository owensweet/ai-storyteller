"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
    id: number;
    email: string;
    isAdmin: boolean;
    apiCalls: number;
    createdAt: string;
}

interface Stats {
    totalUsers: number;
    adminUsers: number;
    totalApiCalls: number;
    usersOverLimit: number;
    averageApiCalls: string;
}

export default function AdminPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            // Fetch users
            const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/admin/users`, {
                credentials: 'include',
            });

            // Fetch stats
            const statsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/admin/stats`, {
                credentials: 'include',
            });

            if (usersResponse.ok && statsResponse.ok) {
                const usersData = await usersResponse.json();
                const statsData = await statsResponse.json();

                setUsers(usersData.users);
                setStats(statsData.stats);
            } else {
                if (usersResponse.status === 403 || statsResponse.status === 403) {
                    setError('Access denied. Admin privileges required.');
                } else {
                    router.push('/auth/login');
                }
            }
        } catch (err) {
            setError('Failed to load admin data');
        } finally {
            setLoading(false);
        }
    };

    const resetUserApiCalls = async (userId: number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/admin/users/${userId}/reset-api-calls`, {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                // Refresh data
                await fetchAdminData();
            } else {
                setError('Failed to reset API calls');
            }
        } catch (err) {
            setError('Network error');
        }
    };

    const handleLogout = async () => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
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
                <div className="text-lg">Loading admin panel...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-600">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold">AI Storyteller - Admin Panel</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                                Back to Dashboard
                            </Link>
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

                    {/* Statistics */}
                    {stats && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">Total Users</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.totalUsers}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">Admin Users</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.adminUsers}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">Total API Calls</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.totalApiCalls}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">Users Over Limit</div>
                                    <div className="text-2xl font-bold text-red-600">{stats.usersOverLimit}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">Avg API Calls</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.averageApiCalls}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Users Table */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                User Management
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Monitor and manage user API consumption
                            </p>
                        </div>
                        <div className="border-t border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                User
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                API Calls
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{user.email}</div>
                                                    <div className="text-sm text-gray-500">ID: {user.id}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.isAdmin
                                                            ? 'bg-purple-100 text-purple-800'
                                                            : 'bg-green-100 text-green-800'
                                                        }`}>
                                                        {user.isAdmin ? 'Admin' : 'User'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className={`text-sm ${user.apiCalls > 20 ? 'text-red-600' : 'text-gray-900'}`}>
                                                        {user.apiCalls} / 20
                                                    </div>
                                                    {user.apiCalls > 20 && (
                                                        <div className="text-xs text-red-500">Over limit</div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(user.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    {user.apiCalls > 0 && (
                                                        <button
                                                            onClick={() => resetUserApiCalls(user.id)}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            Reset API Calls
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}