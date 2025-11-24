module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lang/en/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"app":{"title":"AI Storyteller - Create Amazing Stories with AI","description":"Generate captivating stories with our advanced AI story generator","redirecting":"Redirecting to login..."},"auth":{"sign_in":"Sign in","signing_in":"Signing in...","sign_in_existing":"sign in to your existing account","create_account":"create a new account","creating_account":"Creating account...","or":"Or","email":"Email address","password":"Password","test_credentials":"Test Credentials:","test_user":"User: john@john.com / 123","test_admin":"Admin: admin@admin.com / 111"},"dashboard":{"title":"AI Story Generator","instructions":"Please select up to 3 genres and 1 location setting to generate your story.","select_genres":"Select Genres","choose_up_to_3":"(Choose up to 3)","select_location":"Select Location Setting","choose_1":"(Choose 1)","generate_story":"Generate Story","generating_story":"Generating Story...","generating_wait":"Generating your story... Please wait.","edit_selections":"To edit your genre or location selections, please click \"New Story\" to start over.","max_genres":"Maximum 3 genres selected. Deselect one to choose another.","your_story":"Your Story","segment":"Segment","continue_story":"Continue Your Story","save_story":"Save Story","new_story":"New Story","generating_next":"Generating next part of your story...","api_calls":"API Calls","logout":"Logout","admin":"Admin","loading":"Loading...","back_to_dashboard":"Back to Dashboard"},"admin":{"title":"AI Storyteller - Admin Panel","loading":"Loading admin panel...","back_to_dashboard":"Back to Dashboard","total_users":"Total Users","admin_users":"Admin Users","total_api_calls":"Total API Calls","users_over_limit":"Users Over Limit","avg_api_calls":"Avg API Calls","user_management":"User Management","monitor_users":"Monitor and manage user API consumption","user_column":"User","role_column":"Role","api_calls_column":"API Calls","created_column":"Created","actions_column":"Actions","admin.reset_column":"Reset","admin.delete_column":"Delete","role_admin":"Admin","role_user":"User","over_limit":"Over limit","reset_button":"Reset API Calls","delete_button":"Delete","delete_confirm":"Delete user {email}? This cannot be undone."},"genres":{"action":"Action","action_prompt":"with intense action sequences and thrilling battles","adventure":"Adventure","adventure_prompt":"featuring exciting adventures and exploration","slice_of_life":"Slice of Life","slice_of_life_prompt":"depicting everyday life and relatable experiences","thriller":"Thriller","thriller_prompt":"with suspenseful and tension-filled moments","mystery":"Mystery","mystery_prompt":"containing intriguing mysteries and puzzles to solve","romance":"Romance","romance_prompt":"with heartfelt romantic relationships and emotions","horror":"Horror","horror_prompt":"featuring scary and unsettling elements"},"locations":{"fantasy":"Fantasy","fantasy_prompt":"Set in a magical fantasy world with mythical creatures and ancient powers","sci_fi":"Sci-Fi","sci_fi_prompt":"Set in a futuristic science fiction world with advanced technology and space travel","realistic":"Realistic","realistic_prompt":"Set in a contemporary realistic world similar to our own","alternate_history":"Alternate History","alternate_history_prompt":"Set in an alternate history timeline where key events unfolded differently"},"actions":{"more_action":"More Action","more_action_prompt":"Add more action and excitement to the story","more_intrigue":"More Intrigue","more_intrigue_prompt":"Increase the intrigue and mystery","more_comedy":"More Comedy","more_comedy_prompt":"Add humorous and comedic elements","more_drama":"More Drama","more_drama_prompt":"Heighten the dramatic tension","more_emotion":"More Emotion","more_emotion_prompt":"Deepen the emotional connections","plot_twist":"Plot Twist","plot_twist_prompt":"Introduce an unexpected plot twist","character_focus":"Character Focus","character_focus_prompt":"Focus more on character development","world_building":"World Building","world_building_prompt":"Expand on the world and setting","faster_pace":"Faster Pace","faster_pace_prompt":"Speed up the pacing of the story","slower_pace":"Slower Pace","slower_pace_prompt":"Slow down and add more detail"},"errors":{"network_error":"Network error. Please try again.","login_failed":"Login failed","registration_failed":"Registration failed","select_genre_location":"Please select at least 1 genre and 1 location setting","no_content_received":"No story content received. Please try again.","story_generation_failed":"Failed to generate story","admin_access_denied":"Access denied. Admin privileges required.","admin_data_load_failed":"Failed to load admin data","reset_api_calls_failed":"Failed to reset API calls","delete_user_failed":"Failed to delete user"},"llm":{"title":"LLM Streaming Test","default_prompt":"Write a 1-sentence bedtime story about a friendly dragon.","auth_required":"Authentication is Required","login_link":"Please log in first to use the LLM","login_required":"Please log in to use the LLM","system_message":"You are a concise and helpful assistant.","request_failed":"Request failed","prompt_label":"Prompt","prompt_placeholder":"Ask something…","send":"Send","sending":"Sending…","cancel":"Cancel","response_label":"Response","attempt_status":"Attempt {attempt} (with retries)…","error_heading":"Request failed","tip_check_route":"Check that your API route /api/llm is reachable.","tip_check_url":"Confirm LLM_BASE_URL is correct and the VM is up.","tip_check_tls":"If using TLS, ensure the proxy certificate is valid."}});}),
"[project]/utils/messages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMessage",
    ()=>getMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lang$2f$en$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lang/en/en.json (json)");
;
function getMessage(key, replacements = {}) {
    const keys = key.split('.');
    let message = __TURBOPACK__imported__module__$5b$project$5d2f$lang$2f$en$2f$en$2e$json__$28$json$29$__["default"];
    for (const k of keys){
        message = message[k];
        if (message === undefined) {
            console.warn(`Message key not found: ${key}`);
            return key;
        }
    }
    // Replace placeholders like {variable}
    if (typeof message === 'string' && Object.keys(replacements).length > 0) {
        return message.replace(/\{(\w+)\}/g, (match, placeholder)=>{
            return String(replacements[placeholder] || match);
        });
    }
    return message;
}
}),
"[project]/app/auth/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/messages.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function LoginPage() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                }
                // Redirect based on user role
                if (data.user.isAdmin) {
                    router.push('/admin');
                } else {
                    router.push('/dashboard');
                }
            } else {
                setError(data.error || (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.login_failed'));
            }
        } catch (err) {
            setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.network_error'));
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.sign_in')
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-center text-sm text-gray-600",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.or'),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/auth/register",
                                    className: "font-medium text-indigo-600 hover:text-indigo-500",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.create_account')
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "mt-8 space-y-6",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md shadow-sm -space-y-px",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email-address",
                                            className: "sr-only",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.email')
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "email-address",
                                            name: "email",
                                            type: "email",
                                            autoComplete: "email",
                                            required: true,
                                            className: "relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
                                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.email'),
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "sr-only",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.password')
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "password",
                                            name: "password",
                                            type: "password",
                                            autoComplete: "current-password",
                                            required: true,
                                            className: "relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
                                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.password'),
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 103,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50",
                                children: loading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.signing_in') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.sign_in')
                            }, void 0, false, {
                                fileName: "[project]/app/auth/login/page.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600 mb-2",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.test_credentials')
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.test_user')
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('auth.test_admin')
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/auth/login/page.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8fc2666d._.js.map