import {useState, useRef} from 'react';

const Input = ({addToQueue, addToStack}) => {
    const [input, setInput]=useState('');
    const inputRef = useRef();
    const addToExternalQueue = () => {
        addToQueue(input);
        setInput('');
        inputRef.current.focus();
    };
    const addToExternalStack = () => {
        addToStack(input);
        setInput('');
        inputRef.current.focus();
    }

    return <div>
        <input type="text" placeholder="input" value={input} onChange={(evt) => {setInput(evt.target.value)}} ref={inputRef} /> 
        <div>
            <button onClick={addToExternalQueue}>Add to the queue</button>
            <button onClick={addToExternalStack}>Add to the stack</button>
        </div>    
    </div>
}

export default Input;