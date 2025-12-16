import React from "react";

export interface SkeletonProps {
  /** Skeleton width */
  width?: string;
  /** Skeleton height */
  height?: string;
  /** Shape variant */
  shape?: "rectangle" | "circle";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Skeleton loading placeholder component
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  shape = "rectangle",
  className = "",
}) => {
  const shapeClass = shape === "circle" ? "rounded-full" : "";

  return (
    <div
      className={`skeleton ${shapeClass} ${className}`.trim()}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
