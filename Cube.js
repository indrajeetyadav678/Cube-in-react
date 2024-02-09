
import { useState } from "react";


const Cube = () => {
    const [input, setInput] = useState(0);
    const [cubeVal, setcube] = useState(0);
    const Cube = () => {
        setcube(input * input * input);
        console.log(cubeVal)
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
                <div>
                    <input type="text" placeholder="Enter value" value={input} onChange={(e) => { setInput(e.target.value) }} />
                    <button onClick={Cube}>Output</button><br/><br/>
                    <div style={{ width: "300px", height: "100px", border: "1px solid black", textAlign:"center" }}>
                        <h3>Result of cube </h3>
                        <h2>Cube = {cubeVal}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cube;