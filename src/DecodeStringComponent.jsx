import React from "react";
import { useGlobalContext } from "./context";

const DecodeStringComponent = () => {
    const { analyze, valueDecodeString } = useGlobalContext();

    if (analyze) {
        return (
            <div>
                <header>
                    <h2>Cadena decodificada</h2>
                </header>
                <div >
                    <div className="keys">
                        &#123;
                        <br />
                    </div>
                    <div className="object">
                        Firs_Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{valueDecodeString.firstName}
                        <br />
                        Last_Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{valueDecodeString.lastName}
                        <br />
                        ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{valueDecodeString.id}
                        <br />
                    </div>
                    <div className="keys">
                        &#125;
                        <br />
                    </div>
                </div>
            </div>
        );
    }
};

export default DecodeStringComponent;