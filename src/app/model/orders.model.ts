// To parse this data:
//
//   import { Convert } from "./file";
//
//   const orders = Convert.toOrders(json);

export interface Orders {
  oid:      number;
  oname:    string;
  phone:    string;
  address:  string;
  sumprice: number;
  ouid:     number;
  status:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOrders(json: string): Orders[] {
      return JSON.parse(json);
  }

  public static ordersToJson(value: Orders[]): string {
      return JSON.stringify(value);
  }
}
