import React from "react";

export interface AvatarProps {
  /** Image source */
  src?: string;
  /** Alt text */
  alt?: string;
  /** Placeholder text (initials) when no image */
  placeholder?: string;
  /** Avatar size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Avatar shape */
  shape?: "circle" | "rounded" | "square";
  /** Online indicator */
  online?: boolean;
  /** Offline indicator */
  offline?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses = {
  xs: "w-8",
  sm: "w-12",
  md: "w-16",
  lg: "w-24",
};

const shapeClasses = {
  circle: "rounded-full",
  rounded: "rounded-xl",
  square: "",
};

/**
 * Avatar component for user profile images
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  placeholder,
  size = "md",
  shape = "circle",
  online,
  offline,
  className = "",
}) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];
  const statusClass = online ? "online" : offline ? "offline" : "";

  return (
    <div className={`avatar ${statusClass} ${placeholder ? "placeholder" : ""} ${className}`.trim()}>
      <div className={`${sizeClass} ${shapeClass}`}>
        {src ? (
          <img src={src} alt={alt} />
        ) : placeholder ? (
          <span className="text-neutral-content bg-neutral">{placeholder}</span>
        ) : null}
      </div>
    </div>
  );
};

export default Avatar;
