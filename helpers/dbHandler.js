const fs = require("fs");
const archiveJson = "./db/data.json";
const saveInforms = (data) => {
  fs.writeFileSync(archiveJson, JSON.stringify(data));
};
const readInforms = () => {
  if (!fs.existsSync(archiveJson)) return null;
  try {
    const informsRead = fs.readFileSync(archiveJson, { encoding: "utf-8" });
    return informsRead;
  } catch {
    return null;
  }
};
module.exports = { saveInform, readInforms };
