# AI Storyteller - Interactive Story Generator

An AI-powered microservice application for generating interactive stories. Users can create accounts, authenticate, and generate AI-powered stories with continuation options. Built with Express.js backend and Next.js frontend.

## Project Architecture

```
ai-storyteller/
├── backend/                 # Express.js REST API Server
│   ├── models/             # MongoDB data models (User, Story, StorySession)
│   ├── routes/             # API routes (auth, users, admin, llm)
│   ├── middleware/         # Authentication, rate limiting, API usage tracking
│   ├── .env               # Environment configuration
│   └── index.js           # Server entry point
├── frontend/               # Next.js Web Application
│   ├── app/               # Next.js 16 app directory structure
│   │   ├── auth/          # Authentication pages (login, register)
│   │   ├── dashboard/     # User dashboard
│   │   ├── admin/         # Admin panel
│   │   └── llm-test/      # AI story generation interface
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## Features

### Authentication System
- **User Registration**: Email/password with validation
- **Secure Login**: JWT tokens with httpOnly cookies
- **Role-based Access**: User and Admin roles
- **Session Management**: 24-hour token expiry
- **Password Security**: bcrypt hashing

### AI Story Generation
- **LLM Integration**: Hosted pre-trained model API
- **Interactive Stories**: Multi-turn conversations
- **Story Continuation**: User choice-driven narrative
- **Content Storage**: MongoDB story persistence
- **Usage Tracking**: API call monitoring per user

### User Management
- **Personal Dashboard**: API usage tracking, story history
- **Admin Panel**: User monitoring, usage statistics
- **API Limits**: Rate limiting and usage quotas
- **User Profiles**: Account management
  
### Security & Performance
- **CORS Protection**: Cross-origin request security
- **Rate Limiting**: Request throttling per IP/user
- **Input Validation**: Express-validator middleware
- **Helmet Security**: HTTP header protection
- **MongoDB Atlas**: Cloud database with authentication

### Modern Frontend
- **Next.js 16**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern responsive design
- **Client-side Routing**: SPA navigation
- **Form Validation**: Real-time input validation

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (free tier available)
- npm or yarn package manager

### 1. Clone Repository
```bash
git clone <repository-url>
cd ai-storyteller
```

### 2. Backend Setup
```bash
cd backend
npm install
```

**Configure Environment Variables:**
```bash
cp .env.example .env
```

**Edit `.env` file:**
```env
# Backend Configuration
NODE_ENV=development
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:3000

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ai_storyteller?retryWrites=true&w=majority

# LLM Configuration
LLM_BASE_URL=https://your-llm-api-endpoint.com
```

**Start Backend Server:**
```bash
npm start
# or for development with auto-reload
npm run dev  
```
Backend runs on: **http://localhost:3001**

### 3. Frontend Setup
```bash
cd frontend
npm install
```

**Configure Environment (optional):**
```bash
# Create .env.local for custom API URL
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
```

**Start Frontend Server:**
```bash
npm run dev
```
Frontend runs on: **http://localhost:3000**

### 4. Database Setup (MongoDB Atlas)
1. **Create MongoDB Atlas Account**: [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. **Create Free Cluster**: Choose free tier (512MB)
3. **Create Database User**: Username/password for connection
4. **Get Connection String**: Copy connection URI
5. **Update .env**: Replace `MONGODB_URI` with your connection string

### 5. Test the Application
**Open**: http://localhost:3000

**Pre-created Test Accounts:**
- **Regular User**: `john@john.com` / `123`
- **Admin User**: `admin@admin.com` / `111`

**Or create new account**: Click "Register" on login page

## API Documentation

### Authentication Endpoints
```http
POST /api/auth/register    # User registration
POST /api/auth/login       # User login  
POST /api/auth/logout      # User logout
```

### User Management Endpoints
```http
GET /api/users/profile     # Get user profile and API usage stats
```

### AI/LLM Endpoints
```http
POST /api/llm             # Generate AI stories (authenticated users only)
```

### Admin Endpoints (Admin only)
```http
GET /api/admin/users                           # Get all users
GET /api/admin/stats                           # Get system statistics  
POST /api/admin/users/:id/reset-api-calls     # Reset user API call count
```

## Environment Configuration

### Backend Environment (`.env`)
```env
# Server Configuration
NODE_ENV=development
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:3000

# MongoDB Database
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ai_storyteller?retryWrites=true&w=majority

# AI/LLM Service
LLM_BASE_URL=https://your-llm-api-endpoint.com
```

### Frontend Environment (`.env.local`)
```env
# API Configuration (optional - defaults to localhost:3001)
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Production Deployment
**Backend:**
1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET` (32+ characters)
3. Configure production MongoDB connection
4. Set secure CORS `FRONTEND_URL`
5. Deploy to cloud service (Heroku, Railway, etc.)

**Frontend:**
1. Update `NEXT_PUBLIC_API_URL` to production backend URL
2. Build for production: `npm run build`
3. Deploy to Vercel, Netlify, or similar service

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  is_admin: Boolean (default: false),
  api_calls: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

### Stories Collection  
```javascript
{
  _id: ObjectId,
  user_id: ObjectId (ref: User),
  title: String,
  content: String,
  genre: String,
  setting: String,
  status: String (default: 'active'),
  createdAt: Date,
  updatedAt: Date
}
```

### Story Sessions Collection
```javascript
{
  _id: ObjectId,
  user_id: ObjectId (ref: User),
  story_id: ObjectId (ref: Story),
  session_data: Mixed (JSON),
  createdAt: Date,
  updatedAt: Date
}
```

## Development

### Project Stack
- **Backend**: Node.js + Express.js + MongoDB + Mongoose
- **Frontend**: Next.js 16 + React 19 + TypeScript + Tailwind CSS
- **Database**: MongoDB Atlas (cloud)
- **Authentication**: JWT + bcrypt
- **Security**: Helmet, CORS, Rate Limiting

### Available Scripts

**Backend:**
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests (if configured)
```

**Frontend:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB connection string in `.env`
- Ensure MongoDB Atlas allows connections from your IP
- Verify all required dependencies are installed

**Frontend can't connect to backend:**
- Confirm backend is running on port 3001
- Check CORS configuration allows frontend URL
- Verify `NEXT_PUBLIC_API_URL` in frontend `.env.local`

**Authentication issues:**
- Check JWT_SECRET is set in backend `.env`
- Ensure cookies are enabled in browser
- Verify backend CORS credentials are enabled

## License

This project is for educational purposes as part of COMP 4537 coursework.

## Contributing

This is a course project. For questions or issues, please contact the development team.

---

**AI Storyteller** - Built for interactive storytelling experiences
3. Configure your hosted LLM endpoint
4. Deploy to your hosting platform

### Frontend
1. Update NEXT_PUBLIC_API_URL to your backend URL
2. Build: `npm run build`
3. Deploy to your hosting platform

## Security Features

- Password hashing with bcrypt
- JWT authentication with httpOnly cookies
- CORS protection
- Rate limiting
- Input validation and sanitization
- SQL injection prevention
- XSS protection

## Database Schema

### Users Table
- id (Primary Key)
- email (Unique)
- password (Hashed)
- isAdmin (Boolean)
- apiCalls (Integer - tracks usage)
- createdAt/updatedAt (Timestamps)

## Tech Stack

### Backend
- Node.js
- Express.js
- SQLite
- JWT
- bcryptjs
- express-validator

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Milestone 1 Deliverables

User registration/login functionality
Admin and user landing pages
Pre-trained LLM hosted and working
Test credentials provided
Database setup and ERD
Microservice architecture (separate backend/frontend)

## Test Credentials

- **Admin User**: admin@admin.com / 111
- **Regular User**: john@john.com / 123

## LLM Model Information

The application integrates with a hosted pre-trained model for story generation. The model endpoint is configured in the backend environment variables.

## License

This project is for educational purposes as part of COMP 4537.