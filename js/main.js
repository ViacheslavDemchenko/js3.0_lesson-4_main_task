//Объявляем переменные
let budget, 
	shopName, 
	time, 
	price,
	newEmployer; 

//Задаем начальные переменные и записываем в них данные пользователя через функцию
function start() {
	budget = +prompt('Ваш бюджет на месяц?', '');//Переводим данные в числовой формат (+)

	while(isNaN(budget) || budget == '' || budget == null) {
		budget = +prompt('Ваш бюджет на месяц?', '');//Предотвращаем возможность ввода неверных данных
	}
//Записываем название магазина заглавными буквами
	shopName = prompt('Название вашего магазина?', '').toUpperCase();
	time = 21;
};
// start();

//Задаем объект для хранения основных данных
let mainList = {
		budget: budget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods() { //Получаем товары от пользователя и вносим в массив
			for (let i = 0; i < 5; i++) {
				let newGoods = prompt('Какой тип товаров будем продавать?', '');
				//Проверка на строковый тип данных
				if( (typeof(newGoods) ) === 'string' && ( typeof(newGoods) ) != null && newGoods != '' 
						&& newGoods.length < 50) {
						console.log('Все верно!');
						mainList.shopGoods[i] = newGoods;//Внесение товаров в массив
				} else {
						alert('Введите верные данные!');
						i--;
				}
			}
		},
		workTime: function workTime(time) {//Функция проверки времени и контроля открытия магазина
			if(time < 0) {
				console.log('Такого не может быть');
				} else if (time > 8 && time < 20) {
					console.log('Время работать');
					mainList.open = true;//Открываем магазин, если время рабочее
					} else if (time < 24) {
						console.log('Уже слишком поздно');
						} else {
							console.log('В сутках только 24 часа!');
							}
		},
		dayBudget: function dayBudget(budget, days) {//Расчет суточного бюджета
			alert('Ваш бюджет на один день: ' + (budget / days) );
		},
		discountCalc: function discountCalc() {//Функция дисконтной системы
			if(mainList.discount === true) {
				let discountPrice = (80 / 100) * price;
			}
		},
		employersHire: function employersHire() {//Функция найма сотрудников
			for (let i = 0; i < 4; i++) {
				newEmployer = prompt('Введите имя сотрудника:', '');
				//Проверка вводимых данных на строковое значение
					while(newEmployer == null || newEmployer == '' || !isNaN(newEmployer) ) {
						alert('Введите верные данные!');
						newEmployer = prompt('Введите имя сотрудника:', '');
					}
					mainList.employers[i] = newEmployer;//Ввод данных в объект
			}
		},
		chooseShopItems: function chooseShopItems() {//Принимаем название товаров от пользователя
			let items = prompt('Перечислите через запятую товары', '');
			//Проверка на тип данных
				while(items === null || items  === '' || !isNaN(items) ) {
						alert('Введите верные данные!');
						items = prompt('Перечислите через запятую товары', '');
					}
						mainList.shopItems = items.split(',');//Разбиение строки на массив по ','
						mainList.shopItems.push(prompt('Подождите, еще', ''));
						mainList.shopItems.sort();//Сортировка массива в алфавитном порядке
		},
		itemsList: function itemsList() {//Вывод доступных в продаже товаров
			alert('У нас вы можете купить: ')
			mainList.shopItems.forEach(function(item, i, arr) {
				alert(`${i + 1}. ${mainList.shopItems[i]}`);//Отсчет товаров устанавливаем с 1, а не с 0
		});
	}		
}

function shopInclude() {//Вывод содержимого магазина (свойств объекта mainList)
	console.log('Наш магазин включает:')
		for (key in mainList) {
			console.log(key);
		}
}


// start();
// mainList.chooseGoods();
// mainList.workTime(12);
// mainList.dayBudget(budget, 30);
// mainList.discountCalc();
// mainList.employersHire();
// mainList.chooseShopItems();
// mainList.itemsList();
// shopInclude();





