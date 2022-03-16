let equippedItem = "";
let myBrawler = {
    health: 100,
    magic: 25,
    abilities: ["Slash", "Block", "Charge"],
    items: equippedItem
}

let myRogue = {
    health: 50,
    magic: 50,
    abilities: ["Stab", "Dodge", "Vanish"],
    items: equippedItem
}

let myWizard = {
    health: 25,
    magic: 100,
    abilities: ["Fireball", "Icebolt", "Lightning"],
    items: equippedItem
}

// code for BRAWLER

let myHealth = myBrawler.health;
let myMagic = myBrawler.magic;
let myStats = "HP: " + myHealth + " / MP: " + myMagic;
let myAbility1 = myBrawler.abilities[0];
let myAbility2 = myBrawler.abilities[1];
let myAbility3 = myBrawler.abilities[2];

// code for ROGUE

// let myHealth = myRogue.health;
// let myMagic = myRogue.magic;
// let myStats = "HP: " + myHealth + " / MP: " + myMagic;
// let myAbility1 = myRogue.abilities[0];
// let myAbility2 = myRogue.abilities[1];
// let myAbility3 = myRogue.abilities[2];

// code for WIZARD

// let myHealth = myWizard.health;
// let myMagic = myWizard.magic;
// let myStats = "HP: " + myHealth + " / MP: " + myMagic;
// let myAbility1 = myWizard.abilities[0];
// let myAbility2 = myWizard.abilities[1];
// let myAbility3 = myWizard.abilities[2];

// let myCharacter = prompt("What is your characters name?");
let myCharacter = localStorage.getItem("myCharacter");

let charnameEl = document.getElementById("charname-el");
let characterEl = document.getElementById("character-el");
let weaponEl = document.getElementById("weapon-el");
let armourEl = document.getElementById("armour-el");
let itemEl = document.getElementById("item-el");
let hpmpEl = document.getElementById("hpmp-el");
let ability1El = document.getElementById("ability1-el");
let ability2El = document.getElementById("ability2-el");
let ability3El = document.getElementById("ability3-el");

charnameEl.textContent = myCharacter.toUpperCase() + " the Brawler";
hpmpEl.textContent = myStats;
ability1El.textContent = myAbility1;
ability2El.textContent = myAbility2;
ability3El.textContent = myAbility3;

