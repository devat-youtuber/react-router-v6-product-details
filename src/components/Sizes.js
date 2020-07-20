import React from 'react'

export default function Sizes({sizes}) {
    return (
        <div className="sizes">
            {
                sizes.map((size, index) =>(
                    <button key={index}>{size}</button>
                ))
            }
        </div>
    )
}
