import vision from "@google-cloud/vision";

// Creates a client
const client = new vision.ImageAnnotatorClient();

//Firts we create the image from clipboard using the java file.
const fileName = "./buffer/image.png";

// Performs text detection on the local file
const [result] = await client.textDetection(fileName);
const detections = result.textAnnotations;
//detections.forEach((text) => console.log(text.description));
console.log(detections[0].description);
