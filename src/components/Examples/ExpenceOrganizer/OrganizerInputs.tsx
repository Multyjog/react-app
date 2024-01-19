import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IProps {
  categories: { name: string; value: string }[];
  onExpenceSubmit: (data: IFormData) => void;
}

const validationSchema = z.object({
  description: z
    .string()
    .min(3, { message: "String must be at least 3 characters length" }),
  amount: z.number({ invalid_type_error: "Amount field is required" }).min(1),
  category: z.string(),
});
type IFormData = z.infer<typeof validationSchema>;

const OrganizerInputs = ({ onExpenceSubmit, categories }: IProps) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({ resolver: zodResolver(validationSchema) });

  const onSubmit = (data: IFormData) => {
    onExpenceSubmit(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            placeholder="Enter expence description"
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
            placeholder="Enter the amount of money spent"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="select" className="form-label">
            Category
          </label>
          <select {...register("category")} id="select" className="form-select">
            <option defaultValue={""}>
              Choose the category of your expence
            </option>
            {categories.map((el) => {
              return (
                <option key={el.value} value={el.value}>
                  {el.name}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-primary mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default OrganizerInputs;
