import React from "react";

export interface CheckboxProps {
  /** Checkbox label */
  label?: string;
  /** Checked state */
  checked?: boolean;
  /** Checkbox variant */
  variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
  /** Checkbox size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Checkbox component with DaisyUI styling
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  variant,
  size = "md",
  disabled = false,
  onChange,
  className = "",
}) => {
  const variantClass = variant ? `checkbox-${variant}` : "";
  const sizeClass = size !== "md" ? `checkbox-${size}` : "";

  const checkbox = (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`checkbox ${variantClass} ${sizeClass} ${className}`.trim()}
    />
  );

  if (label) {
    return (
      <label className="label cursor-pointer gap-2">
        {checkbox}
        <span className="label-text">{label}</span>
      </label>
    );
  }

  return checkbox;
};

export default Checkbox;
