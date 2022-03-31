const characteristics = ["[HEADER]", "Datos Vehículo", "Datos Propietario", "Resultado Luxometro", "Resultado Sonometro", "Resultado Gases", "Resultado Opacimetro", "Resultados Alineador al Paso", "Resultados Suspensión Eje Delantero", "Resultados Suspensión Eje Trasero", "Resultado Frenometro Eje Delantero", "Resultado Frenometro Eje Trasero", "Resultado Freno de Mano Eje Delantero", "Resultado Freno de Mano Eje Trasero", "Pruebas de Rodadura", "Parametros del Equipo ", "Datos de Generales del Ensayo", "END MET DATA", "------------End Of File--------------", "999999=Fin de Archivo", "[ENDOFFILE]", "999999=END OF FILE", "[DATAOUT]"];


const fieldNamingMap = new Map([
['10100','Patente'],
['10102','Numero de Chasis'],
['10104','Numero Motor'],
['10200','Marca del Vehículo'],
['10201','Año de Fabricación'],
['10202','Sub Modelo'],
['10203','Modelo'],
['10204','Kilómetros'],
['10208','Tipo Vehiculo'],
['10209','Combustible'],
['10210','Cantidad de Ejes'],
['10300','Apellido'],
['10301','Nombre'],
['10302','Dirección'],
['10303','Documento de Identidad'],
['10304','Email'],
['10305','Teléfono'],
['10306','Localidad'],
['10307','Provincia'],
['16001','ID PRUEBA (Referencia Tramite)'],
['16000','Fecha Hora (AAAAMMDDhhmmss)'],
['15000','Prueba de Alineación'],
['15001','Prueba de Suspension'],
['15002','Prueba de Frenos'],
['15003','Prueba de Frenos de Mano'],
['15004','Prueba de Luces'],
['15005','Prueba de Gases'],
['15006','Prueba de Insp. Visual'],
['15007','Prueba de Isnp. Fosa'],
['15008','Prueba Sonometro'],
['30100','Resultado Alineación Eje 1'],
['30101','Resultado Alineación Eje 2'],
['30102','Resultado Alineación Eje 3'],
['30103','Resultado Alineación Eje 4'],
['30104','Resultado Alineación Eje 5'],
['30105','Resultado Alineación Eje 6'],
['31000','Rendimiento Delantero Derecho'],
['31001','Rendimiento Delantero Izquierdo'],
['31010','Amplitud Máxima Lado Derecho'],
['31011','Amplitud Máximo Lado Izquierdo'],
['31020','Peso Lado Derecho'],
['31021','Peso Lado Izquierdo'],
['31022','Diferencia Rendimiento Lado a Lado'],
['31100','Rendimiento Delantero Derecho'],
['31101','Rendimiento Delantero Izquierdo'],
['31110','Amplitud Máxima Lado Derecho'],
['31111','Amplitud Máximo Lado Izquierdo'],
['31120','Peso Lado Derecho'],
['31121','Peso Lado Izquierdo'],
['31122','Diferencia Rendimiento Lado a Lado'],
['38500','Resultado Medición Opacidad'],
['39000','Resultado Monoxido de Carbono CO'],
['39001','Resultado Partes por Millón HC'],
['39002','Resultado Sensor de Oxigeno O2'],
['39003','Resultado Partes por Millón Nox'],
['39004','Resultado Dioxido de Carbono CO1'],
['39005','Lambda'],
['50000','Fuerza de Frenado Lado Derecho'],
['50001','Fuerza de Frenado Lado izquierdo'],
['50010','Diferencia Fza. Frenado Lado a Lado'],
['50020','Ovalidad Lado Derecho'],
['50021','Ovalidad Lado Izquierdo'],
['50030','Resistencia Lado Derecho'],
['50031','Resistencia Lado Izquierdo'],
['50040','Rendimiento del Eje'],
['50100','Peso Lado Derecho'],
['50101','Peso Lado Izquierdo'],
['51000','Fuerza de Frenado Lado Derecho'],
['51001','Fuerza de Frenado Lado izquierdo'],
['51010','Diferencia Fza. Frenado Lado a Lado'],
['51020','Ovalidad Lado Derecho'],
['51021','Ovalidad Lado Izquierdo'],
['51030','Resistencia Lado Derecho'],
['51031','Resistencia a la Rodadura Lado Izquierdo'],
['51040','Rendimiento del Eje'],
['51100','Peso Lado Derecho'],
['51101','Peso Lado Izquierdo'],
['52000','Fuerza de Frenado Lado Derecho'],
['52001','Fuerza de Frenado Lado izquierdo'],
['52010','Diferencia Fza. Frenado Lado a Lado'],
['52020','Ovalidad Lado Derecho'],
['52021','Ovalidad Lado Izquierdo'],
['52030','Resistencia Lado Derecho'],
['52031','Resistencia Lado Izquierdo'],
['52040','Rendimiento del Eje'],
['52100','Peso Lado Derecho'],
['52101','Peso Lado Izquierdo'],
['53000','Fuerza de Frenado Lado Derecho'],
['53001','Fuerza de Frenado Lado izquierdo'],
['53010','Diferencia Fza. Frenado Lado a Lado'],
['53020','Ovalidad Lado Derecho'],
['53021','Ovalidad Lado Izquierdo'],
['53030','Resistencia Lado Derecho'],
['53031','Resistencia Lado Izquierdo'],
['53040','Rendimiento del Eje'],
['53100','Peso Lado Derecho'],
['53101','Peso Lado Izquierdo'],
['54000','Fuerza de Frenado Lado Derecho'],
['54001','Fuerza de Frenado Lado izquierdo'],
['54010','Diferencia Fza. Frenado Lado a Lado'],
['54020','Ovalidad Lado Derecho'],
['54021','Ovalidad Lado Izquierdo'],
['54030','Resistencia Lado Derecho'],
['54031','Resistencia Lado Izquierdo'],
['54040','Rendimiento del Eje'],
['54100','Peso Lado Derecho'],
['54101','Peso Lado Izquierdo'],
['55000','Fuerza de Frenado Lado Derecho'],
['55001','Fuerza de Frenado Lado izquierdo'],
['55010','Diferencia Fza. Frenado Lado a Lado'],
['55020','Ovalidad Lado Derecho'],
['55021','Ovalidad Lado Izquierdo'],
['55030','Resistencia Lado Derecho'],
['55031','Resistencia Lado Izquierdo'],
['55040','Rendimiento del Eje'],
['55100','Peso Lado Derecho'],
['55101','Peso Lado Izquierdo'],
['50250','Fuerza de Frenado Lado Derecho'],
['50251','Fuerza de Frenado Lado izquierdo'],
['50260','Diferencia Fza. Frenado Lado a Lado'],
['50240','Rendimiento del Eje'],
['50270','Ovalidad Lado Derecho'],
['50271','Ovalidad Lado Izquierdo'],
['50280','Resistencia Lado Derecho'],
['50281','Resistencia Lado Izquierdo'],
['51250','Fuerza de Frenado Lado Derecho'],
['51251','Fuerza de Frenado Lado izquierdo'],
['51260','Diferencia Fza. Frenado Lado a Lado'],
['51240','Rendimiento del Eje'],
['51270','Ovalidad Lado Derecho'],
['51271','Ovalidad Lado Izquierdo'],
['51280','Resistencia Lado Derecho'],
['51281','Resistencia Lado Izquierdo'],
['52250','Fuerza de Frenado Lado Derecho'],
['52251','Fuerza de Frenado Lado izquierdo'],
['52260','Diferencia Fza. Frenado Lado a Lado'],
['52240','Rendimiento del Eje'],
['52270','Ovalidad Lado Derecho'],
['52271','Ovalidad Lado Izquierdo'],
['52280','Resistencia Lado Derecho'],
['52281','Resistencia Lado Izquierdo'],
['53250','Fuerza de Frenado Lado Derecho'],
['53251','Fuerza de Frenado Lado izquierdo'],
['53260','Diferencia Fuerza Frenado Lado a Lado'],
['53240','Rendimiento del Eje'],
['53270','Ovalidad Lado Derecho'],
['53271','Ovalidad Lado Izquierdo'],
['53280','Resistencia a la Rodadura Lado Derecho'],
['53281','Resistencia a la Rodadura Lado Izquierdo'],
['54250','Fuerza de Frenado Lado Derecho'],
['54251','Fuerza de Frenado Lado izquierdo'],
['54260','Diferencia Fza. Frenado Lado a Lado'],
['54240','Rendimiento del Eje'],
['54270','Ovalidad Lado Derecho'],
['54271','Ovalidad Lado Izquierdo'],
['54280','Resistencia a la Rodadura Lado Derecho'],
['54281','Resistencia a la Rodadura Lado Izquierdo'],
['55250','Fuerza de Frenado Lado Derecho'],
['55251','Fuerza de Frenado Lado izquierdo'],
['55260','Diferencia Fuerza Frenado Lado a Lado'],
['55240','Rendimiento del Eje'],
['55270','Ovalidad Lado Derecho'],
['55271','Ovalidad Lado Izquierdo'],
['55280','Resistencia a la Rodadura Lado Derecho'],
['55281','Resistencia a la Rodadura Lado Izquierdo'],
['60000','Valor de Medición'],
['70000','Alineación Faro Derecho Horizontal'],
['70001','Alineación Faro Izquierdo Horizontal'],
['70010','Intensidad Alta Derecha'],
['70011','Intensidad Alta Izquierda'],
['70012','Intensidad Baja Derecha'],
['70013','Intensidad Baja Izquierda'],
['70014','Intensidad Auxiliar Derecho'],
['70015','Intensidad Auxiliar Izquierdo'],
['70016','Alineación Faro Derecho Vertical'],
['70017','Alineación Faro Izquierdo Vertical'],
['100001','Motivo de Corte de Prueba de Freno Eje 1'],
['100002','Motivo de Corte de Prueba de Freno Eje 2'],
['100003','Motivo de Corte de Prueba de Freno Eje 3'],
['100004','Motivo de Corte de Prueba de Freno Eje 4'],
['100005','Motivo de Corte de Prueba de Freno Eje 5'],
['100006','Motivo de Corte de Prueba de Freno Eje 6'],
['100007','Motivo de Corte de Prueba de F. Mano Eje 1'],
['100008','Motivo de Corte de Prueba de F. Mano Eje 2'],
['100009','Motivo de Corte de Prueba de F. Mano Eje 3'],
['100010','Motivo de Corte de Prueba de F. Mano Eje 4'],
['100011','Motivo de Corte de Prueba de F. Mano Eje 5'],
['100012','Motivo de Corte de Prueba de F. Mano Eje 6'],
['100013','Valor de Cero de BF Derecho'],
['100014','Valor de Cero de BF Izquierdo'],
['100015','Valor de Cero Balanza Derecha'],
['100016','Valor de Cero de Balanza Izquierda'],
['100017','Valor de Ganancia BF Izquierdo'],
['100018','Valor de Ganancia de BF Derecho'],
['100019','Valor de Ganancia de Balanza Izquierda'],
['100020','Valor de Ganancia de Balanza Derecha'],
['80000','Número de Línea'],
['80001','Fecha ingreso al Puesto 1'],
['80002','Fecha de salida del Puesto 1'],
['80003','Operador Puesto 1'],
['80004','Fecha ingreso al Puesto 2'],
['80005','Fecha de salida del Puesto 2'],
['80006','Operador Puesto 2'],
['80007','Fecha ingreso al Puesto 3'],
['80008','Fecha de salida del Puesto 3'],
['80009','Operador Puesto 3'],
['80010','Fecha ingreso al Puesto 4'],
['80011','Fecha de salida del Puesto 4'],
['80012','Operador Puesto 4'],
['80013','Fecha ingreso al Puesto 5'],
['80014','Fecha de salida del Puesto 5'],
['80015','Operador Puesto 5'],
['80016','Fecha ingreso al Puesto 6'],
['80017','Fecha de salida del Puesto 6'],
['80018','Operador Puesto 6'],
['80019','Fecha ingreso al Puesto 7'],
['80020','Fecha de salida del Puesto 7'],
['80021','Operador Puesto 7'],
['80022','Fecha ingreso al Puesto 8'],
['80023','Fecha de salida del Puesto 8'],
['80024','Operador Puesto 8'],
['80025','Fecha ingreso al Puesto 9'],
['80026','Fecha de salida del Puesto 9'],
['80027','Operador Puesto 9'],
['80028','Fecha ingreso al Puesto 10'],
['80029','Fecha de salida del Puesto 10'],
['80030','Operador Puesto 10'],
['80031','Nro de Línea Pto1'],
['80032','Nro de Línea Pto2'],
['80033','Nro de Línea Pto3'],
['80034','Nro de Línea Pto4'],
['80035','Nro de Línea Pto5'],
['80036','Nro de Línea Pto6'],
['80037','Nro de Línea Pto7'],
['80038','Nro de Línea Pto8'],
['80039','Nro de Línea Pto9'],
['80040','Nro de Línea Pto10']
]);


const NEW_LINE = "\r\n";

let singleFileData = [];
let sanitizedFileData = "";
let mapSingleFile = new Map();
let mapSingleFileDetails = new Map();
let finalArray = [];


// Handle multiple fileuploads
document.getElementById("singleFileInput").addEventListener("change", function (ev) {
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
    console.log(values);
    singleFileData.push(values.toString())
  });
}, false);

document.getElementById("singleFileButton").addEventListener("click", function (ev) {

  returnSetOfDataSF(singleFileData);

}, false);

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

  sanitizedFileData = cleanCharacteristics(file[0]);

  let firstDivisionArr = sanitizedFileData.split(NEW_LINE);

  let secondDivision = cleanElementsOfArray(firstDivisionArr);
  finalArray = secondDivision ;

  mapSingleFile = new Map(); // clean previous map
  mapSingleFileDetails = new Map(); // clean previous map
  secondDivision.forEach(createMap)
  console.log("Termine ^_^ mapSingleFile " + mapSingleFile);
  console.log("Termine ^_^ mapSingleFileDetails" + mapSingleFileDetails);

}

function createMap(item, index, arr) {


  itemArr = item.split("=");

  //* Si el elemento existe, nombralo sino pone el numero */
  if (fieldNamingMap.get(itemArr[0]) != undefined ) {
    mapSingleFileDetails.set(fieldNamingMap.get(itemArr[0]) ,itemArr[1])
  } else {
    mapSingleFileDetails.set(itemArr[0], itemArr[1]);
  }
  
  mapSingleFile.set(itemArr[0], itemArr[1]);

}

/**
 * Clean each characteristic of the data 
 */
function cleanCharacteristics(data) {

  let result = (data != undefined) ? data : "";

  for (var i = 0; i < characteristics.length; i++) {
    let replaceCharacteristic = (characteristics[i] + "\r\n");
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

  let result = (data != undefined) ? data : [];

  for (var i = 0; i < data.length; i++) {
    const EMPTY = " ";
    const DOT_COMA = ";";


    result[i] = result[i].replaceAll(EMPTY, "");
    result[i] = result[i].replaceAll(DOT_COMA, "");
    result[i] = result[i].replaceAll(NEW_LINE, "");
    result[i] = result[i].trim() ;
  }

  result = cleanArray(result) ;

  return result;

}
/**
 * remove empty elements and return a new array
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

