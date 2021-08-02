const { menu, question } = require("./helpers/inquirer");
const { saveInform, readInforms, getInform } = require("./helpers/dbHandler");
const Inform = require("./models/inform");

const main = async () => {
  let selected = 0;
  let year = null;
  let month = null;
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
        const objInform = await new Inform(
          hours,
          minutes,
          videos,
          returnVisits,
          studies,
          month,
          year
        );
        await saveInform({ id: `${month}.${year}`, objInform });
        await question(`Presione ${"ENTER".blue} para continuar`, 0);
        break;
      case 2:
        const key = `${new Date().getMonth()}.${new Date().getFullYear()}`;
        const inform = await getInform(key);
        inform !== null
          ? console.log(inform)
          : await question(
              `No hay ${"INFORME".red} para este mes. Presione ${
                "ENTER".blue
              } para continuar`,
              0
            );
        break;
      default:
        break;
    }
  }
};
const test = async () => {
  let informsasas = null;
  informsasas[5] = { maa: "asas", asas: "asas" };
  informsasas[4] = 5;
  console.log(informsasas);
};
main();
//test();
