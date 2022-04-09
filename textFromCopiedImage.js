import vision from "@google-cloud/vision";
import child_process from "child_process";
//Creamos un cliente
const client = new vision.ImageAnnotatorClient();

const fileName = "./buffer/image.png";

//1º Ejecutar el fichero .jar para generar la imagen que después vamos a enviar para sacar el texto
//exec a .cmd file using node

function task1() {
  child_process.exec(
    "java -jar ./ClipboardToImageData.jar",
    (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }
      if (stderr) {
        // the command had an error
        console.log(stderr);
        return;
      }
      console.log(stdout);
    }
  );
}

//2º  Performs text detection on the local file

async function task2() {
  const [result] = await client.textDetection(fileName);

  const detections = result.textAnnotations;

  console.log(detections[0].description);
}

task1();
setTimeout(() => {
  task2();
}, 1000);
