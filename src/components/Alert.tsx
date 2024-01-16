import { ReactNode } from "react";

interface AlertText {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: AlertText) => {
  return (
    <>
      <div
        className="alert alert-dark alert-dismissible fade show"
        role="alert"
      >
        <strong>{children}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
