import React from "react";

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card content */
  children: React.ReactNode;
  /** Card image */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Card variant */
  variant?: "normal" | "compact" | "side";
  /** Card is bordered */
  bordered?: boolean;
  /** Background glass effect */
  glass?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Card actions */
  actions?: React.ReactNode;
}

/**
 * Card component using DaisyUI styling
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  image,
  imageAlt = "",
  variant = "normal",
  bordered = false,
  glass = false,
  className = "",
  actions,
}) => {
  const variantClass = variant === "compact" ? "card-compact" : variant === "side" ? "card-side" : "";
  const borderedClass = bordered ? "card-bordered" : "";
  const glassClass = glass ? "glass" : "";

  return (
    <div className={`card bg-base-100 shadow-xl ${variantClass} ${borderedClass} ${glassClass} ${className}`.trim()}>
      {image && (
        <figure>
          <img src={image} alt={imageAlt} />
        </figure>
      )}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
        {actions && <div className="card-actions justify-end">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
