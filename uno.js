/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{	var tipo;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var capacidad;
	var respuesta;
	var bandera;
	var banderaDos;
	var cantidadSSD;
	var marcaSSD;
	var precioMinimo;
	var precioMaximo;
	var capacidadHDD;
	var cantidadHDD;
	var acumuladorHDD;

	respuesta="si";
	cantidad=0;
	precio=0;
	bandera=0;
	banderaDos=0;
	precioMinimo=0;
	cantidadSSD=0;
	precioMaximo=0;
	capacidadHDD=0;
	cantidadHDD=0;
	acumuladorHDD=0;

	while(respuesta=="si"){
		tipo=prompt("Ingrese el tipo de disco rigido: HDD, SSD, SSDM2");
		while(tipo!="HDD"&&tipo!="SSD"&&tipo!="SSDM2"){
			tipo=prompt("Error. Ingrese: HDD, SSD, SSDM2");
		}
		precio=prompt("Ingrese precio. Rango $5000 - $18000");
		precio=parseInt(precio);
		while(precio<5000||precio>18000){
			precio=prompt("Error. Ingrese precio entre $5000 - $18000");
			precio=parseInt(precio);
		}
		cantidadDeUnidades=prompt("Ingrese cantidad de unidades. Min 1 Max 50");
		cantidadDeUnidades=parseInt(cantidadDeUnidades);
		while(cantidadDeUnidades<1||cantidadDeUnidades>50){
			cantidadDeUnidades=prompt("Dato invalido. Ingrese cantidad: Min 1 Max 50");
		    cantidadDeUnidades=parseInt(cantidadDeUnidades);
		}
		marca=prompt("Ingrese marca: Seagate - Western - Digital Kingston");
		while(marca!="seagate"&&marca!="western"&&marca!="digital kingston"){
			marca=prompt("Marca invalida. Ingrese: Seagate - Western - DigitalKingston");
		}
		capacidad=prompt("Ingrese capacidad de almacenamiento: 250Gb, 500Gb, 1Tb, 2Tb (Ingrese solo numero");
		while(capacidad!="250"&&capacidad!="500"&&capacidad!="1"&&capacidad!="2"){
			capacidad=prompt("Error. Ingrese dato valido: 250Gb, 500Gb, 1Tb, 2Tb (Ingrese solo numero");
		}

        /*  a) Del más barato de los SSD, la cantidad de unidades y marca.
			b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   			disponibles. 
			c) Cuántas unidades de HDD hay en total.*/
			switch(tipo){
				case "SSD":
					if(bandera==0){
					precioMinimo=precio;
					cantidadSSD=cantidadDeUnidades;
					marcaSSD=marca;
					bandera=1;
				}
					if(precio<precioMinimo){
					precioMinimo=precio;
					cantidadSSD=cantidadDeUnidades;
					marcaSSD=marca;
				}
				break;
				case "HDD":
					if(banderaDos==0){
						precioMaximo=precio;
						capacidadHDD=capacidad;
						cantidadHDD=cantidadDeUnidades;
						banderaDos=1;
					}
					if(precio>precioMaximo){
						precioMaximo=precio;
						capacidadHDD=capacidad;
						cantidadHDD=cantidadDeUnidades;
						acumuladorHDD=acumuladorHDD+cantidadDeUnidades;
					}
					break;


				}
				respuesta=prompt("¿Desea ingresar mas productos?");
			}
			if(tipo=="SSD"&&cantidadDeUnidades>0){
				alert("El SSD mas barato cuesta $"+precioMinimo+". Hay "+cantidadSSD+" unidades y son de la marca "+marcaSSD);
			}
			if(tipo=="HDD"&&cantidadDeUnidades>0){
				alert("El HDD mas caro cuesta $"+precioMaximo+". Posee "+capacidadHDD+" de almacenamiento y hay "+cantidadHDD+" unidades");
				alert("Cantidad de HDD total: "+acumuladorHDD);


			}
	









		
	}
	
	
	

