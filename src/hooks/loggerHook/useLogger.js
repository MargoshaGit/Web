import {useEffect, useState} from "react";


export const useLogger = () => {

    function setLoggerValue(initialValue){
        console.log(initialValue);
    }

    return {
        setLoggerValue
    }
}

