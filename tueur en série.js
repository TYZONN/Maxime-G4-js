class Jason {
  constructor() {
    this.pointsDeVie = 100;
  }

  attaquer(survivant) {
    if (survivant.pointsDeVie <= 0 || this.pointsDeVie <= 0) {
      return `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}, est déjà mort.`;
    }

    const probaMort = Math.random();
    if (probaMort < survivant.probabiliteMourirEnAttaquant) {
      survivant.pointsDeVie -= 15;
      if (survivant.pointsDeVie <= 0) {
        survivant.pointsDeVie = 0;
        return `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}, a infligé 15 points de dégâts à Jason, mais est mort en le blessant.`;
      } else {
        return `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}, a infligé 15 points de dégâts à Jason, mais il survit.`;
      }
    } else if (probaMort < survivant.probabiliteMourirEnAttaquant + survivant.probabiliteEsquiver) {
      return `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}, a esquivé l'attaque de Jason.`;
    } else {
      this.pointsDeVie -= 10;
      if (this.pointsDeVie <= 0) {
        this.pointsDeVie = 0;
        return `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}, a subi 10 points de dégâts de la part de Jason, mais il a réussi à tuer Jason avant de mourir.`;
      } else {
        return `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}, a subi 10 points de dégâts de la part de Jason.`;
      }
    }
  }
}

const prenomsSurvivants = ["Alice", "Bob", "Claire", "David", "Ella"];
const caracteristiques = ["intelligent", "athlétique", "distrait", "énigmatique", "talentueux"];

class Survivant {
  constructor(id, nom, caracteristique) {
    this.id = id;
    this.nom = nom;
    this.caracteristique = caracteristique;
    this.pointsDeVie = 100;
    this.probabiliteMourirEnAttaquant = Math.random();
    this.probabiliteEsquiver = Math.random();
    this.estMort = false;
  }
}

const jason = new Jason();
const survivants = [];
const morts = [];

for (let i = 0; i < 5; i++) {
  const id = i + 1;
  const nom = prenomsSurvivants[Math.floor(Math.random() * prenomsSurvivants.length)];
  const caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
  survivants.push(new Survivant(id, nom, caracteristique));
}

while (jason.pointsDeVie > 0 && survivants.length > 0) {
  const survivantIndex = Math.floor(Math.random() * survivants.length);
  const survivant = survivants[survivantIndex];

  if (survivant.pointsDeVie > 0) {
    const action = jason.attaquer(survivant);
    console.log(action);

    if (survivant.pointsDeVie <= 0) {
      survivant.estMort = true;
      morts.push(survivant);
      survivants.splice(survivantIndex, 1);
    }
  }
}

if (survivants.length === 0) {
  console.log("Jason a gagné. Tous les survivants sont morts.");
} else {
  const nomsMorts = morts.map((survivant) => `${survivant.nom} (#${survivant.id}), le survivant ${survivant.caracteristique}`);
  console.log("Jason a été éliminé en emportant" + nomsMorts.join(", "));
}
