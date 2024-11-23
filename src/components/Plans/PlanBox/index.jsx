import React from 'react'

export const PlanBox = (props) => {
    return (
        <div className={`item ${props.activeClass}`}>
            <div className="price ">
                <small>$</small>
                <span className="text">{props.price}</span>
                <p></p>
            </div>
            <div className="duration">{props.duration}</div>
            <p className="desc">{props.description}</p>
            <button className="btn-c bg-blue color-white" onClick={props.onClick}>{props.buttonTitle}</button>
        </div>
    )
}
