import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Project Management System | Multi-Tenant University Portal",
  description:
    "Manage university student teams, 3-title proposal approvals, supervisor escalations, automated room scheduling, and in-app presentations in one platform.",
  keywords: [
    "Project Management System",
    "University Project Portal",
    "Team Proposal Consensus",
    "Auto Room Scheduling",
    "In-App Presentation Viewer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
