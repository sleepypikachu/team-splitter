import React from 'react'
import {useState} from 'react'
import ParticipantsBox from './participantsBox'
import AddParticipant from './addParticipant'
import TeamsArea from './teamsArea'
import split from '../lib/splittingLogic'
import Link from 'next/link'


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
    <>
        <ParticipantsBox participants={participants} removeParticipant={removeParticipant}/>
        <AddParticipant addParticipant={addParticipant}/>
        <TeamsArea teams={teams} setTeams={setTeams} numOfParticipants={participants.length}/>
        { 
            teams.length > 1 &&
            <Link
                className="button" 
                href={{
                    pathname: '/share',
                    query: { teams: encodedTeams },
                }}>
                share
            </Link>
        }
    </>
    )}

export default Generator;