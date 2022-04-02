import { structureFinalMap, categories, headerMap, headerKeys, alineacionKeys ,
  suspencionEjeDelanteroKeys ,
  suspencionEjeTraseroKeys ,
  opacimetroKeys ,
  analizadorDeGasesKeys ,
  frenosEje_1Keys ,
  frenosEje_2Keys ,
  frenosEje_3Keys ,
  frenosEje_4Keys ,
  frenosEje_5Keys ,
  frenosEje_6Keys ,
  frenoDeManoEje_1Keys ,
  frenoDeManoEje_2Keys ,
  frenoDeManoEje_3Keys ,
  frenoDeManoEje_4Keys ,
  frenoDeManoEje_5Keys ,
  frenoDeManoEje_6Keys ,
  sonometroKeys ,
  luxometroKeys ,
  inspeccionVisualKeys ,
  inspeccionDHKeys ,
  frenosKeys ,
  valoresCalibradosKeys ,
  lineaDePruebaKeys ,
  estadisticaDePuestosKeys ,
  noVinculadosKeys  } from "./constantCollections.js";
import { SEMICOLON,EMPTY,EMPTY_SPACE,NEW_LINE,TABS, HEADER } from "./constantVariables.js";
import {structureMap} from "./globalVariables.js"; 
// This didnt work as planned i have to wrap global variables into a function. More info appended to globalVariables.js
// import {singleFileData,mapSingleFile} from "./globalVariables.js"; 

/**
 *   Global Variable
 *   Is used to store the value of the read file. 
 *   While it's cleaned trimed parsed and deconstructed
 */
 let singleFileData = [];

 /**
  *  Global Variable 
  *  Will hold data from the txt file 
  *  already parsed, cleaned and deconstructed.
  */
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

    setTimeout(function(){
      document.getElementById("singleFileButton").click();
    },20);
   
  },
  false
);

/**
 * Button to parse data from file into json and print in text
 * As it can be called async the if validates that significative data is worth showing.
 */
document.getElementById("singleFileButton").addEventListener(
  "click",
  function (ev) {
    let fileData = returnSetOfDataSF();
    let transformedMap = populateStructure();
    let text = transformMapToJson(structureMap);

    if(transformedMap !== structureFinalMap){
      document.querySelector("#jsonContainer").innerHTML = text;
      document.querySelector("#jsonContainer").style.display = 'block';
    }


  },
  false
);


/**
 * Simple JavaScript Promise that reads a file as text.
 * 
 * @param {*} file A file to read 
 * @returns returns a promise with the file read 
 */
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
 * Reads an array an normalices the data in it to a map
 * it asumes the array has only one object
 * 
 * @returns  the map with normalized uncategorized and deconstructed data.
 */
function returnSetOfDataSF() {
  // Abort if there were no files selected
  if (!singleFileData.length) return;


  let sanitizedFileData = cleanCategories(singleFileData[0]);

  // split by newline separator
  let firstDivisionArr = sanitizedFileData.split(NEW_LINE);

  // clean empty, semicolons, and blank spaces
  let secondDivision = cleanElementsOfArray(firstDivisionArr);

  // clean previous map
  mapSingleFile = new Map(); 

  secondDivision.forEach(createMap);
  console.log("Termine ^_^ mapSingleFile" + mapSingleFile);

  return mapSingleFile;
}

function createMap(item, index, arr) {
  let itemArr = item.split("=");

  mapSingleFile.set(itemArr[0], itemArr[1]);

}

/**
 * Clean each garbage categories from the file read.
 * 
 * @param {*} data a stirng of text from the file read.
 * @returns a string of text clean from categories.
 */
function cleanCategories(data) {
  let result = data != undefined ? data : "";

  for (var i = 0; i < categories.length; i++) {
    let replaceCategories = categories[i] + "\r\n";
    result = result.replace(replaceCategories, "");
  }

  return result;
}

/**
 * Clean each element of the array from
 * - semicolons
 * - blank spaces and
 * - new lines at end of file
 * - and empty slots created by new lines at initial split of file
 * 
 * @param {*} data an array of splited text by NEW_LINE from the file read
 * @returns a very clean and tidy array, such wow, such clean.
 */
function cleanElementsOfArray(data) {
  // Abort if there were no files selected
  if (!data.length) return;

  let result = data != undefined ? data : [];

  for (var i = 0; i < data.length; i++) {
    result[i] = result[i].replaceAll(EMPTY_SPACE, "");
    result[i] = result[i].replaceAll(SEMICOLON, "");
    result[i] = result[i].replaceAll(NEW_LINE, "");
    result[i] = result[i].trim();
  }

  result = cleanArrayOfEmpty(result);

  return result;
}

/**
 * 
 * Remove empty_SPACE elements and return a new array
 * 
 * @param {*} dirtyOne the array to clean
 * @returns  A new array with no empty spaces
 */
function cleanArrayOfEmpty(dirtyOne) {
  var newArray = new Array();
  for (var i = 0; i < dirtyOne.length; i++) {
    if (dirtyOne[i]) {
      newArray.push(dirtyOne[i]);
    }
  }
  return newArray;
}
/**
 * Populates the structureMap with the data from the txt file stored in mapSinfleFile
 * 
 * @returns the structuredMap global object with each generated content replacing the placeholder.
 */
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

  /** Generates structure elements to be replaced on the model map */
  mapSingleFile.forEach(function (item, key, map) {
    generateAllStructuresOnMap(item, key, map, mappedHeader);
  });

  /** Beggining of elements replacing in structure map */
  if (mappedHeader.size > 0) {
    structureMap.set(HEADER, mappedHeader);
    console.log(structureMap);
  }

  return structureMap;
}

/**
 * Function to be called in a for each loop of the global variable mapSingleFile
 * Constructs the mappedCategories of structureMap
 * 
 * @param {*} value current value from mapSingleFile
 * @param {*} key current key from mapSingleFile
 * @param {*} map the global object mapSingleFile
 * @param {*} mappedHeader the map that will store the new mapping of elements from 
 */
function generateAllStructuresOnMap(value, key, map, mappedHeader) {
  mapHeader(key, value, mappedHeader);
}

/**
 * Function to be called in a for each loop of the global variable mapSingleFile
 * Function that maps the header structure
 * 
 * @param {*} key current key from mapSingleFile
 * @param {*} value current value from mapSingleFile
 * @param {*} mappedHeader the placeholder for data to be mapped into from data in the mapSingleFile global variable
 * @returns the new constructed map with data from the mapSingleFile global variable
 */
function mapHeader(key, value, mappedHeader) {
  for (var i = 0; i < headerKeys.length; i++) {
    if (key == headerKeys[i]) {
      //console.log(`Esta llave [${key}] `);
      //console.log(`Este valor [${value}] `);
      //console.log(`Esta llave [${headerKeys[i]}] se llama ${headerMap.get(key)} Tiene por valor ${mapSingleFile.get(key)} pertenece al elemento header ${headerKeys[i]}`);

      mappedHeader.set(headerMap.get(key), mapSingleFile.get(key));
    }
  }
  return mappedHeader;
}
/**
 * Function to be called in a for each loop of the global variable mapSingleFile
 * Function that maps the alineacion structure
 * 
 * @param {*} key current key from mapSingleFile
 * @param {*} value current value from mapSingleFile
 * @param {*} mappedAlineacion the placeholder for data to be mapped into from data in the mapSingleFile global variable
 * @returns the new constructed map with data from the mapSingleFile global variable
 */
function mapAlineacion(key, value, mappedAlineacion) {
  for (var i = 0; i < headerKeys.length; i++) {
    if (key == headerKeys[i]) {
      //console.log(`Esta llave [${key}] `);
      //console.log(`Este valor [${value}] `);
      //console.log(`Esta llave [${headerKeys[i]}] se llama ${headerMap.get(key)} Tiene por valor ${mapSingleFile.get(key)} pertenece al elemento header ${headerKeys[i]}`);

      mappedAlineacion.set(headerMap.get(key), mapSingleFile.get(key));
    }
  }
  return mappedAlineacion;
}

/**
 * Transforms the structureMap into a object 
 * And returns it as a JSON 
 * 
 * @returns Jsonified global variable structureMap.
 */
function transformMapToJson() {
  let obj = Object.fromEntries(structureMap);

  let headerObj = Object.fromEntries(structureMap.get(HEADER));
  obj.header = headerObj;

  // let jsonString = JSON.stringify(obj,null,TABS); // Stringify with tabs
  let jsonString = JSON.stringify(obj); // just the minimized json
  console.log(jsonString);

  return jsonString;
}
