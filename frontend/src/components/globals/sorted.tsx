import React from "react";

interface sortierung {
  sortierung: string[];
}
function Sorted(props: sortierung) {
  const [checkboxValue, setCheckbox] = React.useState({
    checkbox: [""],
    response: [""],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Destructuring
    const { value, checked } = e.target;
    const { checkbox } = checkboxValue;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setCheckbox({
        checkbox: [...checkbox, value],
        response: [...checkbox, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setCheckbox({
        checkbox: checkbox.filter((e) => e !== value),
        response: checkbox.filter((e) => e !== value),
      });
    }
  };

  return (
    <div className="container radio-list">
      <p className="has-text-weight-medium mb-2">Sortierung</p>
      <div className="control">
        {props.sortierung.map((e) => (
          <div className="control" key={e}>
            <label className="radio">
              <input
                className="form-check-input mr-2"
                type="Radio"
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
  );
}

export default Sorted;
