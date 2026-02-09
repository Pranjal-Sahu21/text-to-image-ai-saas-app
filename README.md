# Crexo - AI Image Generation SaaS

A full-stack MERN application that transforms text prompts into stunning AI-generated images using the Clipdrop API. Built with modern web technologies and integrated with Razorpay for seamless payments.

![Preview](https://i.postimg.cc/wjj68CMT/crexo-image.png)


## 🌟 Features

- **AI-Powered Image Generation** - Convert text descriptions into high-quality images via Clipdrop API
- **Secure Authentication** - JWT-based user registration and login with password hashing
- **Credit System** - Flexible credit-based model (1 credit = 1 image)
- **Payment Integration** - Razorpay integration with three subscription tiers
- **Responsive UI** - Beautiful, mobile-first design with smooth animations
- **Protected Routes** - Authenticated access to generation features
- **User Dashboard** - Track credits and account information
- **Real-time Feedback** - Toast notifications for all actions
- **Download Generated Images** - Save AI-generated images locally

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client with interceptors
- **React Toastify** - Toast notifications
- **React Slick** - Carousel component
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Minimalist web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Secure token authentication
- **Bcrypt** - Password hashing
- **Razorpay SDK** - Payment processing
- **Axios** - External API calls

### External Services
- **Clipdrop Text-to-Image API** - AI image generation
- **Razorpay** - Payment gateway
- **MongoDB Atlas** - Cloud database

## 📦 Installation & Setup

### Prerequisites
- Node.js v18+
- npm or yarn
- MongoDB Atlas account
- Razorpay account
- Clipdrop API key

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd ../server
   npm install
   ```

2. **Create `.env` file**
   ```env
   PORT=4000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
   JWT_SECRET=your_secure_jwt_secret_key
   RAZORPAY_KEY_ID=your_razorpay_public_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret_key
   CURRENCY=INR
   CLIPDROP_API_KEY=your_clipdrop_api_key
   ```

3. **Start server**
   ```bash
   npm run server    # with nodemon (development)
   npm run start     # production mode
   ```

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create `.env` file**
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_RAZORPAY_KEY_ID=your_razorpay_public_key
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Access at `http://localhost:5173`

## 🔧 Configuration Guide

### Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_BACKEND_URL` | API server URL | `http://localhost:4000` |
| `VITE_RAZORPAY_KEY_ID` | Razorpay test key | `rzp_test_xxxxx` |

### Backend Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `PORT` | Server port | `4000` |
| `MONGODB_URI` | Database connection | `mongodb+srv://...` |
| `JWT_SECRET` | Token signing key | `your_secret_key` |
| `RAZORPAY_KEY_ID` | Razorpay public key | `rzp_test_xxxxx` |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | `5hjLnXxxx` |
| `CURRENCY` | Payment currency | `INR`, `USD` |
| `CLIPDROP_API_KEY` | Clipdrop API key | `xxxxxxxxxxxx` |

## 💳 Razorpay Integration

### Setup Instructions

1. **Register on Razorpay**
   - Visit [razorpay.com](https://razorpay.com)
   - Sign up for a business account
   - Go to Settings → API Keys

2. **Add Keys to `.env`**
   - Copy **KEY_ID** and **KEY_SECRET** from dashboard
   - Paste in both server and client `.env` files

3. **Payment Flow**
   ```
   User selects plan → Create Order → Razorpay Checkout → Verify Payment → Add Credits
   ```

### API Endpoints

- **POST** `/api/user/pay-razor` - Create payment order
  ```json
  Request: { userId, planId }
  Response: { success, order }
  ```

- **POST** `/api/user/verify-razor` - Verify payment
  ```json
  Request: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
  Response: { success, message }
  ```

### Pricing Plans

| Plan | Credits | Price | Best For |
|------|---------|-------|----------|
| Basic | 100 | ₹6,000 | Personal use |
| Advanced | 500 | ₹18,000 | Business use |
| Business | 5000 | ₹80,000 | Enterprise |

Users start with **5 free credits** upon registration.

## 🚀 Deployment

### Deploy Frontend on Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Push code to GitHub
   - Sign in to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Set Environment Variables**
   - Go to Site Settings → Build & Deploy → Environment
   - Add `VITE_BACKEND_URL` and `VITE_RAZORPAY_KEY_ID`

5. **Deploy**
   - Netlify auto-deploys on push to main branch

### Deploy Backend on Render

1. **Prepare repository**
   - Push server code to GitHub
   - Ensure `package.json` has `"type": "module"`

2. **Create Render service**
   - Visit [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect GitHub repository

3. **Configure service**
   - Environment: `Node`
   - Build command: `npm install`
   - Start command: `npm run start`

4. **Add Environment Variables**
   - Go to Environment section
   - Add all variables from `.env`

5. **Deploy**
   - Click "Create Web Service"


## 📊 API Routes

### User Routes (`/api/user`)

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/register` | - | Create new account |
| POST | `/login` | - | Authenticate user |
| GET | `/credits` | ✅ | Get user credits |
| POST | `/pay-razor` | ✅ | Create payment order |
| POST | `/verify-razor` | - | Verify payment |

### Image Routes (`/api/image`)

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/generate` | ✅ | Generate image from prompt |

## 🔐 Security Features

- **Password Hashing** - Bcrypt with salt rounds
- **JWT Authentication** - Secure token-based auth
- **Protected Routes** - [ProtectedRoute component](src/pages/ProtectedRoute.jsx)
- **API Interceptors** - Auto-attach token to requests
- **CORS Configuration** - Secure cross-origin access
- **Payment Verification** - Razorpay signature validation

## 📁 Project Structure

```
client/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── Steps.jsx
│   │   ├── Description.jsx
│   │   ├── Testimonials.jsx
│   │   ├── GenerateButton.jsx
│   │   └── Footer.jsx
│   ├── pages/         # Route components
│   │   ├── Home.jsx
│   │   ├── Generate.jsx
│   │   ├── BuyCredit.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/       # Global state
│   │   └── AppContext.jsx
│   ├── assets/        # Images & constants
│   │   └── assets.js
│   ├── App.jsx        # Root component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎯 Key Components

### [AppContext](src/context/AppContext.jsx)
Global state management for:
- User authentication
- Credit balance
- Token management
- API calls

### [ProtectedRoute](src/pages/ProtectedRoute.jsx)
Wrapper component that:
- Checks user authentication
- Redirects to login if not authenticated
- Wraps protected pages

### [Login Component](src/components/Login.jsx)
Features:
- Toggle between login/signup
- Form validation
- Loading states
- Smooth animations

### [Generate Page](src/pages/Generate.jsx)
Features:
- Text input for prompts
- Loading animation
- Image display
- Download functionality
- Credit checking

## 🐛 Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| "Token not found" | Not authenticated | Log in first |
| Razorpay modal won't open | Wrong key ID | Check `VITE_RAZORPAY_KEY_ID` |
| Image generation fails | No credits | Purchase credits first |
| CORS error | Backend not accessible | Verify `VITE_BACKEND_URL` |
| DB connection error | Invalid URI | Check MongoDB connection string |

## 📝 Available Scripts

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔗 Useful Links

- [Clipdrop API Docs](https://clipdrop.co/api/)
- [Razorpay Integration Guide](https://razorpay.com/docs/)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/)
- [Netlify Deployment](https://docs.netlify.com/)
- [Render Deployment](https://render.com/docs/web-services)

