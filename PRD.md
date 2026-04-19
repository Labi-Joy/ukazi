# PRD — Ukazi Learning Platform

> **Version:** 1.0  
> **Date:** 2026-04-19  
> **Author:** Labi-Joy (joyeden325@gmail.com)  
> **Status:** Awaiting Confirmation

---

## 1. Project Overview & Goals

**Ukazi** is a two-sided online learning marketplace connecting **Students (Mentees)** with **Mentors (Instructors)**. The platform allows mentors to create and sell courses, manage students, schedule sessions, and chat — while students discover, enroll in, and track courses from mentors.

### Core Goals
- Ship a pixel-perfect, production-ready platform matching the Figma design exactly
- Dual-role auth system (Student & Mentor) with distinct onboarding and dashboards
- Real-time chat between mentors and students
- course management (upload, schedule, manage)
- Public landing page that drives sign-ups

### Tagline (from Figma)
> *"Explore Over 100 courses"* — *"Discover a variety of courses across different fields, designed to help you learn"*

---

## 2. Pages & Screens (with Routes)

All screens were extracted directly from the Figma file. The design uses a **1440×850/1024** desktop canvas. Mobile responsiveness will be inferred and documented under Ambiguities.

### 2.1 Public (Unauthenticated)

| Route | Screen Name | Description |
|-------|-------------|-------------|
| `/` | Landing Page | Hero, course browse teaser, benefits of becoming an instructor, FAQ, newsletter, footer |
| `/search` | Search Results | Search for courses and mentors with filters |
| `/mentor/:id` | Mentor Profile | Public mentor profile with About, courses, reviews tabs |

### 2.2 Auth Flow

| Route | Screen Name | Description |
|-------|-------------|-------------|
| `/auth/login` | Sign In | Email + password login with "wrong details" error state |
| `/auth/register` | Sign Up (Student) | Multi-step: Personal Details → Career Interests → Email Verification |
| `/auth/register/mentor` | Sign Up (Mentor) | Multi-step: Personal Details → Professional Background → Skills & Expertise → Teaching Experience |
| `/auth/forgot-password` | Forgot Password | Email input + "No worries, We got you!" copy |
| `/auth/password-recovery` | Password Recovery Code | OTP/code entry screen |
| `/auth/reset-password` | Reset Password | New password entry |
| `/auth/email-confirmed` | Email Confirmed | Success screen: "Your email address has successfully been confirmed" |
| `/auth/account-created` | Account Created | Success screen: "Congratulations! Your account has been successfully created." |
| `/auth/password-reset-done` | Password Reset Done | "Done — Your password has been successfully reset" |

### 2.3 Student (Mentee) Dashboard — `/dashboard/*`

| Route | Screen Name | Description |
|-------|-------------|-------------|
| `/dashboard` | Student Dashboard | Overview: enrolled courses, progress tracking, notifications |
| `/dashboard/courses` | My Courses | Enrolled courses list with progress |
| `/dashboard/course/:id` | Course Detail | Course content, curriculum, progress |
| `/dashboard/mentors` | Browse Mentors | Search and filter mentors |
| `/dashboard/schedule` | Schedule | Calendar view of sessions |
| `/dashboard/chat` | Chat | Messaging with mentors |
| `/dashboard/notifications` | Notifications | "You have 4 new notifications today", This Week / This Month grouping |
| `/dashboard/profile` | Profile | Personal info, edit profile |
| `/dashboard/settings` | Account Settings | Linked accounts (Google, Facebook), notifications, delete account |
| `/dashboard/settings/support` | Support | 24/7 online support page |

### 2.4 Mentor Dashboard — `/mentor-dashboard/*`

| Route | Screen Name | Description |
|-------|-------------|-------------|
| `/mentor-dashboard` | Mentor Dashboard | Stats: 50 Courses, 565 students, revenue, selling activities |
| `/mentor-dashboard/courses` | Courses | Course list with management actions |
| `/mentor-dashboard/courses/manage/:id` | Manage Course | Upload/edit course materials, delete course |
| `/mentor-dashboard/students` | Students | Student list table with search |
| `/mentor-dashboard/schedule` | Schedule | Calendar (June 29, 2024 shown), session management |
| `/mentor-dashboard/schedule/new` | Add a new task | Create new course schedule entry |
| `/mentor-dashboard/chat` | Chat | Messaging with students (contact list + conversation) |
| `/mentor-dashboard/profile` | Profile Information | Mentor's profile editing |
| `/mentor-dashboard/notifications` | Notification | Notification panel (268px wide sidebar variant) |
| `/mentor-dashboard/settings` | Account Settings | Three sub-views: general, linked accounts, support |

---

## 3. Component Inventory

Every reusable UI component observed in the Figma design:

### Navigation
- **Navbar** — Logo left, links (Home, Courses, About Us, Contact), CTAs (Sign In / Join Ukazi)
- **Sidebar (Mentor)** — Logo, nav items: Dashboard, Course, Students, Schedule, Chat, Profile, Notifications, Account Settings, Logout
- **Sidebar (Student)** — Same structure, student-specific items
- **Notification Drawer** — Slide-in panel (268×850), "This Week" / "This Month" grouping

### Auth Components
- **StepIndicator** — Multi-step progress bar (Step 1–4)
- **AuthCard** — White card with form content, centered
- **OTPInput** — 4-digit PIN input for email verification
- **SuccessScreen** — Illustration + heading + subtext + CTA button
- **SocialAuthButtons** — Google, Facebook, LinkedIn buttons (visible in registration flow)

### Forms & Inputs
- **TextInput** — Standard labeled input with border
- **PasswordInput** — Input with show/hide toggle
- **PhoneInput** — Country code + number field
- **TextArea** — Multiline input (e.g. "Write your comments")
- **SearchInput** — "Search for over 70+ courses and mentors" with search icon
- **TagSelector** — Career interest chips (pick your area)
- **FileUpload** — "Drag files here or select from your computer" zone
- **Toggle** — On/Off switch (Notifications settings)

### Cards
- **CourseCard** — Thumbnail, title, mentor name, rating, price/free badge
- **MentorCard** — Avatar, name, role, rating, students count, review CTA
- **StudentCard** — Student avatar, name, enrollment info
- **StatCard** — Number (e.g. "50 Courses", "565"), label, icon (Mentor Dashboard)
- **ActivityCard** — "Selling Activities" chart card
- **ReviewCard** — Star rating, reviewer name (Sarah T., Digital Marketing Specialist), comment
- **NotificationCard** — Avatar, action text, timestamp (e.g. "Allen Curry accepted your request")
- **ScheduleCard** — Date, time, course name entry

### Calendar
- **CalendarWidget** — Full month calendar with day/week/month atoms:
  - `Atoms/Dey number`, `Atoms/Week namber`, `Atoms/Week dey`, `Atoms/Month namber`, `Atoms/Year`, `Atoms/Mouth`
  - Variants: Active/Inactive, Weekend/Weekday, Fill/No Fill, Stroke/No Stroke
  - Covers 2024–2025 months

### Chat
- **ChatContactList** — Left panel: search contacts, contact cards with last message preview
- **ChatConversation** — Right panel: message bubbles (sent/received), "Type message here…" input
- **MessageBubble** — With timestamp (e.g. "7:23"), sent/received variants

### Modals & Overlays
- **CourseUploadModal** — "Upload a new course or course material" dialog
- **DeleteCourseConfirm** — Confirmation dialog
- **ReviewModal** — "Give Reviews an rating to Kingsley Liam" — star picker + comment
- **ScheduleModal** — Add new task / session form

### Feedback
- **Badge** — Status badges: "Completed", "Not completed"
- **StarRating** — 1–5 star display + input
- **ProgressBar** — Course completion % (e.g. "Course Tracking 70%")
- **Pagination** — Prev / Next controls
- **EmptyState** — "No videos uploaded yet" illustration
- **LoadingSpinner** — Implied by async operations

### Landing Page Sections
- **HeroSection** — Headline + CTA + search bar
- **CourseGridSection** — Course cards grid with "View all" link
- **BenefitsSection** — "Benefits of Becoming an Instructor" with icon list
- **FAQSection** — "Questions that might bother your mind" accordion
- **NewsletterSection** — "Subscribe to our newsletter" + email input
- **Footer** — Logo, social icons (Instagram @ukazilearn), links, copyright

### Social Icons (in Footer / Auth)
- Instagram, Facebook (gradient #3D5A98), LinkedIn (#0076B2), Twitter/X
- Figma-provided icon variants using radial/linear gradients

---

## 4. Color Palette

> Extracted directly from the Figma file. Usage frequency in parentheses.

### Primary Brand Colors
| Token Name | Hex | Usage |
|------------|-----|-------|
| `brand-primary` | `#9530E4` | Primary purple — buttons, active states, gradients (740×) |
| `brand-secondary` | `#B75FFC` | Lighter purple — gradients, accents (64×) |
| `brand-accent` | `#FFCE31` | Yellow — highlights, stars, badges (160×) |

### Neutrals
| Token Name | Hex | Usage |
|------------|-----|-------|
| `neutral-900` | `#333333` | Primary text (2145× — most used) |
| `neutral-white` | `#FFFFFF` | Backgrounds, cards (1720×) |
| `neutral-400` | `#D9D9D9` | Borders, dividers (286×) |
| `neutral-black` | `#000000` | Deep text/overlay (252×) |
| `neutral-300` | `#B3B3B3` | Placeholder text (119×) |
| `neutral-600` | `#606060` | Secondary text (40×) |
| `neutral-500` | `#645C5C` | Muted text (27×) |
| `neutral-700` | `#444444` | Dense text variant (6×) |
| `neutral-200` | `#E6E6E6` | Light border (11×) |
| `neutral-100` | `#CCCCCC` | Very light border (3×) |

### Surface Colors
| Token Name | Hex | Usage |
|------------|-----|-------|
| `surface-warm` | `#FFF8F8` | Card/page backgrounds (245×) |
| `surface-lightest` | `#FFFBFB` | Near-white surface (50×) |
| `surface-muted` | `#F2EAEA` | Soft pink-grey surface (3×) |
| `surface-light` | `#F2F2F2` | Grey surface (2×) |

### Semantic Colors
| Token Name | Hex | Usage |
|------------|-----|-------|
| `error` | `#E33629` | Error states (79×) |
| `error-light` | `#F2DEDE` | Error backgrounds (31×) |
| `error-dark` | `#FF0404` | Danger buttons (3×) |
| `info` | `#16A0F9` | Info/link blue (26×) |
| `info-dark` | `#1170AF` | Dark blue info (6×) |
| `success` | `#319F43` | Success green (4×) |

### Special
| Token Name | Hex | Usage |
|------------|-----|-------|
| `muted-purple` | `#2F2E41` | Dark purple-grey (12×) |
| `deep-purple` | `#3F3D56` | Deep slate (5×) |
| `skin-light` | `#FFB8B8` | Skin tone in illustrations (10×) |
| `skin-warm` | `#F8BD00` | Gold/amber tones (4×) |

### Gradients
| Name | Definition |
|------|-----------|
| `gradient-brand` | `linear-gradient(#9530E4 → #B75FFC)` — hero search bar, buttons |
| `gradient-brand-reverse` | `linear-gradient(#B75FFC → #9530E4)` |
| `gradient-dark-brand` | `linear-gradient(#000000@0.24 → #9530E4)` — overlay cards |
| `gradient-grey-brand` | `linear-gradient(#D9D9D9@0.15 → #9530E4)` |
| `gradient-white-fade` | `linear-gradient(#F9F9F9 → #FFFFFF)` |
| `gradient-instagram` | `radial-gradient(#FFDD55 → #FF543E → #C837AB)` — social icon |
| `gradient-telegram` | `linear-gradient(#2AABEE → #229ED9)` |
| `gradient-whatsapp` | `linear-gradient(#1FAF38 → #60D669)` |
| `gradient-threads` | `linear-gradient(#0099FF → #A033FF → #FF5280 → #FF7061)` |

---

## 5. Typography System

> Primary font: **Raleway** | Secondary font: **Inter**

### Font Loading
```ts
// next/font/google
import { Raleway, Inter } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weights: ['400','500','600','700','800'] })
const inter = Inter({ subsets: ['latin'], weights: ['200','400','500','600'] })
```

### Type Scale

| Token | Font | Weight | Size | Line Height | Usage |
|-------|------|--------|------|-------------|-------|
| `display-xl` | Raleway | 800 | 50px | 58.8px | Page headings ("Congratulations!") |
| `display-lg` | Raleway | 800 | 45px | 52.9px | Hero, section titles ("About Ukazi") |
| `display-md` | Raleway | 700 | 40px | 47.0px | Dashboard headings ("Course Tracking") |
| `heading-xl` | Raleway | 800 | 35px | 41.1px | Card headings ("Welcome Back") |
| `heading-lg` | Raleway | 700 | 30px | 35.2px | Sub-sections |
| `heading-md` | Raleway | 800 | 28px | 32.9px | Review headings |
| `heading-sm` | Raleway | 700 | 25px | 29.4px | FAQ questions |
| `body-xl` | Raleway | 600 | 25px | 29.4px | Prominent labels |
| `body-lg` | Raleway | 500/600 | 20px | 23.5px | Body text, descriptions |
| `body-md` | Raleway | 500/600 | 18px | 21.1px | Secondary body |
| `body-sm` | Raleway | 400/500 | 17px | 20.0px | Form labels, small body |
| `label-lg` | Raleway | 600/700 | 16px | 18.8px | Input labels, nav items |
| `label-md` | Raleway | 500/600 | 15px | 17.6px | Badges, tags |
| `label-sm` | Raleway | 700 | 14px | 20.0px | Buttons, small labels |
| `caption-lg` | Raleway | 500 | 13px | 18.0px | Helper text |
| `caption-md` | Raleway | 500/600 | 12px | 20.0px | Timestamps, chat |
| `caption-sm` | Raleway | 500/600 | 11px | 12.9px | Notification dots |
| `micro` | Raleway | 400/600 | 9–10px | 10.6–11.7px | Status badges |
| `inter-body` | Inter | 400/500 | 13–18px | varies | Supplementary text |

---

## 6. Icon Set

| Source | Evidence |
|--------|----------|
| **Solar Icons** | Component named `solar:arrow-up-linear` found in Figma |
| **WeUI Icons** | Component `weui:arrow-filled` found |
| **Iconify / ix:cancel** | `ix:cancel` frame name found |
| **Fluent UI Icons** | `fluent:person-support-20-filled` frame found |
| **Custom SVGs** | Social icons (Instagram, Facebook, LinkedIn, Twitter, Telegram, WhatsApp) with custom gradients |

**Implementation Plan:** Use `@iconify/react` package to cover Solar, WeUI, Fluent, and ix icon families uniformly. Wrap in a typed `<Icon>` component.

---

## 7. Image & Asset List

| Asset | Usage | Export Target |
|-------|-------|---------------|
| Logo (Light variant) | Navbar, Sidebar | `/public/images/logo-light.png` |
| Logo (Dark variant) | Footer, light backgrounds | `/public/images/logo-dark.png` |
| Icon variant (logo mark only) | Browser tab, small spaces | `/public/icons/ukazi-icon.svg` |
| Hero illustration | Landing page | `/public/images/hero-illustration.png` |
| "Congratulations" success illustration | Auth success screens | `/public/images/success-illustration.png` |
| "Email Confirmed" illustration | Email confirmed screen | `/public/images/email-confirmed.png` |
| Empty state illustration | "No videos uploaded yet" | `/public/images/empty-courses.png` |
| Online Support illustration | Support page | `/public/images/support.png` |
| Mentor profile avatars | Course cards, profile | Generated/placeholder at 2x |
| Course thumbnails | Course cards | Placeholder, user-uploaded |
| Social media icons | Footer | Custom gradient SVGs |

> **Note:** Logo dimensions from Figma: Light = 656×254px, Dark = 656×253px, Icon = 289×254px. Export at 2x for retina.

---

## 8. Animation & Motion Notes

The design is clean and professional — animations should be **subtle, purposeful, and fast** (not flashy).

| Element | Animation |
|---------|-----------|
| Page transitions | Fade + slight Y-translate (Framer Motion `AnimatePresence`) |
| Sidebar active state | Background fill slide in (`layout` animation) |
| Auth step transitions | Slide left/right between multi-step form steps |
| Modals | Scale + fade in (0.2s ease-out) |
| Cards hover | Subtle shadow lift + Y-translate (-2px) |
| CTA Buttons | Scale 0.97 on press, slight brightness change |
| Notification dot | Pulse animation on unread count |
| Progress bar | Animated width fill on mount |
| Search bar focus | Border color transition to `brand-primary` |
| Calendar day select | Background fill transition |

---

## 9. API Surface

### Auth Endpoints
```
POST /api/auth/register/student    — Student registration
POST /api/auth/register/mentor     — Mentor registration
POST /api/auth/login               — Login (both roles)
POST /api/auth/logout              — Logout
POST /api/auth/forgot-password     — Send reset email
POST /api/auth/verify-otp          — Verify 4-digit OTP
POST /api/auth/reset-password      — Set new password
POST /api/auth/verify-email        — Email verification
GET  /api/auth/session             — Current session
```

### User & Profile
```
GET    /api/user/profile           — Get own profile
PATCH  /api/user/profile           — Update profile
POST   /api/user/avatar            — Upload avatar
DELETE /api/user                   — Delete account
GET    /api/user/notifications     — List notifications
PATCH  /api/user/notifications/:id — Mark as read
```

### Courses
```
GET    /api/courses                — Browse all courses (public, paginated, filterable)
GET    /api/courses/:id            — Course detail (public)
POST   /api/courses                — Create course (mentor only)
PATCH  /api/courses/:id            — Update course (mentor only)
DELETE /api/courses/:id            — Delete course (mentor only)
POST   /api/courses/:id/enroll     — Enroll student
GET    /api/courses/:id/progress   — Get student progress
PATCH  /api/courses/:id/progress   — Update progress
POST   /api/courses/:id/materials  — Upload course material (Uploadthing)
DELETE /api/courses/:id/materials/:matId — Delete material
```

### Mentors
```
GET    /api/mentors                — Browse mentors (public, paginated)
GET    /api/mentors/:id            — Mentor public profile
GET    /api/mentors/:id/courses    — Mentor's courses (public)
GET    /api/mentors/:id/reviews    — Mentor's reviews
POST   /api/mentors/:id/reviews    — Submit review (enrolled students only)
```

### Schedule
```
GET    /api/schedule               — Own schedule (mentor or student)
POST   /api/schedule               — Create session/task
PATCH  /api/schedule/:id           — Update session
DELETE /api/schedule/:id           — Delete session
```

### Chat
```
GET    /api/chat/conversations     — List conversations
GET    /api/chat/conversations/:id — Get messages in conversation
POST   /api/chat/conversations/:id/messages — Send message
```

### Search
```
GET    /api/search?q=&type=courses|mentors|all
```

### Students (Mentor only)
```
GET    /api/students               — List my students
GET    /api/students/:id           — Student detail
```

### Email
```
POST   /api/email/subscribe        — Newsletter subscription
```

---

## 10. Auth Strategy

- **Provider:** NextAuth.js v5 (App Router compatible)
- **Credentials:** Email + Password (bcrypt hashing)
- **OAuth:** Google, Facebook (based on social login buttons visible in Figma's auth screens)
- **Session:** JWT via HTTP-only cookies (never localStorage)
- **Roles:** `STUDENT` | `MENTOR` — stored on User model, drives route group access
- **Middleware:** `middleware.ts` protects `/dashboard/*` and `/mentor-dashboard/*`
- **OTP:** 4-digit numeric code, 10-minute expiry, stored hashed in DB, emailed via Resend
- **Rate limiting:** 5 attempts per 15 minutes on `/api/auth/login` and `/api/auth/forgot-password`

---

## 11. Email Flows

| Trigger | Template | Subject |
|---------|----------|---------|
| Student registers | `welcome-student.tsx` | "Welcome to Ukazi 🎉" |
| Mentor registers | `welcome-mentor.tsx` | "Welcome to Ukazi — Your Mentor Account is Ready" |
| Email verification | `verify-email.tsx` | "Verify your Ukazi email — [4-digit OTP]" |
| Forgot password | `forgot-password.tsx` | "Reset your Ukazi password" |
| Password reset success | `password-reset-success.tsx` | "Your Ukazi password was changed" |
| New student enrolled | `new-enrollment.tsx` (to mentor) | "A new student enrolled in [Course Name]" |
| Newsletter | `newsletter.tsx` | "Stay up to date about UKAZI" |

All templates use Raleway font (web-safe fallback), `#9530E4` primary color, and the Ukazi logo.

---

## 12. Deployment Strategy

| Layer | Service |
|-------|---------|
| Frontend + API routes | **Vercel** (Next.js serverless, auto-deploy from `main`) |
| Database | **Neon** (managed PostgreSQL, free tier, Prisma-compatible) |
| File uploads | **Uploadthing** (course materials, avatars) |
| Email | **Resend** (transactional + newsletter) |
| Domain (future) | Vercel + custom domain when ready |

### Environment Variables
```env
# .env.local
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
RESEND_API_KEY=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

---

## 13. Folder Structure Plan

```
/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx           # Student register
│   │   ├── register/mentor/page.tsx    # Mentor register
│   │   ├── forgot-password/page.tsx
│   │   ├── password-recovery/page.tsx
│   │   ├── reset-password/page.tsx
│   │   ├── email-confirmed/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   ├── page.tsx               # Student dashboard
│   │   │   ├── courses/page.tsx
│   │   │   ├── mentors/page.tsx
│   │   │   ├── schedule/page.tsx
│   │   │   ├── chat/page.tsx
│   │   │   ├── notifications/page.tsx
│   │   │   ├── profile/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── mentor-dashboard/
│   │   │   ├── page.tsx               # Mentor dashboard
│   │   │   ├── courses/page.tsx
│   │   │   ├── students/page.tsx
│   │   │   ├── schedule/page.tsx
│   │   │   ├── chat/page.tsx
│   │   │   ├── profile/page.tsx
│   │   │   ├── notifications/page.tsx
│   │   │   └── settings/page.tsx
│   │   └── layout.tsx
│   ├── (public)/
│   │   ├── page.tsx                   # Landing page
│   │   ├── search/page.tsx
│   │   └── mentor/[id]/page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── courses/route.ts
│   │   ├── mentors/route.ts
│   │   ├── schedule/route.ts
│   │   ├── chat/route.ts
│   │   ├── search/route.ts
│   │   └── user/route.ts
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                            # shadcn/ui primitives
│   ├── common/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   └── Icon/
│   └── features/
│       ├── auth/                      # StepIndicator, OTPInput, SuccessScreen
│       ├── dashboard/                 # StatCard, ActivityCard
│       ├── courses/                   # CourseCard, CourseGrid, CourseUploadModal
│       ├── mentors/                   # MentorCard, MentorProfile, ReviewModal
│       ├── chat/                      # ChatContactList, MessageBubble
│       ├── schedule/                  # CalendarWidget, ScheduleCard
│       ├── notifications/             # NotificationCard, NotificationDrawer
│       └── landing/                  # HeroSection, BenefitsSection, FAQSection
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── mail.ts
│   ├── utils.ts
│   ├── uploadthing.ts
│   └── validations/
│       ├── auth.ts
│       ├── course.ts
│       └── profile.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useCourses.ts
│   ├── useChat.ts
│   └── useSchedule.ts
├── store/
│   ├── authStore.ts
│   └── chatStore.ts
├── types/
│   ├── index.ts
│   ├── auth.ts
│   ├── course.ts
│   └── user.ts
├── emails/
│   ├── welcome-student.tsx
│   ├── welcome-mentor.tsx
│   ├── verify-email.tsx
│   ├── forgot-password.tsx
│   ├── password-reset-success.tsx
│   └── new-enrollment.tsx
├── prisma/
│   └── schema.prisma
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── middleware.ts
├── tailwind.config.ts
├── .env.local
├── .env.example
├── PRD.md
├── CHANGELOG.md
└── README.md
```

---

## 14. Tech Stack Rationale

| Choice | Justification |
|--------|--------------|
| **Next.js 14+ App Router** | Server components, file-based routing, API routes — perfect for this architecture |
| **Hono** | NOT used — all backend logic lives in Next.js API routes (same repo = no CORS, simpler deployment) |
| **PostgreSQL + Prisma** | Relational data (users, courses, enrollments, schedules) — document DB not appropriate |
| **NextAuth.js v5** | App Router native, supports credentials + OAuth, HTTP-only cookies |
| **Resend + React Email** | Best-in-class DX for transactional emails with React components |
| **Uploadthing** | Tight Next.js integration, simple setup for course material uploads |
| **Zustand** | Lightweight, minimal boilerplate for UI state (sidebar open, chat active conversation) |
| **TanStack Query** | Server state caching, background refetch for courses/notifications |
| **Framer Motion** | Page transitions, step animations, subtle micro-interactions |
| **Iconify/React** | Single package to cover Solar, WeUI, Fluent, and ix icon families used in Figma |
| **Neon DB** | Serverless PostgreSQL, free tier, zero-config with Prisma |

---

## 15. Database Schema (Prisma — Draft)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String
  username      String?   @unique
  password      String?
  phone         String?
  address       String?
  avatar        String?
  role          Role      @default(STUDENT)
  emailVerified DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  accounts      Account[]
  sessions      Session[]
  studentProfile StudentProfile?
  mentorProfile  MentorProfile?
  enrollments   Enrollment[]
  messagesSent  Message[]   @relation("MessageSender")
  notifications Notification[]
  reviews       Review[]    @relation("ReviewAuthor")
  schedule      ScheduleItem[]
}

enum Role {
  STUDENT
  MENTOR
  ADMIN
}

model MentorProfile {
  id                 String   @id @default(cuid())
  userId             String   @unique
  user               User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  bio                String?
  professionalBg     String?
  skills             String[]
  teachingExperience String?
  courses            Course[]
  students           Enrollment[]
}

model StudentProfile {
  id               String   @id @default(cuid())
  userId           String   @unique
  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  careerInterests  String[]
  enrollments      Enrollment[]
}

model Course {
  id          String   @id @default(cuid())
  title       String
  description String?
  thumbnail   String?
  price       Float    @default(0)
  isFree      Boolean  @default(false)
  mentorId    String
  mentor      MentorProfile @relation(fields: [mentorId], references: [id])
  materials   CourseMaterial[]
  enrollments Enrollment[]
  reviews     Review[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model CourseMaterial {
  id        String   @id @default(cuid())
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  title     String
  url       String
  type      MaterialType
  order     Int
  createdAt DateTime @default(now())
}

enum MaterialType {
  VIDEO
  PDF
  DOCUMENT
  OTHER
}

model Enrollment {
  id             String   @id @default(cuid())
  studentId      String
  student        StudentProfile @relation(fields: [studentId], references: [id])
  courseId       String
  course         Course   @relation(fields: [courseId], references: [id])
  mentorId       String
  mentor         MentorProfile @relation(fields: [mentorId], references: [id])
  progress       Float    @default(0)
  status         EnrollmentStatus @default(ACTIVE)
  enrolledAt     DateTime @default(now())
  @@unique([studentId, courseId])
}

enum EnrollmentStatus {
  ACTIVE
  COMPLETED
  DROPPED
}

model Conversation {
  id           String    @id @default(cuid())
  participants ConversationParticipant[]
  messages     Message[]
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
}

model ConversationParticipant {
  id             String       @id @default(cuid())
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id])
  userId         String
  joinedAt       DateTime     @default(now())
}

model Message {
  id             String       @id @default(cuid())
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id])
  senderId       String
  sender         User         @relation("MessageSender", fields: [senderId], references: [id])
  content        String
  createdAt      DateTime     @default(now())
}

model ScheduleItem {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  title       String
  description String?
  startTime   DateTime
  endTime     DateTime
  courseId    String?
  createdAt   DateTime @default(now())
}

model Review {
  id         String   @id @default(cuid())
  authorId   String
  author     User     @relation("ReviewAuthor", fields: [authorId], references: [id])
  courseId   String?
  course     Course?  @relation(fields: [courseId], references: [id])
  mentorId   String?
  rating     Int      // 1–5
  comment    String?
  createdAt  DateTime @default(now())
}

model Notification {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  type      String
  message   String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}

model OTPCode {
  id        String   @id @default(cuid())
  email     String
  code      String   // hashed
  expiresAt DateTime
  used      Boolean  @default(false)
  createdAt DateTime @default(now())
}

model EmailLog {
  id        String   @id @default(cuid())
  to        String
  subject   String
  template  String
  status    EmailStatus
  error     String?
  sentAt    DateTime @default(now())
}

enum EmailStatus {
  SENT
  FAILED
}

// NextAuth required models
model Account {
  id                String  @id @default(cuid())
  userId            String
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  expires      DateTime
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  @@unique([identifier, token])
}
```

---

## 16. Known Risks & Ambiguities

| # | Item | Impact | Assumption |
|---|------|--------|------------|
| 1 | **Mobile frames not in Figma** | High | Will implement mobile-first responsiveness using standard breakpoints (sm: 640, md: 768, lg: 1024, xl: 1440). Will document design decisions. |
| 2 | **Real-time chat** (WebSocket vs polling) | Medium | Will use polling (TanStack Query `refetchInterval`) initially; note upgrade path to WebSockets/Pusher |
| 3 | **Payment/pricing** — course prices visible but no checkout flow designed | Medium | Will add pricing display but defer full payment flow (Stripe) to v2. Flag in UI with `// TODO: wire to Stripe` |
| 4 | **Frame 1 (832×2376) and Frame 2 (656×1724)** purpose unclear | Low | Assumed to be component/asset staging areas, not user-facing screens |
| 5 | **Frame 632 (1920×1100)** — purpose unclear | Low | Assumed to be a full-bleed background or hero frame variant |
| 6 | **Mentor's Notification sidebar** is 268px wide vs full dashboard 1440px | Low | Will implement as a slide-in drawer overlay, not a full page |
| 7 | **Calendar date "June 29, 2024"** appears hardcoded | Low | Will use dynamic dates; the June 2024 date is illustrative |
| 8 | **Multiple "Account Settings" frames** (3 variants) | Low | Assumed: (1) General, (2) Linked Accounts, (3) Support — tabbed sub-navigation |
| 9 | **"Frame 476 / ix:cancel" modal** content unclear | Low | Will infer as a close modal overlay for course upload or detail view |
| 10 | **Mentor profile has 3 nearly-identical screens** | Low | Assumed: About tab, Courses tab, Reviews tab — standard tab navigation |

---

## 17. Build Order

Following the spec:
1. ✅ PRD — this document
2. Repo Setup → Init Next.js, install deps, push to `git@github.com:Labi-Joy/ukazi.git`
3. Design Tokens → Tailwind config, fonts, global styles
4. Layouts & Navigation → Root layout, Navbar, Footer, Sidebar
5. Auth System → All auth pages + NextAuth + DB + email templates
6. Landing Page → Full pixel-perfect landing
7. Student Flow → Dashboard, Courses, Search, Mentor Profile, Schedule, Chat, Notifications, Settings
8. Mentor Flow → Dashboard, Courses, Students, Schedule, Chat, Profile, Settings
9. Backend APIs → All endpoints wired up
10. Email System → All templates + Resend
11. Animations & Polish → Framer Motion, micro-interactions
12. QA → Manual testing
13. Vercel Deployment
14. GitHub Actions CI

---

*PRD written from direct Figma REST API analysis — file: `3ViMMNpPBJdgYYMCwdhM4u`, last modified: 2026-01-31T17:43:05Z*
