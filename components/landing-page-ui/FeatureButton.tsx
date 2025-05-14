import { LucideIcon } from "lucide-react";

export default function FeatureButton({
  feature,
  isActive,
  onClick,
}: {
  feature: { icon: LucideIcon; title: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
        isActive
          ? "bg-gradient-to-r from-green-500/20 to-green-700/10 border border-green-400/50"
          : "bg-black/40 hover:bg-black/60 border border-white/5"
      }`}
    >
      <div
        className={`p-2 rounded ${
          isActive
            ? "bg-gradient-to-r from-green-400 to-green-600 text-black"
            : "bg-gray-800 text-gray-400"
        }`}
      >
        {<feature.icon />}
      </div>
      <span
        className={`font-medium ${isActive ? "text-white" : "text-gray-400"}`}
      >
        {feature.title}
      </span>
      {isActive && (
        <div className="ml-auto bg-green-500 h-2 w-2 rounded-full">
          <div className="animate-ping bg-green-500 h-2 w-2 rounded-full"></div>
        </div>
      )}
    </button>
  );
}