import vision from "@google-cloud/vision";
import child_process from "child_process";
// Creates a client
const client = new vision.ImageAnnotatorClient();

//Firts we create the image from clipboard using the java file.
const fileName = "./buffer/image.png";

//1º Ejecutar el fichero .jar para generar la imagen que después vamos a enviar para sacar el texto
//exec a .cmd file using node

function task1(cb) {
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
  cb();
}

//2º  Performs text detection on the local file
function task2(cb) {
  const [result] = client.textDetection(fileName);
  cb(result);
}

function task3(result) {
  const detections = result.textAnnotations;
  //detections.forEach((text) => console.log(text.description));
  console.log(detections[0].description);
  cb();
}

task1(() => {
  task2((r2) => {
    task3(r2);
  });
});

/* 
CALLBACK CON TASK1 Y TASK2
function task1(cb) {
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
    cb();
  }
  
  //2º  Performs text detection on the local file
  function task2() {
    // const [result] = client.textDetection(fileName);
    console.log(client);
  }
  
  function task3(result, cb) {
    const detections = result.textAnnotations;
    //detections.forEach((text) => console.log(text.description));
    console.log(detections[0].description);
    cb();
  }
  
  task1(() => {
    task2();
  }); */
