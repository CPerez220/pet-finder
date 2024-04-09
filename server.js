const express = require(`express`);
const app = express();

const pets = [
  {
    id: 1,
    name: "Lucas",
    owner: "Juan"
  },
  {
    id: 2,
    name: "Destructor",
    owner: "Pedro"
  },
  {
    id: 3,
    name: "Filulais",
    owner: "Jose"
  }
]

app.get("/", (req, res) => {
  res.send(`Hola`);
})

app.get("/api/v1/pets/owner", (req, res) => {
  console.log(req.query)

  const foundOwner = req.query.owner;
  const foundDueno = pets.find((pet) => {
    return pet.owner === foundOwner
  })
  res.send(foundDueno);
})

app.get("/api/v1/pets", (req, res) => {
  res.send(pets)
})

app.get("/api/v1/pets/:petName", (req, res) => {
  const {petName} = req.params;

  console.log(petName)

  const foundPets = pets.find((pet) => {
    return pet.name === petName
  })
  res.send(foundPets);
})

app.listen(8080, () => {
  console.log("On port 8080");
});