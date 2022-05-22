import React, { useEffect } from "react";
import { useState } from "react";

export default function Breadcrumbs(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      console.log("show", show);
      setShow(true);
      console.log("window.innerWidth", window.innerWidth);
    }
  });
  return (
    <>
      {show && (
        <div className="centered">
          <h3>{props.name}</h3>
        </div>
      )}
    </>
  );
}
