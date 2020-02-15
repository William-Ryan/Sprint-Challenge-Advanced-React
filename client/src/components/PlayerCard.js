import React from "react"

const PlayerCard = props => {

    console.log(props)

    return (
        <div className="card-wrapper">
            <h1>Name: {props.player.name}</h1>
            <h2>Country: {props.player.country}</h2>
            <h4>Searches: {props.player.searches}</h4>
        </div>
    )

}

export default PlayerCard;