import React from "react";

export interface TextareaProps {
  /** Placeholder text */
  placeholder?: string;
  /** Textarea value */
  value?: string;
  /** Textarea variant */
  variant?: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  /** Textarea size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Number of rows */
  rows?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Textarea component with DaisyUI styling
 */
export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  variant = "bordered",
  size = "md",
  rows = 4,
  disabled = false,
  onChange,
  className = "",
}) => {
  const variantClass = `textarea-${variant}`;
  const sizeClass = size !== "md" ? `textarea-${size}` : "";

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      className={`textarea ${variantClass} ${sizeClass} ${className}`.trim()}
    />
  );
};

export default Textarea;
