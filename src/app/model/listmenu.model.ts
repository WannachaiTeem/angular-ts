// To parse this data:
//
//   import { Convert } from "./file";
//
//   const listmenu = Convert.toListmenu(json);

export interface Listmenu {
  loid:   number;
  lmid:   number;
  price:  number;
  amount: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toListmenu(json: string): Listmenu[] {
      return JSON.parse(json);
  }

  public static listmenuToJson(value: Listmenu[]): string {
      return JSON.stringify(value);
  }
}
