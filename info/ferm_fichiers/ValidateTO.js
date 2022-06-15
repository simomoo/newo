//version 2.0
// JavaScript Libreria basica para validar campos.
// Si valida eMail
// valida fechas
var mPrefix = "El campo "
/******************** P00018184 17/12/2014 INICIO ***************************/
//Modificamos literal de sufijo
var mSuffix = " no puede estar vacío. Por favor, revíselo."
/******************** P00018184 17/12/2014 FIN ******************************/
var iNumber = "Este campo sólo puede contener valores numéricos con decimales. Introdúzcalo de nuevo."
var iEmail = "Este campo debe contener una dirección electrónica válida (como usuario@cajarural.com). Introdúzcala de nuevo."
var digits = "0123456789";
var origen  = "ÁÉÍÓÚÄËÏÖÜáéíóúäëïöü"
var transf  = "AEIOUAEIOUaeiouaeiou"
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var whitespace = " \t\n\r";
var sEmail = "Email"
var iInteger = "Este campo debe contener un valor númerico. Introdúzcalo de nuevo."
var iPositiveInteger = "Este campo debe tener un valor númerico positivo. Introdúzcalo de nuevo."
var iAlphabetic = "Este campo sólo puede contener letras. Introdúzcalo de nuevo."
var iAlphanumeric = "Este campo sólo puede contener valores numéricos y letras. Introdúzcalo de nuevo."
var iCustom = "Valor no valido. Reintroducelo, por favor."
var iOpcion = "Debe seleccionar una opción"
var pEntryPrompt = "Por favor, entra un "
//Javier Nozal.Variable del mensaje de Pin.
var iPinIguales = "La clave nueva no coincide" 
var tarjeta_invalida = "Esta tarjeta no está soportada"
// Variables para fechas
var iDay = "El día debe estar comprendido entre 1 y 31. Introdúzcalo de nuevo." 
var iMonth = "El mes debe estar comprendido entre 1 y 12. Introdúzcalo de nuevo."
var pMonth = "El día debe estar comprendido entre 1 y "
var pMonthSuffix = ". Introdúzcalo de nuevo."
var pFormatoPreffix = "El formato del campo "
var mDatePreffix = "La fecha "
var mLengthPreffix = "El campo "
var mDateSuffix = ". Introdúzcala de nuevo."
var mLengthSuffix = " debe tener una longitud de "
var pFormatoSuffix = " es d,dd (d=dígito)."
var pHoraSuffix = " es hh:hh."
var pPuntoSuffix = " no debe incluir ningún punto."
var pRadioSuffix = " no está seleccionado."

var iDateMayor = " debe ser mayor que la fecha "
var iDateEquals = " debe ser igual que la fecha "
var iDateMayorEquals = " debe ser mayor o igual que la fecha "
var iDateMenor = " debe ser menor que la fecha "
var iNumericMayor = " debe ser mayor que el valor "
var iNumDays = " días desde la fecha de hoy"

var iYear = "El año debe tener 4 dígitos. Introdúzcalo de nuevo."
var iDate = "La fecha no es válida. Introdúzcala de nuevo con el formato DD-MM-AAAA."

var iHour = "La hora no es válida. El valor de la hora debe estar comprendido entre 00 y 23."
var iMinute = "Los minutos no son válidos. El valor de los minutos debe estar comprendido entre 00 y 59."
var iTwopoint = "El separador de horas y minutos debe ser el caracter :"

var mComillasPreffix = "El campo "
var mComillasSuffix = " no puede contener comillas."

var mCaracterPreffix = "El campo "
var mCaracterSuffix = " no puede contener ñ ni espacios en blanco."

var defaultEmptyOK = false
// Juan Alfredo. He cambiado todos los metodos parseInt(s) por parseInt(s,deci)
var deci = "10"
var claves="TRWAGMYFPDXBNJZSQVHLCKE";
function makeArray(n) {
   for (var i = 1; i <= n; i++) {
      this[i] = 0
   }
   return this
}

var daysInMonth = new makeArray(12);
daysInMonth[1] = 31;
daysInMonth[2] = 29;   // Se utiliza la rutina daysInFebruary 
daysInMonth[3] = 31;
daysInMonth[4] = 30;
daysInMonth[5] = 31;
daysInMonth[6] = 30;
daysInMonth[7] = 31;
daysInMonth[8] = 31;
daysInMonth[9] = 30;
daysInMonth[10] = 31;
daysInMonth[11] = 30;
daysInMonth[12] = 31;

//P00019722 18/01/2016 INICIO: se genera Array para contener los códigos de los paises pertenecientes a la normativa SEPA. Será utilizado por la función "isIBANSepa()".
var arrayCodigoIBAN = new Array();
arrayCodigoIBAN[0] = "DE";//Alemania
arrayCodigoIBAN[1] = "AT";//Austria
arrayCodigoIBAN[2] = "BE";//Bélgica
arrayCodigoIBAN[3] = "BG";//Bulgaria
arrayCodigoIBAN[4] = "CY";//Chipre
arrayCodigoIBAN[5] = "HR";//Croacia
arrayCodigoIBAN[6] = "DK";//Dinamarca
arrayCodigoIBAN[7] = "SK";//Eslovaquia
arrayCodigoIBAN[8] = "SI";//Eslovenia
arrayCodigoIBAN[9] = "ES";//España
arrayCodigoIBAN[10] = "EE";//Estonia
arrayCodigoIBAN[11] = "FI";//Finlandia
arrayCodigoIBAN[12] = "FR";//Francia
arrayCodigoIBAN[13] = "GR";//Grecia
arrayCodigoIBAN[14] = "HU";//Hungría
arrayCodigoIBAN[15] = "IE";//Irlanda
arrayCodigoIBAN[16] = "IS";//Islandia
arrayCodigoIBAN[17] = "IT";//Italia
arrayCodigoIBAN[18] = "LV";//Letonia
arrayCodigoIBAN[19] = "LI";//Liechtenstein
arrayCodigoIBAN[20] = "LT";//Lituania
arrayCodigoIBAN[21] = "LU";//Luxemburgo
arrayCodigoIBAN[22] = "MT";//Malta
arrayCodigoIBAN[23] = "NO";//Noruega
arrayCodigoIBAN[24] = "NL";//Países Bajos
arrayCodigoIBAN[25] = "PL";//Polonia
arrayCodigoIBAN[26] = "PT";//Portugal
arrayCodigoIBAN[27] = "MC";//Principado de Mónaco
arrayCodigoIBAN[28] = "CZ";//República Checa
arrayCodigoIBAN[29] = "GB";//Reino Unido
arrayCodigoIBAN[30] = "RO";//Rumanía
arrayCodigoIBAN[31] = "SM";//San Marino
arrayCodigoIBAN[32] = "SE";//Suecia
arrayCodigoIBAN[33] = "CH";//Suiza
//P00019722 18/01/2016 FIN

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}


function isWhitespace (s)
{
 var i;
    if (isEmpty(s)) return true;
    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (whitespace.indexOf(c) == -1) return false;
    }
    return true;
}

function stripCharsInBag (s, bag)
{
   var i;
   var returnString = "";
    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function stripCharsNotInBag (s, bag)
{
   var i;
   var returnString = "";
    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }
    return returnString;
}

function stripWhitespace (s)
{   return stripCharsInBag (s, whitespace)
}


function RowsInString (s)
{
    for (i = 0; i < 3; i++)
    {
        if (s.charAt(i) != "-") return false;
    }
    return true
}

function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}

function parteDecimal(theField)
{
  var pdec;
  
  if(charInString(',',theField.value))
    pdec = theField.value.substr(theField.value.indexOf(',')+1,theField.value.length)
  else
    pdec = 00;
    
  //alert("La parte decimal es:"+pdec);
  return pdec;    
  
	
}

function stripInitialWhitespace (s)
{   var i = 0;

    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;
    return s.substring (i, s.length);
}

// Permite espacios y letras
function isLetter (c)
{
   return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) || (c==" ") || (c=="ñ") ||(c=="Ñ"))
}

function isDigit (c)
{
   return ((c >= "0") && (c <= "9"))
}

function isLetterOrDigit (c)
{
   return (isLetter(c) || isDigit(c))
}

function isInteger (s)
{   
    var i;
    if (isEmpty(s))
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);
    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (!isDigit(c)) return false;
    }
    return true;
}


function isSignedInteger (s)
{
   if (isEmpty(s))
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;
        if (isSignedInteger.arguments.length > 1)
            secondArg = isSignedInteger.arguments[1];

        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;
        return (isInteger(s.substring(startPos, s.length), secondArg))
    }
}


function isPositiveInteger (s)
{
   var secondArg = defaultEmptyOK;
    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s, deci) > 0) ) );
}


function isNonnegativeInteger (s)
{
   var secondArg = defaultEmptyOK;
    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];
    return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s,deci) >= 0) ) );
}


function isNegativeInteger (s)
{
   var secondArg = defaultEmptyOK;
    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];
   return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s,deci) < 0) ) );
}


function isNonpositiveInteger (s)
{
   var secondArg = defaultEmptyOK;
    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];
   return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s,deci) <= 0) ) );
}


function isFloat (s)
{
   var i;
   var seenDecimalPoint = false;
    if (isEmpty(s))
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);
    if (s == ",") return false;
    for (i = 0; i < s.length; i++)
    {
        // Comprueba que sea un numero.
        var c = s.charAt(i);
        if ((c == ",") && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!isDigit(c)) return false;
    }
    return true;
}

function isSignedFloat (s)
{
   if (isEmpty(s))
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);
    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;
        if (isSignedFloat.arguments.length > 1)
            secondArg = isSignedFloat.arguments[1];
        // Se salta + y -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;
        return (isFloat(s.substring(startPos, s.length), secondArg))
    }
}


function isAlphabetic (s) {   
    var i;
    if (isEmpty(s))
       if (isAlphabetic.arguments.length == 1) 
           return defaultEmptyOK;
       else 
           return (isAlphabetic.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        // Comprueba que el caracter actual sea una letra.
        var c = s.charAt(i);
        if (!isLetter(c))
            return false;
    }

    // Todos los caracteres soin letras.
    return true;
}

function isAlphanumeric (s) {   
    var i;
    if (isEmpty(s))
       if (isAlphanumeric.arguments.length == 1) 
       		return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);
    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }
    return true;
}

function isvalidEmailChar (s)
{
   var i;
    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (! (isLetter(c) || isDigit(c) || (c=='@') || (c=='.') || (c=='_') || (c=='-') || (c=='+')) ) {
       	return false;
	}
    }
    return true;
}


function isEmail (s)
{
   if (isEmpty(s))
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
    if (isWhitespace(s)) return false;
	if (!isvalidEmailChar(s)) return false;
    atOffset = s.lastIndexOf('@');
    if ( atOffset < 1 )
        return false;
    else {
 	dotOffset = s.indexOf('.', atOffset);
      if ( dotOffset < atOffset + 2 ||
         dotOffset > s.length - 2 ) {
         return false;
      }
   }
   return true;
}

function isIntegerInRange (s, a, b)
{
   if (isEmpty(s))
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);
    if (!isInteger(s, false)) return false;
    var num = parseInt (s,deci);
    return ((num >= a) && (num <= b));
}

function prompt (s)
{   window.status = s
}


function promptEntry (s)
{   window.status = pEntryPrompt + s
}


function warnEmpty (theField, s)
{
   theField.focus()
    alert(mPrefix + s + mSuffix)
    return false
}


function warnInvalid (theField, s)
{
   theField.focus()
    theField.select()
    alert(s)
    return false
}

function checkExpression(theField, sExpr, emptyOK) 
{
    if (checkExpression.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!theField.eval(sExpr))
       return warnInvalid(theField, iCustom)
    else
return true;
}


function checkNumber (theField, s, emptyOK)
{
   if (checkNumber.arguments.length == 1) emptyOK = defaultEmptyOK;
   if ((emptyOK == false) && (isEmpty(theField.value))) return warnEmpty(theField,s);
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isSignedFloat(theField.value, false))
       return warnInvalid (theField, iNumber);
    else return true;
}


function checkInteger (theField, s, emptyOK)
{
   if (checkInteger.arguments.length == 1) emptyOK = defaultEmptyOK;
   if ((emptyOK == false) && (isEmpty(theField.value))) return warnEmpty(theField,s);
   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
   else if (!isSignedInteger(theField.value, false))
      return warnInvalid (theField, iInteger);
   else return true;
}


function checkPositiveInteger (theField, emptyOK)
{
   if (checkPositiveInteger.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (theField.value.substring(0,1)=="+")
       sNum = theField.value.substring(1);
    else
       sNum = theField.value;      
    if (!isInteger(sNum, false))
       return warnInvalid (theField, iPositiveInteger);
    else return true;
}


function checkAlphabetic (theField, emptyOK)
{
   if (checkAlphabetic.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isAlphabetic(theField.value, false))
       return warnInvalid (theField, iAlphabetic);
    else return true;
}

function checkAlphanumeric (theField, emptyOK)
{
   if (checkAlphanumeric.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isAlphanumeric(theField.value, false))
       return warnInvalid (theField, iAlphanumeric);
    else return true;
}

function checkString (theField, s, emptyOK)
{
    if (checkString.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (isWhitespace(theField.value))
       return warnEmpty (theField, s);
    else return true;
}

function checkEmail (theField, emptyOK)
{
   if (checkEmail.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isEmail(theField.value, false))
       return warnInvalid (theField, iEmail);
    else return true;
}

function isYear (s)
{   if (isEmpty(s))
       if (isYear.arguments.length == 1) return defaultEmptyOK;
       else return (isYear.arguments[1] == true);
    if (!isNonnegativeInteger(s)) return false;
    return ((s.length == 4));
}

function isMonth (s)
{   if (isEmpty(s))
       if (isMonth.arguments.length == 1) return defaultEmptyOK;
       else return (isMonth.arguments[1] == true);
    return isIntegerInRange (s, 1, 12);
}


function isDay (s)
{   if (isEmpty(s))
       if (isDay.arguments.length == 1) return defaultEmptyOK;
       else return (isDay.arguments[1] == true);
    return isIntegerInRange (s, 1, 31);
}


function daysInFebruary (year)
{
    return ( ((year % 4 == 0) && (!(year % 100 == 0) || (year % 400 == 0) ) ) ? 29 : 28 );
}

function isDate (year, month, day)
{
    if (! (isYear(year, false) && isMonth(month, false) && isDay(day, false))) return false;

    var intYear = parseInt(year,deci);
    var intMonth = parseInt(month,deci);
    var intDay = parseInt(day,deci);

    if (intDay > daysInMonth[intMonth]) return false;    
    if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;

    return true;
}

function checkYear (theField, emptyOK)
{   if (checkYear.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isYear(theField.value, false))
       return warnInvalid (theField, iYear);
    else return true;
}


function checkMonth (theField, emptyOK)
{   if (checkMonth.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isMonth(theField.value, false))
       return warnInvalid (theField, iMonth);
    else return true;
}


function checkDay (theField, emptyOK)
{   if (checkDay.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isDay(theField.value, false))
       return warnInvalid (theField, iDay);
    else return true;
}
//Formato dd/mm/yyyy
function formatearFecha(fecha)
{   
    var dia = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var anno = fecha.getFullYear();
    if (dia < 10) { dia = "0" + dia; }
    if (mes < 10) { mes = "0" + mes; }
    return dia +"-"+mes+"-"+ anno;
}


// Fecha en formato americamo
function checkUSDate (theField, emptyOK) {   

    if (checkUSDate.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    
    if (theField.value==null) return defaultEmptyOK;
     
    sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return warnInvalid (theField, iDate);        
    
    month = sArray[0];
    day = sArray[1];
    year = sArray[2];

    if (isDate(year, month, day))
        return true;
    else
       return warnInvalid (theField, iDate);        
}

// Fecha en formato dd/mm/yyyy

function checkIntlDate (theField, emptyOK) {   
    if (checkIntlDate.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    
    if (theField.value==null) return defaultEmptyOK;
    
    sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return warnInvalid (theField, iDate);        

    day = sArray[0];
    month = sArray[1];
    year = sArray[2];

    if (isDate(year, month, day))
        return true;
    else
       return warnInvalid (theField, iDate);        
}


// Chequea una fecha del estilo dd/mm/yyyy
// Dando mas informacion que checkIntlDate

function checkDate (theField, s, emptyOK) {   

 var fechaCorrecta = /(^[0-9][0-9](-)[0-9][0-9](-)[0-9][0-9][0-9][0-9])$/
	
  //Comprueba el formato de la fecha
  if(!fechaCorrecta.test(theField.value))
    return warnInvalid(theField,iDate);


    if (checkDate.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == false) && (isEmpty(theField.value))) return warnEmpty(theField,s);
     
    
    if (theField.value==null) return defaultEmptyOK;
    
    sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return warnInvalid (theField, iDate);        

// Juan Alfredo  (06-08-2001)

    day = sArray[0];
    month = sArray[1];
    year =  sArray[2];


    if (!isYear(year, false))
       return warnInvalid (theField, iYear);
    if (!isMonth(month, false))
       return warnInvalid (theField, iMonth);
    if (!isDay(day, false))
       return warnInvalid (theField, iDay);

    var intYear = parseInt(year,deci);
    var intMonth = parseInt(month,deci);
    var intDay = parseInt(day,deci);
    if (intDay > daysInMonth[intMonth])  return warnInvalid (theField, pMonth + daysInMonth[intMonth]+pMonthSuffix);
    var intDayInFebruary = daysInFebruary(intYear);
    if ((intMonth == 2) && (intDay > intDayInFebruary))  return warnInvalid (theField, pMonth + intDayInFebruary + pMonthSuffix);
    return true;
}


// isDateMayor
// isDateEquals
// isDateMayorEquals
// Formato dd/mm/yyyy

function isDateMayor(theField, theField2, emptyOK) {   

    if (isDateMayor.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;   
    if (theField2.value==null) return defaultEmptyOK;
    
    sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return false;        

    day = sArray[0];
    month = sArray[1];
    year = sArray[2];

    sArray2 = theField2.value.split("/")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        sArray2 = theField2.value.split("-")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        return false;        

    day2 = sArray2[0];
    month2 = sArray2[1];
    year2 = sArray2[2];

    if(year2+month2+day2>year+month+day)return true;
    	else return false;
}

function isNumericMayor(theField, theField2, emptyOK) {   


    if (isNumericMayor.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;   
    if (theField2.value==null) return defaultEmptyOK;
    
    var num1 = theField.value;
    var num2 = theField2.value;
    if(charInString (',', num1)){
      num1 = cambiaCaracter(theField,',','.');
    }  
    num1 = parseFloat(num1);

    if(charInString (',', num2)){
      num2 = cambiaCaracter(theField2,',','.');   
    }  
    num2 = parseFloat(num2);
   
    return(num2 > num1)
}

// Formato dd/mm/yyyy
function isDateEquals(theField, theField2, emptyOK) {   

    if (isDateEquals.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;
    if (theField2.value==null) return defaultEmptyOK;

    sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return false;        

    day = sArray[0];
    month = sArray[1];
    year = sArray[2];

    sArray2 = theField2.value.split("/")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        sArray2 = theField2.value.split("-")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        return false;        

    day2 = sArray2[0];
    month2 = sArray2[1];
    year2 = sArray2[2];

    if(year2+month2+day2==year+month+day)return true;
    	else return false;

}

// Formato dd/mm/yyyy
function isDateMayorEquals(theField, theField2, emptyOK) {   

    if (isDateMayorEquals.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;
    if (theField2.value==null) return defaultEmptyOK;
    
    sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return false;        

    day = sArray[0];
    month = sArray[1];
    year = sArray[2];

    sArray2 = theField2.value.split("/")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        sArray2 = theField2.value.split("-")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        return false;        

    day2 = sArray2[0];
    month2 = sArray2[1];
    year2 = sArray2[2];

    if(year2+month2+day2>=year+month+day)return true;
    	else return false;
}

// Formato dd/mm/yyyy
function checkDateMayor(theField, theField2, emptyOK) {   

    if (checkDateMayor.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;   
    if (theField2.value==null) return defaultEmptyOK;
    
    if (isDateMayor(theField,theField2,false))
        return true;
    else
    return warnInvalid (theField2, mDatePreffix + theField2.value + iDateMayor + theField.value + mDateSuffix);
    
}

function textBoxHidden()
{
	
  this.value = null;
	
}


//theField es el campo a validar que es menor que hoy+numdias. Si numdias == 0,
//se valida que theField sea mayor que hoy.
//Formato dd/mm/yyyy

function checkNumDays(theField, numdias, emptyOK) {   

    if (checkNumDays.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (theField.value==null) return defaultEmptyOK;   
    
    incdays = new textBoxHidden()
    incdays.value =addDays(numdias);
    
    if(numdias != 0){

      if (isDateMayorEquals(theField,incdays,false))
        return true;
      else
    	return warnInvalid (theField, mDatePreffix + theField.value + iDateMenor + numdias + iNumDays +" ("+ incdays.value +") "  + mDateSuffix);

    }else{

      //Si validamos que theField sea mayor que hoy.
      if (isDateMayorEquals(incdays,theField,false))
        return true;
      else
    	return warnInvalid (theField, "La fecha introducida "+theField.value+" debe ser mayor que el día de hoy" + mDateSuffix);

    }
     

    if (isDateMayorEquals(theField,incdays,false))
        return true;
    else
    return warnInvalid (theField, mDatePreffix + theField.value + iDateMenor + numdias + iNumDays + mDateSuffix);
    
}

//Formato dd/mm/yyyy

function checkDateEquals(theField, theField2, emptyOK) {   

    if (checkDateEquals.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;
    if (theField2.value==null) return defaultEmptyOK;
    
    if (isDateEquals(theField,theField2,false))
            return true;
    else
    return warnInvalid (theField2,  mDatePreffix + theField2.value + iDateEquals + theField.value + mDateSuffix);
}

//Formato dd/mm/yyyy
function checkDateMayorEquals(theField, theField2, emptyOK) {   

    if (checkDateMayorEquals.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;
    if (theField2.value==null) return defaultEmptyOK;

    if (isDateMayorEquals(theField,theField2,false))
      return true;
    else
      return warnInvalid (theField2,  mDatePreffix + theField2.value + iDateMayorEquals + theField.value + mDateSuffix);
}

//Javier Nozal. Valida el tamaño de un campo, y que sus elementos sean numeros.
function checkTypeTamField(theField, s, tam)
{

	   theField.value = stripWhitespace(theField.value);

 	   if(checkInteger(theField, true)){
	     if(theField.value.length == tam)
	        return true;
	     else
	       return warnInvalid (theField, mLengthPreffix + s + mLengthSuffix + tam)  
	   }    
}

//Valida el tamaño de un campo, y que sus elementos sean numeros y muestra mensaje con nombre
function checkTypeTamField2(theField, s, tam)
{
     
	   theField.value = stripWhitespace(theField.value);

 	   if(checkInteger(theField, s, false)) 
 	   {
	     if(theField.value.length == tam)
	        return true;
	     else
	       return warnInvalid (theField, mLengthPreffix + s + mLengthSuffix + tam);
	   }    
}


//Javier Nozal. Quita los acentos y las diéresis.
function quitarAcentos(theField)
{
 theField.value = theField.value.toUpperCase();
 var nuevaCadena="";
 var longitudS = origen.length;
 var lcadena = theField.value.length;

 for(i=0;i<lcadena;i++)
 {
   for(xxx=1,ii=0;ii<longitudS && xxx==1;ii++)
      {
   	if (theField.value.charAt(i)==origen.charAt(ii))
	{   
	    nuevaCadena=nuevaCadena+transf.charAt(ii);
            xxx=-1;
	}  
      }
       if (xxx==1) 
           nuevaCadena=nuevaCadena+theField.value.charAt(i);
 }
 return nuevaCadena;
}


//Javier Nozal. Cambiar el carácter car1 por el car2 en el campo theField.
function cambiaCaracter(theField,car1,car2)
{

 var nuevaCadena="";
 var lcadena = theField.value.length;

 for(i=0;i<lcadena;i++)
 {
   	if (theField.value.charAt(i)==car1)
	{   
	    nuevaCadena=nuevaCadena+car2;
	}else{ 
	    nuevaCadena = nuevaCadena+theField.value.charAt(i);
	}    
 }	
	 

 return nuevaCadena;
}

//Javier Nozal. Comprueba que los campos que se le pasan son iguales
function camposIguales(theField1,theField2)
{

 if(theField1.value == theField2.value)
   return true;
 else
   return warnInvalid(theField1,iPinIguales + mDateSuffix)   
	 
}

//Comprueba que el campo theField tenga el formato d,dd. Si no tiene ',' se la pone.
//s es el nombre del campo que aparecera en el mensaje de error, y emptyOk = false 
//indica que el campo es obligatorio. comprueba ademas que el número de enteros
// no sobrepase la longitud pasada por parámetro
function comprobarImporteyEnteros(theField, s, enteros, emptyOK){
 var importe = theField.value
 var importeCorrecto = /(^[0-9]+((,)[0-9][0-9])?)$/
 var sinComa = false

 
 if (comprobarImporteyEnteros.arguments.length == 3) emptyOK = defaultEmptyOK;
 if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 if (theField.value==null) return defaultEmptyOK;
 if (theField.value=="" && emptyOK == false){ 
   warnEmpty(theField, s);
   return false;
 } 
  
 if(charInString ('.', importe)){
   warnInvalid(theField,pFormatoPreffix+s+pPuntoSuffix);
   return false;
 } 
 
  if(!charInString (',', importe)){
   	sinComa  = true;
  } 
 
  if(importeCorrecto.test(importe)){
   if(sinComa){
     // Si no viene la coma, hay que comprobar que el numero de enteros no sobrepase la longitud permitida
  	if (theField.value.length > enteros) {
  		warnInvalid(theField,"El formato del campo " +s+ " no permite un número con más de " + enteros + " enteros.");
   		return false;
  	}
     theField.value = theField.value + ",00";
   }  
   return true;
  }else{
   return warnInvalid(theField,pFormatoPreffix+s+pFormatoSuffix);
  } 

}//del function



//******** P000012968 INICIO 13/03/2009 **************************
//Comprueba que el campo theField separe los decimales con ','. Si no tiene ',' se la pone.
//s es el nombre del campo que aparecera en el mensaje de error, y emptyOk = false 
//indica que el campo es obligatorio. comprueba ademas que el número de enteros
// no sobrepase la longitud pasada por parámetro y que el numero de decimales
//no supere los pasados por parametro
function comprobarImporte_EnterosYDecimales(theField, s, enteros, decimales, emptyOK){


 var importe = theField.value
 var cadena = "((^[0-9]{1,"+enteros+"})+(,[0-9]{1,"+decimales+"})?)$";
 var importeCorrecto = new RegExp(cadena);
 var sinComa = false


 if (comprobarImporte_EnterosYDecimales.arguments.length == 4) emptyOK = defaultEmptyOK;
 if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 if (theField.value==null) return defaultEmptyOK;
 if (theField.value=="" && emptyOK == false){ 
   warnEmpty(theField, s);
   return false;
 } 
  
 if(charInString ('.', importe)){
   warnInvalid(theField,pFormatoPreffix+s+pPuntoSuffix);
   return false;
 } 
 
  if(!charInString (',', importe)){
   	sinComa  = true;
  } 


  if(importeCorrecto.test(importe)){
   if(sinComa)
   {
     // Si no viene la coma, hay que comprobar que el numero de enteros no sobrepase la longitud permitida
  	if (theField.value.length > enteros){
  		warnInvalid(theField,"El formato del campo " +s+ " no permite un número con más de " + enteros + " enteros.");
   		return false;
  	}
  	theField.value = theField.value + ",";
  	for (i= 0; i < decimales; i++)
  	{
  	     theField.value = theField.value + "0";
  	}
   }
   else
   {
   	varDec = theField.value.substring(theField.value.indexOf(',')+1, theField.value.length).length;
   	
   	for (i= varDec; i < decimales; i++)
  	{
  	     theField.value = theField.value + "0";
  	}
   
   }
    return true;  
    
  }else{
   	//return warnInvalid(theField,pFormatoPreffix+s+pFormatoSuffix);
   	return warnInvalid(theField,pFormatoPreffix + s + " es de " + enteros + " enteros y puede contener hasta " + decimales + " decimales separados por una ','.");
  } 
    

}//del function
//******** P000012968 FIN 13/03/2009 **************************


//Comprueba que el campo theField tenga el formato d,dd. Si no tiene ',' se la pone.
//s es el nombre del campo que aparecera en el mensaje de error, y emptyOk = false. 
//indica que el campo es obligatorio.
function comprobarImporte(theField, s, emptyOK){
	
 var importe = theField.value
 var importeCorrecto = /(^[0-9]+((,)[0-9][0-9])?)$/
 var sinComa = false

 
  if (comprobarImporte.arguments.length == 2) emptyOK = defaultEmptyOK;
  if ((emptyOK == true) && (isEmpty(theField.value))) return true;
  if (theField.value==null) return defaultEmptyOK;
  if (theField.value=="" && emptyOK == false){ 
   warnEmpty(theField, s);
   return false;
  } 
  
  if(charInString ('.', importe)){
   warnInvalid(theField,pFormatoPreffix+s+pPuntoSuffix);
   return false;
  } 
 
  if(!charInString (',', importe)){
   sinComa  = true;
  } 
 
  if(importeCorrecto.test(importe)){
   if(sinComa){
     theField.value = theField.value + ",00";
   }  
   return true;
  }else{
   return warnInvalid(theField,pFormatoPreffix+s+pFormatoSuffix);
  } 

}//del function

//Comprueba si la opcion s está actualmente selecconada para el campo theField.
function checkSelect(theField, s){

 var indiceSeleccionado
 var texto
 indiceSeleccionado = theField.options.selectedIndex
 texto = s

  if(theField.options[indiceSeleccionado].text == s)
    return true
  else  
    return false
}

//Valida que el formato de la hora sea hh:hh.
function checkHora(theField, s, emptyOK){
	
 if (checkHora.arguments.length == 2) emptyOK = defaultEmptyOK;
 if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 if (theField.value==null) return defaultEmptyOK;
 
 var horaValida = /^([0-9]{2}(:){1}[0-9]{2})$/
 var hora = theField.value
 
  if(horaValida.test(hora)){
   return true
  }else{
   warnInvalid(theField,pFormatoPreffix+s+pHoraSuffix)
  } 
 
}

function checkHora24 (theField, s, emptyOK){
	if (checkHora24.arguments.length == 2) emptyOK = defaultEmptyOK;
 	if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 	if (theField.value==null) return defaultEmptyOK;

	var hora=theField.value
	
	if (hora.length!=5) {warnInvalid(theField,pFormatoPreffix+s+pHoraSuffix);return;}
	
	var hh = hora.substr(0,2);
	var dosp = hora.substr(2,1);
	var mm = hora.substr(3,2);
	
	if (hh>23) {warnInvalid (theField, iHour);;return;}
	if (mm>59) {warnInvalid (theField, iMinute);return;}
	if (dosp != ':') {warnInvalid (theField, iTwopoint);return;}

	return true;
}

function checkHoraMayor(theField, theField2, s, emptyOK){
	
    if (checkHoraMayor.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;   
    if (theField2.value==null) return defaultEmptyOK;
 
 var hora = theField.value;
 var hora2 = theField2.value;
 
 hora = hora.substring(0,hora.indexOf(':')) + hora.substring(hora.indexOf(':')+1,hora.length);
 hora2 = hora2.substring(0,hora2.indexOf(':')) + hora2.substring(hora2.indexOf(':')+1,hora2.length);
 
 horaHidden = new textBoxHidden();
 horaHidden.value = hora;
 horaHidden2 = new textBoxHidden();
 horaHidden2.value = hora2;
 

 if (isNumericMayor(horaHidden,horaHidden2,false))
   return true;
 else
   return warnInvalid (theField2, mLengthPreffix + s + iNumericMayor + theField.value + pMonthSuffix);
 
 
}





//Le paso el radio o el checkbox a chekear, y comprueba que hay algún radio seleccionado.
function checkRadioCampos(radioBoton){

 var radio = radioBoton;
 
   
  for(var i=0;i<radio.length;i++){
  
    if(radio[i].checked == true) return true;
  	
  }
 
  return warnNoChecked(radio)
	
}

//Devuelve el radio seleccionado, y -1 si no hay ninguno seleccionado.
function radioSeleccionado(rad){
	
 var radio = rad;
 var selec = -1;

  for(var i=0;i<radio.length;i++){
     
     if(radio[i].checked == true){
      selec = i;
    }  
   }

 return selec
}

//Avanza ndías a partir de la fecha de hoy. Devuelve la fecha en 
//el formato dd-mm-yyyy
function addDays(ndias){

 var milisgDia = 86400000;
 hoy = new Date();
 var maniana = new Date(Date.UTC(hoy.getFullYear(),hoy.getMonth(),hoy.getDate())+milisgDia*ndias);
 
 
 var diaMan = maniana.getDate();
 if(diaMan <= 9)
   diaMan = "0"+ diaMan;
 var mesMan = maniana.getMonth()+1;
 if(mesMan <= 9)
   mesMan = "0" + mesMan;
 var anioMan = maniana.getFullYear();
 var manianaStr = diaMan+"-"+mesMan+"-"+maniana.getFullYear();
 
 return manianaStr;  

}

//Comprueba que el campo theField2 es mayor que el theField. Si no muestra un mensaje 
//diciendo que el theField2, y su nombre(s) debe ser mayor que theField.
function checkNumericMayor(theField, theField2, s, emptyOK) {   

    if (checkNumericMayor.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;   
    if (theField2.value==null) return defaultEmptyOK;
    
    if (isNumericMayor(theField,theField2,false))
        return true;
   else
    return warnInvalid (theField2, mLengthPreffix + s + iNumericMayor + theField.value + pMonthSuffix);
    
}


function isMultiplo(valor, multiplo){

 return (valor % multiplo == 0)

}

function parteDecimal(theField){

  var pdec;
  
  if(charInString(',',theField.value))
    pdec = theField.value.substr(theField.value.indexOf(',')+1,theField.value.length)
  else
    pdec = 00;
    
  return pdec;    
  
	
}


  
function warnNoChecked(radio){

   //radio[0].click()
    alert(mLengthPreffix+radio[0].name+pRadioSuffix)
    return false
	
}

function toUpperCase(theField) {   
theField.value = theField.value.toUpperCase();
}

function toLowerCase(theField) {   
theField.value = theField.value.toLowerCase();
}

function isVisa(cc)
{
  if (((cc.length == 16) || (cc.length == 13)) &&
      (cc.value.substring(0,1) == 4))
    return true
  return warnInvalid(cc,tarjeta_invalida);
}


function isMasterCard(cc)
{
  firstdig = cc.value.substring(0,1);
  seconddig = cc.value.substring(1,2);
  if ((cc.length == 16) && (firstdig == 5) &&
      ((seconddig >= 1) && (seconddig <= 5)))
    return true
  return warnInvalid(cc,tarjeta_invalida);

}


function esVisaOMasterCard(cc)
{
  firstdig = cc.value.substring(0,1);
  seconddig = cc.value.substring(1,2);
  if ((cc.value.length == 16) && (firstdig == 5) && ((seconddig >= 1) && (seconddig <= 5))){
      return true
  }else{
	 if (((cc.value.length == 16) || (cc.value.length == 13)) && (cc.value.substring(0,1) == 4)){
	    return true
	}
else{
//	alert("cc mide:"+cc.value.length);
	  return warnInvalid(cc,tarjeta_invalida);	
}
  }

}//esVisaOMasterCard

//ROSA	Comprueba que el campo no lleve comillas
function checkComillas(theField , s , emptyOK){

   if (checkComillas.arguments.length == 2) emptyOK = defaultEmptyOK;
   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
   if (theField.value.indexOf("'")!= -1 || theField.value.indexOf('"')!= -1)
        warnInvalid(theField , mComillasPreffix + s + mComillasSuffix);
   else return true;
   
}

//Para obtener la letra del nif a partir del dni.
function letraNif(dni){
         return claves.charAt(dni%23);
    }
//comprueba que en la contraseña no lleve ni blancos ni ñ 
function checkPassword(theField , s , emptyOK){
   if (checkPassword.arguments.length == 2) emptyOK = defaultEmptyOK;
   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
   if (theField.value.indexOf(" ")!= -1 || theField.value.indexOf("ñ")!= -1
       || theField.value.indexOf("Ñ")!= -1){
        warnInvalid(theField , mCaracterPreffix + s + mCaracterSuffix);
   }
   else {
   	if (checkComillas(theField,s,emptyOK)) return true;
   	else return false;
   }
   
   
}

//CMP 21/10/2003. Igual que checkAlphanumeric pero saca mensaje de aviso con el nombre del campo
var mSufix2 = " sólo puede contener valores numéricos y letras. Introdúzcalo de nuevo."

function warnInvalid2 (theField, s)
{
    theField.focus();
    theField.select();
    alert(mPrefix+s+mSufix2);
    return false;
}

function checkAlphanumeric2 (theField, s, emptyOK)
{
   if (checkAlphanumeric2.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (isWhitespace(theField.value)) 
              return warnEmpty (theField, s);
    	  else if (!isAlphanumeric(theField.value, false)) 
       		  return warnInvalid2 (theField, s);
	       else return true;
}
//FIN CMP 21/10/2003
function isNumericMenorIgual(theField, theField2, emptyOK) { if (isNumericMenorIgual.arguments.length == 2) emptyOK = defaultEmptyOK; if ((emptyOK == true) && (isEmpty(theField.value))) return true; if ((emptyOK == true) && (isEmpty(theField2.value))) return true; if (theField.value==null) return defaultEmptyOK; if (theField2.value==null) return defaultEmptyOK; var num1 = theField.value; var num2 = theField2.value; if(charInString (',', num1)){ num1 = cambiaCaracter(theField,',','.');}
num1 = parseFloat(num1); if(charInString (',', num2)){ num2 = cambiaCaracter(theField2,',','.');}
num2 = parseFloat(num2); return(num2 <= num1)
}

//CMP 31/03/2004. Igual que las funciones existentes pero saca mensaje de aviso con el nombre del campo
var mSufixInt = " sólo puede contener valores numéricos. Introdúzcalo de nuevo."
mSufixAlphab = " sólo puede contener letras. Introdúzcalo de nuevo."

function warnInvalid3 (theField, s)
{
    theField.focus();
    theField.select();
    alert(mPrefix+s+mSufixInt);
    return false;
}
function warnInvalid4 (theField, s)
{
    theField.focus();
    theField.select();
    alert(mPrefix+s+mSufixAlphab);
    return false;
}

function checkInteger2 (theField, s, emptyOK)
{
   if (checkInteger2.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (isWhitespace(theField.value)) 
              return warnEmpty (theField, s);
    else if (!isSignedInteger(theField.value, false))
       return warnInvalid3 (theField, s);
    else return true;
} 
function checkAlphabetic2 (theField, s, emptyOK)
{
   if (checkAlphabetic2.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (isWhitespace(theField.value)) 
              return warnEmpty (theField, s);
    else if (!isAlphabetic(theField.value, false))
       return warnInvalid4 (theField, s);
    else return true;
}

function checkIntegerTamField(theField, s, tam,emptyOK)
{
     
	   theField.value = stripWhitespace(theField.value);
	   if (checkIntegerTamField.arguments.length == 3) emptyOK = defaultEmptyOK;
 	   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 	   if(checkInteger2(theField, s, emptyOK)) 
 	   {
	     if(theField.value.length == tam)
	        return true;
	     else
	       return warnInvalid (theField, mLengthPreffix + s + mLengthSuffix + tam);
	   }    
}

function checkAlphabeticTamField(theField, s, tam,emptyOK)
{
     
	   theField.value = stripWhitespace(theField.value);
	   if (checkAlphabeticTamField.arguments.length == 3) emptyOK = defaultEmptyOK;
 	   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 	   if(checkAlphabetic2(theField, s, emptyOK)) 
 	   {
	     if(theField.value.length == tam)
	        return true;
	     else
	       return warnInvalid (theField, mLengthPreffix + s + mLengthSuffix + tam);
	   }    
}

function checkAlphanumericTamField(theField, s, tam,emptyOK)
{
     
	   theField.value = stripWhitespace(theField.value);
	   if (checkAlphanumericTamField.arguments.length == 3) emptyOK = defaultEmptyOK;
 	   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
 	   if(checkAlphanumeric2(theField, s, emptyOK)) 
 	   {
	     if(theField.value.length == tam)
	        return true;
	     else
	       return warnInvalid (theField, mLengthPreffix + s + mLengthSuffix + tam);
	   }    
}
//Fin CMP 31/03/2004

//MUC 27/08/2004
// Funciones para chequear caracteres correctos en la direccion Postal (Necesaria en planes)
function checkDireccionPostal (theField,s,emptyOK) {
	if (checkDireccionPostal.arguments.length == 2) emptyOK = defaultEmptyOK;
    	if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    	else if (isWhitespace(theField.value)) 
        	return warnEmpty (theField, s);
    	else if (!isDireccion(theField.value, false)) 
       		return warnInvalid2 (theField, s);
	else return true;
}

function isDireccion (s) {   
    var i;
    if (isEmpty(s))
       if (isDireccion.arguments.length == 1) 
       		return defaultEmptyOK;
       else return (isDireccion.arguments[1] == true);
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (! (isLetter(c) || isDigit(c) || (! isCaracterIncorrectoDireccion(c)) ) )
        return false;
    }
    return true;
}
// Permite espacios y letras
function isCaracterIncorrectoDireccion (c)
{
   return ((c=="º") || (c=="~"));
}
// FIN MUC 27/08/2004

function EliminaFormatoImporte(theField)
{
  var importe = cambiaCaracter(theField,'.','');
        
  return importe;    	
}

// Para devolver la fecha que nos llega con el formato dd.mm.yyyy.. La fecha que se recibe viene con el formato dd-MM-yyyy
function formatearFechasHostPensiones(fecha) 
{
	var sFecha = "";
	var sFechaValue = fecha.value; 
	sFecha = sFechaValue.substring(0,2) + "." + sFechaValue.substring(3,5) + "." + sFechaValue.substring(6,10);
	return sFecha;
}	

// DSA/LFV 06/03/2006

// Funcion que chequea realmente si un numero es mayor que otro despues de ver que isNumericMayor no lo hace correctamente
// Los parametros de entrada son a y b, dos números con formato xx,yy (Número de x's variable)
// Devuelve true si a > b, false en el resto de casos
function esNumeroMayor (a,b) {
	
	// Si son del mismo tamaño
	if (a.value.length == b.value.length) {
		return (a.value > b.value);
	}
	else {
		return (a.value.length > b.value.length);
	}
}

// Fin DSA/LFV 06/03/2006




// SAM 22/09/06
function distanciaEntreFechas(theField, theField2, maximo_dias, emptyOK) {

    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if ((emptyOK == true) && (isEmpty(theField2.value))) return true;    
    if (theField.value==null) return defaultEmptyOK;
    if (theField2.value==null) return defaultEmptyOK;
    
		sArray = theField.value.split("/")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = theField.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return false;        

    day = sArray[0];
    month = sArray[1];
    year = sArray[2];

    sArray2 = theField2.value.split("/")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        sArray2 = theField2.value.split("-")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        return false;        

    day2 = sArray2[0];
    month2 = sArray2[1];
    year2 = sArray2[2];
    
		var suma		= maximo_dias*24*3600*1000;
	
		if ( (new Date(year, month, day).getTime()) + suma > (new Date(year2, month2, day2).getTime()) ) 
			return true; //si es true casca
		else
			return warnInvalid (theField2,  "La consulta no debe superar un intervalo de " + maximo_dias + " días entre fechas");
	}

// FIN SAM 22/09/06

//INICIO ARI 04/12/07 Añadimos la validacion de una cuenta
	function comprobarCuenta(fieldEntidad,fieldOficina, fieldDC, fieldCuenta){

		
		if (!checkTypeTamField2(fieldEntidad, "Entidad de Cta. Abono", 4)){
			return false;
		}
		if (!checkTypeTamField2(fieldOficina, "Oficina de Cta. Abono", 4)){
			return false;
		}
		if (!checkTypeTamField2(fieldDC, "DC de Cta. Abono", 2)){
			return false;
		}
		if (!checkTypeTamField2(fieldCuenta, "Cuenta de Cta. Abono" , 10)){
			return false;
		}
		var digitoControl = comprobarDigitoControl(fieldEntidad.value, fieldOficina.value, fieldCuenta.value );
		if ( digitoControl != fieldDC.value ){
			window.alert("El número de cuenta introducido no es correcto");
			fieldDC.focus();
			return false;
		}
		return true;
	}




    var cPesosDigitosEntrada = new Array(6,3,7,9,10,5,8,4,2,1);
	var cModulo2DC           = new Array(0,1,9,8,7,6,5,4,3,2,1,0);

	function calcularDigito(arrayDatos){
		var valorAcumulado = 0;
		for ( i = arrayDatos.length -1 ; i >= 0 ; i-- )
		{
			valorAcumulado += arrayDatos[i] * cPesosDigitosEntrada[i];
		}
		var modulo = valorAcumulado % 11;
		return cModulo2DC[modulo];
	}


	function comprobarDigitoControl(entidad, oficina, cuenta){
		// Vamos a pasarlos a un array de enteros.
		var arrayEntidad = new Array(entidad.substring(3, 4), entidad.substring(2, 3), entidad.substring(1, 2), entidad.substring(0, 1));
		var arrayOficina = new Array(oficina.substring(3, 4), oficina.substring(2, 3), oficina.substring(1, 2), oficina.substring(0, 1));
		var arrayCuenta  = new Array(cuenta.substring(9, 10) , cuenta.substring(8, 9), cuenta.substring(7, 8) , cuenta.substring(6, 7), cuenta.substring(5, 6) , cuenta.substring(4, 5), cuenta.substring(3, 4) , cuenta.substring(2, 3), cuenta.substring(1, 2) , cuenta.substring(0, 1));
		// Nos vamos a crear un array que va a ser mezcla del de entidad y oficina.
		var arrayEntidadOficina = new Array( oficina.substring(3, 4), oficina.substring(2, 3), oficina.substring(1, 2), oficina.substring(0, 1), entidad.substring(3, 4), entidad.substring(2, 3), entidad.substring(1, 2), entidad.substring(0, 1));
		var digitoSucursal = calcularDigito(arrayEntidadOficina);
		var digitoCuenta   = calcularDigito(arrayCuenta);
		return ((digitoSucursal*10) + digitoCuenta);
	}

// FIN ARI 04/12/07

//P00012187 - Multiidioma. Confirming OMN SD --INICIO

//Comprueba que el campo theField tenga el formato d,dd y admite importes negativos. Si no tiene '.' se le pone.
//s es el nombre del campo que aparecera en el mensaje de error, y emptyOk = false. 
//indica que el campo es obligatorio.

function comprobarImporteNegativo(theField, s, emptyOK){
	
 var importe = theField.value
 var importeCorrecto = /(^(-)?[0-9]+((,)[0-9][0-9])?)$/
 var sinPunto = false

 
  if (comprobarImporteNegativo.arguments.length == 2) emptyOK = defaultEmptyOK;
  if ((emptyOK == true) && (isEmpty(theField.value))) return true;
  if (theField.value==null) return defaultEmptyOK;
  if (theField.value=="" && emptyOK == false){ 
   warnEmpty(theField, s);
   return false;
  } 
  
  if(charInString ('.', importe)){
   warnInvalid(theField,pFormatoPreffix+s+pComaSuffix);
   return false;
  } 
 
  if(!charInString (',', importe)){
   sinPunto  = true;
  } 
 
  if(importeCorrecto.test(importe)){
   if(sinPunto){
     theField.value = theField.value + ",00";
   }  
   return true;
  }else{
   return warnInvalid(theField,pFormatoPreffix+s+pFormatoSuffixIngles);
  } 

}//del function

//P00012187 - Multiidioma. Confirming OMN SD -- FIN

//P00012187 - Multiidioma. FONDOS SICONET NVS -- INICIO
function sumarMesesFecha(fechaStr,meses)
{	
 	sArray = fechaStr.value.split("/")
   
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = fechaStr.value.split("-")
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return warnInvalid (theField, iDate);        

	day = sArray[0];
    month = sArray[1];
    year =  sArray[2];
	
    var intYear = parseInt(year,10) 
    var intMonth = parseInt(month-1,10) + parseInt(meses,10);;
    var intDay = parseInt(day,10);


	var salida = new Date(intYear,intMonth ,intDay);
		return formatearFecha(salida);
}

function comparaDifMeses(desde,hasta,dif)
{

    sArray = desde.value.split("/");
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        sArray = desde.value.split("-");
    
    if ( (sArray.length < 3) || (sArray.length > 3))
        return false;        

    day = sArray[0];
    month = sArray[1];
    year = sArray[2];

    sArray2 = hasta.value.split("/");
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        sArray2 = hasta.value.split("-");
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        return false;        

    day2 = sArray2[0];
    month2 = sArray2[1];
    year2 = sArray2[2];

//comvertimos hasta a fecha para restar los meses
dateHasta = new Date(year2,month2 - 1 - dif ,day2);

//lo convertimos de nuevo a string con formato
sfechaHasta = formatearFecha(dateHasta);


//lo descomponemos de nuevo
    sArray2 = sfechaHasta.split("/")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        sArray2 = sfechaHasta.split("-")
    
    if ( (sArray2.length < 3) || (sArray2.length > 3))
        return false;        

    day2 = sArray2[0];
    month2 = sArray2[1];
    year2 = sArray2[2];
    

 //Comparamos
 if(year2+month2+day2>year+month+day)return false;
    	else return true;
    
}
//P00012187 - Multiidioma. FONDOS SICONET NVS -- FIN

//P00012187 - Multiidioma. CHEQUES CMC7 Adolfo Sandín -- INICIO
//Formatea una cadena String como importe con n decimales, siendo los decimales
//las n ultimas posiciones de la cadena String (PEj.: 9999 y n=2 -> 99,99)
function stringToFormatoImporteDecimales(theField,decimales)
{
  var importe = theField.substring(0,(theField.length-decimales)) + ',' + theField.substring(theField.length-decimales);
  
  return importe;    	
}
//P00012187 - Multiidioma. CHEQUES CMC7 Adolfo Sandín -- FIN

//************* I0000639704 19-08-2010 INICIO ***************************
//* Creamos una función que devuelva el día, mes y el año               *
//***********************************************************************
function devuelveDiaMesAnno(theField,decimales)
{
	return theField.value.split("/");	
}
//************* I0000639704 19-08-2010 FIN ******************************

//************* I0000639704 19-08-2010 INICIO ***************************
//* Creamos una función que devuelva el día, mes y el año               *
//***********************************************************************
function devuelveDiaMesAnno(theField,decimales)
{
	return theField.value.split("-");	
}
//************* I0000639704 19-08-2010 FIN ******************************


//************* P000017086 26-09-2012 INICIO ****************************
//* Funcion que comprueba si es alfabético incluyendo acentos           *
//* La otra comprueba si es numerico y la cambia a mayusculas sin       *
//* acentos                                                             *
//***********************************************************************

function isAlphabeticAcentos(theField, emptyOK) {
	var valorOriginal = theField.value;
	theField.value = quitarAcentos(theField);
	var b= checkAlphabetic(theField, s, emptyOK);			
	theField.value = valorOriginal;	  
  return b;
}	

function isAlphabeticAcentos2(theField, emptyOK) {
	var valorOriginal = theField.value;
	theField.value = quitarAcentos(theField);
	var b= checkAlphabetic2(theField, s, emptyOK);			
	theField.value = valorOriginal;	  
  return b;
}	

function isCambiaAlphabeticAcentos2(theField, s, emptyOK) {
	//var valorOriginal = theField.value;
	theField.value = quitarAcentos(theField);
	//var b= checkAlphabetic2(theField, s, emptyOK);			
	//theField.value = valorOriginal;	  
  //return b;
  return checkAlphabetic2(theField, s, emptyOK);
}
//************* P000017086 26-09-2012 FIN ******************************
/******************** I0002465225 25/04/2014 INICIO ***************************/
function validarDigitoControlIBAN(theField)
{
		var iban = theField.value;
		var digito = iban.substring(2,4);
    iban = iban.substring(4, iban.length) + iban.substring(0,2) + "00";

		//sustituimos las letras por numeros segun tabla de la documentacion
		//Asociamos tabla de documentacion con ascii. ascii (A=65)... se resta 55
		var i;
		for (i = 0; i < iban.length; i++)
		{
			var c = iban.charAt(i);
			//si es una letra la convertimos en numero
			if (isNaN(c))
			{
				var num = iban.charCodeAt(i) - 55;
				iban = iban.substring(0,i) + num + iban.substring(i+1,iban.length);
			}
		}

		//Se realiza el calculo del digito de control
		var calculo;
		var digito_tmp;
		while(iban.length != 0)
		{
			if(iban.length > 9)
			{
				calculo = iban.substring(0,9);
				iban = (calculo % 97) + iban.substring(9,iban.length);
			}
			else
			{ 
				digito_tmp = 98 - (iban % 97);
				digito_tmp = ""+digito_tmp;
				if (digito_tmp.length == 1) digito_tmp = "0" + digito_tmp;
				if ( digito_tmp == digito ) return true;
				else return false;
			}
		}		
	}
/******************** I0002465225 25/04/2014 FIN ******************************/	
//P00019722 18/01/2016 INICIO: - isIBANSepa: se genera una función que nos permita saber si el IBAN introducido pertenece a la normativa SEPA o no.
//- recalculaIban: función para obtener el cálculo del IBAN español
//- calculaIBAN: función para hayar el IBAN
function isIBANSepa(cuentaIBAN){
	var codigoIBAN = "";
	codigoIBAN = cuentaIBAN.substring(0,2);
	var i;
	for(i = 0; i < arrayCodigoIBAN.length; i++){
		var auxIBAN = arrayCodigoIBAN[i];
		if(codigoIBAN == auxIBAN){
			return true;
		}
	}
	return false;
}

function recalculaIban(){

	var ccc = document.getElementById("CCC_ABO2").value +
	document.getElementById("CCC_ABO3").value +
	document.getElementById("CCC_ABO4").value +
	document.getElementById("CCC_ABO5").value +
	document.getElementById("CCC_ABO6").value;
	var expreRegular = /^\d{20}$/; // Expresion regular para que no salga not a number
	if(expreRegular.test(ccc)){ // Nueva condicion con la expresion regular
		var iban = calcularIBAN(ccc, "ES")
		document.getElementById("CCC_ABO1").value  = iban;
		document.getElementById("cuentaIBAN").value = iban+ccc;
	} else {
		document.getElementById("CCC_ABO1").value  = "ES**"; 
		document.getElementById("cuentaIBAN").value = "";
	}		
}

function calcularIBAN(cuentaValor, cpais) {

	var ncuenta = ""+cuentaValor;
	if ( ncuenta.length == 17 ){
		ncuenta = "000"+ncuenta;
	}
	if ( ncuenta.length == 18 ){
		ncuenta = "00"+ncuenta;
	}
	if ( ncuenta.length == 19 ){
		ncuenta = "0"+ncuenta;
	}
	
	var oficina = ncuenta.substr(0,4);
	var sucursal = ncuenta.substr(4,4);
	var dc = ncuenta.substr(8,2)
	var cuenta = ncuenta.substr(10,10);
	var iban = ""+oficina + sucursal;
	var MOD_1 = iban % 97;
	iban = ""+MOD_1 + dc + cuenta.substr(0,2);
	MOD_1  = iban % 97;
	iban = ""+MOD_1 + cuenta.substr(2,cuenta.length) + "1428" + "00";
	MOD_iban = iban % 97;
	var CC_iban = 98 - MOD_iban;
	if ( CC_iban < 10 ){
		CC_iban = '0' + CC_iban;
	}
	return "ES"+CC_iban;
}
//P00019722 18/01/2016 FIN