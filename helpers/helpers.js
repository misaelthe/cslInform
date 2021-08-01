const colors = require("colors");
const ask = (msg) => {
  return new Promise((res) => {
    const lineManager = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    lineManager.question(`${msg}\n`, (response) => {
      lineManager.close();
      res(response);
    });
  });
};

const menu = () => {
  console.log(`${"-------------------".yellow}`);
  console.log(`${"Registro de Informe".cyan}`);
  console.log(`${"-------------------".yellow}`);
  console.log(`${"1. ".red} ${"Nuevo informe".green}`);
  console.log(`${"2. ".red} ${"Consolidado del mes".green}`);
  console.log(`${"3. ".red} ${"Buscar informe".green}`);
  console.log(`${"4. ".red} ${"Eliminar informe".green}\n`);
  console.log(`${"5. ".red} ${"Salir".green}`);
};
module.exports = { ask, menu };
