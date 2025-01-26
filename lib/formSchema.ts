import { z } from "zod"

const MAX_MB = 5;
const MAX_FILE_SIZE = 5*1024*1024
const ACCEPT_IMAGE_TYPE=["image/jpeg","image/jpg","image/png"]

export const formSchema = z.object({
    username: z.string()
    .min(2,{message:"ユーザー名は２文字位以上で入力して"}),

    subject: z.string()
    .min(2,{message:"主題は２文字位以上で入力して"}),

    email: z.string()
    .email({message:"適切なメールアドレスを入力してください。２文字"}),

    content: z.string()
    .min(2,{message:"本文は10文字位以上で入力して"})
    .max(160,{message:"本文は160文字位以上で入力して"}),

    file:z.custom<FileList>().refine((files) => files?.length > 0 ,"ファイル画像が必要です。")
    .refine((files) => files?.[0].size <=MAX_FILE_SIZE,`画像サイズは${MAX_MB}までです`)
    .refine((files) => ACCEPT_IMAGE_TYPE.includes(files?.[0]?.type),"ファイルタイプが違います。")

})