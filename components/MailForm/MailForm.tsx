"use client"

import React, { useEffect } from 'react'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from '@/lib/formSchema'
import { useMailForm } from '@/hooks/useMailForm'
import { ClipLoader } from 'react-spinners'
import { ToastContainer,toast } from 'react-toastify'


const MailForm = () => {
    const {form,onSubmit} = useMailForm();


    useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            toast.success("success")
        }
    }, [form.formState.isSubmitSuccessful])
    
    return (
        <div>
            <Form {...form}>
            <ToastContainer />
            <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-3">
                <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>ユーザー名</FormLabel>
                    <FormControl>
                        <Input placeholder="ユーザー名" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}               
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>メールアドレス</FormLabel>
                    <FormControl>
                        <Input placeholder="メールアドレス" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}                
                />
                <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>主題</FormLabel>
                    <FormControl>
                        <Input placeholder="主題" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}                
                />
                <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>本文</FormLabel>
                    <FormControl>
                        <Textarea placeholder="本文" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}                
                />
                <FormField
                control={form.control}
                name="file"
                render={({ field:{value,onChange,...fieldProps} }) => (
                    <FormItem>
                    <FormLabel>画像をここにアップロード</FormLabel>
                    <FormControl>
                        <Input accept="image/" type="file" placeholder="ユーザー名" {...fieldProps} onChange={(event) =>{onChange(event.target.files)}}/>
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}  
                />

                <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? <ClipLoader /> : "送信"}</Button>
            </form>
            </Form>
        </div>
    )
}

export default MailForm
