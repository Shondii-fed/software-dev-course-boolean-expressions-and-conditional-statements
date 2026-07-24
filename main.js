/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in your program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasMap = false;
let hasSword = false;
let hasCompass = false;
let hasCloak = false;

console.log(`You wake up on your birthday, excited to take your official Adventurer Test! 
  You have time to check two separate spots in your room for gear before running out the door`)

const choice1 = readline.question(`Do you want to check the Desk Drawer or Bedroom Closet?
  (Drawer or Closet)`).toLowerCase();

  if (choice1.includes("drawer")) {
  hasMap = true;
  console.log(`You search the desk and find the Map of Eridel.`);
} else if (choice1.includes("closet")) {
  hasTorch = true;
  console.log(`You search the closet and find your father's Magical Torch.`);
}

const choice2 = readline.question(`Do you want to check the Wooden Chest or Wall Rack?
  (Chest or Rack)`).toLowerCase();
  
if (choice2.includes("chest")) {
  hasCompass = true;
  console.log(`You dig through the chest at the foot of your bed and find a Compass.`);
} else if (choice2.includes("rack")) {
  hasSword = true;
  console.log(`You unhook a short Sword from the wall rack.`);
};

console.log(`You rush to the Mayor's home, where the tall, white bearded man greets you warmly. He outlines your test choices:
  1. Deliver supplies to the neighboring village through the fog heavy Whispering Woods.
  2. Gather medicinal herbs inside the pitch black Northern Cavern.
  
  Before you choose, the Mayor offers you a shimmering garment resting on a chair.
  
  "This is a Cloak of Invisibility," the Mayor explains. "It will completely hide you from wild beasts and cave monsters. However, be warned: the enchantment makes it surprisingly heavy, almost like wearing a lead blanket. It will slow your pace down considerably."`);

const choice3 = readline.question(`Do you take the heavy Cloak of Invisibility, or leave it behind to stay light on your feet?
  (Take or Leave)`).toLowerCase();

  if (choice3.includes("take")) {
  hasCloak = true;
  console.log(`You gain the Cloak of Invisibility.`);
} else if (choice3.includes("leave")) {
  console.log(`You decline the cloak.`);
}

const choice4 = readline.question(`Do you head to the neighboring village or enter the northern mountain cavern?
  (Village or Cavern)`).toLowerCase();

if (choice4.includes("village")) {
  if (hasMap && hasCompass) {
    if (hasCloak) {
      console.log(`You navigate the woods perfectly using your map and compass, but wearing the heavy cloak makes the walk exhausting. You stumble into the village drenched in sweat, but completely unbothered by the wild wolves howling in the bushes!`);
    } else if (!hasCloak) {
      console.log(`You jog briskly through the woods using your map and compass, arriving at the village in record time before full nightfall!`);
    } 
  } else if (hasMap || hasCompass) {
    if (hasCloak) {
      console.log(`The fog slows you down, and the heavy cloak drags your stamina to zero. You arrive extremely late at night, groaning from sore shoulders, but safe from the beasts.`);
    } else if (!hasCloak) {
      console.log(`You get slightly turned around in the fog, but because you are light on your feet, you manage to make up time and reach the village safely.`);
    }
  } else if (!hasMap && !hasCompass) {
    if (hasCloak) {
      console.log(`You are completely lost in the fog, but you wrap yourself in the heavy cloak like an anchor and sleep safely in a bush while wolves pass right by you. You return to town the next day tired, but unharmed.`);
    } else if (!hasCloak) {
      console.log(`You get lost in the dark forest and have to turn back immediately to avoid wild beasts, failing the test.`);
    }
  } 
} else if (choice4.includes("Cavern")) {
  if (!hasTorch) {
    console.log(`The cavern is pitch black. Even if you have the Cloak, you cannot see where you are stepping and are forced to retreat before falling off a ledge.`);
  } else if (hasTorch) {
    if (hasSword && hasCloak) {
      console.log(`You light up the cavern with your torch. When giant spiders descend, you throw on the heavy cloak. The spiders cannot see you, but every step sounds like a loud, heavy thud! You slowly and awkwardly trudge past them, grab the herbs, and escape safely`);
    } else if (hasSword && !hasCloak) {
      console.log(`You light up the cavern, draw your sword with quick speed, fight off the giant spiders with agility, and harvest the herbs like a true warrior!`);
    } else if (!hasSword && hasCloak) {
      console.log(`You have no weapon, so you rely entirely on the cloak. Trudging through the cave under its immense weight, you silently harvest the herbs right out from under the giant spiders without pulling out a blade.`);
    } else if (!hasSword && !hasCloak) {
      console.log(`You light up the cavern, but without a weapon or stealth, the giant spiders chase you right back out the entrance!`);
    }
  }
} 

/*  
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
} 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/