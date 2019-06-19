import React from 'react'


export default function GameCard({game}) {
    return (
        <div className="ui card">
            <div className="image">
                <span className="ui green ribbon label">£{game.price}</span>
                <img 
                src={game.image} 
                alt="Game Cover"/>
            </div>
            <div className="content">
                <a href="" className="header">{game.name}</a>
                <div className="meta">
                    <i className="icon users"/>{game.players}&nbsp;
                    <i className="icon wait"/>{game.duration}
                </div>
            </div>
        </div>
    )
} 
 