import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Breadcrumbs navigation component
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
}) => {
  return (
    <div className={`breadcrumbs text-sm ${className}`.trim()}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a href={item.href} className="flex items-center gap-1">
                {item.icon}
                {item.label}
              </a>
            ) : (
              <span className="flex items-center gap-1">
                {item.icon}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
