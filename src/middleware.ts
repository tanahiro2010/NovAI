import { NextRequest, NextResponse } from "next/server";
import { isLogin } from "./lib/auth";

export async function middleware(req: NextRequest) {
    const login = await isLogin();
    const url = new URL(req.url);
    const path = url.pathname;

    if (path.startsWith('/dashboard') && !login) {
        return NextResponse.redirect('/login');
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register", "/api/:path*"]
}