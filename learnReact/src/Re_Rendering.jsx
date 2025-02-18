import React, { useEffect, useState } from 'react'


// useEffect, dependency array, cleanups
export default function Re_Rendering() {
    const [count, setCount] = useState(0);

    function increase(){
        setCount(c => c+1)
    }
    return (
        <div>
            <Counter count = {count}/>
            <button onClick={increase}>Increase Count</button>
        </div>
    )
}

// mounting, re-rendering, unmounting
function Counter(props) {


    useEffect(function(){
        console.log("mount");

        return(
            function(){
                console.log("un-mounted")
            }
        )
    },[])

    useEffect(function () {
        console.log("count has changed");
    }, [props.count])

    return(
        <div>
            Counter {props.count}
        </div>
    )
}