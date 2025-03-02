interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
}

const ExperienceItem = ({
  company,
  position,
  period,
  description,
  logo,
}: ExperienceItemProps) => {
  return (
    <div className="group relative flex items-start gap-4 rounded-lg bg-zinc-900/50 p-6 transition-all duration-300 hover:bg-zinc-900/70">
      {/* Orbit effect circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 rounded-lg border border-zinc-700/50 transition-all duration-300 group-hover:border-zinc-600/50" />
        <div className="absolute -inset-1 rounded-lg border border-zinc-700/30 transition-all duration-300 group-hover:border-zinc-600/30" />
        <div className="absolute -inset-2 rounded-lg border border-zinc-700/20 transition-all duration-300 group-hover:border-zinc-600/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-start gap-4">
        <div className="relative h-12 w-12 flex-shrink-0 transform transition-all duration-300 group-hover:scale-110">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-zinc-700/50 to-zinc-600/50 blur-sm transition-all duration-300 group-hover:blur-md" />
          <img
            src={logo}
            alt={`${company} logo`}
            className="relative h-full w-full rounded-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{position}</h3>
          <p className="text-sm text-gray-400">{period}</p>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
