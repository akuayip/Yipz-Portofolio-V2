import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 5 * 1024 * 1024) return NextResponse.json({ error: "File exceeds the 5 MB limit." }, { status: 413 });
  if (!process.env.MODEL_API_BASE_URL && !process.env.HF_SPACE_ID) {
    return NextResponse.json({ error: "Inference is not configured." }, { status: 503 });
  }
  return NextResponse.json({ error: "A project-specific provider adapter is required." }, { status: 501 });
}
