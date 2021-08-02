const {
  menu,
  question,
  printMessage,
  printInform,
  listMonths,
} = require("./helpers/messageHandler");
const { saveInform, getInform, deleteInform } = require("./helpers/dbHandler");
const Inform = require("./models/inform");

const main = async () => {
  let selected = 0;
  let year = null;
  let month = null;
  while (selected !== 6) {
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
        await question(`Presione ${"ENTER".blue} para continuar`, false);
        break;
      case 2:
        const keyOptionTwo = `${new Date().getMonth()}.${new Date().getFullYear()}`;
        const informOptionTwo = getInform(keyOptionTwo);

        if (informOptionTwo) {
          printInform(
            informOptionTwo.data.hours,
            informOptionTwo.data.minutes,
            informOptionTwo.data.videos,
            informOptionTwo.data.returnVisits,
            informOptionTwo.data.studies
          );
          await question(`Presione ${"ENTER".blue} para continuar`, false);
        } else
          await question(
            `No hay ${"INFORME".red} para este mes. Presione ${
              "ENTER".blue
            } para continuar`,
            false
          );
        break;
      case 3:
        year = await question(`Ingrese el ${"AÑO".blue} a buscar: `);
        month = await question(
          `Ingrese el ${"MES".blue} a buscar (${"SOLO SU NUMERO".red}): `
        );
        const keyOptionThree = `${month - 1}.${year}`;
        const informOptionThree = getInform(keyOptionThree);
        if (informOptionThree) {
          printInform(
            informOptionThree.data.hours,
            informOptionThree.data.minutes,
            informOptionThree.data.videos,
            informOptionThree.data.returnVisits,
            informOptionThree.data.studies
          );
          await question(`Presione ${"ENTER".blue} para continuar`, false);
        } else
          await question(
            `No hubo ${"INFORME".red} para ese mes. Presione ${
              "ENTER".blue
            } para continuar`,
            false
          );
        break;
      case 4:
        year = await question(`Ingrese el ${"AÑO".blue} a eliminar: `);
        month = await question(
          `Ingrese el ${"MES".blue} a eliminar (${"SOLO SU NUMERO".red}): `
        );
        const keyOptionFour = `${month - 1}.${year}`;
        const outcomeFour = await deleteInform(keyOptionFour);
        outcomeFour === 0
          ? await question(
              `Excelente. Presione ${"ENTER".blue} para continuar`,
              false
            )
          : await question(
              `No existe informe para ese año. Presione ${
                "ENTER".blue
              } para continuar`,
              false
            );
        break;
      case 5:
        const monthsSelected = await listMonths();
        await question(`Presione ${"ENTER".blue} para continuar`, false);
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
