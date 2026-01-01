export default function InterestsSection() {
  const interests = [
    {
      title: "Coding",
      description:
        "Building innovative solutions and exploring new technologies",
    },
    {
      title: "Learning",
      description:
        "Constantly expanding my knowledge in web development and design",
    },
    {
      title: "Open Source",
      description: "Contributing to projects and collaborating with developers",
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges and finding creative solutions",
    },
  ];

  return (
    <div className="mt-16 lg:mt-24">
      <div className="space-y-8">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
          Things I Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-bold text-black">
                {interest.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
