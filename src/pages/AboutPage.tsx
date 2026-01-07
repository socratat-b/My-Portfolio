import EducationSection from "../components/about/EducationSection";
import HeroSection from "../components/about/HeroSection";
import InfoSection from "../components/about/InfoSection";
import InterestsSection from "../components/about/InterestsSection";
import WorkExperienceSection from "../components/about/WorkExperienceSection";

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
      <div className="max-w-6xl mx-auto">
        <HeroSection />

        <div className="my-12 sm:my-16 lg:my-20 xl:my-24 border-t border-black/10"></div>

        <InfoSection />

        <div className="my-12 sm:my-16 lg:my-20 xl:my-24 border-t border-black/10"></div>

        <EducationSection />

        <div className="my-12 sm:my-16 lg:my-20 xl:my-24 border-t border-black/10"></div>

        <WorkExperienceSection />

        <div className="my-12 sm:my-16 lg:my-20 xl:my-24 border-t border-black/10"></div>

        <InterestsSection />
      </div>
    </main>
  );
}
