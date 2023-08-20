import React from "react";
import clouds from "../app/assets/Cloud.png";
import Image from "next/image";

const Cloud = () => {
  const cloudClasses = ["", "-p", "-p2"]; // Array de sufijos de clases

  return (
    <>
      {cloudClasses.map((suffix, index) => (
        <Image
          key={index}
          src={clouds}
          alt="Nube"
          className={`cloud${suffix}`} // Agrega el sufijo a la clase
          priority={true}
        />
      ))}
    </>
  );
};

export default Cloud;
