const fs = require("fs");
const archiveJson = "./db/data.json";
const saveInform = async (inform) => {
  const informsArray =
    (await readInforms()) !== null ? await readInforms() : [];
  informsArray.push(inform);
  fs.writeFileSync(archiveJson, JSON.stringify(informsArray));
};
const readInforms = () => {
  if (!fs.existsSync(archiveJson)) return null;
  try {
    return fs.readFileSync(archiveJson, { encoding: "utf-8" });
  } catch {
    return null;
  }
};
const getInform = (key) => {
  const informsTemp = readInforms();
  let informTemp = null;
  if (informsTemp.length !== 0) {
    informsTemp.array.forEach((elm) => {
      if (elm.id === key) informTemp = elm;
    });
  }
  return informTemp;
};
module.exports = { saveInform, readInforms, getInform };
