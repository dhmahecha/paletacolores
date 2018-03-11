function randomPalette(){
	var colorR = Math.floor((Math.random() * 255) + 0);
	var colorG = Math.floor((Math.random() * 255) + 0);
	var colorB = Math.floor((Math.random() * 255) + 0);

	return rgbToHsv(colorR,colorG,colorB);
}



function generateRules(){
	var armoniaColores = 360/5;
	var tonalidadInicial = Math.floor((Math.random() * 360) + 1);
	var arrTonalidad = new Array();
	var maximaTonalidad = 360;
	var tonalidad = 0;

	for(var i=0;i<5;i++){
		if(i==0){
			tonalidad= tonalidadInicial;
			arrTonalidad[i]=tonalidad;
		}
		else{
			if((tonalidad + armoniaColores) <= maximaTonalidad){
				tonalidad = (tonalidad + armoniaColores);
				arrTonalidad[i]=tonalidad;
			}else{
				if((tonalidad + armoniaColores) <= maximaTonalidad){
					tonalidad = (tonalidad + armoniaColores);
					arrTonalidad[i]=tonalidad;
				}
				else{
					tonalidad = armoniaColores - (maximaTonalidad - tonalidad);
					arrTonalidad[i]=tonalidad;
				}
			}
		}
				
	}

	var arrColores = new Array();
	var colorHsv = randomPalette();
	for(var i=0;i<arrTonalidad.length;i++){
		var h = arrTonalidad[i]/360;
		var s = colorHsv[1];
		var v = colorHsv[2];
		var colorRGB = hsvToRgb(h,s,v);
		var r = Math.round(colorRGB[0]);
		var g = Math.round(colorRGB[1]);
		var b = Math.round(colorRGB[2]);
		var colorHex = colorToHex(r,g,b);	
		arrColores[i] = colorHex;
	}
	return arrColores;
}

function generatePalette(){
	
	var arrColores =generateRules();
	var wsb = ".website-background{ color: " + arrColores[0]+";}\n\n";
	var et = ".element-text{ color: "+ arrColores[1] +";}\n\n";
	var ebo = ".element-border{ border-color: "+ arrColores[1] +";}\n\n";
	var eba = ".element-background{ background-color: "+ arrColores[1] +";}\n\n";
	var h = ".header{ color: "+ arrColores[1] +";}";
	
	var txtArea = "\n" + wsb + et + ebo + eba + h;
	document.getElementById("css-rules").innerHTML = txtArea;
	document.getElementById("color1").style.backgroundColor = arrColores[0];
	document.getElementById("color2").style.backgroundColor = arrColores[1];
	document.getElementById("color3").style.backgroundColor = arrColores[2];
	document.getElementById("color4").style.backgroundColor = arrColores[3];
	document.getElementById("color5").style.backgroundColor = arrColores[4];
}

function cleanPalette(){
	document.getElementById("css-rules").innerHTML = "";
}
