// CreateBlog.jsx
import React, { useEffect, useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { supabase } from "../supabase/supabase";

const CreateBlog = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState("guide");

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  function convertToSlug(title) {
    if (!title || typeof title !== "string") {
      return ""; // Handle case where title is undefined, null, or not a string
    }

    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim("-"); // Trim leading and trailing hyphens
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from(formType === "guide" ? "blogs" : "services")
      .insert([{ ...formData, slug: convertToSlug(formData?.title) }])
      .select();

    if (!error) {
      setStatus("SUCCESS");
      setFormData({});
    } else {
      setStatus("FAILED");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setStatus("");
    }, 2000);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto p-4 w-full h-[calc(100vh-124px)] overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="w-full bg-primary col-span-2 p-2 my-3 rounded-md text-white text-center flex flex-row items-center justify-between">
          {` Create a new career ${formType}`}
          <div className=" col-span-1 md:col-span-2 text-right flex flex-row gap-2 items-center justify-end">
            <select
              id="options"
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500  w-[40%] p-1"
            >
              <option value="guide">Guide</option>
              <option value="service">Service</option>
            </select>
            <button
              type="submit"
              className=" inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-slate-500  bg-white hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 outline-none"
            >
              {`Create Post`}
            </button>
          </div>
        </div>{" "}
        {status && (
          <div className="col-span-2 ">
            <div
              className={`flex items-center p-2 text-sm ${
                status === "SUCCESS" ? "bg-green-100" : "bg-red-100"
              } text-slate-500 rounded-lg `}
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">
                  {status === "SUCCESS"
                    ? "Saved Successfully"
                    : status === "FAILED"
                    ? "Something went wrong, please try again!"
                    : ""}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={formData?.title || ""}
            name="title"
            onChange={handleChange}
            className=" block w-full border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-primary-light focus:ring-primary-light sm:text-sm p-2 outline-none"
            required
          />
        </div>{" "}
        <div className="col-span-2 md:col-span-1 ">
          <label className="block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <input
            type="file"
            name="coverImage"
            onChange={handleCoverImageChange}
            className=" block bg-slate-200 w-full  rounded-md text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark cursor-pointer"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Sub Title
          </label>
          <input
            type="text"
            value={formData?.subtitle || ""}
            name="subtitle"
            onChange={handleChange}
            className=" block w-full border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-primary-light focus:ring-primary-light sm:text-sm p-2 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData?.author || ""}
            onChange={handleChange}
            className=" block w-full border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-primary-light focus:ring-primary-light sm:text-sm p-2 outline-none"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1  ">
          <label className="block text-sm font-medium text-gray-700">
            Categories
          </label>
          <input
            type="text"
            value={formData?.categories || ""}
            name="categories"
            onChange={handleChange}
            className=" block w-full border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-primary-light focus:ring-primary-light sm:text-sm p-2 outline-none"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1  ">
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            value={formData?.tags || ""}
            name="tags"
            onChange={handleChange}
            className=" block w-full border border-gray-300 rounded-md shadow-sm focus:border-2 focus:border-primary-light focus:ring-primary-light sm:text-sm p-2 outline-none"
            required
          />
        </div>
        <div className="col-span-2  ">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>

          <RichTextEditor
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
