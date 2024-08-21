import React, { useRef } from 'react';
const UnControl=()=>{
const inputref=useRef(null);


const handle=()=>{
alert(inputref.current.value);
}
return(
    <p>
        <form>
            Enter the No:<input type="text" ref={inputref} />;
            <button type="button" onclick={handle}>SUBMIT</button>

        </form>
    </p>
);
}
export default UnControl;