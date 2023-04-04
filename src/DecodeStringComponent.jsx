import React from "react";
import { useGlobalContext } from "./context";

const DecodeStringComponent = () => {
  const { analyze } = useGlobalContext();

    if (analyze) {
        return (
            <div>
                <header>
                    <h2>Cadena decodificada</h2>
                </header>
                <p>
                    
                </p>
            </div>
        );
    }
};

export default DecodeStringComponent;