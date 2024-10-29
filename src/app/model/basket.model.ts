// To parse this data:
//
//   import { Convert, Basket } from "./file";
//
//   const basket = Convert.toBasket(json);

export interface Basket {
  image:  string;
  mid:     number;
  mtid:     number;
  mname:   string;
  price:  number;
  sprice:  number;
  amount: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBasket(json: string): Basket {
      return JSON.parse(json);
  }

  public static basketToJson(value: Basket): string {
      return JSON.stringify(value);
  }
}




// // To parse this data:
// //
// //   import { Convert } from "./file";
// //
// //   const Basket = Convert.toBasket(json);

// export interface Basket {
//   image:    string;//รูป
//   id:       number;//ไอดีสินค้า
//   name:     string;//ชื่อสินค้า
//   price:    number;//ราคา ชินxราคา
//   amount:   number;
//   status:   number;//0 เอาออก 1 อยู่ในตะกร้า
// }

// // Converts JSON strings to/from your types
// export class Convert {
//   public static toBasket(json: string): Basket[] {
//       return JSON.parse(json);
//   }

//   public static basketToJson(value: Basket[]): string {
//       return JSON.stringify(value);
//   }
// }
