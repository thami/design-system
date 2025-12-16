import React from "react";

export interface InputProps {
  /** Input type */
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Input variant */
  variant?: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  /** Input size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Text input component with DaisyUI styling
 */
export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  variant = "bordered",
  size = "md",
  disabled = false,
  onChange,
  className = "",
}) => {
  const variantClass = `input-${variant}`;
  const sizeClass = size !== "md" ? `input-${size}` : "";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`input ${variantClass} ${sizeClass} ${className}`.trim()}
    />
  );
};

export default Input;
