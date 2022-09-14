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
    <div className="search-categories">
      <h3 className="title is-3 mgb-05">Kategorien</h3>
      <div className="is-flex is-flex-wrap-wrap">
        {props.categorie.map((e) => (
          <label className="checkbox-label" key={e}>
            <input
              className="checkbox-input"
              type="checkbox"
              name="categories"
              value={e}
              id="flexCheckDefault"
              onChange={handleChange}
            />
            {e}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Categories;
