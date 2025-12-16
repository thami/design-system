import React from "react";

export interface TooltipProps {
  /** Tooltip content */
  tip: string;
  /** Element to wrap */
  children: React.ReactNode;
  /** Tooltip position */
  position?: "top" | "bottom" | "left" | "right";
  /** Tooltip variant */
  variant?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  /** Open on click instead of hover */
  open?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tooltip component with DaisyUI styling
 */
export const Tooltip: React.FC<TooltipProps> = ({
  tip,
  children,
  position = "top",
  variant,
  open,
  className = "",
}) => {
  const positionClass = position !== "top" ? `tooltip-${position}` : "";
  const variantClass = variant ? `tooltip-${variant}` : "";
  const openClass = open ? "tooltip-open" : "";

  return (
    <div
      className={`tooltip ${positionClass} ${variantClass} ${openClass} ${className}`.trim()}
      data-tip={tip}
    >
      {children}
    </div>
  );
};

export default Tooltip;
