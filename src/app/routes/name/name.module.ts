export class  NameModule {}

export class PersonModule {
  constructor(
    public date?: string,
    public account?: number,
    public isClose?: boolean,
    public name?: string
  ) {}
}

export class SecondConst {
  constructor(
    public name?: string,
    public birthDay?: Date,
    public age?: number,
    public address?: string
  ) {}
}

export class ThreeConst {
  constructor(
    public myName?: string,
    public myBirthDay?: Date,
    public myAge?: number,
    public myAddress?: string
  ) {}
}

export class FourConst {
  constructor(
    public herName?: string,
    public children?: void,
    public getCount?: number,
  ) {}
}
