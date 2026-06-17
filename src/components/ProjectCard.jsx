import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, features, tech, demo, github, image }) => {
  return (
    <div className="relative group w-full h-72 rounded-2xl overflow-hidden cursor-pointer 
                    transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">

      {/* الخلفية */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-40 
                     transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* طبقة زجاجية */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 
                      backdrop-blur-sm group-hover:backdrop-blur-xl transition-all duration-500"></div>

      {/* المحتوى الأمامي */}
      <div className="absolute bottom-6 left-6 text-white transition-all duration-500 
                      group-hover:opacity-0">
        <h3 className="text-2xl font-semibold drop-shadow-lg">{title}</h3>
      </div>

      {/* المحتوى عند الـHover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-all duration-500 flex flex-col justify-center 
                      items-center text-center px-6 text-white">

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-sm text-gray-200 mb-3 leading-relaxed">
          {description}
        </p>

        <ul className="text-xs text-gray-300 mb-4 list-disc text-left w-full max-w-xs mx-auto space-y-1">
          {features.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tech.map((t, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] bg-white/20 rounded-full border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-400 
                       text-black font-semibold rounded-lg text-sm transition"
          >
            <FiExternalLink /> Demo
          </a>

          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 hover:bg-gray-800 
                       rounded-lg text-sm transition"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
