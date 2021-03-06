// assign a variable for the base stat table
class baseStats {

    constructor() {
        this[0] = {
            abilityMods: [3, 3, 1, 1, -1, -1],
            proficiencyBonus: 2,
            initiavtive: 0,
            armorClass: 12,
            hitPoints: 16,
            numberOfTrainedSaves: 2,
            attackBonus: 2,
            offensiveDC: 10,
            averageDamage: 1,
            challengeRating: '1/8',
            XP: 25,
        };
        this[1] = {
            abilityMods: [3, 3, 1, 1, -1, -1],
            proficiencyBonus: 2,
            initiavtive: 0,
            armorClass: 12,
            hitPoints: 23,
            numberOfTrainedSaves: 2,
            attackBonus: 2,
            offensiveDC: 10,
            averageDamage: 3,
            challengeRating: '1/4',
            XP: 50,
        };
        this[2] = {
            abilityMods: [3, 3, 1, 1, -1, -1],
            proficiencyBonus: 2,
            initiavtive: 0,
            armorClass: 12,
            hitPoints: 30,
            numberOfTrainedSaves: 2,
            attackBonus: 2,
            offensiveDC: 10,
            averageDamage: 6,
            challengeRating: '1/2',
            XP: 112,
        };
        this[3] = {
            abilityMods: [3, 3, 1, 1, -1, -1],
            proficiencyBonus: 2,
            initiavtive: 0,
            armorClass: 12,
            hitPoints: 37,
            numberOfTrainedSaves: 2,
            attackBonus: 2,
            offensiveDC: 10,
            averageDamage: 9,
            challengeRating: '1/2',
            XP: 175,
        };
        this[4] = {
                abilityMods: [4, 4, 1, 1, -1, -1],
                proficiencyBonus: 2,
                initiavtive: 0,
                armorClass: 13,
                hitPoints: 44,
                numberOfTrainedSaves: 2,
                attackBonus: 2,
                offensiveDC: 10,
                averageDamage: 12,
                challengeRating: 1,
                XP: 275,
        };
        this[5] = {
            abilityMods: [4, 4, 1, 1, -1, -1],
            proficiencyBonus: 3,
            initiavtive: 0,
            armorClass: 13,
            hitPoints: 51,
            numberOfTrainedSaves: 2,
            attackBonus: 3,
            offensiveDC: 11,
            averageDamage: 15,
            challengeRating: 2,
            XP: 450,
        };
        this[6] = {
            abilityMods: [4, 4, 1, 1, -1, -1],
            proficiencyBonus: 3,
            initiavtive: 0,
            armorClass: 13,
            hitPoints: 58,
            numberOfTrainedSaves: 2,
            attackBonus: 3,
            offensiveDC: 11,
            averageDamage: 18,
            challengeRating: 2,
            XP: 575,
        };
        this[7] = {
            abilityMods: [4, 4, 1, 1, -1, -1],
            proficiencyBonus: 3,
            initiavtive: 0,
            armorClass: 13,
            hitPoints: 65,
            numberOfTrainedSaves: 2,
            attackBonus: 3,
            offensiveDC: 11,
            averageDamage: 21,
            challengeRating: 3,
            XP: 725,
        };
        this[8] = {
            abilityMods: [5, 5, 2, 2, -1, -1],
            proficiencyBonus: 3,
            initiavtive: 0,
            armorClass: 14,
            hitPoints: 72,
            numberOfTrainedSaves: 2,
            attackBonus: 3,
            offensiveDC: 11,
            averageDamage: 24,
            challengeRating: 3,
            XP: 975,
        };
        this[9] = {
            abilityMods: [5, 5, 2, 2, -1, -1],
            proficiencyBonus: 4,
            initiavtive: 0,
            armorClass: 14,
            hitPoints: 79,
            numberOfTrainedSaves: 2,
            attackBonus: 4,
            offensiveDC: 12,
            averageDamage: 27,
            challengeRating: 4,
            XP: 1250,
        };
        this[10] = {
            abilityMods: [5, 5, 2, 2, -1, -1],
            proficiencyBonus: 4,
            initiavtive: 0,
            armorClass: 14,
            hitPoints: 86,
            numberOfTrainedSaves: 2,
            attackBonus: 4,
            offensiveDC: 12,
            averageDamage: 30,
            challengeRating: 4,
            XP: 1475,
        };
        this[11] = {
            abilityMods: [5, 5, 2, 2, -1, -1],
            proficiencyBonus: 4,
            initiavtive: 0,
            armorClass: 14,
            hitPoints: 93,
            numberOfTrainedSaves: 2,
            attackBonus: 4,
            offensiveDC: 12,
            averageDamage: 33,
            challengeRating: 5,
            XP: 1800,
        };
        this[12] = {
            abilityMods: [5, 5, 2, 2, 0, 0],
            proficiencyBonus: 4,
            initiavtive: 0,
            armorClass: 15,
            hitPoints: 100,
            numberOfTrainedSaves: 2,
            attackBonus: 4,
            offensiveDC: 12,
            averageDamage: 36,
            challengeRating: 5,
            XP: 2100,
        };
        this[13] = {
            abilityMods: [5, 5, 2, 2, 0, 0],
            proficiencyBonus: 5,
            initiavtive: 0,
            armorClass: 15,
            hitPoints: 107,
            numberOfTrainedSaves: 2,
            attackBonus: 5,
            offensiveDC: 13,
            averageDamage: 39,
            challengeRating: 6,
            XP: 2500,
        };
        this[14] = {
            abilityMods: [5, 5, 2, 2, 0, 0],
            proficiencyBonus: 5,
            initiavtive: 0,
            armorClass: 15,
            hitPoints: 114,
            numberOfTrainedSaves: 2,
            attackBonus: 5,
            offensiveDC: 13,
            averageDamage: 42,
            challengeRating: 6,
            XP: 2875,
        };
        this[15] = {
            abilityMods: [5, 5, 2, 2, 0, 0],
            proficiencyBonus: 5,
            initiavtive: 0,
            armorClass: 15,
            hitPoints: 121,
            numberOfTrainedSaves: 2,
            attackBonus: 5,
            offensiveDC: 13,
            averageDamage: 45,
            challengeRating: 7,
            XP: 3250,
        };
        this[16] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 5,
            initiavtive: 0,
            armorClass: 16,
            hitPoints: 128,
            numberOfTrainedSaves: 2,
            attackBonus: 5,
            offensiveDC: 13,
            averageDamage: 48,
            challengeRating: 7,
            XP: 3750,
        };
        this[17] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 6,
            initiavtive: 0,
            armorClass: 16,
            hitPoints: 135,
            numberOfTrainedSaves: 2,
            attackBonus: 6,
            offensiveDC: 14,
            averageDamage: 51,
            challengeRating: 8,
            XP: 4500,
        };
        this[18] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 6,
            initiavtive: 0,
            armorClass: 16,
            hitPoints: 142,
            numberOfTrainedSaves: 2,
            attackBonus: 6,
            offensiveDC: 14,
            averageDamage: 54,
            challengeRating: 9,
            XP: 5000,
        };
        this[19] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 6,
            initiavtive: 0,
            armorClass: 16,
            hitPoints: 149,
            numberOfTrainedSaves: 2,
            attackBonus: 6,
            offensiveDC: 14,
            averageDamage: 57,
            challengeRating: 9,
            XP: 5500,
        };
        this[20] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 6,
            initiavtive: 0,
            armorClass: 17,
            hitPoints: 156,
            numberOfTrainedSaves: 2,
            attackBonus: 6,
            offensiveDC: 14,
            averageDamage: 60,
            challengeRating: 10,
            XP: 6250,
        };
        this[21] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 7,
            initiavtive: 0,
            armorClass: 17,
            hitPoints: 163,
            numberOfTrainedSaves: 2,
            attackBonus: 7,
            offensiveDC: 15,
            averageDamage: 63,
            challengeRating: 11,
            XP: 8250,
        };
        this[22] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 7,
            initiavtive: 0,
            armorClass: 17,
            hitPoints: 170,
            numberOfTrainedSaves: 2,
            attackBonus: 7,
            offensiveDC: 15,
            averageDamage: 66,
            challengeRating: 13,
            XP: 10250,
        };
        this[23] = {
            abilityMods: [6, 6, 3, 3, 0, 0],
            proficiencyBonus: 7,
            initiavtive: 0,
            armorClass: 17,
            hitPoints: 177,
            numberOfTrainedSaves: 2,
            attackBonus: 7,
            offensiveDC: 15,
            averageDamage: 69,
            challengeRating: 14,
            XP: 12500,
        };
        this[24] = {
            abilityMods: [7, 7, 4, 4, 1, 1],
            proficiencyBonus: 7,
            initiavtive: 0,
            armorClass: 18,
            hitPoints: 184,
            numberOfTrainedSaves: 2,
            attackBonus: 7,
            offensiveDC: 15,
            averageDamage: 72,
            challengeRating: 16,
            XP: 15500,
        };
        this[25] = {
            abilityMods: [7, 7, 4, 4, 1, 1],
            proficiencyBonus: 8,
            initiavtive: 0,
            armorClass: 18,
            hitPoints: 191,
            numberOfTrainedSaves: 2,
            attackBonus: 8,
            offensiveDC: 16,
            averageDamage: 75,
            challengeRating: 17,
            XP: 18750,
        }
    };
};


// creates enemy objects that calculate appropriate stats
class Enemy {

    constructor(enemyLevel, enemyRank, enemyRole, enemyQuantity) {
        // dropdown properties aren't enumerable so they aren't displayed again in the DOM
        Object.defineProperties(this, {
            enemyLevel: {
                value: enemyLevel,
                enumerable: false,
            },
            enemyRank: {
                value: enemyRank,
                enumerable: false,
            },
            enemyRole: {
                value: enemyRole,
                enumerable: false,
            },
            enemyQuantity: {
                value: enemyQuantity,
                enumberable: false,
            },
        });

        this.abilityMods = baseStatsTable[enemyLevel].abilityMods;
        this.proficiencyBonus = baseStatsTable[enemyLevel].proficiencyBonus;
        this.initiavtive = baseStatsTable[enemyLevel].initiavtive;
        this.armorClass = baseStatsTable[enemyLevel].armorClass;
        this.hitPoints = baseStatsTable[enemyLevel].hitPoints;
        this.numberOfTrainedSaves = baseStatsTable[enemyLevel].numberOfTrainedSaves;
        this.toHitBonus = baseStatsTable[enemyLevel].attackBonus + this.abilityMods[0];
        this.offensiveDC = baseStatsTable[enemyLevel].offensiveDC + this.abilityMods[0];
        this.averageDamage = baseStatsTable[enemyLevel].averageDamage;
        this.XP = baseStatsTable[enemyLevel].XP;
        this.threat = 1;
    };

    becomeController() {
        let roleIntiativeAdjustment = this.proficiencyBonus;
        let roleACAdjustment = 2;
        let roleAverageDamageMultiplier = 0.75;
        let roleFeature = 'Focused: Adv on Conc Saves';
        this.initiavtive += roleIntiativeAdjustment;
        this.armorClass += roleACAdjustment;
        this.averageDamage *= roleAverageDamageMultiplier;
        this.roleFeature = roleFeature;
    };

    becomeDefender() {
        let roleACAdjustment = 4;
        let roleHitPointsMultiplier = 0.75;
        let roleTrainedSavingThrowsAdjustment = 1;
        let roleAverageDamageMultiplier = 0.75;
        let roleSpeedAdjustment = -5;
        let roleFeature = 'Opportunist: Adv on Opportunity Attacks';
        this.armorClass += roleACAdjustment;
        this.hitPoints *= roleHitPointsMultiplier;
        this.numberOfTrainedSaves += roleTrainedSavingThrowsAdjustment;
        this.averageDamage *= roleAverageDamageMultiplier;
        this.roleFeature = roleFeature;
        this.speedMod = roleSpeedAdjustment;
    };

    becomeLurker() {
        let roleACAdjustment = -4;
        let roleHitPointsMultiplier = 0.75;
        let roleTrainedSavingThrowsAdjustment = -1;
        let roleFeature = 'Sneaky: Bonus Action Hide';
        let roleSkill = 'Stealth';
        let roleAverageDamageMultiplier = 1.25;
        this.armorClass += roleACAdjustment;
        this.hitPoints *= roleHitPointsMultiplier;
        this.numberOfTrainedSaves += roleTrainedSavingThrowsAdjustment;
        this.roleFeature = roleFeature;
        this.roleSkill = roleSkill;
        this.averageDamage *= roleAverageDamageMultiplier;        
    };

    becomeSkirmisher() {
        let roleACAdjustment = -2;
        let roleHitPointsMultiplier = 0.75;
        let roleFeature = 'Evasive: Bonus Action Disengage';
        let roleSkill = 'Perception';
        let roleSpeedAdjustment = 5;
        this.armorClass += roleACAdjustment;
        this.hitPoints *= roleHitPointsMultiplier;
        this.roleFeature = roleFeature;
        this.roleSkill = roleSkill;
        this.speedMod = roleSpeedAdjustment;
    };

    becomeStriker() {
        let roleFeature = 'Brutal: Crit on 19 1/turn';
        this.roleFeature = roleFeature;
    };

    becomeSupporter() {
        let roleHitPointsMultiplier = 1.25;
        let roleIntiativeAdjustment = this.proficiencyBonus;
        let roleAverageDamageMultiplier = 0.75;
        let roleFeature = 'Supportive: Bonus Action Help';
        this.hitPoints *= roleHitPointsMultiplier;
        this.initiavtive += roleIntiativeAdjustment;
        this.averageDamage *= roleAverageDamageMultiplier;
        this.roleFeature = roleFeature;
    };
};

class Minion extends Enemy {

    constructor(enemyLevel, enemyRank, enemyRole, enemyQuantity) {
        super(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        let threatMultiplier = 0.25;
        let rankHitPointMultiplier = 0.2;
        let rankTrainedSavingThrowAdjustment = -1;
        let rankAverageDamageMultiplier = 0.75;
        let rankXPMultiplier = 0.25;
        let baseFeatures = '1 - 5';
        let rankFeatures = 'Elusive';
        this.threat *= threatMultiplier;
        this.hitPoints *= rankHitPointMultiplier;
        this.numberOfTrainedSaves += rankTrainedSavingThrowAdjustment;
        this.averageDamage *= rankAverageDamageMultiplier;
        this.XP *= rankXPMultiplier;
        this.baseFeatures = baseFeatures;
        this.rankFeatures = rankFeatures;
    };
};

class Grunt extends Enemy {

    constructor(enemyLevel, enemyRank, enemyRole, enemyQuantity) {
        super(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        let baseFeatures = '3 - 8';
        this.baseFeatures = baseFeatures;
    };
};

class Elite extends Enemy {

    constructor(enemyLevel, enemyRank, enemyRole, enemyQuantity) {
        super(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        let threatMultiplier = 2;
        let rankHitPointMultiplier = 2;
        let rankInitiativeAdjustment = this.proficiencyBonus/2;
        let rankArmorClassAdjustment = 1;
        let rankTrainedSavingThrowAdjustment = 1;
        let rankAverageDamageMultiplier = 1.1;
        let rankXPMultiplier = 2;
        let baseFeatures = '5 - 11';
        let rankFeatures = 'Paragon Power (1/round)';
        let abilityModifierAdjustment = 1;
        this.threat *= threatMultiplier;
        this.hitPoints *= rankHitPointMultiplier;
        this.initiavtive += rankInitiativeAdjustment;
        this.armorClass += rankArmorClassAdjustment;
        this.numberOfTrainedSaves += rankTrainedSavingThrowAdjustment;
        this.averageDamage *= rankAverageDamageMultiplier;
        this.XP *= rankXPMultiplier;
        this.baseFeatures = baseFeatures;
        this.rankFeatures = rankFeatures;
        for (let mod of this.abilityMods) {
            mod += abilityModifierAdjustment;
        };
    };
};

class Paragon extends Enemy {

    constructor(enemyLevel, enemyRank, enemyRole, enemyQuantity, threatMultiplier) {
        super(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        let rankHitPointMultiplier = threatMultiplier;
        let rankInitiativeAdjustment = this.proficiencyBonus;
        let rankArmorClassAdjustment = 2;
        let rankTrainedSavingThrowAdjustment = 1;
        let rankAverageDamageMultiplier = 1.2;
        let rankXPMultiplier = threatMultiplier;
        let baseFeatures = '7 - 14';
        let rankFeatures = `Paragon Power (${threatMultiplier - 1}/round), Paragon Defence (${threatMultiplier / 2}/LR)`;
        let abilityModifierAdjustment = 2;
        this.threat *= threatMultiplier;
        this.hitPoints *= rankHitPointMultiplier;
        this.initiavtive += rankInitiativeAdjustment;
        this.armorClass += rankArmorClassAdjustment;
        this.numberOfTrainedSaves += rankTrainedSavingThrowAdjustment;
        this.averageDamage *= rankAverageDamageMultiplier;
        this.XP *= rankXPMultiplier;
        this.baseFeatures = baseFeatures;
        this.rankFeatures = rankFeatures;
        for (let mod of this.abilityMods) {
            mod += abilityModifierAdjustment;
        };
    };
};

// creates encounter objects that will hold current enemies
class Encounter {
    constructor() {
        this.enemies = [];
    };

    // calculate how much "threat" the encounter should be worth
    calculateThreatBudget() {
        // assign a variable for the selected number of PCs
        this.numberOfPCs = document.querySelector('.numberOfPCsDropdown').value;
        // assign a variable for the encounter difficulty
        this.encounterDifficulty = document.querySelector('.encounterDifficultyDropdown').value;
        // determine the encounter threat budget
        switch(this.encounterDifficulty) {
            case 'Trivial' :
                this.encounterThreatBudget = this.numberOfPCs * 0.25;
                break;
            case 'Easy' :
                this.encounterThreatBudget = this.numberOfPCs * 0.5;
                break;
            case 'Normal' :
                this.encounterThreatBudget = this.numberOfPCs;
                break;
            case 'Hard' :
                this.encounterThreatBudget = this.numberOfPCs * 1.5;
                break;
            case 'Extreme' :
                this.encounterThreatBudget = this.numberOfPCs * 2;
                break;
        };
        // display the threat budget in the DOM
        document.querySelector('.threatBudgetSpan').innerHTML = this.encounterThreatBudget;
    };

    // calculate how much "threat" has been spent on the current enemies
    calculateThreatSpent() {
        // assign a variable for the selected average PC level
        this.averagePCLevel = document.querySelector('.averagePCLevelDropdown').value;
        // iterate over this.enemies, determining the relative threat for each
        let relativeThreatArray = this.enemies.map(function(enemy) {
            // compare the enemy's level to the average PC level
            if ((encounter.averagePCLevel - 6) >= enemy.enemyLevel) {
                return enemy.threat * enemy.enemyQuantity * 0.25;
            } else if ((encounter.averagePCLevel - 3) >= enemy.enemyLevel) {
                return enemy.threat * enemy.enemyQuantity * 0.5;
            } else if ((enemy.enemyLevel - 6) >= encounter.averagePCLevel) {
                return enemy.threat * enemy.enemyQuantity * 4;
            } else if ((enemy.enemyLevel - 3) >= encounter.averagePCLevel) {
                return enemy.threat * enemy.enemyQuantity * 2;
            } else {
                return enemy.threat * enemy.enemyQuantity;
            };
        });
        // sum the relative threats
        let threatSpent = relativeThreatArray.reduce((sum, relativeThreat) => sum + relativeThreat, 0);
        // display the threat spent in the DOM
        document.querySelector('.threatSpentSpan').innerHTML = threatSpent;
    };

    // adds a placeholder object to encounter when dropdowns are added
    addPlaceholder() {
        this.enemies.push({enemyName: 'placeholder', enemyLevel: 0, threat: 0,});
    };

    // removes a placeholder or enemy object from encounter when delete is used
    removeEnemy(indexOfEnemy) {
        this.enemies.splice(indexOfEnemy, 1);
        this.calculateThreatSpent();
    };

    // removes placeholder or enemy object from encounter, and inserts enemy
    updateEnemy(indexOfEnemy, enemy) {
        this.enemies.splice(indexOfEnemy, 1, enemy);
        this.calculateThreatSpent();
    };

    updateAndAppendStats(event) {
        // assign variables to determine if an enemy's name is saved, and what its text is
        let enemyNameSaved;
        let enemyNameText;
        // check if the enemy has already been generated
        let individualEnemySection = event.target.parentElement.parentElement;
        if (individualEnemySection.children.length > 1) {
            // save the enemy's name
            enemyNameText = individualEnemySection.children[1].children[0].children[1].value;
            enemyNameSaved = true;
            // delete its stat section before generating a new one
            individualEnemySection.children[1].remove();
        };

        // create an array of the 3 dropdowns for the enemy
        let dropdownArray = Array.from(event.target.parentElement.children).filter((node) => node.localName === 'select');
        // assign a variable for the enemy's level
        let enemyLevel = Number(dropdownArray[0].value.replace('Level ', ''));
        // assign a variable for the enemy's rank
        let enemyRank = dropdownArray[1].value.replace('Rank: ', '');
        // assign a variable for the enemy's role
        let enemyRole = dropdownArray[2].value.replace('Role: ', '');
        // assign a variable for the enemy's quantity
        let enemyQuantity = Number(dropdownArray[3].value.replace('Quantity: ', ''));

        // declare a variable for the enemy object that will be made
        let enemy;
        // execute the appropriate constructor
        if (enemyRank === 'Minion') {
            enemy = new Minion(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        } else if (enemyRank === 'Grunt') {
            enemy = new Grunt(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        } else if (enemyRank === 'Elite') {
            enemy = new Elite(enemyLevel, enemyRank, enemyRole, enemyQuantity);
        } else if (enemyRank === 'Paragon (3)') {
            enemy = new Paragon(enemyLevel, enemyRank, enemyRole, enemyQuantity, 3);
        } else if (enemyRank === 'Paragon (4)') {
            enemy = new Paragon(enemyLevel, enemyRank, enemyRole, enemyQuantity, 4);
        } else if (enemyRank === 'Paragon (5)') {
            enemy = new Paragon(enemyLevel, enemyRank, enemyRole, enemyQuantity, 5);
        } else if (enemyRank === 'Paragon (6)') {
            enemy = new Paragon(enemyLevel, enemyRank, enemyRole, enemyQuantity, 6);
        };
        // execute the appropriate role method
        if (enemyRole === 'Controller') {
            enemy.becomeController();
        } else if (enemyRole === 'Defender') {
            enemy.becomeDefender();
        } else if (enemyRole === 'Lurker') {
            enemy.becomeLurker();
        } else if (enemyRole === 'Skirmisher') {
            enemy.becomeSkirmisher();
        } else if (enemyRole === 'Striker') {
            enemy.becomeStriker();
        } else if (enemyRole === 'Supporter') {
            enemy.becomeSupporter();
        };

        // update the enemy's stats in the encounter object
        // assign a variable to the enemy's section
        let thisEnemySection = event.target.parentElement.parentElement;
        // calculate the index of the corresponding enemy in the encounter object (subtract 1 due to Add Enemy button)
        let indexOfThisEnemy = Array.from(thisEnemySection.parentElement.children).indexOf(thisEnemySection) - 1;
        // update the enemy in the encounter object
        encounter.updateEnemy(indexOfThisEnemy, enemy);

        // make a section for the enemy
        let enemyStatSection = document.createElement('section');
        // add the corresponding class
        enemyStatSection.className = 'enemyStatSection';
        // create an element for the enemy's name
        let enemyName = document.createElement('input');
        // set the element to a text form
        enemyName.setAttribute('type', 'text');
        // add the corresponding class
        enemyName.className = 'enemyNameForm';

        // check if the enemy's name is saved
        if (enemyNameSaved) {
            // set the enemy's name to the saved name
            enemyName.setAttribute('value', enemyNameText);
        };

        // create an element for a header for the enemy's name
        let enemyNameHeader = document.createElement('h3');
        enemyNameHeader.innerText = `Enemy's Name`;
        // add the corresponding class
        enemyNameHeader.className = 'enemyNameHeader';
        // create a section for the header and name
        let nameSection = document.createElement('section');
        // add the corresponding class
        nameSection.className = 'individualStatSection';
        // append the header and name to the name section
        nameSection.appendChild(enemyNameHeader);
        nameSection.appendChild(enemyName);
        // append the section to the enemy stat section
        enemyStatSection.appendChild(nameSection);
        // iterate over the enemy's properties
        for (let key in enemy) {
            // create an element for the property
            let header = document.createElement('h3');
            header.innerText = key;
            // add the corresponding class
            header.className = 'statHeader';
            // create an element for the property's value
            let stat = document.createElement('span');
            stat.innerText = enemy[key];
            // add the corresponding class
            stat.className = 'statValue';
            // create a section for the property and value
            let individualStatSection = document.createElement('section');
            // add the corresponding class
            individualStatSection.className = 'individualStatSection';
            // append the property and value to the individual stat section
            individualStatSection.appendChild(header);
            individualStatSection.appendChild(stat);
            // append the individual stat section to the enemy stat section
            enemyStatSection.appendChild(individualStatSection);
        };
        // append the section to the parent section of the generate stats button
        event.target.parentElement.parentElement.appendChild(enemyStatSection);
    };

    // add a new set of enemy dropdowns
    addAnEnemy() {
        // add a placeholder enemy to the encounter object
        this.addPlaceholder();
        // create a section for the enemy
        let newEnemy = document.createElement('section');
        // give the section the corresponding class
        newEnemy.className = 'individualEnemySection';

        // create a section for the enemy lookup dropdowns and buttons
        let newEnemyMenu = document.createElement('section');
        // give the section the corresponding class
        newEnemyMenu.className = 'enemyLookupSection';

        // create a delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete Enemy';
        // give the button the corresponding class
        deleteButton.className = 'deleteEnemyButton';
        // add event listener to delete enemy when clicked
        deleteButton.addEventListener('click', (click) => {
            // remove the enemy from the encounter object
            // assign a variable to the enemy's section
            let thisEnemySection = click.target.parentElement.parentElement;
            // calculate the index of the corresponding enemy in the encounter object (subtract 1 due to Add Enemy button)
            let indexOfThisEnemy = Array.from(thisEnemySection.parentElement.children).indexOf(thisEnemySection) - 1;
            // remove the enemy from the encounter object
            this.removeEnemy(indexOfThisEnemy);
            // delete the entire enemy section
            thisEnemySection.remove();
        });

        // append the button into the enemy
        newEnemyMenu.appendChild(deleteButton);

        // create a level dropdown
        let levelLookup = document.createElement('select');
        // append the level dropdown into the enemy dropdown section
        newEnemyMenu.appendChild(levelLookup);
        // create and append the corresponding options into the dropdown
        for (let i = 0; i <= 25; i++) {
            let levelOption = document.createElement('option');
            levelOption.innerText = `Level ${i}`;
            levelLookup.appendChild(levelOption);
        };

        // create a rank dropdown
        let rankLookup = document.createElement('select');
        // append the rank dropdown into the enemy dropdown section
        newEnemyMenu.appendChild(rankLookup);
        // create and append the corresponding options into the dropdown
        let rankList = ['Minion', 'Grunt', 'Elite', 'Paragon (3)', 'Paragon (4)', 'Paragon (5)', 'Paragon (6)'];
        for (let rank of rankList) {
            let newRank = document.createElement('option');
            newRank.innerText = `Rank: ${rank}`;
            rankLookup.appendChild(newRank);
        };

        // create a role dropdown
        let roleLookup = document.createElement('select');
        // append the role dropdown into the enemy dropdown section
        newEnemyMenu.appendChild(roleLookup);
        // create and append the corresponding options into the dropdown
        let roleList = ['Controller', 'Defender', 'Lurker', 'Skirmisher', 'Striker', 'Supporter'];
        for (let role of roleList) {
            let newRole = document.createElement('option');
            newRole.innerText = `Role: ${role}`;
            roleLookup.appendChild(newRole);
        };

        // create a quantity dropdown
        let quantityLookup = document.createElement('select');
        // append the quantity dropdown into the enemy dropdown section
        newEnemyMenu.appendChild(quantityLookup);
        // create and append the corresponding options into the dropdown
        for (let i = 1; i <= 16; i++) {
            let quantityOption = document.createElement('option');
            quantityOption.innerText = `Quantity: ${i}`;
            quantityLookup.appendChild(quantityOption);
        };

        // add event listener to generate stats when dropdowns are changed
        levelLookup.addEventListener('change', this.updateAndAppendStats);
        rankLookup.addEventListener('change', this.updateAndAppendStats);
        roleLookup.addEventListener('change', this.updateAndAppendStats);
        quantityLookup.addEventListener('change', this.updateAndAppendStats);

        // append the enemy menu section into the enemy section
        newEnemy.appendChild(newEnemyMenu);

        // append the enemy section into the enemies section
        document.querySelector('.statGenerationSection').appendChild(newEnemy);

        // trigger the event listener to force stat calculation and threat spent calculation
        let forcedEvent = new Event('change');
        levelLookup.dispatchEvent(forcedEvent);
    };
};


// show/hide info toggle
document.querySelector('.infoHeading').addEventListener('click', (event) => {
    let paragraphs = Array.from(document.querySelectorAll('.infoParagraph'));
    paragraphs.forEach((paragraph) => paragraph.classList.toggle('hiddenInfo'));
});

// create base stats object used by enemy constructors
const baseStatsTable = new baseStats();

// create encounter object to hold current enemies
const encounter = new Encounter();

// calculate threat budget when page loads in case dropdowns are saved
encounter.calculateThreatBudget();

// add event listener to update threat budget when number of PCs or encounter difficulty dropdowns change
document.querySelector('.numberOfPCsDropdown').addEventListener('change', () => encounter.calculateThreatBudget());
document.querySelector('.encounterDifficultyDropdown').addEventListener('change', () => encounter.calculateThreatBudget());

// calculate threat spent when average pc level dropdown changes
document.querySelector('.averagePCLevelDropdown').addEventListener('change', () => encounter.calculateThreatSpent());

// add enemy section when button is clicked
document.querySelector('.addEnemyButton').addEventListener('click', () => encounter.addAnEnemy());
