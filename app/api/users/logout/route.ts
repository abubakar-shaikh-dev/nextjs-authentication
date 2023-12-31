import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { msg: "Logout Successfully!" },
      { status: 200 }
    );
    response.cookies.set("token","", { expires: new Date(Date.now()) });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
