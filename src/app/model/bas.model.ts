// To parse this data:
//
//   import { Convert } from "./file";
//
//   const bas = Convert.toBas(json);

export interface Bas {
  amount: number;
  price:  number;
  sprice:  number;
  mname:  string;
  lmid:   number;
  image: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBas(json: string): Bas[] {
      return JSON.parse(json);
  }

  public static basToJson(value: Bas[]): string {
      return JSON.stringify(value);
  }
}
