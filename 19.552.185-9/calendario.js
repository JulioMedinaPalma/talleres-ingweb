console.log("Hola");

/*
Defina objetos similares para los otros meses. 
Para renderizar la tabla de un mes basta saber 
cual es el día de semana inicial, y cuántos días tiene el mes.
*/
var diasEnero = {"firstWeekDay": "mon", "days": 31}
var diasFebrero = {"firstWeekDay": "mon", "days": 29 }
var diasMarzo = {"firstWeekDay": "mon", "days": 31}
var diasAbril = {"firstWeekDay": "mon", "days": 30}
var diasMayo = {"firstWeekDay": "mon", "days": 31}
var diasJunio = {"firstWeekDay": "mon", "days": 30}
var diasJulio = {"firstWeekDay": "mon", "days": 31}
var diasAgosto = {"firstWeekDay": "mon", "days": 31}
var diasSeptiembre = {"firstWeekDay": "mon", "days": 30}
var diasOctubre = {"firstWeekDay": "mon", "days": 31}
var diasNoviembre = {"firstWeekDay": "mon", "days": 30}
var diasDiciembre = {"firstWeekDay": "mon", "days": 31}
var eventosEnero = [];
var eventosFebrero = [];
var eventosMarzo = [];
var eventosAbril = [];
var eventosMayo = [];
var eventosJunio = [];
var eventosJulio = [];
var eventosAgosto = [];
var eventosSeptiembre = [];
var eventosOctubre = [];
var eventosNoviembre = [];
var eventosDiciembre = [];

function addEventToDay(month, day) {
    console.log(month + " " + day);
    var eventText = window.prompt("Ingrese texto del evento: ");
    /* El chequeo de eventText es obligatorio */
    if(eventText) {
        if(month==0){eventosEnero[day] = eventText;}
        if(month==1){eventosFebrero[day] = eventText;}
        if(month==2){eventosMarzo[day] = eventText;}
        if(month==3){eventosAbril[day] = eventText;}
        if(month==4){eventosMayo[day] = eventText;}
        if(month==5){eventosJunio[day] = eventText;}
        if(month==6){eventosJulio[day] = eventText;}
        if(month==7){eventosAgosto[day] = eventText;}
        if(month==8){eventosSeptiembre[day] = eventText;}
        if(month==9){eventosOctubre[day] = eventText;}
        if(month==10){eventosNoviembre[day] = eventText;}
        if(month==11){eventosDiciembre[day] = eventText;}
    }

    renderSelectedMonth(month);
}
		    
function getHTMLForMonthDay(month, day) {
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" ";
    dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    dayHTML += day;
    if(month==0){    if(eventosEnero[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosEnero[day];
        }}
    if(month==1){    if(eventosFebrero[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosFebrero[day];
        }}
    if(month==2){    if(eventosMarzo[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosMarzo[day];
        }}
    if(month==3){    if(eventosAbril[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosAbril[day];
        }}
    if(month==4){    if(eventosMayo[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosMayo[day];
        }}
    if(month==5){    if(eventosJunio[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosJunio[day];
        }}
    if(month==6){    if(eventosJulio[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosJulio[day];
        }}
    if(month==7){    if(eventosAgosto[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosAgosto[day];
        }}
    if(month==8){    if(eventosSeptiembre[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosSeptiembre[day];
        }}
    if(month==9){    if(eventosOctubre[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosOctubre[day];
        }}
    if(month==10){    if(eventosNoviembre[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosNoviembre[day];
        }}
    if(month==11){    if(eventosDiciembre[day]) {
        dayHTML += "<hr/>";
        dayHTML += eventosDiciembre[day];
        }}
    dayHTML += "</td>";
    return dayHTML;
}


function getHTMLForMonthTable(selectedMonth) {
    /*
     El valor de weekDayIdx debe cambiar
     si el primer dia del mes  no es lunes
    */
    var weekDayIdx="";
    if(selectedMonth == 0){weekDayIdx=6;}
    if(selectedMonth == 1){weekDayIdx=2;}
    if(selectedMonth == 2){weekDayIdx=2;}
    if(selectedMonth == 3){weekDayIdx=5;}
    if(selectedMonth == 4){weekDayIdx=0;}
    if(selectedMonth == 5){weekDayIdx=3;}
    if(selectedMonth == 6){weekDayIdx=5;}
    if(selectedMonth == 7){weekDayIdx=1;}
    if(selectedMonth == 8){weekDayIdx=4;}
    if(selectedMonth == 9){weekDayIdx=6;}
    if(selectedMonth == 10){weekDayIdx=2;}
    if(selectedMonth == 11){weekDayIdx=4;}
    var newHTML = "";
    var newSemanaHTML = "";   
    if(weekDayIdx == 1 ){
        newHTML+= "<td>";
    }
    if(weekDayIdx == 2 ){
        newHTML+= "<td>";
        newHTML+= "<td>";
    }
    if(weekDayIdx == 3 ){
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
    }
    if(weekDayIdx == 4 ){
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
    }
    if(weekDayIdx == 5 ){
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
    }
    if(weekDayIdx == 6 ){
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
        newHTML+= "<td>";
    }


    if(selectedMonth == 0){    for(var i = 1; i <= diasEnero.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasEnero.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 1){    for(var i = 1; i <= diasFebrero.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasFebrero.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 2){    for(var i = 1; i <= diasMarzo.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasMarzo.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 3){    for(var i = 1; i <= diasAbril.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasAbril.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 4){    for(var i = 1; i <= diasMayo.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasMayo.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 5){    for(var i = 1; i <= diasJunio.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasJunio.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 6){    for(var i = 1; i <= diasJulio.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasJulio.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 7){    for(var i = 1; i <= diasAgosto.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasAgosto.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 8){    for(var i = 1; i <= diasSeptiembre.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasSeptiembre.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 9){    for(var i = 1; i <= diasOctubre.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasOctubre.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 10){    for(var i = 1; i <= diasNoviembre.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasNoviembre.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}
    if(selectedMonth == 11){    for(var i = 1; i <= diasDiciembre.days; i++) {
        
	    if(weekDayIdx == 0) {
	        newSemanaHTML += "<tr>";
        }

	    newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

	    if(weekDayIdx == 6 || (i + 1) > diasDiciembre.days) {
	        newSemanaHTML += "</tr>";
	        newHTML += newSemanaHTML;
	        newSemanaHTML = "";
	    }
	    weekDayIdx = (weekDayIdx + 1) % 7;	
    }}


    return newHTML;
}



function getMonthName(month) {
    switch(parseInt(month)) {
    case 0: return "Enero";
    case 1: return "Febrero";
    case 2: return "Marzo";
    case 3: return "Abril";
    case 4: return "Mayo";
    case 5: return "Junio";
    case 6: return "Julio";
    case 7: return "Agosto";
    case 8: return "Septiembre";
    case 9: return "Octubre";
    case 10: return "Noviembre";
    case 11: return "Diciembre";
    }

    throw new Error("No existe mes con indice: " + month);
}


function renderSelectedMonth(selectedMonth) {
    console.log(selectedMonth);

    var monthName = getMonthName(selectedMonth);
    console.log(monthName);

    // Ver: http://stackoverflow.com/questions/13775519/html-draw-table-using-innerhtml
    var newHTML = "";
    newHTML += "<h1>Mes: " + monthName + "</h1>";
    newHTML += "<table>";    
    newHTML += "<tr>";
    newHTML += "<th>Lunes</th>";
    newHTML += "<th>Martes</th>";
    newHTML += "<th>Miercoles</th>";
    newHTML += "<th>Jueves</th>";
    newHTML += "<th>Viernes</th>";
    newHTML += "<th>Sabado</th>";
    newHTML += "<th>Domingo</th>";
    newHTML += "</tr>";

    /*
    Aqui usted debe renderizar la tabla con los dias del mes
    Utilice la información en el objeto 'diasMayo' o el que
    corresponda según el mes seleccionado.

    A modo de demostración, el siguiente código renderiza
    la tabla con el mes de Mayo.
    */

    newHTML += getHTMLForMonthTable(selectedMonth);

    /* Fin de la tabla */
    newHTML += "</table>";

    /* Actualizamos el innerHTML del div currentMonth */
    var monthDiv = document.getElementById("currentMonth");    
    monthDiv.innerHTML = newHTML;
}
