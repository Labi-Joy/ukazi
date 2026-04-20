import NextAuth from "next-auth"
import authConfig from "./lib/auth.config"

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isDashboard = req.nextUrl.pathname.startsWith("/dashboard")
    const isMentorDashboard = req.nextUrl.pathname.startsWith("/mentor-dashboard")

    if ((isDashboard || isMentorDashboard) && !req.auth) {
        const url = req.nextUrl.clone()
        url.pathname = "/login"
        return Response.redirect(url)
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
