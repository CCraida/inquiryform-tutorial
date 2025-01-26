import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import MailForm from "../components/MailForm/MailForm";
import { useForm } from 'react-hook-form'


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center p-24">
    <main className="flex　flex-col items-center p-24">

    <h2 className="font-semibold text-2xl mb-4">お問い合わせForm</h2>
    <MailForm />
    </main>
  );
}
