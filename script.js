const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculate-btn');

function changeTextToRed() {
	result.className = '';
	result.classList.add('red');
}

function changeTextToGreen() {
	result.className = '';
	result.classList.add('green');
}

function calculateBMI() {
	const w = document.getElementById('w').value;
	const h = document.getElementById('h').value;
	if(w==0) {
		changeTextToRed();
		result.innerHTML = `Sorry, But the weight can't be Zero`;
	}
	else if(h==0) {
		changeTextToRed();
		result.innerHTML = `Sorry, But the height can't be Zero`;
	}
	else {
		const bmi = (w/(h/100*h/100)).toFixed(2);
		result.innerHTML = `Your Calculated BMI is: ${bmi}<br>`;
		if(bmi<=18.5) {
			changeTextToRed();
			result.innerHTML += `Oops! You are underweight.<br>Get some calories.`;
		}
		else if(bmi>=18.5 && bmi<=22.9) {
			changeTextToGreen();
			result.innerHTML += `Wow! You are healthy.<br>Just like me.`;
		}
		else if(bmi>=23.0 && bmi<=24.9) {
			changeTextToRed();
			result.innerHTML += `Oops! You are overweight.<br>You know dieting?`;
		}
		else {
			changeTextToRed();
			result.innerHTML += `Noooo! You are obese.<br>Burn some calories for your own sake.`
		}
		calculateBtn.innerText = `Calculate Again`;
	}
}

// Event Listeners
calculateBtn.addEventListener('click', calculateBMI);