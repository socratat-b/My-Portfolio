import { useState } from "react";

type EducationPhase = "elementary" | "junior" | "senior" | "college";

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState<EducationPhase>("college");

  const tabs = [
    { id: "elementary" as EducationPhase, label: "Elementary" },
    { id: "junior" as EducationPhase, label: "Junior High" },
    { id: "senior" as EducationPhase, label: "Senior High" },
    { id: "college" as EducationPhase, label: "College" },
  ];

  const educationContent = {
    elementary: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-black">
            Upper Bonga Elementary School
          </p>
          <p className="text-gray-600">Graduated | 2012 - 2014</p>
        </div>
        <div>
          <p className="font-semibold text-black">
            San Agustin Elementary School
          </p>
          <p className="text-gray-600">Parañaque City | Grade 2-4 | 2009 - 2012</p>
        </div>
        <div>
          <p className="font-semibold text-black">
            Upper Bonga Elementary School
          </p>
          <p className="text-gray-600">Grade 1 | 2008 - 2009</p>
        </div>
      </div>
    ),
    junior: (
      <div>
        <p className="font-semibold text-black">Bonga National High School</p>
        <p className="text-gray-600">Graduated | 2014 - 2018</p>
      </div>
    ),
    senior: (
      <div>
        <p className="font-semibold text-black">
          Divine Word College of Legazpi
        </p>
        <p className="text-gray-600">Senior High School | Graduated | 2018 - 2020</p>
      </div>
    ),
    college: (
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-black">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-gray-600">
            Divine Word College of Legazpi | 2020 - 2024
          </p>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Academic Achiever</li>
          <li>Dean Lister First and Second Semester</li>
          <li>Best Thesis</li>
        </ul>
      </div>
    ),
  };

  const schoolImages = {
    elementary: "https://picsum.photos/500/600?random=10",
    junior: "https://picsum.photos/500/600?random=11",
    senior: "https://picsum.photos/500/600?random=12",
    college: "https://picsum.photos/500/600?random=13",
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 lg:mt-24">
      {/* Education Content */}
      <div className="flex-1 flex flex-col space-y-6">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
          Education
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-base lg:text-lg text-gray-700">
          {educationContent[activeTab]}
        </div>
      </div>

      {/* School Image */}
      <div className="w-full lg:w-2/5">
        <img
          src={schoolImages[activeTab]}
          alt="School"
          className="w-full h-auto object-cover rounded-3xl transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
