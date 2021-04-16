import React from "react";
import { useEffect, useState } from "react";
import styles from '../styles/Generator.module.scss';

const TeamsArea = ({ teams, setTeams, numOfParticipants }) => {
  const [selectedTeamCount, setSelectedTeamCount] = useState(0);

  useEffect(() => {
    if (numOfParticipants < selectedTeamCount) {
      setSelectedTeamCount(numOfParticipants);
    } else {
      setTeams((prevTeams) => {
        while (prevTeams.length < selectedTeamCount) {
          prevTeams.push("");
        }
        return prevTeams.slice(0, selectedTeamCount);
      });
      if (numOfParticipants >= 2 && selectedTeamCount < 2) {
        setSelectedTeamCount(numOfParticipants);
      }
      if (numOfParticipants < 2) {
        setTeams([]);
      }
    }
  }, [selectedTeamCount, numOfParticipants]);

  const handleTextChange = (event, i) => {
    setTeams((prevTeams) => {
      const newTeams = [...prevTeams];
      newTeams[i] = event.target.value;
      return newTeams;
    });
  };

  const handleSelectChange = (event) => {
    setSelectedTeamCount(event.target.value);
  };

  const teamInputs = teams.map((team, i) => {
    return (
      <input
        key={"team" + i}
        onChange={(event) => handleTextChange(event, i)}
        value={team}
        placeholder={`team ${i + 1}`}
        type="text"
      />
    );
  });

  const selectOptions = [];

  for (let i = 2; i <= numOfParticipants; i++) {
    selectOptions.push(<option value={i}>{i}</option>);
  }

  return (
    <div className={styles.teamArea}>
      <div className={styles.numberOfTeams}>
        <div>
          Number of teams:
        </div> 
        <select value={selectedTeamCount} onChange={handleSelectChange}>{selectOptions}</select>
      </div>
      <div className={styles.teamInputs}>
        <div>Team Names</div>
        {teamInputs}
      </div>
    </div>
  );
};

export default TeamsArea;
