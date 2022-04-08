/* 
FUNCIONES ENCADENADAS SIN DEPENDENCIA DE RESULTADOS
function task1(cb) {
  console.log("Se ejecuta task1");
  cb();
}

function task2(cb) {
  console.log("Se ejecuta task2");
  cb();
}

function task3() {
  console.log("Se ejecuta task3");
}

task1(() => {
  task2(() => {
    task3();
  });
}); */

//resultado = 3+4*2

function task1(cb) {
  let resultado1 = 4 * 2;
  console.log(resultado1);
  cb(resultado1);
}

function task2(resultado1, cb) {
  let resultado2 = 3 + resultado1;
  console.log(resultado2);
  cb(resultado2);
}

function task3(resultado2) {
  console.log(resultado2);
}

task1((resultado1) => {
  task2(resultado1, (resultado2) => {
    task3(resultado2);
  });
});
