# Message Strings Implementation Guide

## Overview
All user-facing messages are via JSON files

## Implementation Status

All frontend & backend files use message strings.

### Backend (Complete)
- routes/auth.js - Authentication messages
- routes/llm.js - LLM error messages
- routes/users.js - Profile messages
- routes/admin.js - Admin operation messages
- middleware/auth.js - Authentication middleware messages
- middleware/apiUsage.js - API usage tracking messages

### Frontend (Complete)
- app/auth/login/page.tsx - Login page UI
- app/auth/register/page.tsx - Registration page UI
- app/dashboard/page.tsx - Dashboard UI and story generation
- app/admin/page.tsx - Admin panel UI
- app/llm-test/page.tsx - LLM test interface

## Adding a New Language

To add support for another language (e.g., French):

1. Create new language directories:
   - backend/lang/fr/fr.json
   - frontend/lang/fr/fr.json

2. Copy the structure from en.json files and translate all values

3. Update getMessage functions to accept a language parameter:

Backend (utils/messages.js):
```javascript
const getMessage = (key, replacements = {}, lang = 'en') => {
    const messages = require(`../lang/${lang}/${lang}.json`);
    // ... rest of implementation
};
```

Frontend (utils/messages.ts):
```typescript
export const getMessage = (key: string, replacements: Record<string, string> = {}, lang: string = 'en'): string => {
    const messages = require(`@/lang/${lang}/${lang}.json`);
    // ... rest of implementation
};
```

4. Add language detection logic based on user preference/browser settings
