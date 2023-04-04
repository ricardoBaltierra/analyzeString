import React from "react";
import { useGlobalContext } from "./context";

const ButtonComponent = () => {
  const { analyze, btnAction } = useGlobalContext();

  if (analyze) {
    return (
      <div>
        <button type="reset" onClick={() => btnAction("Reset")}>Reset</button>
        <br/>
      </div>
    );
  } else {
    return (
      <div>
        <button type="submit" onClick={() => btnAction("Decodificar")}>Decodificar</button>
        <br/>
      </div>
    );
  }
};

export default ButtonComponent;