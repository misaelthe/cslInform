const { ask, menu } = require("./helpers/helpers");

const main = async () => {
  let key = "";
  while (key != "5") {
    console.clear();
    await menu();
    console.log("valor1" + key);
    key = await ask(`Ingrese numero y presione ${"ENTER".blue}`).then((res) => {
      console.log("res" + res);
      return res;
    });
    console.log("valor2" + key);
  }
};
main();
