	//Clae calculadora
	//
	class Calculadora{
		constructor ( args = {}){
		({	carry: this._carry = 0,
			value: this._value = 0
			}=args );
		}
		valueDisplay(val, state){
			if(this._carry===0 && this._value==0 ){
				this._value = '';
				this._carry = val.toString();
			}else if(state==true){
				this._carry = val.toString();
			}else if(this._carry===0 && this._value!=''){
				this._carry = val.toString();			
			}
			else{
				this._carry +=val.toString();
			}
		}
		valOnCarry(num){
			this._carry=num;
		}

		putSignOn(value){
			switch (Math.sign(value)){
				case  1 :
					this._carry = "-"+value;
				break;
				case  -1 :
					this._carry = Math.abs(value);
				break;
				case  0 :
					this._carry = value;
				break;
				}
			}
		equalVal(){
			if(this._value==''  && this._carry!=''){
				this._value = this._carry;
			}else if(this._carry!='' || this._carry!=0){
				this._value += this._carry;
				this._value = eval(this._value);
			}else{
				this._value = eval(this._value);
			}
			if (this._value.toString().length > 8) {
			    this._value = this._value.toString().slice(0,8);
			    }	
			this._carry=0;
		}

		clearDisp(){
			if(this._carry!=0){
				this._carry = 0;
			}else{
				this._value=0;	
				}
			}
		get valueDisplayOn(){
			return this._carry;
		}
		get realValue(){
			return this._value;	
		}
		operar(operacion){
			if(this._value=='' || this._value==0){
				this._value = this._carry;
			}else{
				this._value += this._carry;
			}
			switch (operacion) {
				case "suma":
					this._value +='+';
					break;
				case "resta":
					if(this._value=='' || this._value==0){
					this._value = this._carry;
					}else{
					this._value += '-';
					}	
					break;
				case "multiplica":
					this._value += '*';	
					break;
				case "divide":
					this._value += '/';	
					break;
				default:
					alert("que haces?");
					break;
			}
		}
		point(){
			if(this._carry==0 || this._carry==''){
				this._carry = 0 + '.';
			}else{
				this._carry += '.';
					}
				}
	}
	//creacion de instancia de la clase calculadora
	let cal = new Calculadora;
	// valor inicial 
	document.getElementById("display").innerHTML = 0;
	//eventos.
	document.getElementById('0').addEventListener("click", function(){displayNum(0)});
	document.getElementById('1').addEventListener("click", function(){displayNum(1)});
	document.getElementById('2').addEventListener("click", function(){displayNum(2)});
	document.getElementById('3').addEventListener("click", function(){displayNum(3)});
	document.getElementById('4').addEventListener("click", function(){displayNum(4)});
	document.getElementById('5').addEventListener("click", function(){displayNum(5)});
	document.getElementById('6').addEventListener("click", function(){displayNum(6)});
	document.getElementById('7').addEventListener("click", function(){displayNum(7)});
	document.getElementById('8').addEventListener("click", function(){displayNum(8)});
	document.getElementById('9').addEventListener("click", function(){displayNum(9)});
	document.getElementById('mas').addEventListener("click", function(){operacion('suma')});
	document.getElementById('menos').addEventListener("click", function(){operacion('resta')});
	document.getElementById('por').addEventListener("click", function(){operacion('multiplica')});
	document.getElementById('dividido').addEventListener("click", function(){operacion('divide')});
	document.getElementById('on').addEventListener("click", function(){clrDsplay()});
	document.getElementById('punto').addEventListener("click", function(){pointer()});
	document.getElementById('sign').addEventListener("click", function(){putSign()});;
	document.getElementById('igual').addEventListener("click", function(){equal()});
	// var cifra = "";
	// var acumulado = 0;
	// var FirstOp;
	// var	sumar = false; 
	// var restar = false;
	function displayNum(num){ 

	if(document.getElementById("display").innerHTML.length<8){
		if(parseInt(document.getElementById("display").innerHTML)===0 && num==0){
			cal.valueDisplay(num);
			document.getElementById("display").innerHTML = cal.valueDisplayOn;
			alert("hola 2");

		}else if(document.getElementById("display").innerHTML==0	&& num==0 ){
			cal.valueDisplay(num, true);	
			alert("hola 4");	
			document.getElementById("display").innerHTML = cal.valueDisplayOn;
		}else{
			alert("hola 5");
			cal.valueDisplay(num);		
			document.getElementById("display").innerHTML = cal.valueDisplayOn;
			}
		}
	}
	function putSign(){
		cal.putSignOn(parseInt(document.getElementById("display").innerHTML));
		document.getElementById("display").innerHTML = cal.valueDisplayOn;
	}
	function operacion(valor){
		switch (valor) {
			case "suma":	
			document.getElementById("display").innerHTML = 0; 
			cal.operar('suma');		
			cal.valOnCarry(0);
				break;
			case "resta":
			document.getElementById("display").innerHTML = 0; 
			cal.operar('resta');
			cal.valOnCarry(0);
				break;
			case "multiplica":
			document.getElementById("display").innerHTML = 0; 	
			cal.operar('multiplica');	
			cal.valOnCarry(0);
				break;
			case "divide":
			document.getElementById("display").innerHTML = 0; 	
			cal.operar('divide');	
			cal.valOnCarry(0);
				break;
			default:
				alert("que haces ?");
			break;
		}
	}

	function clrDsplay(){
		cal.clearDisp();
		document.getElementById("display").innerHTML = 0;
	}
	function equal(){
		cal.equalVal();
		document.getElementById("display").innerHTML = parseFloat(cal.realValue);
	}

	function pointer(){
		if(document.getElementById("display").innerHTML.indexOf(".")!=2){
			cal.point();	
			document.getElementById("display").innerHTML = cal._carry;
		}
	}