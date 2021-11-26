import React from "react";

const Breadcrumbs = ({ items }) => (
  <div className="breadcrumbs">
    {Object.keys(items).map((id) => (
      <h1>{items[id].join(" / ")}</h1>
    ))}
  </div>
);

export default Breadcrumbs;
