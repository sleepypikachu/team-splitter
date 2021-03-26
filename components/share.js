import React from 'react'

const renderTeam = (team) => {
    return <div className="team" key={team.name}>
        {team.name}
        <ul>
            {team.members.map(member => <li>{member}</li>)}
        </ul>
    </div>
}

const Share = (props) => {
    const teamDivs = props.teams.map(renderTeam)
    return <div className="share">{teamDivs}</div>
}

export default Share;
