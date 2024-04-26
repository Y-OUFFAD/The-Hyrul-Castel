"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = void 0;
var rl = require("readline-sync"); //Lire des données au clavier avec (readline-sync)
var c = require('ansi-colors'); // appeler la fonction couleur
var getInput = function (question) { return rl.question("".concat(question, "\n")); };
exports.getInput = getInput;
;
var Link = {
    name: "link",
    Hpm: 60,
    str: 15,
    hp: 60
};
var Enemy = {
    name: "bocoblin",
    Hpm: 30,
    str: 5,
    hp: 30
};
var boss = {
    name: "Ganon",
    Hpm: 150,
    str: 20,
    hp: 150
};
function hyrule_castle() {
    for (var etage = 1; etage < 10 && Link.hp > 0; etage++) {
        console.log("===== votre etage est " + etage + "======");
        console.log("Vous affrontez ".concat(Enemy.name));
        while (Link.hp > 0 && Enemy.hp > 0) {
            console.log("===== Options =====");
            var choix = (0, exports.getInput)("Attack or Heal ?"); // (gerInput)  permet de demander à l'utilisateur de saisir une chaîne de caractères au clavier.
            if (choix == "Attack") {
                Enemy.hp = Enemy.hp - Link.str;
                console.log(c.red('bocoblin'));
                console.log("vie de bocoblin." + Enemy.hp + "/" + Enemy.Hpm);
                //for( let i=0; i<Enemy.Hpm; i++ 
            }
            else if (choix == "Heal") {
                Link.hp = Link.hp + (Link.Hpm / 2);
            }
            Link.hp = Link.hp - Enemy.str;
            console.log(c.red('bocoblin'));
            console.log("vie de bocoblin." + Enemy.hp + "/" + Enemy.Hpm);
            console.log(c.green('link'));
            console.log("vie de link." + "  " + Link.hp + "/" + Link.Hpm);
            // console.log("vie de Enemy."+ Enemy.hp); 
        }
        Enemy.hp = Enemy.Hpm; // Hpm vers hp
    }
    ;
    console.log("===== votre etage est 10 ======");
    console.log("vous affontez ".concat(boss.name));
    //console.log(Link);
    while (Link.hp > 0 && boss.hp > 0) {
        console.log("===== Options =====");
        var choix = (0, exports.getInput)("Attack or Heal ?");
        if (choix == "Attack") {
            boss.hp = boss.hp - Link.str;
            console.log("vie de Ganon." + " " + boss.hp + "/" + boss.Hpm);
            //console.log("you are the best")
        }
        else if (choix == "Heal") {
            Link.hp = Link.hp + (Link.Hpm / 2);
        }
        Link.hp = Link.hp - boss.str;
        console.log("vie de link." + " " + Link.hp + "/" + Link.Hpm);
    }
    if (boss.hp <= 0) {
        console.log("you are the best you defeat ".concat(boss.name));
    }
    //console.log("you are the best")
    boss.hp = boss.Hpm;
}
//introduire une variable a l'intérieur d'une variable.
hyrule_castle();
