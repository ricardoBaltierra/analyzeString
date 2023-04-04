import React from "react";
import { useGlobalContext } from "./context";

const ButtonComponent = () => {
  const { analyze, btnAction } = useGlobalContext();

  if (analyze) {
    return (
      <div>
        <button onClick={() => btnAction("Reset")}>Restablecer</button>
        <br/>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => btnAction("Decodificar")}>Decodificar</button>
        <br/>
      </div>
    );
  }
};

export default ButtonComponent;