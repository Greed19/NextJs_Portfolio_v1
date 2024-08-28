import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import {NextResponse, type NextRequest } from "next/server";

type SearchParamsProps = {
    params:{
        slug: string
    }
}
export const GET = async (_request: NextRequest,{params}:SearchParamsProps) => {
    const {slug} = params
    try {
        connectToDb();
        const post = await Post.findOne({slug})
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch Post!')
    }
}

export const DELETE = async(_request: NextRequest, {params}:SearchParamsProps) => {
    const {slug} = params

    try {
        connectToDb();
        await Post.deleteOne({slug})
    } catch (error) {
        console.log(error)
        throw new Error('Failed to delete post!')
    }
}