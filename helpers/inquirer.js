const inquirer = require("inquirer");
require("colors");

const menu = async () => {
  const options = [
    {
      type: "list",
      message: `${"Registro de Informe".cyan}`,
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
  console.clear();
  const { selected } = await inquirer.prompt(options);
  return selected;
};
const question = async (message, acceptEnter = 0) => {
  const config = [
    {
      name: "data",
      type: "input",
      message,
      validation(val) {
        if (val.length === 0 && acceptEnter === 1) {
          return "Ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { data } = await inquirer.prompt(config);
  return data;
};
module.exports = { menu, question };
