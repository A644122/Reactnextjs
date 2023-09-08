import React, { useState } from "react";

const Marks = () => {
  const [marks, setmarks] = useState(100);
  return (
    <>
      <div className=" bg-slate-400 h-18">
        <h1 className=" text-3xl  text-white text-center font-serif ">
          The Totals Marks is {marks}
        </h1>
        <button
          onClick={() => {
            setmarks(50);
          }}
          className=" text-4xl text-white rounded-md bg-slate-500 mx-10 my-10"
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Marks;
