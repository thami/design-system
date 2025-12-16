import React from "react";

export interface ToggleProps {
  /** Toggle label */
  label?: string;
  /** Checked state */
  checked?: boolean;
  /** Toggle variant */
  variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
  /** Toggle size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Toggle switch component with DaisyUI styling
 */
export const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  variant,
  size = "md",
  disabled = false,
  onChange,
  className = "",
}) => {
  const variantClass = variant ? `toggle-${variant}` : "";
  const sizeClass = size !== "md" ? `toggle-${size}` : "";

  const toggle = (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`toggle ${variantClass} ${sizeClass} ${className}`.trim()}
    />
  );

  if (label) {
    return (
      <label className="label cursor-pointer gap-2">
        {toggle}
        <span className="label-text">{label}</span>
      </label>
    );
  }

  return toggle;
};

export default Toggle;
