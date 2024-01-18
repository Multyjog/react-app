import { FormEvent, useRef } from "react";

const OrganizerInputs = () => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const expence = {
    description: "",
    amount: 0,
    category: "",
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    expence.description = descriptionRef.current!.value;
    expence.amount = parseInt(amountRef.current!.value);
    expence.category = categoryRef.current!.value;
    console.log(expence);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            ref={descriptionRef}
            id="description"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input ref={amountRef} type="number" className="form-control" />
        </div>
        <div>
          <label className="form-label">Category</label>
          <select ref={categoryRef} className="form-select">
            <option defaultValue={0}>Choose category of expence</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default OrganizerInputs;
