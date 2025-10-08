import { FiExternalLink } from "react-icons/fi";

const ResearchSection = () => {
  const researchPapers = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics",
      author: "Jane Smith",
      year: 2024,
      summary:
        "Exploring the applications of machine learning in early disease detection.",
      link: "https://example.com/research/ai-healthcare",
      tag: "Artificial Intelligence",
    },
    {
      id: 2,
      title: "Renewable Energy Storage Systems",
      author: "John Doe",
      year: 2023,
      summary:
        "A study on next-gen battery technologies for sustainable power.",
      link: "https://example.com/research/energy-storage",
      tag: "Energy",
    },
    {
      id: 3,
      title: "Climate Change Impact on Agriculture",
      author: "Maria Garcia",
      year: 2025,
      summary:
        "Research on adaptive crop techniques under extreme weather conditions.",
      link: "https://example.com/research/climate-agriculture",
      tag: "Environment",
    },
  ];

  return (
    <div className="bg-violet-900">
      <div className=" container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
          Research Papers by Our Students
        </h1>
        <div className="mt-8 lg:mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Research paper items */}
          {researchPapers?.map((paper) => (
            <div
              key={paper?.id}
              className="bg-violet-950 rounded-lg shadow-lg px-5 py-6"
            >
              {/* title */}
              <h2 className="text-lg text-slate-100">{paper?.title}</h2>
              {/* date and author */}
              <div className="mt-1.5 text-slate-400">
                <p>
                  {paper?.author} • {paper?.year}
                </p>
              </div>
              {/* category */}
              <span className=" text-xs my-2 bg-violet-800 text-slate-300 px-2 py-1 rounded-full">
                {paper?.tag}
              </span>

              <p className="text-slate-400 text-sm mt-2.5 mb-2">
                {paper?.summary}
              </p>
              <a
                href={paper?.link}
                target="_blank"
                className="text-slate-400 flex items-center
              gap-2
             hover:underline font-semibold cursor-pointer"
              >
                Read More <FiExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default ResearchSection;
