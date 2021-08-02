const inquirer = require("inquirer");
/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
}); */
require("colors");

const menu = async () => {
  const options = [
    {
      type: "list",
      message: `${"Informe".cyan}`,
      name: "selected",
      choices: [
        { value: 1, name: `${"1. ".red} ${"Nuevo informe".green}` },
        { value: 2, name: `${"2. ".red} ${"Consolidado del mes".green}` },
        { value: 3, name: `${"3. ".red} ${"Buscar informe".green}` },
        { value: 4, name: `${"4. ".red} ${"Eliminar informe".green}` },
        { value: 5, name: `${"5. ".red} ${"Listar Meses".green}` },
        { value: 6, name: `${"6. ".red} ${"Salir".green}` },
      ],
    },
  ];
  const { selected } = await inquirer.prompt(options);
  return selected;
};
const question = async (message, returnValue = true) => {
  const config = [
    {
      name: "data",
      type: "input",
      message,
      validate(val) {
        if (val.length === 0 && returnValue === true) {
          return "Ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { data } = await inquirer.prompt(config);
  return data;
};
const printMessage = (msg) => {
  console.log(msg + "\n");
};
const printInform = (hours, minutes, videos, returnVisits, studies) => {
  console.log(
    `${"Tiempo ".green} -> ` +
      `${hours}:${minutes}`.yellow +
      `${" | ".red}` +
      `${"Videos ".green} -> ` +
      `${videos}`.yellow +
      `${" | ".red}` +
      `${"Revisitas ".green} -> ` +
      `${returnVisits}`.yellow +
      `${" | ".red}` +
      `${"Estudios ".green} -> ` +
      `${studies}`.yellow
  );
};
const listMonths = async () => {
  const monthsToPrint = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
  ];
  const choices = monthsToPrint.map((elm, idx) => {
    return { value: idx, name: elm, checked: true };
  });
  console.log(choices);
  const config = [
    {
      type: "checkbox",
      name: "months",
      choices,
      message: "Escoja un mes",
    },
  ];
  const { months } = await inquirer.prompt(config);
  return months;
};
module.exports = { menu, question, printMessage, printInform, listMonths };
