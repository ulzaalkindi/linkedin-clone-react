import React, { useState } from 'react'

function ButtonCoba() {
    const [input, setInput] = useState([{ input: "" }])
    function addInput() {
        setInput([...input, { input: "" }])
    }
    return (
        <div>
            {input.map((input, index) => {
                return <div key={index}>
                    <input type="text" name={`input[${index}]`} />
                </div>
            })}
            <button onClick={addInput}>Add lagi</button>
        </div>
    )
}

export default ButtonCoba