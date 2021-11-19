import React from "react";

function EyesOnMe() {
    function handelonBlur(){
        console.log('Hey! Eyes on me!')
    }
    function handelonFocus(){
        console.log('Good!')
    }
    return (
        <button onFocus={handelonFocus} onBlur={handelonBlur}>Eyes on me</button>
    )
}

export default EyesOnMe
