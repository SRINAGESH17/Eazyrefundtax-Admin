import React from "react";

function ContentBox(props) {
  return (
    <div className="w-full p-4 lg:p-[2.5rem]">
      <div className="flex flex-col h-full lg:bg-[#fff] lg:rounded-[0.5rem] lg:shadow-shadow">
        {props.children}
      </div>
    </div>
  );
}

export default ContentBox;
