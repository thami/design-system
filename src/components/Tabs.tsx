import React from "react";

export interface Tab {
  id: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /** Tab items */
  tabs: Tab[];
  /** Active tab ID */
  activeTab?: string;
  /** Tab style variant */
  variant?: "bordered" | "lifted" | "boxed";
  /** Tab size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Tab change handler */
  onChange?: (tabId: string) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tabs navigation component with DaisyUI styling
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  variant = "bordered",
  size = "md",
  onChange,
  className = "",
}) => {
  const variantClass = `tabs-${variant}`;
  const sizeClass = size !== "md" ? `tabs-${size}` : "";
  const active = activeTab || tabs[0]?.id;

  return (
    <div className="w-full">
      <div role="tablist" className={`tabs ${variantClass} ${sizeClass} ${className}`.trim()}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            className={`tab ${tab.id === active ? "tab-active" : ""}`}
            disabled={tab.disabled}
            onClick={() => onChange?.(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          className={`p-4 ${tab.id === active ? "block" : "hidden"}`}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
