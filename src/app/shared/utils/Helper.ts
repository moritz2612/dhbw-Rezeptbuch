import { IIngredient } from '../models/IIngredient';

export class Helper {
  public static generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
      (c) => {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }

  public static sumAmount(allItems: IIngredient[]) {
    var result = [];
    allItems.reduce(function (res, value) {
      if (!res[value.Name]) {
        res[value.Name] = { Name: value.Name, Amount: 0, Unit: value.Unit, Category: value.Category };
        result.push(res[value.Name])
      }
      res[value.Name].Amount += parseInt(value.Amount);
      return res;
    }, {});
    return result;
  }
}
