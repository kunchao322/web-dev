import React from "react";
import conditionalOutputIfElse from "./ConditionalOutputIfElse";
import conditionalOutputInline from "./ConditionalOutputInline";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

const ConditionalOutput = () =>{
    return (
        <>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
        </>
    )
};

export default ConditionalOutput;