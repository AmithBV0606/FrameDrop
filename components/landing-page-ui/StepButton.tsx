import { LucideIcon } from "lucide-react";

export default function StepButton({
  step,
  index,
  isActive,
  onClick,
}: {
  step: { icon: LucideIcon; title: string; description: string };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left transition-all p-6 rounded-xl cursor-pointer ${
        isActive
          ? "bg-gradient-to-r from-green-500/20 to-green-700/10 border border-green-400/50"
          : "bg-black/40 hover:bg-gray-900 border border-white/5"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg ${
            isActive
              ? "bg-gradient-to-r from-green-400 to-green-600 text-black"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          <step.icon />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold ${
                isActive
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              {index + 1}
            </div>
            <h3
              className={`text-xl font-bold ${
                isActive ? "text-white" : "text-gray-300"
              }`}
            >
              {step.title}
            </h3>
          </div>
          <p className={`mt-2 ${isActive ? "text-gray-200" : "text-gray-400"}`}>
            {step.description}
          </p>
        </div>
      </div>
    </button>
  );
}