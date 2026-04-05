import Hero from "@/components/Hero";
import Restaurant from "@/components/Restaurant";
import Contact from "@/components/Contact";
import { BranchAnnouncementModal } from "@/components/BranchAnnouncementModal";

export default function AnaSayfa() {
  return (
    <>
      <BranchAnnouncementModal />
      <Hero />
      <Restaurant />
      <Contact />
    </>
  );
}
