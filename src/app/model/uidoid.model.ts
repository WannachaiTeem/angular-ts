
export interface Uidoid {
  uid:     number;
  oid:      number;

}


export class Convert {
  public static toUidoid(json: string): Uidoid[] {
      return JSON.parse(json);
  }

  public static uidoidToJson(value: Uidoid[]): string {
      return JSON.stringify(value);
  }
}
