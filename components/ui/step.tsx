"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  step: number;
  currentStep: number;
  title: string;
  description?: string;
  isLast?: boolean;
}

function Step({ step, currentStep, title, description, isLast }: StepProps) {
  const isCompleted = step < currentStep;
  const isCurrent = step === currentStep;

  return (
    <div className="flex flex-col items-center flex-1 min-w-0">
      {/* Step Circle */}
      <div className="relative">
        <div
          className={cn(
            "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ease-in-out",
            isCompleted
              ? "border-emerald-500 bg-emerald-500 text-white shadow-lg"
              : isCurrent
              ? "border-emerald-500 bg-white text-emerald-600 shadow-lg ring-4 ring-emerald-100"
              : "border-gray-300 bg-white text-gray-400"
          )}
        >
          {isCompleted ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : step}
        </div>
      </div>

      {/* Step Content */}
      <div className="mt-2 sm:mt-3 text-center max-w-24 sm:max-w-32 px-1">
        <span
          className={cn(
            "block text-xs sm:text-sm font-semibold transition-colors duration-200 leading-tight",
            isCompleted
              ? "text-emerald-600"
              : isCurrent
              ? "text-emerald-600"
              : "text-gray-500"
          )}
        >
          {title}
        </span>
        {description && (
          <span
            className={cn(
              "block text-xs mt-1 transition-colors duration-200 leading-tight hidden sm:block",
              isCompleted
                ? "text-emerald-500"
                : isCurrent
                ? "text-emerald-500"
                : "text-gray-400"
            )}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

interface StepperProps {
  steps: Array<{
    step: number;
    title: string;
    description?: string;
  }>;
  currentStep: number;
}

function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between relative px-2 sm:px-4 gap-1 sm:gap-4">
        {steps.map((step, index) => (
          <Step
            key={step.step}
            step={step.step}
            currentStep={currentStep}
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Progress Bar Background */}
      <div className="mt-6 sm:mt-8 relative px-2 sm:px-4">
        <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-700 ease-in-out rounded-full shadow-sm"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export { Stepper, Step };
