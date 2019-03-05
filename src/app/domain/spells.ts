export class Spell {
  public _id: string;
  public index: number;
  public name: string;
  public desc: [];
  public higher_level: [];
  public page: string;
  public range: string;
  public components: [];
  public material: string;
  public ritual: string;
  public duration: string;
  public concentration: string;
  public casting_time: string;
  public level: number;
  public school: School;
  public classes: Class[];
  public subclasses: Subclass[];
  public url: string;
}

export class SpellsObject {
  public count: string;
  public results: Spell[];
}

export class School {
  public name: string;
  public url: string;
}

export class Class {
  public url: string;
  public name: string;
}

export class Subclass {
  public url: string;
  public name: string;
}

