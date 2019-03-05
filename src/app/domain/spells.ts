export class Spell {
  public _id: string;
  public index: string;
  public name: string;
  public desc: [];
  public higher_level: [];
  public page: string;
  public range: string;
}

export class SpellsObject {
  public count: string;
  public results: Spell[];
}

