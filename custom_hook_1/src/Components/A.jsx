import React from 'react';
import UseOnline from '../Utils/useOnline';

const A = () => {
   

    return (
        <div>
            A - {UseOnline() ? "🟢" : "🔴"} 
        </div>
    );
}

export default A;
