import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RichEditor() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6,  false], font: [],size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="w-full h-full">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        // onChange={() => setValue(e.target.value)}
      />
      {/* <div className="" dangerouslySetInnerHTML={value}></div> */}
    </div>
  );
}
