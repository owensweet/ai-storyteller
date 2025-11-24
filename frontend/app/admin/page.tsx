"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getMessage } from '@/utils/messages';

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
                    setError(getMessage('errors.admin_access_denied'));
                } else {
                    router.push('/auth/login');
                }
            }
        } catch (err) {
            setError(getMessage('errors.admin_data_load_failed'));
        } finally {
            setLoading(false);
        }
    };

    const resetUserApiCalls = async (userId: number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/admin/users/${userId}/reset-api-calls`, {
                method: 'PATCH',
                credentials: 'include',
            });

            if (response.ok) {
                // Refresh data
                await fetchAdminData();
            } else {
                setError(getMessage('errors.reset_api_calls_failed'));
            }
        } catch (err) {
            setError(getMessage('errors.network_error'));
        }
    };

    const deleteUser = async (userId: number) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/admin/users/${userId}`,
                {
                    method: 'DELETE',
                    credentials: 'include',
                }
            );

            if (response.ok) {
                await fetchAdminData(); // refresh UI
            } else {
                setError(getMessage('errors.delete_user_failed'));
            }
        } catch (err) {
            setError(getMessage('errors.network_error'));
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
                <div className="text-lg">{getMessage('admin.loading')}</div>
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
                            <h1 className="text-xl font-semibold">{getMessage('admin.title')}</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                                {getMessage('admin.back_to_dashboard')}
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                {getMessage('dashboard.logout')}
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
                                    <div className="text-sm font-medium text-gray-500">{getMessage('admin.total_users')}</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.totalUsers}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">{getMessage('admin.admin_users')}</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.adminUsers}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">{getMessage('admin.total_api_calls')}</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.totalApiCalls}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">{getMessage('admin.users_over_limit')}</div>
                                    <div className="text-2xl font-bold text-red-600">{stats.usersOverLimit}</div>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="p-5">
                                    <div className="text-sm font-medium text-gray-500">{getMessage('admin.avg_api_calls')}</div>
                                    <div className="text-2xl font-bold text-gray-900">{stats.averageApiCalls}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Users Table */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {getMessage('admin.user_management')}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {getMessage('admin.monitor_users')}
                            </p>
                        </div>
                        <div className="border-t border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {getMessage('admin.user_column')}
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {getMessage('admin.role_column')}
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {getMessage('admin.api_calls_column')}
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {getMessage('admin.created_column')}
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {getMessage('admin.actions_column')}
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
                                                        {user.isAdmin ? getMessage('admin.role_admin') : getMessage('admin.role_user')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className={`text-sm ${user.apiCalls > 20 ? 'text-red-600' : 'text-gray-900'}`}>
                                                        {user.apiCalls} / 20
                                                    </div>
                                                    {user.apiCalls > 20 && (
                                                        <div className="text-xs text-red-500">{getMessage('admin.over_limit')}</div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(user.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-4 justify-end">
                                                    {/* Reset button */}
                                                    {user.apiCalls > 0 && (
                                                        <button
                                                            onClick={() => resetUserApiCalls(user.id)}
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            {getMessage('admin.reset_button')}
                                                        </button>
                                                    )}

                                                    {/* ✅ NEW Delete button */}
                                                    <button
                                                        onClick={() => {
                                                            if (confirm(getMessage('admin.delete_confirm', { email: user.email }))) {
                                                                deleteUser(user.id);
                                                            }
                                                        }}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        {getMessage('admin.delete_button')}
                                                    </button>
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