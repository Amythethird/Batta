import React from "react";

interface Sorting {
  sortierung: string[];
}
function Sorted(props: Sorting) {
  const [checkboxValue, setCheckbox] = React.useState({
    checkbox: [""],
    response: [""],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Destructuring
    const { value, checked } = e.target;
    const { checkbox } = checkboxValue;

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
    <div className="radio-list">
      {props.sortierung.map((e) => (
        <label className="radio-label" key={e}>
          <input
            className="radio-input"
            type="Radio"
            name="categories"
            value={e}
            id="flexCheckDefault"
            onChange={handleChange}
          />
          {e}
        </label>
      ))}
    </div>
  );
}

export default Sorted;
