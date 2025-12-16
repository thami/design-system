import React from "react";

export interface ModalProps {
  /** Modal ID for checkbox toggle */
  id: string;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Modal actions (buttons) */
  actions?: React.ReactNode;
  /** Whether modal is open */
  open?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Modal dialog component with DaisyUI styling
 */
export const Modal: React.FC<ModalProps> = ({
  id,
  title,
  children,
  actions,
  open = false,
  onClose,
  className = "",
}) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" checked={open} onChange={onClose} />
      <div className={`modal ${className}`.trim()} role="dialog">
        <div className="modal-box">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          <div className="py-4">{children}</div>
          {actions && <div className="modal-action">{actions}</div>}
        </div>
        <label className="modal-backdrop" htmlFor={id} onClick={onClose}>
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
