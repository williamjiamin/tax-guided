"use client";

const STEPS = [
  "Choose Formation Service",
  "Register Your LLC",
  "Open Bank Account",
  "Set Up Payments",
  "Tax Obligations",
];

interface GuideFlowChartProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function GuideFlowChart({ currentStep, onStepClick }: GuideFlowChartProps) {
  return (
    <div className="flex flex-col items-center py-12 px-6">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-8">
        Your Progress
      </h3>
      <div className="flex flex-col items-center">
        {STEPS.map((title, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;
          const isFuture = step > currentStep;

          return (
            <div key={step} className="flex flex-col items-center">
              {/* Connector line above (skip first) */}
              {i > 0 && (
                <div
                  className={`w-0.5 h-8 ${
                    step <= currentStep ? "bg-green-400" : "bg-gray-200"
                  }`}
                />
              )}

              {/* Node */}
              <button
                onClick={() => onStepClick(step)}
                className={`flex items-center gap-3 w-56 px-4 py-3 rounded-xl border-2 transition-all cursor-pointer ${
                  isCurrent
                    ? "border-blue-600 bg-blue-50"
                    : isCompleted
                    ? "border-green-500 bg-green-50 hover:bg-green-100"
                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCurrent
                      ? "bg-blue-600 text-white"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>

                {/* Title */}
                <span
                  className={`text-sm font-medium text-left ${
                    isCurrent
                      ? "text-blue-700"
                      : isCompleted
                      ? "text-green-700"
                      : "text-gray-400"
                  }`}
                >
                  {title}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
