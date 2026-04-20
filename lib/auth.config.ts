import type { NextAuthConfig } from "next-auth"

export default {
    providers: [], // Empty providers for edge compatibility, will be added in server-only auth.ts
    pages: {
        signIn: "/login",
        error: "/error",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isDashboard = nextUrl.pathname.startsWith("/dashboard")
            const isMentorDashboard = nextUrl.pathname.startsWith("/mentor-dashboard")

            if (isDashboard || isMentorDashboard) {
                if (isLoggedIn) return true
                return false // Redirect to login
            }
            return true
        },
    },
} satisfies NextAuthConfig
