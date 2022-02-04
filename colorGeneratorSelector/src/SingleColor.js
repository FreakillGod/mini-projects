import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  const bgRGB = rgb.join(",");
  const clipRgb=`rgb(${bgRGB})`
  console.log(rgb);

  const hex=rgbToHex(...rgb);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      className={`color ${index > 9 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgRGB})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(clipRgb);
      }}>

      <p className="parcent-value">{hex}</p>
      <p className="color-value">{`rgb(${rgb})`}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
