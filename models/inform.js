const { v4: uuidv4 } = require("uuid");
class Inform {
  id = "";
  hours = 0;
  minutes = 0;
  videos = 0;
  returnVisits = 0;
  studies = 0;
  month = null;
  year = null;
  constructor(
    hours = 0,
    minutes = 0,
    videos = 0,
    returnVisits = 0,
    studies = 0,
    month = null,
    year = null
  ) {
    this.id = uuidv4();
    this.hours = hours;
    this.minutes = minutes;
    this.videos = videos;
    this.returnVisits = returnVisits;
    this.studies = studies;
    this.month = month;
    this.year = year;
  }
}
module.exports = Inform;
