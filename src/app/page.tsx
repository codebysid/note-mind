import AppSidebar from "@/components/AppSidebar";
import DisplayNotes from "@/components/DisplayNotes";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-manrope max-w-screen">
      <SidebarTrigger />
      <AppSidebar />
      <DisplayNotes />
    </div>
  );
}
