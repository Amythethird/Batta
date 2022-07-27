import React, { useEffect } from "react";

interface categories {
  categorie: string[];
  handler: Function;
}

interface checked {
  checkbox: string[];
}

function Categories(props: categories) {
  const [checkboxValue, setCheckbox] = React.useState<checked>({
    checkbox: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const { checkbox } = checkboxValue;

    // Case 1 : The user checks the box
    if (checked) {
      setCheckbox({
        checkbox: [...checkbox, value],
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setCheckbox({
        checkbox: checkbox.filter((e) => e !== value),
      });
    }
  };

  useEffect(() => props.handler(checkboxValue.checkbox), [checkboxValue]);
  return (
    <div className="container">
      <div className="categories">
        <p className="has-text-weight-medium mb-2">Kategorien</p>
        <div className="is-flex is-flex-wrap-wrap">
          {props.categorie.map((e) => (
            <div className="control" key={e}>
              <label className="checkbox mr-2">
                <input
                  className="form-check-input mr-2"
                  type="checkbox"
                  name="categories"
                  value={e}
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                {e}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
