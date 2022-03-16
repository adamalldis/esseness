let heroSelected = [
    myBrawler = {
        name: "Placeholder", // prompt("Name your Brawler!")
        health: 200,
        magic: 0,
        abilities: ["Slash", "Block", "Charge"],
        weapon: "Rusted Sword",
        armour: "Wooden Shield",
        item: "Health Potion"
    },    
    myRogue = {
        name: "Placeholder", // prompt("Name your Rogue!")
        health: 100,
        magic: 50,
        abilities: ["Stab", "Dodge", "Vanish"],
        weapon: "Rusted Daggers",
        armour: "Tattered Cloak",
        item: "Smoke Bomb"
    },
    myWizard = {
        name: "Placeholder", // prompt("Name your Wizard!")
        health: 50,
        magic: 100,
        abilities: ["Fireball", "Icebolt", "Lightning"],
        weapon: "Wooden Wand",
        armour: "Steel Ring",
        item: "Mana Shield"
    }
];

let villainSelected = [
    villain1 = {
        name: "The Oneth Lord",
        health: 300,
        magic: 0,
        abilities: ["Swipe", "Smash"],
        loot: ["Steel Sword", "Steel Shield", "Health Potion"]
    },
    villain2 = {
        name: "The Twin Queens",
        health: 200,
        magic: 100,
        abilities: ["Bite", "Poison Bolt"],
        loot: ["Bone Wand", "Leather Cloak", "Steel Daggers"]
    }
];

let myStats = "";
let vsEl = document.getElementById("vs");
let charnameEl = document.getElementById("charname-el");
let characterEl = document.getElementById("character-el");
let weaponEl = document.getElementById("weapon-el");
let armourEl = document.getElementById("armour-el");
let itemEl = document.getElementById("item-el");
let hpmpEl = document.getElementById("hpmp-el");
let ability1El = document.getElementById("ability1-el");
let ability2El = document.getElementById("ability2-el");
let ability3El = document.getElementById("ability3-el");

ability1El.addEventListener("click", useAbility1);
ability2El.addEventListener("click", useAbility2);
ability3El.addEventListener("click", useAbility3);

function chooseHero() {
    let heroSelect = prompt("Choose your Hero! Type B for Brawler, R for Rogue, or W for Wizard.");
    if (heroSelect === "b" || heroSelect === "B") {
        heroID = "0";
        charnameEl.textContent = prompt("You've chosen BRAWLER! Name your hero!") + " the Brawler";
        heroSetup(0);
        villainSetup();
    } else if (heroSelect === "r" || heroSelect === "R") {
        heroID = "1";
        charnameEl.textContent = prompt("You've chosen ROGUE! Name your hero!") + " the Rogue";
        heroSetup(1);
        villainSetup();
    } else if (heroSelect === "w" || heroSelect === "W") {
        heroID = "2";
        charnameEl.textContent = prompt("You've chosen WIZARD! Name your hero!") + " the Wizard";
        heroSetup(2);
        villainSetup();
    } else {
        alert("That is not a valid choice. Try again.")
        chooseHero();
    }
}

let heroID = "";

function heroSetup(heroID) {
    weaponEl.textContent = heroSelected[heroID].weapon;
    armourEl.textContent = heroSelected[heroID].armour;
    itemEl.textContent = heroSelected[heroID].item;
    hpmpEl.textContent = "HP: " + heroSelected[heroID].health + " / MP: " + heroSelected[heroID].magic;
    ability1El.textContent = heroSelected[heroID].abilities[0];
    ability2El.textContent = heroSelected[heroID].abilities[1];
    ability3El.textContent = heroSelected[heroID].abilities[2];
}

let villainName = document.getElementById("villain-el");
let villainHpEl = document.getElementById("villain-hp");
let villainIsAlive = false;

function villainSetup() {
    villainName.textContent = villainSelected[0].name;
    villainHpEl.textContent = villainSelected[0].health;
}



// this function is used for attacking

let randomNum = 0;
let attackMin = 50;
let attackMax = 100;

function randomNumber(min, max) {
    randomNum = Math.floor(Math.random() * ((max + 1) - min) + min);
}

function useAbility1() {
    randomNumber(attackMin, attackMax);
    vsEl.textContent = "You used " + heroSelected[heroID].abilities[0] + " for " + randomNum + " damage!";
    let damage = Number(villainHpEl.textContent) - Number(randomNum);
    villainHpEl.textContent = damage;
    if (Number(villainHpEl.textContent) >= 1) {
        villainName.textContent = "Villain is still alive.";
    } else {
        villainHpEl.textContent = "";
        villainName.style.color = "#FF0000";
        villainName.style.fontSize = "20px";
        villainName.style.lineHeight = "2.5rem";
        villainName.textContent = "Villain is DEFEATED!";
    }
}

function useAbility2() {
    // alert(heroSelected[heroID].abilities[1] + " works!");
}

function useAbility3() { // this is for a static amount of damage
    vsEl.textContent = "You used " + heroSelected[heroID].abilities[2] + " for " + 200 + " damage!";
    let damage = Number(villainHpEl.textContent) - 200;
    villainHpEl.textContent = damage;
    if (Number(villainHpEl.textContent) >= 1) {
        villainName.textContent = "Villain is still alive.";
    } else {
        villainHpEl.textContent = "";
        villainName.style.color = "#FF0000";
        villainName.style.fontSize = "20px";
        villainName.style.lineHeight = "2.5rem";
        villainName.textContent = "Villain is DEFEATED!";
    }
}


chooseHero();

// to put a delay between calling function
// setTimeout(function() { your_func(); }, 5000);