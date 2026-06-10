import Hero from "@/components/home/Hero";
import SideBar from "@/components/home/SideBar";
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
      <section className="w-full bg-white pt-14 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SideBar />
            </div>
            {/* Hero */}
            <div className="lg:col-span-3">
              <Hero />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <CoursesSection />
      {/* <ResultsSection /> */}
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