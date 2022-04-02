import {
  HEADER,
  ALINEACION,
  SUSPENSION_EJE_DELANTERO,
  SUSPENSION_EJE_TRASERO,
  OPACIMETRO,
  ANALIZADOR_DE_GASES,
  FRENOS_EJE_1,
  FRENOS_EJE_2,
  FRENOS_EJE_3,
  FRENOS_EJE_4,
  FRENOS_EJE_5,
  FRENOS_EJE_6,
  FRENO_DE_MANO_EJE_1,
  FRENO_DE_MANO_EJE_2,
  FRENO_DE_MANO_EJE_3,
  FRENO_DE_MANO_EJE_4,
  FRENO_DE_MANO_EJE_5,
  FRENO_DE_MANO_EJE_6,
  SONOMETRO,
  LUXOMETRO,
  INSPECCION_VISUAL,
  INSPECCION_DH,
  FRENOS,
  VALORES_CALIBRADOS,
  LINEA_DE_PRUEBA,
  ESTADISTICA_DE_PUESTOS,
  NO_VINCULADOS,
} from "./constantVariables.js";

/**
 * Dirty Categories used to clean the trash data from the read file.
 */
export const categories = [
  "[HEADER]",
  "Datos Vehículo",
  "Datos Propietario",
  "Resultado Luxometro",
  "Resultado Sonometro",
  "Resultado Gases",
  "Resultado Opacimetro",
  "Resultados Alineador al Paso",
  "Resultados Suspensión Eje Delantero",
  "Resultados Suspensión Eje Trasero",
  "Resultado Frenometro Eje Delantero",
  "Resultado Frenometro Eje Trasero",
  "Resultado Freno de Mano Eje Delantero",
  "Resultado Freno de Mano Eje Trasero",
  "Pruebas de Rodadura",
  "Parametros del Equipo ",
  "Datos de Generales del Ensayo",
  "END MET DATA",
  "------------End Of File--------------",
  "999999=Fin de Archivo",
  "[ENDOFFILE]",
  "999999=END OF FILE",
  "[DATAOUT]",
];
/**
 * All data from the excel, just in case.
 */
export const fieldNamingMap = new Map([
  ["10100", "Patente"],
  ["10102", "Numero de Chasis"],
  ["10104", "Numero Motor"],
  ["10200", "Marca del Vehículo"],
  ["10201", "Año de Fabricación"],
  ["10202", "Sub Modelo"],
  ["10203", "Modelo"],
  ["10204", "Kilómetros"],
  ["10208", "Tipo Vehiculo"],
  ["10209", "Combustible"],
  ["10210", "Cantidad de Ejes"],
  ["10300", "Apellido"],
  ["10301", "Nombre"],
  ["10302", "Dirección"],
  ["10303", "Documento de Identidad"],
  ["10304", "Email"],
  ["10305", "Teléfono"],
  ["10306", "Localidad"],
  ["10307", "Provincia"],
  ["16001", "ID PRUEBA (Referencia Tramite)"],
  ["16000", "Fecha Hora (AAAAMMDDhhmmss)"],
  ["15000", "Prueba de Alineación"],
  ["15001", "Prueba de Suspension"],
  ["15002", "Prueba de Frenos"],
  ["15003", "Prueba de Frenos de Mano"],
  ["15004", "Prueba de Luces"],
  ["15005", "Prueba de Gases"],
  ["15006", "Prueba de Insp. Visual"],
  ["15007", "Prueba de Isnp. Fosa"],
  ["15008", "Prueba Sonometro"],
  ["30100", "Resultado Alineación Eje 1"],
  ["30101", "Resultado Alineación Eje 2"],
  ["30102", "Resultado Alineación Eje 3"],
  ["30103", "Resultado Alineación Eje 4"],
  ["30104", "Resultado Alineación Eje 5"],
  ["30105", "Resultado Alineación Eje 6"],
  ["31000", "Rendimiento Delantero Derecho"],
  ["31001", "Rendimiento Delantero Izquierdo"],
  ["31010", "Amplitud Máxima Lado Derecho"],
  ["31011", "Amplitud Máximo Lado Izquierdo"],
  ["31020", "Peso Lado Derecho"],
  ["31021", "Peso Lado Izquierdo"],
  ["31022", "Diferencia Rendimiento Lado a Lado"],
  ["31100", "Rendimiento Delantero Derecho"],
  ["31101", "Rendimiento Delantero Izquierdo"],
  ["31110", "Amplitud Máxima Lado Derecho"],
  ["31111", "Amplitud Máximo Lado Izquierdo"],
  ["31120", "Peso Lado Derecho"],
  ["31121", "Peso Lado Izquierdo"],
  ["31122", "Diferencia Rendimiento Lado a Lado"],
  ["38500", "Resultado Medición Opacidad"],
  ["39000", "Resultado Monoxido de Carbono CO"],
  ["39001", "Resultado Partes por Millón HC"],
  ["39002", "Resultado Sensor de Oxigeno O2"],
  ["39003", "Resultado Partes por Millón Nox"],
  ["39004", "Resultado Dioxido de Carbono CO1"],
  ["39005", "Lambda"],
  ["50000", "Fuerza de Frenado Lado Derecho"],
  ["50001", "Fuerza de Frenado Lado izquierdo"],
  ["50010", "Diferencia Fza. Frenado Lado a Lado"],
  ["50020", "Ovalidad Lado Derecho"],
  ["50021", "Ovalidad Lado Izquierdo"],
  ["50030", "Resistencia Lado Derecho"],
  ["50031", "Resistencia Lado Izquierdo"],
  ["50040", "Rendimiento del Eje"],
  ["50100", "Peso Lado Derecho"],
  ["50101", "Peso Lado Izquierdo"],
  ["51000", "Fuerza de Frenado Lado Derecho"],
  ["51001", "Fuerza de Frenado Lado izquierdo"],
  ["51010", "Diferencia Fza. Frenado Lado a Lado"],
  ["51020", "Ovalidad Lado Derecho"],
  ["51021", "Ovalidad Lado Izquierdo"],
  ["51030", "Resistencia Lado Derecho"],
  ["51031", "Resistencia a la Rodadura Lado Izquierdo"],
  ["51040", "Rendimiento del Eje"],
  ["51100", "Peso Lado Derecho"],
  ["51101", "Peso Lado Izquierdo"],
  ["52000", "Fuerza de Frenado Lado Derecho"],
  ["52001", "Fuerza de Frenado Lado izquierdo"],
  ["52010", "Diferencia Fza. Frenado Lado a Lado"],
  ["52020", "Ovalidad Lado Derecho"],
  ["52021", "Ovalidad Lado Izquierdo"],
  ["52030", "Resistencia Lado Derecho"],
  ["52031", "Resistencia Lado Izquierdo"],
  ["52040", "Rendimiento del Eje"],
  ["52100", "Peso Lado Derecho"],
  ["52101", "Peso Lado Izquierdo"],
  ["53000", "Fuerza de Frenado Lado Derecho"],
  ["53001", "Fuerza de Frenado Lado izquierdo"],
  ["53010", "Diferencia Fza. Frenado Lado a Lado"],
  ["53020", "Ovalidad Lado Derecho"],
  ["53021", "Ovalidad Lado Izquierdo"],
  ["53030", "Resistencia Lado Derecho"],
  ["53031", "Resistencia Lado Izquierdo"],
  ["53040", "Rendimiento del Eje"],
  ["53100", "Peso Lado Derecho"],
  ["53101", "Peso Lado Izquierdo"],
  ["54000", "Fuerza de Frenado Lado Derecho"],
  ["54001", "Fuerza de Frenado Lado izquierdo"],
  ["54010", "Diferencia Fza. Frenado Lado a Lado"],
  ["54020", "Ovalidad Lado Derecho"],
  ["54021", "Ovalidad Lado Izquierdo"],
  ["54030", "Resistencia Lado Derecho"],
  ["54031", "Resistencia Lado Izquierdo"],
  ["54040", "Rendimiento del Eje"],
  ["54100", "Peso Lado Derecho"],
  ["54101", "Peso Lado Izquierdo"],
  ["55000", "Fuerza de Frenado Lado Derecho"],
  ["55001", "Fuerza de Frenado Lado izquierdo"],
  ["55010", "Diferencia Fza. Frenado Lado a Lado"],
  ["55020", "Ovalidad Lado Derecho"],
  ["55021", "Ovalidad Lado Izquierdo"],
  ["55030", "Resistencia Lado Derecho"],
  ["55031", "Resistencia Lado Izquierdo"],
  ["55040", "Rendimiento del Eje"],
  ["55100", "Peso Lado Derecho"],
  ["55101", "Peso Lado Izquierdo"],
  ["50250", "Fuerza de Frenado Lado Derecho"],
  ["50251", "Fuerza de Frenado Lado izquierdo"],
  ["50260", "Diferencia Fza. Frenado Lado a Lado"],
  ["50240", "Rendimiento del Eje"],
  ["50270", "Ovalidad Lado Derecho"],
  ["50271", "Ovalidad Lado Izquierdo"],
  ["50280", "Resistencia Lado Derecho"],
  ["50281", "Resistencia Lado Izquierdo"],
  ["51250", "Fuerza de Frenado Lado Derecho"],
  ["51251", "Fuerza de Frenado Lado izquierdo"],
  ["51260", "Diferencia Fza. Frenado Lado a Lado"],
  ["51240", "Rendimiento del Eje"],
  ["51270", "Ovalidad Lado Derecho"],
  ["51271", "Ovalidad Lado Izquierdo"],
  ["51280", "Resistencia Lado Derecho"],
  ["51281", "Resistencia Lado Izquierdo"],
  ["52250", "Fuerza de Frenado Lado Derecho"],
  ["52251", "Fuerza de Frenado Lado izquierdo"],
  ["52260", "Diferencia Fza. Frenado Lado a Lado"],
  ["52240", "Rendimiento del Eje"],
  ["52270", "Ovalidad Lado Derecho"],
  ["52271", "Ovalidad Lado Izquierdo"],
  ["52280", "Resistencia Lado Derecho"],
  ["52281", "Resistencia Lado Izquierdo"],
  ["53250", "Fuerza de Frenado Lado Derecho"],
  ["53251", "Fuerza de Frenado Lado izquierdo"],
  ["53260", "Diferencia Fuerza Frenado Lado a Lado"],
  ["53240", "Rendimiento del Eje"],
  ["53270", "Ovalidad Lado Derecho"],
  ["53271", "Ovalidad Lado Izquierdo"],
  ["53280", "Resistencia a la Rodadura Lado Derecho"],
  ["53281", "Resistencia a la Rodadura Lado Izquierdo"],
  ["54250", "Fuerza de Frenado Lado Derecho"],
  ["54251", "Fuerza de Frenado Lado izquierdo"],
  ["54260", "Diferencia Fza. Frenado Lado a Lado"],
  ["54240", "Rendimiento del Eje"],
  ["54270", "Ovalidad Lado Derecho"],
  ["54271", "Ovalidad Lado Izquierdo"],
  ["54280", "Resistencia a la Rodadura Lado Derecho"],
  ["54281", "Resistencia a la Rodadura Lado Izquierdo"],
  ["55250", "Fuerza de Frenado Lado Derecho"],
  ["55251", "Fuerza de Frenado Lado izquierdo"],
  ["55260", "Diferencia Fuerza Frenado Lado a Lado"],
  ["55240", "Rendimiento del Eje"],
  ["55270", "Ovalidad Lado Derecho"],
  ["55271", "Ovalidad Lado Izquierdo"],
  ["55280", "Resistencia a la Rodadura Lado Derecho"],
  ["55281", "Resistencia a la Rodadura Lado Izquierdo"],
  ["60000", "Valor de Medición"],
  ["70000", "Alineación Faro Derecho Horizontal"],
  ["70001", "Alineación Faro Izquierdo Horizontal"],
  ["70010", "Intensidad Alta Derecha"],
  ["70011", "Intensidad Alta Izquierda"],
  ["70012", "Intensidad Baja Derecha"],
  ["70013", "Intensidad Baja Izquierda"],
  ["70014", "Intensidad Auxiliar Derecho"],
  ["70015", "Intensidad Auxiliar Izquierdo"],
  ["70016", "Alineación Faro Derecho Vertical"],
  ["70017", "Alineación Faro Izquierdo Vertical"],
  ["100001", "Motivo de Corte de Prueba de Freno Eje 1"],
  ["100002", "Motivo de Corte de Prueba de Freno Eje 2"],
  ["100003", "Motivo de Corte de Prueba de Freno Eje 3"],
  ["100004", "Motivo de Corte de Prueba de Freno Eje 4"],
  ["100005", "Motivo de Corte de Prueba de Freno Eje 5"],
  ["100006", "Motivo de Corte de Prueba de Freno Eje 6"],
  ["100007", "Motivo de Corte de Prueba de F. Mano Eje 1"],
  ["100008", "Motivo de Corte de Prueba de F. Mano Eje 2"],
  ["100009", "Motivo de Corte de Prueba de F. Mano Eje 3"],
  ["100010", "Motivo de Corte de Prueba de F. Mano Eje 4"],
  ["100011", "Motivo de Corte de Prueba de F. Mano Eje 5"],
  ["100012", "Motivo de Corte de Prueba de F. Mano Eje 6"],
  ["100013", "Valor de Cero de BF Derecho"],
  ["100014", "Valor de Cero de BF Izquierdo"],
  ["100015", "Valor de Cero Balanza Derecha"],
  ["100016", "Valor de Cero de Balanza Izquierda"],
  ["100017", "Valor de Ganancia BF Izquierdo"],
  ["100018", "Valor de Ganancia de BF Derecho"],
  ["100019", "Valor de Ganancia de Balanza Izquierda"],
  ["100020", "Valor de Ganancia de Balanza Derecha"],
  ["80000", "Número de Línea"],
  ["80001", "Fecha ingreso al Puesto 1"],
  ["80002", "Fecha de salida del Puesto 1"],
  ["80003", "Operador Puesto 1"],
  ["80004", "Fecha ingreso al Puesto 2"],
  ["80005", "Fecha de salida del Puesto 2"],
  ["80006", "Operador Puesto 2"],
  ["80007", "Fecha ingreso al Puesto 3"],
  ["80008", "Fecha de salida del Puesto 3"],
  ["80009", "Operador Puesto 3"],
  ["80010", "Fecha ingreso al Puesto 4"],
  ["80011", "Fecha de salida del Puesto 4"],
  ["80012", "Operador Puesto 4"],
  ["80013", "Fecha ingreso al Puesto 5"],
  ["80014", "Fecha de salida del Puesto 5"],
  ["80015", "Operador Puesto 5"],
  ["80016", "Fecha ingreso al Puesto 6"],
  ["80017", "Fecha de salida del Puesto 6"],
  ["80018", "Operador Puesto 6"],
  ["80019", "Fecha ingreso al Puesto 7"],
  ["80020", "Fecha de salida del Puesto 7"],
  ["80021", "Operador Puesto 7"],
  ["80022", "Fecha ingreso al Puesto 8"],
  ["80023", "Fecha de salida del Puesto 8"],
  ["80024", "Operador Puesto 8"],
  ["80025", "Fecha ingreso al Puesto 9"],
  ["80026", "Fecha de salida del Puesto 9"],
  ["80027", "Operador Puesto 9"],
  ["80028", "Fecha ingreso al Puesto 10"],
  ["80029", "Fecha de salida del Puesto 10"],
  ["80030", "Operador Puesto 10"],
  ["80031", "Nro de Línea Pto1"],
  ["80032", "Nro de Línea Pto2"],
  ["80033", "Nro de Línea Pto3"],
  ["80034", "Nro de Línea Pto4"],
  ["80035", "Nro de Línea Pto5"],
  ["80036", "Nro de Línea Pto6"],
  ["80037", "Nro de Línea Pto7"],
  ["80038", "Nro de Línea Pto8"],
  ["80039", "Nro de Línea Pto9"],
  ["80040", "Nro de Línea Pto10"],
]);

/**
 * All keys from the header category in the excel file.
 */
export const headerKeys = [
  "10100",
  "10102",
  "10104",
  "10200",
  "10201",
  "10202",
  "10203",
  "10204",
  "10208",
  "10209",
  "10210",
  "10300",
  "10301",
  "10302",
  "10303",
  "10304",
  "10305",
  "10306",
  "10307",
  "16001",
  "16000",
  "15000",
  "15001",
  "15002",
  "15003",
  "15004",
  "15005",
  "15006",
  "15007",
  "15008",
];

/**
 * All keys from the alineacion category in the excel file.
 */
export const alineacionKeys = [ 

] ;
/**
 * All keys from the suspencionEjeDelantero category in the excel file.
 */
export const suspencionEjeDelanteroKeys = [ 

] ;
/**
 * All keys from the suspencionEjeTrasero category in the excel file.
 */
export const suspencionEjeTraseroKeys = [ 

] ;
/**
 * All keys from the opacimetro category in the excel file.
 */
export const opacimetroKeys = [ 

] ;
/**
 * All keys from the analizadorDeGases category in the excel file.
 */
export const analizadorDeGasesKeys = [ 

] ;
/**
 * All keys from the frenosEje_1 category in the excel file.
 */
export const frenosEje_1Keys = [ 

] ;
/**
 * All keys from the frenosEje_2 category in the excel file.
 */
export const frenosEje_2Keys = [ 

] ;
/**
 * All keys from the frenosEje category in the excel file.
 */
export const frenosEje_3Keys = [ 

] ;
/**
 * All keys from the frenosEje_4 category in the excel file.
 */
export const frenosEje_4Keys = [ 

] ;
/**
 * All keys from the frenosEje_5 category in the excel file.
 */
export const frenosEje_5Keys = [ 

] ;
/**
 * All keys from the frenosEje_6 category in the excel file.
 */
export const frenosEje_6Keys = [ 

] ;
/**
 * All keys from the frenoDeManoEje_1 category in the excel file.
 */
export const frenoDeManoEje_1Keys = [ 

] ;
/**
 * All keys from the frenoDeManoEje_2 category in the excel file.
 */
export const frenoDeManoEje_2Keys = [ 

] ;
/**
 * All keys from the frenoDeManoEje_3 category in the excel file.
 */
export const frenoDeManoEje_3Keys = [ 

] ;
/**
 * All keys from the frenoDeManoEje_4 category in the excel file.
 */
export const frenoDeManoEje_4Keys = [ 

] ;
/**
 * All keys from the frenoDeManoEje_5 category in the excel file.
 */
export const frenoDeManoEje_5Keys = [ 

] ;
/**
 * All keys from the frenoDeManoEje_6 category in the excel file.
 */
export const frenoDeManoEje_6Keys = [ 

] ;
/**
 * All keys from the sonometro category in the excel file.
 */
export const sonometroKeys = [ 

] ;
/**
 * All keys from the luxometro category in the excel file.
 */
export const luxometroKeys = [ 

] ;
/**
 * All keys from the inspeccionVisual category in the excel file.
 */
export const inspeccionVisualKeys = [ 

] ;
/**
 * All keys from the inspeccionDH category in the excel file.
 */
export const inspeccionDHKeys = [ 

] ;
/**
 * All keys from the frenos category in the excel file.
 */
export const frenosKeys = [ 

] ;
/**
 * All keys from the valoresCalibrados category in the excel file.
 */
export const valoresCalibradosKeys = [ 

] ;
/**
 * All keys from the lineaDePrueba category in the excel file.
 */
export const lineaDePruebaKeys = [ 

] ;
/**
 * All keys from the estadisticaDePuestos category in the excel file.
 */
export const estadisticaDePuestosKeys = [ 

] ;

/**
 * All keys from the noVinculados category in the excel file.
 */
export const noVinculadosKeys = [ 

] 
/**
 * All keys and values from the header category in the excel file.
 */
export const headerMap = new Map([
  ["10100", "Patente"],
  ["10102", "Numero de Chasis"],
  ["10104", "Numero Motor"],
  ["10200", "Marca del Vehículo"],
  ["10201", "Año de Fabricación"],
  ["10202", "Sub Modelo"],
  ["10203", "Modelo"],
  ["10204", "Kilómetros"],
  ["10208", "Tipo Vehiculo"],
  ["10209", "Combustible"],
  ["10210", "Cantidad de Ejes"],
  ["10300", "Apellido"],
  ["10301", "Nombre"],
  ["10302", "Dirección"],
  ["10303", "Documento de Identidad"],
  ["10304", "Email"],
  ["10305", "Teléfono"],
  ["10306", "Localidad"],
  ["10307", "Provincia"],
  ["16001", "ID PRUEBA (Referencia Tramite)"],
  ["16000", "Fecha Hora (AAAAMMDDhhmmss)"],
  ["15000", "Prueba de Alineación"],
  ["15001", "Prueba de Suspension"],
  ["15002", "Prueba de Frenos"],
  ["15003", "Prueba de Frenos de Mano"],
  ["15004", "Prueba de Luces"],
  ["15005", "Prueba de Gases"],
  ["15006", "Prueba de Insp. Visual"],
  ["15007", "Prueba de Isnp. Fosa"],
  ["15008", "Prueba Sonometro"],
]);

/**
 * All keys and values from the alineacion category in the excel file.
 */
export const alineacionMap = new Map([]);
/**
 * All keys and values from the suspencionEjeDelantero category in the excel file.
 */
export const suspencionEjeDelanteroMap = new Map([]);
/**
 * All keys and values from the suspencionEjeTrasero category in the excel file.
 */
export const suspencionEjeTraseroMap = new Map([]);
/**
 * All keys and values from the opacimetro category in the excel file.
 */
export const opacimetroMap = new Map([]);
/**
 * All keys and values from the analizadorDeGases category in the excel file.
 */
export const analizadorDeGasesMap = new Map([]);
/**
 * All keys and values from the frenosEje_1 category in the excel file.
 */
export const frenosEje_1Map = new Map([]);
/**
 * All keys and values from the frenosEje_2 category in the excel file.
 */
export const frenosEje_2Map = new Map([]);
/**
 * All keys and values from the frenosEje category in the excel file.
 */
export const frenosEje_3Map = new Map([]);
/**
 * All keys and values from the frenosEje_4 category in the excel file.
 */
export const frenosEje_4Map = new Map([]);
/**
 * All keys and values from the frenosEje_5 category in the excel file.
 */
export const frenosEje_5Map = new Map([]);
/**
 * All keys and values from the frenosEje_6 category in the excel file.
 */
export const frenosEje_6Map = new Map([]);
/**
 * All keys and values from the frenoDeManoEje_1 category in the excel file.
 */
export const frenoDeManoEje_1Map = new Map([]);
/**
 * All keys and values from the frenoDeManoEje_2 category in the excel file.
 */
export const frenoDeManoEje_2Map = new Map([]);
/**
 * All keys and values from the frenoDeManoEje_3 category in the excel file.
 */
export const frenoDeManoEje_3Map = new Map([]);
/**
 * All keys and values from the frenoDeManoEje_4 category in the excel file.
 */
export const frenoDeManoEje_4Map = new Map([]);
/**
 * All keys and values from the frenoDeManoEje_5 category in the excel file.
 */
export const frenoDeManoEje_5Map = new Map([]);
/**
 * All keys and values from the frenoDeManoEje_6 category in the excel file.
 */
export const frenoDeManoEje_6Map = new Map([]);
/**
 * All keys and values from the sonometro category in the excel file.
 */
export const sonometroMap = new Map([]);
/**
 * All keys and values from the luxometro category in the excel file.
 */
export const luxometroMap = new Map([]);
/**
 * All keys and values from the inspeccionVisual category in the excel file.
 */
export const inspeccionVisualMap = new Map([]);
/**
 * All keys and values from the inspeccionDH category in the excel file.
 */
export const inspeccionDHMap = new Map([]);
/**
 * All keys and values from the frenos category in the excel file.
 */
export const frenosMap = new Map([]);
/**
 * All keys and values from the valoresCalibrados category in the excel file.
 */
export const valoresCalibradosMap = new Map([]);
/**
 * All keys and values from the lineaDePrueba category in the excel file.
 */
export const lineaDePruebaMap = new Map([]);
/**
 * All keys and values from the estadisticaDePuestos category in the excel file.
 */
export const estadisticaDePuestosMap = new Map([]);

/**
 * All keys and values from the noVinculados category in the excel file.
 */
export const noVinculadosMap = new Map();

/**
 *  Stores the map with the excel representation of data.
 *  To remain as a comparison structure when the txt file is read and proccessed.
 */
export const structureFinalMap = new Map([
  [HEADER, headerMap],
  [ALINEACION, alineacionMap],
  [SUSPENSION_EJE_DELANTERO, suspencionEjeDelanteroMap],
  [SUSPENSION_EJE_TRASERO, suspencionEjeTraseroMap],
  [OPACIMETRO, opacimetroMap],
  [ANALIZADOR_DE_GASES, analizadorDeGasesMap],
  [FRENOS_EJE_1, frenosEje_1Map],
  [FRENOS_EJE_2, frenosEje_2Map],
  [FRENOS_EJE_3, frenosEje_3Map],
  [FRENOS_EJE_4, frenosEje_4Map],
  [FRENOS_EJE_5, frenosEje_5Map],
  [FRENOS_EJE_6, frenosEje_6Map],
  [FRENO_DE_MANO_EJE_1, frenoDeManoEje_1Map],
  [FRENO_DE_MANO_EJE_2, frenoDeManoEje_2Map],
  [FRENO_DE_MANO_EJE_3, frenoDeManoEje_3Map],
  [FRENO_DE_MANO_EJE_4, frenoDeManoEje_4Map],
  [FRENO_DE_MANO_EJE_5, frenoDeManoEje_5Map],
  [FRENO_DE_MANO_EJE_6, frenoDeManoEje_6Map],
  [SONOMETRO, sonometroMap],
  [LUXOMETRO, luxometroMap],
  [INSPECCION_VISUAL, inspeccionVisualMap],
  [INSPECCION_DH, inspeccionDHMap],
  [FRENOS, frenosMap],
  [VALORES_CALIBRADOS, valoresCalibradosMap],
  [LINEA_DE_PRUEBA, lineaDePruebaMap],
  [ESTADISTICA_DE_PUESTOS, estadisticaDePuestosMap],
  [NO_VINCULADOS, noVinculadosMap],
]);
