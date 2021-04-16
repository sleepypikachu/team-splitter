import React from 'react'
import {useState} from 'react'
import ParticipantsBox from './participantsBox'
import AddParticipant from './addParticipant'
import TeamsArea from './teamsArea'
import split from '../lib/splittingLogic'
import Link from 'next/link'

import styles from '../styles/Generator.module.scss'

const Generator = () => {
    const [participants, setParticipants] = useState([]);
    const [teams, setTeams] = useState([]);

    const addParticipant = (participant) => setParticipants([...participants, participant])
    const removeParticipant = (participant) => {
        setParticipants(
            participants.filter(existingParticipant => existingParticipant !== participant)
        )
    }

    const splitTeams = split(teams, participants);

    const encodedTeams = encodeURIComponent(JSON.stringify(splitTeams));

    return (
    <div className={styles.generator}>
        <div className={styles.participantsArea}>
            <ParticipantsBox participants={participants} removeParticipant={removeParticipant}/>
            <AddParticipant addParticipant={addParticipant}/>
            { 
                teams.length > 1 &&
                <Link
                    className={styles.shareButton} 
                    href={{
                        pathname: '/share',
                        query: { teams: encodedTeams },
                    }}>
                    share
                </Link>
            }
        </div>
        <div className={styles.teamsArea}>
            <TeamsArea teams={teams} setTeams={setTeams} numOfParticipants={participants.length}/>
        </div>
    </div>
    )}

export default Generator;