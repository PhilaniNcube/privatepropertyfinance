import { Check, Clock } from "lucide-react";

interface TimelineItemProps {
  title: string;
  description: string;
  isCompleted?: boolean;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  description,
  isCompleted = false,
  isLast = false,
}: TimelineItemProps) {
  return (
    <li className="relative flex gap-6 pb-8">
      {!isLast && (
        <div
          className="absolute bottom-0 left-[11px] top-8 w-px bg-gray-200"
          aria-hidden="true"
        />
      )}
      <div
        className={`relative flex h-6 w-6 flex-none items-center justify-center ${
          isCompleted ? "bg-green-600" : "bg-gray-200"
        } rounded-full`}
      >
        {isCompleted ? (
          <Check className="h-4 w-4 text-white" />
        ) : (
          <Clock className="h-4 w-4 text-gray-500" />
        )}
      </div>
      <div className="flex-auto">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
}
