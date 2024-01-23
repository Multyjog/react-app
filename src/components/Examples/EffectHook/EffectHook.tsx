import { useEffect, useRef } from "react";

const BackendCall = () => {
  const ref = useRef<HTMLInputElement>(null);

  // Fires after render
  useEffect(() => {
    // Side effect that makes our component not pure
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = 'Hooks'
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default BackendCall;
