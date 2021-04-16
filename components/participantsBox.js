import React from 'react';
import ParticipantRow from './participantRow';
import styles from '../styles/Generator.module.scss';

const ParticipantsBox = ({participants, removeParticipant}) => {

    const participantElements = participants.map((participant, i) => {
        return <ParticipantRow 
            key={participant+i}
            participant={participant} 
            removeParticipant={removeParticipant}/>
    });

    return (
        <ul className={styles.participantsList}>
            {participantElements}
        </ul>
    )
    
}

export default ParticipantsBox;