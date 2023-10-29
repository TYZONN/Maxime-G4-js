class Pokemon {
  constructor(name,attack,defense,hp,luck){
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
    this.luck = luck
  }

attackPokemon(pokemon){
  if (this.isLucky()){
    let damage = this.attack - pokemon.defense
    pokemon.hp -= damage
    console.log(this.name+ 'a attaqué'+pokemon.name+'pour'+damage+'de dégâts! Il lui reste'+pokemon.hp+'points de vie')
  }else{
    console.log(this.name+ 'a raté son attaque')
  }
}

isLucky(){
  return this.luck>Math.random()
}
}

let Norman = new Pokemon('Norman',10,11,70,0.6)
let Cyprichien = new Pokemon ('Cyprichien',14,8,70,0.4)

while(Norman.hp > 0 && Cyprichien.hp > 0){
  Cyprichien.attackPokemon(Norman)
  if (Norman.hp <= 0){
    console.log(Norman.name + ' is dead!')
    break
  }
Norman.attackPokemon(Cyprichien)

if (Cyprichien.hp<= 0){
  console.log(Cyprichien.name + ' is dead!')
  break
}
}