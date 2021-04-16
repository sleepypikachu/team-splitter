import React from 'react'

const ParticipantRow = ({participant, removeParticipant}) => {

    const handleClick = () => {
        removeParticipant(participant)
    }

    return (
        <li>
            {participant}
            <div onClick={handleClick}>-</div> 
        </li> 
    )
    
}

export default ParticipantRow;