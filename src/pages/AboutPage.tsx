import EducationSection from "../components/about/EducationSection";
import HeroSection from "../components/about/HeroSection";
import InfoSection from "../components/about/InfoSection";
import InterestsSection from "../components/about/InterestsSection";
import WorkExperienceSection from "../components/about/WorkExperienceSection";

export default function AboutPage() {
  return (
    <main className="flex-1 px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <HeroSection />

        <div className="my-16 lg:my-24 border-t border-gray-200"></div>

        <InfoSection />

        <div className="my-16 lg:my-24 border-t border-gray-200"></div>

        <EducationSection />

        <div className="my-16 lg:my-24 border-t border-gray-200"></div>

        <WorkExperienceSection />

        <div className="my-16 lg:my-24 border-t border-gray-200"></div>

        <InterestsSection />
      </div>
    </main>
  );
}
