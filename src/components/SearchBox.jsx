import React, { useRef, useState } from 'react'
import { EmojisBox } from './EmojisBox'

export function SearchBox() {
    const inputValue = useRef("")
    const [textToMatch, setTextToMatch] = useState("")

    const handleSearch = () => {
        const currentSearch = inputValue.current.value
        setTextToMatch(currentSearch)
        
    }

    // console.log(textToMatch)   

    return (
        <>
        <div className="flex justify-center mb-4">
            <input ref={inputValue} onChange={handleSearch} className="border-2 rounded h-10 w-4/5 lg:w-2/5 p-2" type="text" placeholder="Type an emoji title or keyword..."/>
        </div>
        <EmojisBox writtenText={textToMatch}/>
        </>
    )
}
