import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModel";
import UserModel from "@/lib/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const GET=async (request:NextRequest)=>{
    const {users,products}=data;
    await dbConnect();
    await UserModel.deleteMany();//delete all record from users
    await UserModel.insertMany(users);
    await ProductModel.deleteMany();
    await ProductModel.insertMany(products);

    return NextResponse.json({
        message:'Seeded Successfully',
        users,products
    })
}