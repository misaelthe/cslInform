const { menu, question, printMessage } = require("./helpers/messageHandler");
const { saveInform, getInform } = require("./helpers/dbHandler");
const Inform = require("./models/inform");

const main = async () => {
  let selected = 0;
  let year = null;
  let month = null;
  while (selected !== 5) {
    console.clear();
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
        const objInform = new Inform(
          hours,
          minutes,
          videos,
          returnVisits,
          studies,
          month,
          year
        );
        await saveInform({ id: `${month}.${year}`, data: objInform });
        await question(`Presione ${"ENTER".blue} para continuar`, 0);
        break;
      case 2:
        const key = `${new Date().getMonth()}.${new Date().getFullYear()}`;
        const inform = getInform(key);

        if (inform) {
          const msg =
            `${"Tiempo ".green} -> ` +
            `${inform.data.hours}:${inform.data.minutes}`.yellow +
            `${" | ".red}` +
            `${"Videos ".green} -> ` +
            `${inform.data.videos}`.yellow +
            `${" | ".red}` +
            `${"Revisitas ".green} -> ` +
            `${inform.data.returnVisits}`.yellow +
            `${" | ".red}` +
            `${"Estudios ".green} -> ` +
            `${inform.data.studies}`.yellow;
          printMessage(msg);
          await question(`Presione ${"ENTER".blue} para continuar`, 0);
        } else
          await question(
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
