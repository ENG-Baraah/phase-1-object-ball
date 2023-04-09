function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 4,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function numPointsScored(playerName) {
  const obj = gameObject();
  for (let gameKey in obj) {
    const teamObj = obj[gameKey];
    const players = teamObj.players;
    for (let key in players) {
      if (key === playerName) return players[key].points;
    }
  }
}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
  const obj = gameObject();
  for (let gameKey in obj) {
    const teamObj = obj[gameKey];
    const players = teamObj.players;
    for (let key in players) {
      if (key === playerName) return players[key].shoe;
    }
  }
}
console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
  const obj = gameObject();
  for (let gameKey in obj) {
    const teamObj = obj[gameKey];
    if (teamObj.teamName === teamName) return teamObj.colors;
  }
}
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  const teamNames = [];
  const obj = gameObject();
  for (let gameKey in obj) {
    teamNames.push(obj[gameKey].teamName);
  }
  return teamNames;
}
console.log(teamNames());

function playerNumbers(teamName) {
  const teamNumbers = [];
  const obj = gameObject();
  for (let gameKey in obj) {
    if (obj[gameKey].teamName === teamName) {
      const players = obj[gameKey].players;
      const keys = Object.keys(players);
      for (let num of keys) teamNumbers.push(obj[gameKey].players[num].number);
    }
  }
  return teamNumbers;
}
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
  const obj = gameObject();
  for (let gameKey in obj) {
    const players = obj[gameKey].players;
    for (let key in players) {
      if (key === playerName) return players[key];
    }
  }
}
console.log(playerStats("Brendan Haywood"));

function bigShoeRebounds() {
  let maxShoeSize = 0;
  let playerRebouns = 0;
  const obj = gameObject();
  for (let gameKey in obj) {
    const players = obj[gameKey].players;
    for (let key in players) {
      if (players[key].shoe > maxShoeSize) {
        maxShoeSize = players[key].shoe;
        playerRebouns = players[key].rebounds;
      }
    }
  }
  return playerRebouns;
}
console.log(bigShoeRebounds());
