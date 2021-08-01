const clone = require("rfdc/default");
const Inform = require("./inform");
const fs = require("fs");
class Informs {
  _listInforms = [];
  constructor() {
    this._listInforms = [];
  }
  loadInforms(informsArray = []) {
    this._listInforms = clone(informsArray);
  }
  getCurrentInform(month, year) {
    Object.keys(this._listInforms).forEach((key) => {
      const obj = this._listInforms[key];
      if (obj.month == month && obj.year == year) {
        return obj;
      }
    });
    return null;
  }
  createInform(
    hours = 0,
    minutes = 0,
    videos = 0,
    returnVisits = 0,
    studies = 0,
    month = null,
    year = null
  ) {
    this._listInforms.push(
      new Inform(hours, minutes, videos, returnVisits, studies, month, year)
    );
  }
}
module.exports = Informs;
