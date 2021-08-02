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
        { value: 5, name: `${"5. ".red} ${"Salir".green}` },
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
module.exports = { menu, question, printMessage };
