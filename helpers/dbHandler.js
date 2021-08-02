const fs = require("fs");
const archiveJson = "./db/data.json";

const saveInform = async (inform) => {
  let informsArray = await readInforms();
  if (!informsArray) {
    informsArray = [];
  }
  informsArray.push(inform);
  fs.writeFileSync(archiveJson, JSON.stringify(informsArray));
};
const readInforms = () => {
  if (!fs.existsSync(archiveJson)) return null;
  try {
    const rd = fs.readFileSync(archiveJson, { encoding: "utf-8" });
    return JSON.parse(rd);
  } catch {
    /*CONTROLAR SI HAY ALGUN PROBLEM*/
    return null;
  }
};
const getInform = (key) => {
  const informsTemp = readInforms();

  if (informsTemp !== null) {
    let inform = null;
    informsTemp.forEach((elm) => {
      if (elm.id === key) {
        inform = elm;
      }
    });
    return inform;
  }
  return null;
};
module.exports = { saveInform, readInforms, getInform };
