export class Monsters {
    public count: string;
    public results: Monster[];
}

export class Monster {
    _id: string;
    index: number;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    strength_save: number;
    dexterity_save: number;
    constitution_save: number;
    intelligence_save: number;
    wisdom_save: number;
    charisma_save: number;
    history: number;
    perception: number;
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    challenge_rating: number;
    special_abilities: SpecialAbilities[];
    actions: Actions[];
    url: string;
}

export class SpecialAbilities {
    attack_bonus: number;
    desc: string;
    name: string;
}

export class Actions {
    attack_bonus: number;
    desc: string;
    name: string;
    damage_bonus: number;
    damage_dice: string;
}