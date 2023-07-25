const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const rbs = {
  'austin ekeler': {
    team: 'LAC',
    rushingYards: 915,
    rushingTd: 13,
    rec: 107,
    tgt: 17,
    recYards: 722,
    recTd: 5,
    fpts: 372.7,
    fptsG: 21.9
  },

  'christian mccaffrey': {
    team: 'SF',
    rushingYards: 1139,
    rushingTd: 8,
    rec: 85,
    tgt: 108,
    recYards: 741,
    recTd: 5,
    fpts: 356.4,
    fptsG: 21.0
  },

  'josh jacobs': {
    team: 'LV',
    rushingYards: 1653,
    rushingTd: 12,
    rec: 53,
    tgt: 64,
    recYards: 400,
    recTd: 0,
    fpts: 328.3,
    fptsG: 19.3
  },

  'derrick henry': {
    team: 'TEN',
    rushingYards: 1538,
    rushingTd: 13,
    rec: 33,
    tgt: 41,
    recYards: 398,
    recTd: 0,
    fpts: 302.8,
    fptsG: 18.9
  },

  'saquon barkley': {
    team: 'TEN',
    rushingYards: 1538,
    rushingTd: 13,
    rec: 33,
    tgt: 41,
    recYards: 398,
    recTd: 0,
    fpts: 302.8,
    fptsG: 18.9
  },

  'saquon barkley': {
    team: 'NYG',
    rushingYards: 1312,
    rushingTd: 10,
    rec: 57,
    tgt: 76,
    recYards: 338,
    recTd: 0,
    fpts: 284.0,
    fptsG: 17.8
  },

  'nick chubb': {
    team: 'CLE',
    rushingYards: 1525,
    rushingTd: 12,
    rec: 27,
    tgt: 37,
    recYards: 239,
    recTd: 1,
    fpts: 281.4,
    fptsG: 16.6
  },

  'rhamondre stevenson': {
    team: 'NE',
    rushingYards: 1040,
    rushingTd: 5,
    rec: 69,
    tgt: 88,
    recYards: 421,
    recTd: 1,
    fpts: 249.1,
    fptsG: 14.7
  },

  'tony pollard': {
    team: 'DAL',
    rushingYards: 1007,
    rushingTd: 9,
    rec: 39,
    tgt: 55,
    recYards: 371,
    recTd: 3,
    fpts: 248.8,
    fptsG: 15.6
  },

  'aaron jones': {
    team: 'GB',
    rushingYards: 1121,
    rushingTd: 2,
    rec: 59,
    tgt: 72,
    recYards: 395,
    recTd: 5,
    fpts: 248.6,
    fptsG: 14.6
  },

  'joe mixon': {
    team: 'CIN',
    rushingYards: 826,
    rushingTd: 7,
    rec: 60,
    tgt: 75,
    recYards: 441,
    recTd: 2,
    fpts: 240.7,
    fptsG: 16
  },

  unknown: {
    team: 'unknown',
    rushingYards: 0,
    rushingTd: 0,
    rec: 0,
    tgt: 0,
    recYards: 0,
    recTd: 0,
    fpts: 0,
    fptsG: 0
  }
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
  const rbName = request.params.name.toLowerCase();
  if (rbs[rbName]) {
    response.json(rbs[rbName]);
  } else {
    response.json(rbs['unknown']);
  }
  // response.json(rbs);
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Go Catch It!`);
});
