import type { Metadata } from "next";
import { Figtree, Space_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactQueryClientProvider } from "@/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner"

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-spacemono",
  weight: ["400", "700"],
  display: "swap",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Note Mind",
  metadataBase: new URL('https://note-mind.vercel.app'),
  icons: {
    icon: "/site-icon.png",
  },
  keywords: ["Siddhant Jain", "note mind", "ai todo app"],
  description: "Note Mind is an AI powered task management app",
  openGraph: {
    title: "Note Mind",
    description: "Note Mind is an AI powered task management app",
    url: "/",
    siteName: "Note Mind",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/banner.png",
        width: 800,
        height: 600,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Note Mind",
    description: "Note Mind is an AI powered task management app",
    images: ["/banner.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${spaceMono.variable} antialiased dark`}
      >
        <ReactQueryClientProvider>
          <SidebarProvider>
            {children}
            <Toaster />
          </SidebarProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
