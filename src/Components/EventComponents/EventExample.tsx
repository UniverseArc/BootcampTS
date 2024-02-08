import { FC, useRef, useState } from "react";
//Типизация Событий.
const EventExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)


    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickUnControllableInput = () => {
        console.log(inputRef.current?.value);
    }


    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log("DRAG!!!!");
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("DROP");
        
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("DROP");
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrag(true)
    }


    return (
        <div>
            <input value={value} onChange={handleChangeInput} placeholder="Управляемый"></input>
            <input ref={inputRef} placeholder="Неуправляемый"></input>
            <button onClick={handleClick}>Click Control</button>
            <button onClick={handleClickUnControllableInput}>Click UnControll</button>
            <div draggable="true" onDrag={dragHandler} style={{width: 200, height: 200, background: "gray"}}></div>
            <br />
            <div onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} style={{width: 200, height: 200, background: isDrag === true ? "cyan" : "gray" }}></div>
        </div>
    )
}

export default EventExample;