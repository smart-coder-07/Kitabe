import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-8 md:mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            sunt! Temporibus, minima ullam dolor nisi illo cumque molestias rem
            sunt eaque incidunt, corrupti accusantium inventore expedita quidem.
            Excepturi at quibusdam magnam ad quisquam et reiciendis quaerat
            nostrum blanditiis optio! Commodi modi in tenetur iure dolorem
            quidem maiores provident repellat magnam!
          </p>
          <Link to={"/"} className="btn mt-6 py-1 btn-secondary">
            Back
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;