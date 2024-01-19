import { IExpence, ICategory } from "./interfaces";

interface IProps {
  expencesList: IExpence[];
  categoryToDisplay: ICategory;
  categories: ICategory[];
  onExpenceDelete: (data: IExpence) => void;
  categoryChanged: (data: ICategory) => void;
}

const OrganizerTable = ({
  expencesList,
  categories,
  onExpenceDelete,
  categoryToDisplay,
  categoryChanged,
}: IProps) => {
  const itemsToDisplay =
    categoryToDisplay.value.length !== 0
      ? expencesList.filter((el) => el.category === categoryToDisplay.value)
      : expencesList;

  const handleChange = (value: string) => {
    if (value === "all") {
      categoryChanged({ value: "", name: "" });
      return;
    }
    const newCategoryItem = categories.find((el) => el.value === value);
    if (newCategoryItem) categoryChanged(newCategoryItem);
  };
  if (!expencesList.length) return null;
  return (
    <>
      <form className="mb-3">
        <label className="form-label">Category</label>
        <select
          onChange={(event) => handleChange(event.target.value)}
          value={categoryToDisplay.value}
          className="form-select"
        >
          <option value="all">All</option>
          {categories.map((el) => {
            return (
              <option key={el.value} value={el.value}>
                {el.name}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {itemsToDisplay.map((el) => {
              return (
                <tr key={el.id}>
                  <td scope="row">{el.description}</td>
                  <td>{el.amount} $</td>
                  <td>{el.category}</td>
                  <td>
                    <button
                      onClick={() => onExpenceDelete(el)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrganizerTable;
