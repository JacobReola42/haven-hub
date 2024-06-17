# Haven Hub Next.js Application

## Overview
Haven Hub is an advanced Next.js application tailored for managing property rentals and bookings. It offers a user-friendly interface for property listing management, reservation handling, and user profile customization. The application integrates Stripe for payments, Prisma for database operations, Clerk for authentication, and Supabase for backend services. It leverages modern technologies such as server actions, lazy loading, and TypeScript, and is deployable on Vercel for easy scalability.

## Features
- **Property Management:** Create, update, and view property listings with ease.
- **Booking System:** Manage reservations with detailed check-in and check-out processes.
- **User Profiles:** Customize user information through manageable profiles.
- **Admin Dashboard:** Access booking and property statistics through intuitive charts.
- **Payment Processing:** Secure transactions via Stripe integration.
- **Authentication:** Robust user authentication supported by Clerk and backend services powered by Supabase.

## Technologies Used
- Next.js 14+
- React
- TypeScript
- Tailwind CSS
- Stripe
- Prisma
- Clerk
- Supabase
- Recharts (for data visualization)
- Zod (for data validation)
- Shadcn-ui (for UI components)

## Full-Stack Development and Scalability
Haven Hub exemplifies full-stack development and scalability, incorporating a variety of technologies:

### 1. Full-Stack Development:
- **Frontend:** Utilizes Next.js, React, and Tailwind CSS for a responsive UI.
- **Backend:** Managed by Prisma and Supabase with Clerk for authentication.
- **Payment Processing:** Secure and reliable payment processing with Stripe.
- **Data Visualization:** Data represented visually using Recharts.
- **Data Validation:** Ensured by Zod across the application.

### 2. Scalability:
- **Architecture:** Optimized for performance with server-side rendering via Next.js.
- **Database Management:** Efficient and scalable database management with Prisma.
- **Authentication and Backend Services:** Enhanced functionality and scalability through Clerk and Supabase.
- **Payment Processing:** Scalable payment solutions with Stripe.

The application is designed for seamless transition from development to production with Vercel deployment.

## Environment Variables

To run this application, configure the following environment variables in your `.env` file:
- `DB_PASSWORD`
- `DATABASE_URL`
- `DIRECT_URL`
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `ADMIN_USER_ID`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

Credit for this repository goes to Coding Addict.
