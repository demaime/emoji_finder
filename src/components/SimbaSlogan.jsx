import React from 'react'

export function SimbaSlogan() {
    return (
            <div className="flex items-center justify-center ">
            <img className=" p-4" src="./cat_finder.png" alt="The emoji finder"/>
            <div>
            <h1 className="lg:text-7xl text-5xl mb-2">SIMBA</h1>
            <h2 className="lg:text-3xl text-xl">The <span className="text-yellow-500">emoji</span> finder</h2>
            </div>
        </div>
    )
}
