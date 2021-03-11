	/* JS

 	function testJs(){
 		var test = document.getElementById('testJs');
 		test.onclick = click;
 		function click(){
 		var image = document.getElementById('header');
 		image.setAttribute('class', 'fon');
	};	
};

testJs(); */

	/*JQ

	$('#testJs').click(function(){
		$('#header').toggleClass('fon');
	});*/


	// Слайдер

  	//$('.slider').slick({
    //    arrows:true,
    //    dots:false, 
    //    slidesToShow:3, 
    //    autoplay:true, 
    //});
 
    // Цикл
	/*var apples = 5;
	while(apples >= 0){
		document.write('отдал яблоко другу <br>');
		apples = apples - 1;
	}
	document.write('яблок больше нет');*/

	// Вход

	/*var name = prompt('Введи ваше имя!');
	if(name == 'Eugene'){
		alert('Welcome Eugene!');

	} else if(name == 'Zhanna'){
		alert('Welcome Zhanna!');
	} else {;
		alert('Invalid Name Access Denied');
		location.reload();
	}

	// Калькулятор

	/*var x = prompt('enter');
	var z = prompt('+, -, *, /');
	var y = prompt('enter');

	var x = parseInt(x);
	var y = parseInt(y);

	var result;

		switch(z){
			case('+'): result = x + y;
			break;
			case('-'): result = x - y;
			break;
			case('*'): result = x * y;
			break;
			case('/'): result = x / y;
			break;
			default: result = 'none';
		};
	alert(result);
	location.reload();*/

	/*морской бой

	var location1 = Math.floor(Math.random()*5);
	var location2 = location1 + 1;
	var location3 = location2 + 1;

	var guess;
	var hits = 0;
	var shots = 0;

	var sunk = false;

	while(sunk == false){
		guess = prompt('Введите число от 0 до 6');

		if(guess < 0 || guess > 6){
		alert('Я же просил от 0 до 6!');
			} else {
				shots = shots + 1;

				if(guess == location1 || guess == location2 || guess == location3){
				alert('Попал!')
				hits = hits + 1;

						if(hits == 3){
						sunk = true;
						alert('Ти победил!');
				}				
			} else{
				alert('Мимо!')
		}	
	}
}
var results = "Вистрелов: "+ shots + " Попаданий: "+ hits;
alert(results);*/

	// Функция
	/* function myFun(name, number){
		var message;

		if(number < 1){
			message = name + "учиться еще 11 лет";
		} else if(number > 0 && number < 2){
			message = name + "учиться еще 10 лет";
		} else if(number > 1 && number < 3){
			message = name + "учиться еще 9 лет";
		} else if(number > 2 && number < 4){
			message = name + "учиться еще 8 лет";
		} else if(number > 3 && number < 5){
			message = name + "учиться еще 7 лет";
		} else if(number > 4 && number < 6){
			message = name + "учиться еще 6 лет";
		} else if(number > 5 && number < 7){
			message = name + "учиться еще 5 лет";
		} else if(number > 6 && number < 8){
			message = name + "учиться еще 4 года";
		} else if(number > 7 && number < 9){
			message = name + "учиться еще 3 года";
		} else if(number > 8 && number < 10){
			message = name + "учиться еще 2 года";
		} else if(number > 9 && number < 11){
			message = name + "учиться еще 1 год";
		} else if(number > 10 && number < 12){
			message = name + "это последний год";
		} else {
			message = name + "ты уже закончил школу!";
		}
		return message;
	}
var status = myFun('Женя ', 12);
console.log(status);*/

	/* Обект авто
	var audi = {
		model: 'a8',
		color: 'white',
		type: 'sedan',
		year: 2010,
		passenger: 5,
		kpp: 'auto',
		fuel: 0,
		started: false,
		headlights: false,
		start: function(){
			if(this.fuel == 0){
				this.started = false;
				alert('Надо заправить авто!');
			} else {
				this.started = true;
				alert('Завели!');
			};
		},
		light: function(){
			this.headlights = true;
			alert('Фары включены!');
		},
		stop: function(){
			alert('Двигатель заглушен!');
		},
		drive: function(){
			if(this.started){
				if(this.fuel > 5){
					alert('Поехали!');
					this.fuel = this.fuel - 5;
				} else {
					alert('Мало топлива, заправте авто!');
					this.stop();
				};
			} else {
				alert('Заведите автомобиль и включите фары!')
			};	
		},
		addFuel: function(amount){
			this.fuel = this.fuel + amount;
			alert('Отлично, заправили!');
		}
	};


console.log(audi.fuel);
audi.start();
audi.addFuel(2);
console.log(audi.fuel);
audi.drive();
audi.start();
audi.light();
audi.drive();
console.log(audi.fuel);
audi.addFuel(18);
audi.drive();
console.log(audi.fuel);
audi.drive();
console.log(audi.fuel);
audi.drive();
console.log(audi.fuel);
audi.drive();
console.log(audi.fuel);
alert('Задача выполнена!')*/

	/* DOM

	var access = document.getElementById('h1')
	var code = access.innerHTML;
	//access.innerHTML = 'Этого больше нет';
	//code = 'Это наш параграф ' + code;
	alert(code);*/

	/*var x = prompt('enter');
	var y = prompt('enter');
	var z = prompt('enter + - * /');

	var x = parseInt(x);
	var y = parseInt(y);

	var result;

	
	if (z == '+') {
		result = x + y;
	} else if (z == '-'){
		result = x - y;
	} else if (z == '*'){
		result = x * y;
	} else if (z == '/'){
		result = x / y;
	} else {
		result = 'undefined';
	};

	alert(result);
	location.reload();*/