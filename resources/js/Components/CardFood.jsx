import React from 'react'

export default function CardFood({image, title, price, onClick}) {
    return (
        <div onClick={onClick} className="card bg-base-100 shadow-xl max-h-[270px]">
            <figure className="">
                <img src={`/${image}`} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
            </div>
        </div>
    )
}
