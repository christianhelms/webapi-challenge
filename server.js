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
    description: "take out the trash",
    notes: "to the curb",
    assignedTo: 1,
    completed: false
  },
  {
    id: 2,
    description: "wash the car",
    notes: "soon",
    assignedTo: 2,
    completed: false
  },
  {
    id: 3,
    description: "dailies on wow",
    notes: "in Nazjataar",
    assignedTo: 3,
    completed: false
  },
  {
    id: 4,
    description: "clean the bathroom",
    notes: "spotless",
    assignedTo: 4,
    completed: false
  },
  {
    id: 5,
    description: "dust",
    notes: "",
    assignedTo: 5,
    completed: false
  },
  {
    id: 6,
    description: "vaccum",
    notes: "",
    assignedTo: 6,
    completed: false
  },
  {
    id: 7,
    description: "mop",
    notes: "",
    assignedTo: 7,
    completed: false
  }
];

// call to root (getting server working)

server.get("/", (req, res) => {
  res.status(200).json({ message: "API functional" });
});

// return all people

server.get("/people", (req, res) => {
  res.status(200).json(people);
});

// return all chores

server.get("/chores", (req, res) => {
  const completed = req.query.sortby || "completed";
  const sortedRes = chores.sort((t, f) =>
    t[completed] < f[completed] ? -1 : 1
  );
  res.status(200).json(sortedRes);
});

// chores by id

server.get("/people/:id/chores", (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const chore = chores.filter(chore => chore.assignedTo === id);
    res.status(200).json(chore);
  } else {
    res.status(404).json({ message: "Could not find ID" });
  }
});

// create a chore
server.post("/chores", (req, res) => {
  addChore = req.body;
  if (
    req.body.description &&
    req.body.id &&
    req.body.completed &&
    req.body.assignedTo
  ) {
    chores.push(addChore);
    res.status(200).json(addChore);
  } else {
    res.status(400).json({
      message: "All fields must be complete"
    });
  }
});

// delete a chore

server.delete("/chores/:id", (req, res) => {
  const id = req.params.id;
  if (id) {
    chores.splice(id, 1);
    res.status(201).json({ message: "chore gone" });
  } else {
    res.status(404).json({ message: "chore not found" });
  }
});

module.exports = server;
