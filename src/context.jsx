import React, {useState, useContext, useEffect, } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [analyze, setAnalyze] = useState(false);
    const [stringToAnalyze, setStringToAnalyze] = useState("");
  
    function btnAction(type) {
      if (type === "Decodificar") {
        console.log(stringToAnalyze);
        setAnalyze(true);
      } else if (type === "Reset") {
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
            stringAnalyze: [stringToAnalyze, setStringToAnalyze]
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
