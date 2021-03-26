import React from 'react'

const ParticipantRow = ({participant, removeParticipant}) => {

    const handleClick = () => {
        removeParticipant(participant)
    }

    return (
        <>
            <li>{participant}</li> 
            <button onClick={handleClick}>-</button> 
        </>
    )
    
}

export default ParticipantRow;