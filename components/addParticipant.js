import React from "react";
import {useRef} from 'react';
import styles from '../styles/Generator.module.scss';

const AddParticipant = ({ addParticipant }) => {
    const inputEl = useRef(null);
    const handleClick = () => {
        if (inputEl.current.value !== "") {
            const name = inputEl.current.value;
            inputEl.current.value = "";
            addParticipant(name);
        }
    };

    const handleEnterClick = (event) => {
        if (event.keyCode == 13) {
            handleClick();
        }
    };

  return (
    <div className={styles.addParticipant}>
      <input onKeyDown={handleEnterClick} ref={inputEl} placeholder="Participant Name" type="text"></input>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default AddParticipant;
