

// Create a variable named `automobiles` containing the initial items
const automobiles = ['car', 'truck', 'motorcycle'];

// Add `airplane` and `skateboard` to the end
automobiles.push('airplane', 'skateboard');

// Add `bike` and `helicopter` to the front
automobiles.unshift('bike', 'helicopter');

// Define `automobilesCopy` as a template string that contains `automobiles`
const automobilesCopy = `Automobiles: ${automobiles}`;

// Remove the last item from the end
automobiles.pop();

// Remove the first item from the front
automobiles.shift();

// Assign the innerHTML of the element with id `result` to `automobiles`
const resultEl = document.getElementById('result');
if (resultEl) {
	resultEl.innerHTML = automobiles;
}

