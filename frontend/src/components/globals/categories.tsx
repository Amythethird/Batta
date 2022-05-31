import React from "react";


interface categories {
   categorie: string[]
}
function Rating(props: categories) {
    const [checkboxValue, setCheckbox] = React.useState({ checkbox:[""], response:[""] });    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
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
      console.log(checkboxValue)
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

export default Rating;
