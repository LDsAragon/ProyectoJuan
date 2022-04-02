import { structureMap, characteristics, headerMap, headerArray } from "./constantMaps.js";

const NEW_LINE = "\r\n";
const EMPTY_SPACE = " ";
const EMPTY = "";
const DOT_COMA = ";";
const TABS = "\t"

let singleFileData = [];
let mapSingleFile = new Map();


// Handle multiple fileuploads
document.getElementById("file-input").addEventListener(
  "change",
  function (ev) {
    let files = ev.currentTarget.files;
    let readers = [];

    // Abort if there were no files selected
    if (!files.length) return;

    // Store promises in array
    for (let i = 0; i < files.length; i++) {
      readers.push(readFileAsText(files[i]));
    }

    singleFileData = [];

    // Trigger Promises
    Promise.all(readers).then((values) => {
      // Values will be an array that contains an item
      // with the text of every selected file
      // ["File1 Content", "File2 Content" ... "FileN Content"]
      singleFileData.push(values.toString());
    });

    document.getElementById("singleFileButton").click();

  },
  false
);

document.getElementById("singleFileButton").addEventListener(
  "click",
  function (ev) {
    returnSetOfDataSF(singleFileData);
    populateStructure();
    let text = transformMapToJson(structureMap);
    document.querySelector("#jsonContainer").innerHTML = text;
    document.querySelector("#jsonContainer").style.display = 'block';
  },
  false
);


/**
 *  Simple JavaScript Promise that reads a file as text.
 **/
function readFileAsText(file) {
  return new Promise(function (resolve, reject) {
    let fr = new FileReader();

    fr.onload = function () {
      resolve(fr.result);
    };

    fr.onerror = function () {
      reject(fr);
    };

    fr.readAsText(file);
  });
}

/**
 * Reads an array an normalices the data in it
 * it asumes the array has only one object
 **/
function returnSetOfDataSF(file) {
  // Abort if there were no files selected
  if (!file.length) return;

  let sanitizedFileData = cleanCharacteristics(file[0]);

  let firstDivisionArr = sanitizedFileData.split(NEW_LINE);

  let secondDivision = cleanElementsOfArray(firstDivisionArr);

  mapSingleFile = new Map(); // clean previous map

  secondDivision.forEach(createMap);
  console.log("Termine ^_^ mapSingleFile" + mapSingleFile);
}

function createMap(item, index, arr) {
  let itemArr = item.split("=");

  mapSingleFile.set(itemArr[0], itemArr[1]);

}

/**
 * Clean each characteristic of the data
 */
function cleanCharacteristics(data) {
  let result = data != undefined ? data : "";

  for (var i = 0; i < characteristics.length; i++) {
    let replaceCharacteristic = characteristics[i] + "\r\n";
    result = result.replace(replaceCharacteristic, "");
  }

  return result;
}

/**
 * clean each element of the array from comas blank spaces and new lines at end of file
 */
function cleanElementsOfArray(data) {
  // Abort if there were no files selected
  if (!data.length) return;

  let result = data != undefined ? data : [];

  for (var i = 0; i < data.length; i++) {
    result[i] = result[i].replaceAll(EMPTY_SPACE, "");
    result[i] = result[i].replaceAll(DOT_COMA, "");
    result[i] = result[i].replaceAll(NEW_LINE, "");
    result[i] = result[i].trim();
  }

  result = cleanArray(result);

  return result;
}
/**
 * remove empty_SPACE elements and return a new array
 */
function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

function populateStructure() {
  let mappedHeader = new Map();
  let mappedAlineacion = new Map();
  let mappedSuspencionEjeDelantero = new Map();
  let mappedSuspencionEjeTrasero = new Map();
  let mappedOpacimetro = new Map();
  let mappedAnalizadorDeGases = new Map();
  let mappedFrenosEje_1 = new Map();
  let mappedFrenosEje_2 = new Map();
  let mappedFrenosEje_3 = new Map();
  let mappedFrenosEje_4 = new Map();
  let mappedFrenosEje_5 = new Map();
  let mappedFrenosEje_6 = new Map();
  let mappedFrenoDeManoEje_1 = new Map();
  let mappedFrenoDeManoEje_2 = new Map();
  let mappedFrenoDeManoEje_3 = new Map();
  let mappedFrenoDeManoEje_4 = new Map();
  let mappedFrenoDeManoEje_5 = new Map();
  let mappedFrenoDeManoEje_6 = new Map();
  let mappedSonometro = new Map();
  let mappedLuxometro = new Map();
  let mappedInspeccionVisual = new Map();
  let mappedInspeccionDH = new Map();
  let mappedFrenos = new Map();
  let mappedValoresCalibrados = new Map();
  let mappedLineaDePrueba = new Map();
  let mappedEstadisticaDePuestos = new Map();

  mapSingleFile.forEach(function (item, key, map) {
    populateAllStructuresOnMap(item, key, map, mappedHeader);
  });

  if (mappedHeader.size > 0) {
    structureMap.set("HEADER", mappedHeader);
    console.log(structureMap);
  }

  return structureMap;
}

function populateAllStructuresOnMap(value, key, map, mappedHeader) {
  mapHeader(key, value, mappedHeader);
}
function mapHeader(key, value, mappedHeader) {
  for (var i = 0; i < headerArray.length; i++) {
    if (key == headerArray[i]) {
      //console.log(`Esta llave [${key}] `);
      //console.log(`Este valor [${value}] `);
      //console.log(`Esta llave [${headerArray[i]}] se llama ${headerMap.get(key)} Tiene por valor ${mapSingleFile.get(key)} pertenece al elemento header ${headerArray[i]}`);

      mappedHeader.set(headerMap.get(key), mapSingleFile.get(key));
    }
  }
  return mappedHeader;
}

function mapAlineacion(key, value, mappedAlineacion) {
  for (var i = 0; i < headerArray.length; i++) {
    if (key == headerArray[i]) {
      //console.log(`Esta llave [${key}] `);
      //console.log(`Este valor [${value}] `);
      //console.log(`Esta llave [${headerArray[i]}] se llama ${headerMap.get(key)} Tiene por valor ${mapSingleFile.get(key)} pertenece al elemento header ${headerArray[i]}`);

      mappedAlineacion.set(headerMap.get(key), mapSingleFile.get(key));
    }
  }
  return mappedAlineacion;
}

function transformMapToJson(map) {
  let obj = Object.fromEntries(map);

  let headerObj = Object.fromEntries(map.get("HEADER"));
  obj.HEADER = headerObj;

  let jsonString = JSON.stringify(obj,null,TABS); // Stringify with tabs
  console.log(jsonString);

  return jsonString;
}
