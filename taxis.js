class Personnage {
  constructor(nom, santeMentale) {
    this.nom = nom;
    this.santeMentale = santeMentale;
  }
}

class Trajet {
  constructor(radio, feuxRouges, nbChangements) {
    this.radio = radio;
    this.feuxRouges = feuxRouges;
    this.nbChangements = nbChangements;
    this.musiquesJouees = [];
  }

  ajouterMusique(musique) {
    this.musiquesJouees.push(musique);
  }
}

var musiques = ["Numb - Linkin Park", "Be good - Roseburg", "On fait tourner les serviettes - Partick Sebastien", "Guerrier - Doigby", "Anissa - Wejdene"];

function getRandomMusic() {
  return musiques[Math.floor(Math.random() * musiques.length)];
}

const john = new Personnage("John", 10);
const trajet = new Trajet(getRandomMusic(), 30, 0);

while (trajet.feuxRouges > 0 && john.santeMentale > 0) {
  trajet.ajouterMusique(trajet.radio);

  if (trajet.radio === "Anissa - Wejdene") {
    john.santeMentale--;
    trajet.nbChangements++;
  }

  trajet.radio = getRandomMusic();
  trajet.feuxRouges--;
}

console.log("Musiques jouées pendant le trajet :");
trajet.musiquesJouees.forEach((musique, index) => {
  console.log(`Musique ${index + 1}: ${musique}`);
});

if (john.santeMentale <= 0) {
  console.log("Explosion");
} else {
  console.log(`John est bien arrivé chez lui avec ${trajet.nbChangements} changements de taxi.`);
}
