import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(
      { msg: "Logout Successfully!" },
      { status: 200 }
    );
    response.cookies.set("token", "", { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ msg: "Something Went Wrong!" }, { status: 500 });
  }
}
