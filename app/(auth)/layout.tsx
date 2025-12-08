import Header from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Toaster } from "@/components/ui/sonner"
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const Layout =async ({ children }: { children: React.ReactNode }) => {
const session=await auth.api.getSession({headers:await headers()});
 if(session?.user) redirect('/')
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href={"/"} className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="signalist"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-10 lg:mb-16">
          <blockquote className="authblockquote">
            {" "}
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite>- Ethan.R</cite>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
