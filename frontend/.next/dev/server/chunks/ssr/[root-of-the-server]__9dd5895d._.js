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
"[project]/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
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
// Genre options
const GENRES = [
    {
        id: 'action',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.action'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.action_prompt')
    },
    {
        id: 'adventure',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.adventure'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.adventure_prompt')
    },
    {
        id: 'slice-of-life',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.slice_of_life'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.slice_of_life_prompt')
    },
    {
        id: 'thriller',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.thriller'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.thriller_prompt')
    },
    {
        id: 'mystery',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.mystery'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.mystery_prompt')
    },
    {
        id: 'romance',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.romance'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.romance_prompt')
    },
    {
        id: 'horror',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.horror'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('genres.horror_prompt')
    }
];
// Location settings
const LOCATIONS = [
    {
        id: 'fantasy',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.fantasy'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.fantasy_prompt')
    },
    {
        id: 'sci-fi',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.sci_fi'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.sci_fi_prompt')
    },
    {
        id: 'realistic',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.realistic'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.realistic_prompt')
    },
    {
        id: 'alternate-history',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.alternate_history'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('locations.alternate_history_prompt')
    }
];
// Action buttons for story continuation
const ACTION_BUTTONS = [
    {
        id: 'more-action',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_action'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_action_prompt')
    },
    {
        id: 'more-intrigue',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_intrigue'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_intrigue_prompt')
    },
    {
        id: 'more-comedy',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_comedy'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_comedy_prompt')
    },
    {
        id: 'more-drama',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_drama'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_drama_prompt')
    },
    {
        id: 'more-emotion',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_emotion'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.more_emotion_prompt')
    },
    {
        id: 'plot-twist',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.plot_twist'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.plot_twist_prompt')
    },
    {
        id: 'character-focus',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.character_focus'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.character_focus_prompt')
    },
    {
        id: 'world-building',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.world_building'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.world_building_prompt')
    },
    {
        id: 'faster-pace',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.faster_pace'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.faster_pace_prompt')
    },
    {
        id: 'slower-pace',
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.slower_pace'),
        prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('actions.slower_pace_prompt')
    }
];
function DashboardPage() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Story generator states
    const [selectedGenres, setSelectedGenres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [storySegments, setStorySegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSubmitted, setHasSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [randomActions, setRandomActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [generationError, setGenerationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get 3 random action buttons
    const getRandomActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const shuffled = [
            ...ACTION_BUTTONS
        ].sort(()=>0.5 - Math.random());
        return shuffled.slice(0, 3);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchUserProfile();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set initial random actions
        setRandomActions(getRandomActions());
    }, [
        getRandomActions
    ]);
    const fetchUserProfile = async ()=>{
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
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('[FRONTEND DEBUG] Profile response status:', response.status);
            if (response.ok) {
                const data = await response.json();
                console.log('[FRONTEND DEBUG] Profile data received:', data);
                setUser(data.user);
            } else {
                console.log("user profile could not be fetched, rerouting");
                router.push('/auth/login');
            }
        } catch (err) {
            setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.failed_load_profile'));
        } finally{
            setLoading(false);
        }
    };
    const handleLogout = async ()=>{
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json'
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include',
                headers
            });
            localStorage.removeItem('token');
            router.push('/auth/login');
        } catch (err) {
            console.error('Logout error:', err);
        }
    };
    // Genre selection handler
    const toggleGenre = (genreId)=>{
        if (hasSubmitted) return; // Prevent changes after submission
        setSelectedGenres((prev)=>{
            if (prev.includes(genreId)) {
                // Deselect if already selected
                return prev.filter((id)=>id !== genreId);
            } else if (prev.length < 3) {
                // Add if under limit
                return [
                    ...prev,
                    genreId
                ];
            } else {
                // At limit, don't add
                return prev;
            }
        });
    };
    // Location selection handler
    const selectLocation = (locationId)=>{
        if (hasSubmitted) return; // Prevent changes after submission
        setSelectedLocation(locationId);
    };
    // Build prompt from selections
    const buildPrompt = (isInitial, actionPrompt)=>{
        const genrePrompts = selectedGenres.map((id)=>GENRES.find((g)=>g.id === id)?.prompt).filter(Boolean).join(', ');
        const locationPrompt = LOCATIONS.find((l)=>l.id === selectedLocation)?.prompt || '';
        if (isInitial) {
            return `Write an engaging story opening chapter (80 words, 4-5 sentences). ${locationPrompt}. The story should be ${genrePrompts}. Create an intriguing beginning that sets up the characters, setting, and initial conflict.`;
        } else {
            const previousStory = storySegments.map((s)=>s.text).join('\n\n');
            return `Continue this story (80 words, 4-5 sentences). ${actionPrompt}\n\nPrevious story:\n${previousStory}\n\nContinue the story naturally:`;
        }
    };
    // Parse SSE stream
    const parseSSELine = (line)=>{
        if (!line.startsWith('data:')) return null;
        const json = line.slice(5).trim();
        if (json === '[DONE]') return null;
        try {
            const parsed = JSON.parse(json);
            return parsed?.choices?.[0]?.delta?.content ?? '';
        } catch  {
            return null;
        }
    };
    // Generate story segment
    const generateStory = async (actionPrompt)=>{
        setIsGenerating(true);
        setGenerationError('');
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
            return;
        }
        abortControllerRef.current = new AbortController();
        // Add 45 second timeout like working llm-test page
        const timeout = setTimeout(()=>abortControllerRef.current?.abort(), 45000);
        const isInitial = storySegments.length === 0;
        const prompt = buildPrompt(isInitial, actionPrompt);
        let accumulatedText = '';
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ai-storyteller-production.up.railway.app'}/api/llm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
                body: JSON.stringify({
                    model: 'mistral',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a creative storyteller who writes engaging, concise story segments.'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.8
                }),
                signal: abortControllerRef.current.signal
            });
            clearTimeout(timeout);
            if (!response.ok || !response.body) {
                const text = await response.text().catch(()=>"");
                throw new Error(`HTTP ${response.status}: ${text || response.statusText}`);
            }
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            if (!reader) throw new Error('No response body');
            let buffer = '';
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, {
                    stream: true
                });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';
                for (const line of lines){
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
                const newSegment = {
                    id: storySegments.length + 1,
                    text: accumulatedText.trim(),
                    timestamp: new Date()
                };
                setStorySegments((prev)=>[
                        ...prev,
                        newSegment
                    ]);
                // Generate new random actions for next continuation
                setRandomActions(getRandomActions());
            } else {
                console.warn('No content received from LLM');
                setGenerationError((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.no_content_received'));
            }
        } catch (err) {
            clearTimeout(timeout);
            if (err.name !== 'AbortError') {
                console.error('Story generation error:', err);
                setGenerationError(err.message || (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.story_generation_failed'));
            }
        } finally{
            setIsGenerating(false);
        }
    };
    // Handle initial submit
    const handleSubmit = ()=>{
        if (selectedGenres.length === 0 || !selectedLocation) {
            setGenerationError((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.select_genre_location'));
            return;
        }
        setHasSubmitted(true);
        generateStory();
    };
    // Handle action button click
    const handleActionClick = (actionButton)=>{
        generateStory(actionButton.prompt);
    };
    // Handle save story
    const handleSaveStory = ()=>{
        // Download code here
        console.log('Save story clicked - download implementation by colleague');
        console.log('Story segments to save:', storySegments);
    };
    // Handle new story
    const handleNewStory = ()=>{
        setSelectedGenres([]);
        setSelectedLocation('');
        setStorySegments([]);
        setHasSubmitted(false);
        setGenerationError('');
        setRandomActions(getRandomActions());
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-violet-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.loading')
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 375,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 374,
            columnNumber: 13
        }, this);
    }
    if (error || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-600",
                children: error || (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('errors.failed_load_dashboard')
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 383,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 382,
            columnNumber: 13
        }, this);
    }
    const isOverLimit = user.apiCalls >= 20;
    const canSubmit = selectedGenres.length > 0 && selectedLocation && !hasSubmitted && !isGenerating;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-purple-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-purple-700 shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-white",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.title')
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 398,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-purple-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.api_calls'),
                                                    ": ",
                                                    user.apiCalls,
                                                    "/20"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 29
                                    }, this),
                                    user.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        className: "px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.admin')
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition-all shadow-sm hover:shadow",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.logout')
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 402,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 396,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 395,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 394,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-blue-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Instructions:"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 435,
                                    columnNumber: 25
                                }, this),
                                " ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.instructions')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 434,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 433,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.select_genres'),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-normal text-gray-600",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.choose_up_to_3')
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 65
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 441,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: GENRES.map((genre)=>{
                                    const isSelected = selectedGenres.includes(genre.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleGenre(genre.id),
                                        disabled: hasSubmitted,
                                        className: `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isSelected ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105' : 'bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 hover:border-violet-200'} ${hasSubmitted ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`,
                                        children: genre.label
                                    }, genre.id, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 444,
                                columnNumber: 21
                            }, this),
                            selectedGenres.length >= 3 && !hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-amber-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.max_genres')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 464,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 440,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.select_location'),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-normal text-gray-600",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.choose_1')
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 472,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: LOCATIONS.map((location)=>{
                                    const isSelected = selectedLocation === location.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>selectLocation(location.id),
                                        disabled: hasSubmitted,
                                        className: `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isSelected ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105' : 'bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 hover:border-violet-200'} ${hasSubmitted ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`,
                                        children: location.label
                                    }, location.id, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 475,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 471,
                        columnNumber: 17
                    }, this),
                    !hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: !canSubmit,
                            className: `px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${canSubmit ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`,
                            children: isGenerating ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.generating_story') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.generate_story')
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 499,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 498,
                        columnNumber: 21
                    }, this),
                    hasSubmitted && storySegments.length === 0 && isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-yellow-800 text-center",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.generating_wait')
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 516,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 515,
                        columnNumber: 21
                    }, this),
                    hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-amber-800 text-center",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.edit_selections')
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 525,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 524,
                        columnNumber: 21
                    }, this),
                    generationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 rounded-xl p-4 mb-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-800 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Error:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 29
                                    }, this),
                                    " ",
                                    generationError
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 534,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNewStory,
                                className: "px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-sm hover:shadow",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.new_story')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 537,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 533,
                        columnNumber: 21
                    }, this),
                    storySegments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.your_story')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 549,
                                columnNumber: 25
                            }, this),
                            storySegments.map((segment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-violet-100 rounded-xl shadow-md p-6 border-l-4 border-l-violet-500 hover:shadow-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-blue-600",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.segment'),
                                                        " ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500",
                                                    children: segment.timestamp.toLocaleTimeString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-800 leading-relaxed whitespace-pre-wrap",
                                            children: segment.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, segment.id, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 29
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 548,
                        columnNumber: 21
                    }, this),
                    storySegments.length > 0 && !isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-violet-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-slate-900 mb-4",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.continue_story')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 577,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-3 mb-4",
                                children: randomActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleActionClick(action),
                                        disabled: isGenerating,
                                        className: "px-4 py-3 bg-violet-50 text-violet-700 border border-violet-200 rounded-lg font-medium hover:bg-violet-100 hover:border-violet-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: action.label
                                    }, action.id, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 580,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-violet-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSaveStory,
                                        className: "px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-200 shadow-sm hover:shadow",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.save_story')
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNewStory,
                                        className: "px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-200 shadow-sm hover:shadow",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.new_story')
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 594,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 576,
                        columnNumber: 21
                    }, this),
                    isGenerating && storySegments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-4 mt-4 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-violet-800 text-center animate-pulse font-medium",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessage"])('dashboard.generating_next')
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 617,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 616,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 430,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 392,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9dd5895d._.js.map