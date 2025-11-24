# API Documentation Access

## Swagger/OpenAPI Documentation

The AI Storyteller API documentation is available via Swagger UI.

### Local Development
```
http://localhost:3001/api-docs
```

### Production
```
https://ai-storyteller-production.up.railway.app/api-docs
```

## API Versioning

All API endpoints are versioned under `/api/v1/`:

- `/api/v1/auth/*` - Authentication endpoints
- `/api/v1/users/*` - User profile endpoints
- `/api/v1/admin/*` - Admin management endpoints
- `/api/v1/llm/*` - AI story generation endpoints

Legacy routes without version prefix (`/api/auth/*`, etc.) are still supported for backward compatibility.

## Authentication

The API supports two authentication methods:

1. **Bearer Token** - Include JWT token in Authorization header:
   ```
   Authorization: Bearer <your_jwt_token>
   ```

2. **Cookie Authentication** - Token automatically sent via httpOnly cookie

## Key Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/me` - Get current user info

### Users
- `GET /api/v1/users/profile` - Get user profile (requires auth)

### Admin (requires admin role)
- `GET /api/v1/admin/users` - Get all users
- `PATCH /api/v1/admin/users/:userId/reset-api-calls` - Reset user API calls
- `DELETE /api/v1/admin/users/:userId` - Delete user
- `GET /api/v1/admin/stats` - Get system statistics

### LLM
- `POST /api/v1/llm` - Generate AI story content (streaming, requires auth)

## Rate Limiting

- General API: 100 requests per 15 minutes per IP
- LLM endpoint: 10 requests per minute per IP

## Response Formats

All responses are in JSON format except for the LLM streaming endpoint which uses Server-Sent Events (SSE).

### Success Response
```json
{
  "data": {},
  "message": "Success message"
}
```

### Error Response
```json
{
  "error": "Error message",
  "details": []
}
```
