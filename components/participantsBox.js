import React from 'react';
import ParticipantRow from './participantRow';

const ParticipantsBox = ({participants, removeParticipant}) => {

    const participantElements = participants.map((participant, i) => {
        return <ParticipantRow 
            key={participant+i}
            participant={participant} 
            removeParticipant={removeParticipant}/>
    });

    return (
        <ul>
            {participantElements}
        </ul>
    )
    
}

export default ParticipantsBox;