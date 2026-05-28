import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import CoursesSection from "@/components/home/CoursesSection";
import ResultsSection from "@/components/home/ResultsSection";
import WhyChooseUs from "@/components/home/WhyChouseUs";
import TeachersSection from "@/components/home/TeachersSection";
import StudyBooks from "@/components/home/StudyBooks";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <CoursesSection />
      <ResultsSection />
      <WhyChooseUs />
      <TeachersSection />
      <StudyBooks />
      <FacilitiesSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}