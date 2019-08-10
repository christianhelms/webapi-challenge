const express = require("express");
const server = express();
server.use(express.json());

// Data (people & chores)

let people = [
  {
    id: 1,
    name: "Nick"
  },
  {
    id: 2,
    name: "Alex"
  },
  {
    id: 3,
    name: "Steven"
  },
  {
    id: 4,
    name: "Heather"
  },
  {
    id: 5,
    name: "Amy"
  },
  {
    id: 6,
    name: "Drew"
  },
  {
    id: 7,
    name: "Megan"
  }
];

let chores = [
  {
    id: 1,
    chore: "take out the trash",
    assignedTo: 1,
    completed: false
  },
  {
    id: 2,
    chore: "wash the car",
    assignedTo: 2,
    completed: false
  },
  {
    id: 3,
    chore: "dailies on wow",
    assignedTo: 3,
    completed: false
  },
  {
    id: 4,
    chore: "clean the bathroom",
    assignedTo: 4,
    completed: false
  },
  {
    id: 5,
    chore: "dust",
    assignedTo: 5,
    completed: false
  },
  {
    id: 6,
    chore: "vaccum",
    assignedTo: 6,
    completed: false
  },
  {
    id: 7,
    chore: "mop",
    assignedTo: 7,
    completed: false
  }
];

// call to root (getting server working)

server.get("/", (req, res) => {
  res.status(200).json({ message: "API functional" });
});



module.exports = server;