import { NextRequest, NextResponse } from "next/server";
import { File } from "undici";

// @ts-ignore - this is fine rigth??
globalThis.File = File;

// export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const fd = await req.formData();
  const jsonFile = fd.get("jsonFile");
  const imgFile = fd.get("imgFile");

  console.log({
    jsonFile,
    jsonIsFile: jsonFile instanceof File, // true???
    imgFile,
    imgIsFile: imgFile instanceof File, // true???
  });

  return NextResponse.json({ ok: true });
}
