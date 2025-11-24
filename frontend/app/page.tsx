"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMessage } from '@/utils/messages';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">{getMessage('app.redirecting')}</div>
    </div>
  );
}
