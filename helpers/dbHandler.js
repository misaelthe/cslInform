const fs = require("fs");
const inquirer = require("inquirer");
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
const deleteInform = (key) => {
  const informsTemp = readInforms();
  let indexToDelete = null;
  informsTemp.forEach((elm, idx) => {
    if (elm.id === key) {
      indexToDelete = idx;
    }
  });
  if (indexToDelete !== null) {
    informsTemp.splice(indexToDelete, 1);
    fs.writeFileSync(archiveJson, JSON.stringify(informsTemp));
    return 0;
  }
  return -1;
};

module.exports = {
  saveInform,
  readInforms,
  getInform,
  deleteInform,
};
