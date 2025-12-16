import React from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Select options */
  options: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Selected value */
  value?: string;
  /** Select variant */
  variant?: "bordered" | "ghost" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  /** Select size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Select dropdown component with DaisyUI styling
 */
export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  value,
  variant = "bordered",
  size = "md",
  disabled = false,
  onChange,
  className = "",
}) => {
  const variantClass = `select-${variant}`;
  const sizeClass = size !== "md" ? `select-${size}` : "";

  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`select ${variantClass} ${sizeClass} ${className}`.trim()}
    >
      {placeholder && (
        <option disabled value="">
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
