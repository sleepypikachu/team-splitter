const split = (teamNames, participantNames) => {
    if (teamNames.length == 0) {
        return []
    }

    const shuffled = shuffle([...participantNames]);
    const shuffledTeams = teamNames.map(name => ({name, members: []}));

    for(let i=0; i<participantNames.length; i++) {
        shuffledTeams[i%teamNames.length].members.push(shuffled[i]);
    }

    return shuffledTeams;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default split;