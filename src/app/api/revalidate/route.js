import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// This file creates a new API endpoint at /api/revalidate
// that can be called by your server to trigger on-demand revalidation.

// You should set this secret key in your environment variables for security.
// For example: NEXT_REVALIDATION_SECRET="your-super-secret-key"
const REVALIDATION_SECRET = process.env.NEXT_PUBLIC_REVALIDATION_SECRET;

/**
 * The POST handler for the webhook.
 * This function will be called when your backend sends a request to this endpoint.
 */
// File: src/app/api/revalidate/route.js

export async function POST(request) {
  const secret = REVALIDATION_SECRET

  const token =  request.headers.get("x-secret");

  if (token !== secret) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }

  try {
    // Example: revalidate homepage and blog
    await Promise.all([
      revalidatePath('/'),
    ]);

    return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Revalidation error' }), { status: 500 });
  }
}
