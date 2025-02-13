import { useEffect, useRef, useState } from "react";

export default function Demo() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        // setCount(count + 1);
        countRef.current++;

        console.log("State:", count);
        console.log("Ref:", countRef.current);
    };

    return (
        <div className="tutorial">
            {/* Count: {count} */}
            Count: {countRef.current}
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
