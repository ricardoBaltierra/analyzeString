import React from "react";
import { useGlobalContext } from "./context";

const RequestStringComponent = () => {
    const {analyze, stringAnalyze} = useGlobalContext();
    
    const [stringToAnalyze, setStringToAnalyze] = stringAnalyze;

    return [
        <div key={1}>
            <form id="formulario" className="section" >
                <h3>Captura la cadena a decodificar: </h3> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    name="stringToAnalyze"
                    className="input"
                    value={stringToAnalyze}
                    onChange={(e) => setStringToAnalyze(e.target.value)}
                    disabled={analyze ? true : false}
                ></input>
            </form>
            <br/>
        </div>
    ]
}

export default RequestStringComponent;