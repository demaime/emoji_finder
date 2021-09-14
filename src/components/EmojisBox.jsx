import React, { useState } from 'react'
import emojiList from  "../emoji-list.json"

export function EmojisBox({writtenText}) {
    
    function filterResults (writtenText) {
        const filterEmoji = emojiList.filter(emoji => (emoji.title.toLowerCase()).includes(writtenText.toLowerCase()) || (emoji.keywords.toLowerCase()).includes(writtenText.toLowerCase()))
        return filterEmoji
    }

    const [isMessageCopied, setIsMessageCopied] = useState(false)

    function toggleCopiedAlert() {
        setIsMessageCopied(true);
        setTimeout(() => {
            setIsMessageCopied(false)
        }, 500)
    }

    function copyToClipboard (emoji) {
    navigator.clipboard.writeText(emoji)
    toggleCopiedAlert()
    }

    return (
        <>
        <div className="flex justify-center items-center flex-col">
            <div className="border-2 rounded w-4/5 h-96 lg:h-72 inline-block overflow-y-scroll">
                {(filterResults(writtenText)).map(emoji => <div key={emoji.title} onClick={() => copyToClipboard(emoji.symbol)} className="w-8 h-8 m-1 inline-flex justify-center items-center hover:bg-gray-200 cursor-pointer">{emoji.symbol}</div>)} 
            </div> 
            {/* <div className="bg-green-100 m-2 p-2 rounded inline-flex font-light duration-500 opacity-0">Copied to clipboard!</div>    */}
            <div className={"bg-green-100 m-2 p-2 rounded inline-flex font-light  " + (isMessageCopied ? "opacity-1 duration-200" : "opacity-0 duration-1000")}>Copied to clipboard!</div>
        </div>
        </>
    )
}
