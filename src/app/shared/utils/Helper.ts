import { IIngredient } from '../models/IIngredient';

export class Helper {
  public static generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
      (c) => {
        // tslint:disable-next-line
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }

  public static sumAmount(allItems: IIngredient[]) {
    const result = [];
    allItems.reduce((res, value) => {
      if (!res[value.Name]) {
        // set values
        res[value.Name] = {
          Name: value.Name,
          Amount: 0,
          Unit: value.Unit,
          Category: value.Category
        };
        // push
        result.push(res[value.Name]);
      }
      // sum amount
      res[value.Name].Amount += parseInt(value.Amount, 10);
      return res;
    }, {});
    return result;
  }
}
