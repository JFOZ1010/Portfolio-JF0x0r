import { NextResponse } from "next/server";

export const revalidate = 3600; // ISR: cache at build + revalidate every 1h

export async function GET() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@juanfelipeoz.rar",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ status: "error" }, { status: 502 });
    }

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
