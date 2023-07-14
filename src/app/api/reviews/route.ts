
import Review from "@/models/Review";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {

    try {
        await connect();

        return new NextResponse("You have been connected successfully", {status: 200});
    } catch (error) {
        return new NextResponse("Connection error", {status: 500})
    }

}

export const POST = async (request: Request) => {
    const body = await request.json();
    const newReview = new Review(body);

    try {
        await connect();

        await newReview.save();

        return new NextResponse("Review has been created successfully", {status: 200});
    } catch (error) {
        return new NextResponse("Database error", {status: 500});
    }

}