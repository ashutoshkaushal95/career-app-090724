import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, route }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          // src="https://placehold.co/600x400/EEE/31343C"
          alt="Technology Acquisitions 2021"
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {data.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{data.subtitle}</p>
        <Link
          to={`/${route}/${data.slug}`}
          className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
