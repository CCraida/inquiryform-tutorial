import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request: Request) {
    //const{username,subject,email,content,file} = await request.json();
    const formData = await request.formData();

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const content = formData.get("content") as string;
    const file = formData.get("file") as File;

    console.log(file);
    console.log("POST受信");

    const buffer =  Buffer.from(await file.arrayBuffer());

    try {
        const {data,error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['crowcry7@yahoo.co.jp'],
            subject:"件名を格納",
            react: EmailTemplate({ username,email ,content}) as React.ReactElement,
            attachments: [{filename:file.name,content:buffer}],
        })
        if (error) {
            console.log("error1");
            return NextResponse.json({error});
        }
        return NextResponse.json({ data });
    } catch (error) {
        console.log("error2");
        return NextResponse.json({error});
    }
}
