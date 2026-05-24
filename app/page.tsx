import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryScrollSection from "@/components/StoryScrollSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { DynamicIslandTOC } from "@/components/ui/dynamic-island-toc";

export default function Home() {
  return (
    <>
      <DynamicIslandTOC />
      <div className="relative z-10 w-full bg-paper shadow-md rounded-b-[2.5rem] flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <StoryScrollSection />
          <TestimonialsSection />
          <ContactForm />
        </main>
      </div>
      <CinematicFooter />
    </>
  );
}
