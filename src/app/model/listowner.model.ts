// To parse this data:
//
//   import { Convert } from "./file";
//
//   const listowner = Convert.toListowner(json);

export interface Listowner {
  phone:   string;
  address: string;
  loid:    number;
  lmid:    number;
  price:   number;
  amount:  number;
  mname:   string;
  image:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toListowner(json: string): Listowner[] {
      return JSON.parse(json);
  }

  public static listownerToJson(value: Listowner[]): string {
      return JSON.stringify(value);
  }
}
