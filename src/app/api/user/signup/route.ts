import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";
import validator from "validator";
// import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fullName, phoneNumber, email, password } = reqBody;

    if (!validator.isByteLength(fullName, { min: 6, max: undefined })) {
      return NextResponse.json(
        { error: "Full name should be a real name" },
        { status: 400 }
      );
    }

    if (!validator.isMobilePhone(phoneNumber, ["en-NG"])) {
      return NextResponse.json(
        { error: "Valid phone number is required" },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!validator.isByteLength(password, { min: 5, max: undefined })) {
      return NextResponse.json(
        { error: "Password is too short" },
        { status: 400 }
      );
    }

    //check if user already exists
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    //check if phone already exists
    const userPhone = await prisma.user.findUnique({
      where: {
        phoneNumber: phoneNumber,
      },
    });

    if (user || userPhone) {
      console.log("User already exists");

      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const savedUser = await prisma.user.create({
      data: {
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
      },
    });

    console.log(savedUser);

    //send verification email

    // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
