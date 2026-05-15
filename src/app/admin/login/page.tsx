"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      router.push("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 border-white py-5 px-4 w-[400px] space-y-4 rounded flex flex-col">
        <h1 className="text-center">Admin Login</h1>
        <div className="flex flex-col gap-2 justify-content">
            <label htmlFor="email">Email </label>
            <input
            id="email"
            placeholder="Digite aqui...   "
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-md border-white py-1 pl-2"
            />
        </div>

        <div className="flex flex-col gap-2 justify-content">
            <label htmlFor="password">Password </label> 
            <input
            id="password"
            type="password"
            placeholder="Digite aqui..."
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-md border-white p-0.5 pl-2"
            />
        </div>

        <button className="border-2 mx-auto border-white p-2 hover:opacity-70 transition-all ease-in-out duration-300 cursor-pointer" onClick={login}>
          Entrar
        </button>

      </div>

    </div>
  );
}