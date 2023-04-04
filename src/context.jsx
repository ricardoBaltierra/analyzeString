import React, {useState, useContext, useEffect, } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [analyze, setAnalyze] = useState(false);
    const [stringToAnalyze, setStringToAnalyze] = useState("");
    const [valueDecodeString, setValueDecodeString] = useState({firstName: "", lastName: "", id: ""});

    function btnAction(type) {
      if (type === "Decodificar") {
        let firstPos = stringToAnalyze.indexOf("0", 0);
        let separador = "";
        for(let i = firstPos; i < stringToAnalyze.length; i++ ) {
            if(stringToAnalyze.charAt(i) === "0") {
                separador += "0"
            } else {
                break;
            }
        }
        valueDecodeString.firstName = stringToAnalyze.split(separador).at(0);
        valueDecodeString.lastName = stringToAnalyze.split(separador).at(1);
        valueDecodeString.id = stringToAnalyze.split(separador).at(2);
        //setValueDecodeString(valueDecodeString);
        setAnalyze(true);
      } else if (type === "Reset") {
        valueDecodeString.firstName = "";
        valueDecodeString.lastName = "";
        valueDecodeString.id = "";
        setAnalyze(false);
      }
    }

    useEffect( () => {
        setStringToAnalyze("");
    }, [analyze]);
  
    return (
      <AppContext.Provider
        value={{
            analyze,
            btnAction,
            stringAnalyze: [stringToAnalyze, setStringToAnalyze],
            valueDecodeString
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };
