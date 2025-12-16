import React from "react";

export interface ProgressProps {
  /** Progress value (0-100) */
  value?: number;
  /** Max value */
  max?: number;
  /** Progress variant */
  variant?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Progress bar component with DaisyUI styling
 */
export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant,
  className = "",
}) => {
  const variantClass = variant ? `progress-${variant}` : "";

  return (
    <progress
      className={`progress ${variantClass} ${className}`.trim()}
      value={value}
      max={max}
    />
  );
};

export default Progress;
