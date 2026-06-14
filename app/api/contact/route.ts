import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_CONTACT_URL = "https://palani-admin.vercel.app/api/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await fetch(EXTERNAL_CONTACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const contentType = response.headers.get("content-type") ?? "application/json";
    const responseBody = await response.text();

    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("[Contact Proxy Error]", error);
    return NextResponse.json(
      { message: "Unable to submit contact request. Please try again later." },
      { status: 500 }
    );
  }
}
