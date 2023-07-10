
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