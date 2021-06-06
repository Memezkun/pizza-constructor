const inputsCheckbox = document.querySelectorAll('.container-custom-checkbox'),
	  ingredients = document.querySelectorAll('.current-pizza-item'),
	  drinks = document.querySelectorAll('.select-drink-item'),
	  totalAmount = document.querySelector('.total-amount>.summa'),
	  orderBtn = document.querySelectorAll('.typical-btn'),
	  modalWindow = document.querySelectorAll('.modal-window'),
	  submitBtn = document.querySelectorAll('.modal-window__submit-btn');

const subject = document.querySelector('.modal-window__subject'),
	  ingredientSpan = document.querySelector('.modal-window__ingredients'),
	  drinksSpan = document.querySelector('.modal-window__drinks'),

// adding ingredients to pizza

const addIngredients = checkboxes => {
	const nodesArray = Array.from(checkboxes);
	const ingredientsArray = Array.from(ingredients);
	ingredientsArray.splice(0, 2);

	for(let node of checkboxes) {
		node.addEventListener('click', event => {
			event.target.parentNode.classList.toggle('active'); 
			const index = nodesArray.indexOf(event.target);
			ingredientsArray[index].classList.toggle('active');
			calculateOrder();
		});
	}
}

addIngredients(inputsCheckbox);

// adding drinks

const addDrinks = drinkItem => {
	for (let item of drinkItem) {
		item.addEventListener('click', event => {
			event.target.parentNode.classList.toggle('active');
			calculateOrder();
		});
	}
}

addDrinks(drinks);

// calculate order

const calculateOrder = () => {
		const ingredients = document.querySelectorAll('.container-custom-checkbox.active'),
			  drinks = document.querySelectorAll('.select-drink-item.active');

		const startPrice = 300,
			  ingredientsPrice = ingredients.length * 25,
			  drinksPrice = ingredients.length * 95;

		totalAmount.innerHTML = `${startPrice + ingredientsPrice + drinksPrice} P`
};

//modal window for oreder 

orderBtn.addEventListener('click', () => {
	modalWindow.classList.remove('none');
	prepareWindowModalContent();
});

window.addEventListener('click', event => {
	if(event.target === modalWindow) {
		modalWindow.classList.add('none');
	}
});

submitBtn.addEventListener('click', () => {
	modalWindow.classList.add('none');
});

const prepareWindowModalContent = () => {
	subject.innerHTML = '';
	ingredientSpan.innerHTML = '';
	drinksSpan.innerHTML = '';

	const addedIngredients = document.querySelectorAll('.container-custom-checkbox.active'),
		  AddedDrinks = document.querySelectorAll('.select-drink-item.active');

	let ingredientsList = [];
	if (addedIngredients) {
		for(let ingredient of addedIngredients) {
			ingredientsList.push(ingredient.innerText);
		}
	}

	let drinksList = [];
	if(addeddrinks) {
		for(let drink of addedDrinks) {
			drinksList.push(drink.dataset.name);
		}
	};

	const totalIngredients = ingredientsList.join(', ') || 'нет ингредиентов';
	const totalDrinks = drinksList.join(', ') || 'нет напитков';
	const totalText = `${Вы заказали пиццу с ингредиентами: '${totalIngredients}', а так же напитки: '${totalDrinks}', с Вас ${totalAmount.innerHTML}}`
}