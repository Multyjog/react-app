import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  description: z.string().min(3),
  amount: z.string(),
  category: z.string(),
});

type IFormData = z.infer<typeof validationSchema>;

const OrganizerInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            placeholder="Enter expence description"
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">The name field is required</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">
              The name must be at least 3 characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            placeholder="Enter the amount of money spent"
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="select" className="form-label">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            id="select"
            className="form-select"
          >
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
