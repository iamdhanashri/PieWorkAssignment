export class Weather {
    constructor(
      public name: string,
      public location: string,
      public temperature: number,
      public _id?: string // Optional parameter comes after required parameters
    ) {}
  }
  