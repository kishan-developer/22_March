import React, { useEffect, useState } from 'react';

const UseOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=> {
        window.addEventListener("online", ()=> setIsOnline(true));
        window.addEventListener("offline", ()=> setIsOnline(false));
    });

    return isOnline; //its return true/false value 
};

export default UseOnline; 
