const { menu, askConfirmation, question } = require("./helpers/inquirer");
const { saveInform, readInforms } = require("./helpers/dbHandler");
const Informs = require("./models/informs");

const main = async () => {
  const informs = new Informs();
  let selected = 0;
  let year = null;
  let month = null;
  const dataRead = readInforms();
  if (dataRead) {
    informs.loadInforms(dataRead);
  }
  while (selected !== 5) {
    selected = await menu();
    switch (selected) {
      case 1:
        month = new Date().getMonth();
        year = new Date().getFullYear();
        const hours = await question(`Ingrese ${"HORAS: ".blue}`);
        const minutes = await question(`Ingrese ${"MINUTOS: ".blue}`);
        const videos = await question(`Ingrese ${"VIDEOS: ".blue}`);
        const returnVisits = await question(`Ingrese ${"REVISITAS: ".blue}`);
        const studies = await question(`Ingrese ${"ESTUDIOS: ".blue}`);
        await informs.createInform(
          hours,
          minutes,
          videos,
          returnVisits,
          studies,
          month,
          year
        );
        await saveInform(informs._listInforms);
        await question(`Presione ${"ENTER".blue} para continuar`, 0);
        break;
      case 2:
        year = new Date().getFullYear();
        month = new Date().getMonth();
        const inform = await informs.getCurrentInform(month, year);
        inform != null
          ? console.log(inform)
          : console.log(`No hay ${"INFORME".red} para este mes`);
        await askConfirmation();
        break;
      default:
        break;
    }
  }
};
const test = async () => {
  let informs = [];
  informs[5] = { maa: "asas", asas: "asas" };
  informs[4] = 5;
  const mapas = [1, 2, 3, 4];
  informs = Object.assign({}, mapas);
  console.log(informs);
  mapas[0] = 10;
  console.log(informs);
};
main();
//test();
