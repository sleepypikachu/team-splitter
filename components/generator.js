import React from 'react'
import {useState} from 'react'
import ParticipantsBox from './participantsBox'
import AddParticipant from './addParticipant'
import TeamsArea from './teamsArea'
import Share from './share'
import split from '../lib/splittingLogic'


const Generator = () => {
    const [participants, setParticipants] = useState([]);
    const [teams, setTeams] = useState([]);

    const addParticipant = (participant) => setParticipants([...participants, participant])
    const removeParticipant = (participant) => {
        setParticipants(
            participants.filter(existingParticipant => existingParticipant !== participant)
        )
    }

    return (
    <>
        <ParticipantsBox participants={participants} removeParticipant={removeParticipant}/>
        <AddParticipant addParticipant={addParticipant}/>
        <TeamsArea teams={teams} setTeams={setTeams} numOfParticipants={participants.length}/>
        <Share teams={split(teams, participants)}/>
    </>
    )}

export default Generator;