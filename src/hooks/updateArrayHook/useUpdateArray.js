import {useEffect, useState} from "react";


export const useUpdateArray = (array) => {
    const [newArray, setNewArray] = useState(array);

    function setNewArrayValue(initialValue) {
        setNewArray((prev) => {
            const newArray = Array.isArray(prev) ? prev : [];
            return [initialValue, ...newArray];
        });
    }

    return { newArray, setNewArrayValue };
};

