import React from "react";
import { forwardRef } from "react";
import { Checkbox } from "@material-tailwind/react";

// custom checkbox component
const CustomCheckbox = forwardRef(({
	name,
	component  = "Checkbox",
	componentOptions = { style: {} },
	indeterminate = false,
	checked = false,
	disabled = false,
	onClick = null,
}, ref ) => {

  // handle checkbox on change event 
  // doing nothing here
  const handleOnchange = (e) => {
    return
  }
  return (
    <Checkbox
      ref={ref}
      color="green"
      ripple={true}
      className="text-[#BE0A23] checked:bg-[#BE0A23] checked:border-[#BE0A23] hover:before:bg-[#BE0A23] hover:before:opacity-10 checked:before:bg-[#BE0A23]"
      name={name}
      aria-label={name}
      checked={checked}
      disabled={disabled}
      onClick={onClick}
      onChange={handleOnchange}
    />
  );
}
)

export default CustomCheckbox;