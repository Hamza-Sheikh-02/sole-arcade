import { cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams;
  try {
    if (url.has("user_id")) {
      const allCartData = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, url.get("user_id") as string));
      return NextResponse.json({ allCartData });
    }
  } catch (error) {
    console.log("error : ", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  const request = await req.json();
  try {
    if (
      request.product_id &&
      request.quantity &&
      request.user_id &&
      request.price
    ) {
      const response = await db.insert(cartTable).values(request).returning();
      return NextResponse.json({ response });
    } else {
      throw Error("Please put product_id quantity user_id");
    }
  } catch (error) {
    console.log("error : ", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

export async function PUT(req: NextRequest) {
  const request = await req.json();

  try {
    const response = await db
      .update(cartTable)
      .set(request)
      .where(
        and(
          eq(cartTable.product_id, request.product_id),
          eq(cartTable.user_id, request.user_id)
        )
      )
      .returning();
    return NextResponse.json({ response });
  } catch (error) {
    console.log("error : ", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

export async function DELETE(req: NextRequest) {
  const url = req.nextUrl.searchParams;

  try {
    if (url.has("product_id") && url.has("user_id")) {
      const response = await db
        .delete(cartTable)
        .where(
          and(
            eq(cartTable.product_id, url.get("product_id") as string),
            eq(cartTable.user_id, url.get("user_id") as string)
          )
        )
        .returning();
      return NextResponse.json({ response });
    }
  } catch (error) {
    console.log("error : ", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
