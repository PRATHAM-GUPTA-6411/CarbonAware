document.getElementById('carbonForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const vehicle = document.getElementById('Vehicle').value.toLowerCase();
  const kms = parseFloat(document.getElementById('Kms').value);
  const kWh = parseFloat(document.getElementById('kWh').value);
  const kgs = parseFloat(document.getElementById('Kgs').value);

  if (!vehicle || isNaN(kms) || isNaN(kWh) || isNaN(kgs)) {
    alert('Please fill out all fields with valid numbers.');
    return;
  }

  let emissionFactorTransport = vehicle === 'ev' ? 0 : 2.5;
  const emissionFactorEnergy = 0.5;
  const emissionFactorFood = 1.2;

  const transportCO2 = kms * emissionFactorTransport;
  const energyCO2 = kWh * emissionFactorEnergy;
  const foodCO2 = kgs * emissionFactorFood;
  const totalCO2 = transportCO2 + energyCO2 + foodCO2;

  // Categorization
  let category = 'Low', categoryClass = 'category-low';
  let gradient = 'linear-gradient(to right, green, yellow)';
  if (totalCO2 > 20000) {
    category = 'High';
    categoryClass = 'category-high';
    gradient = 'linear-gradient(to right, red, darkred)';
  } else if (totalCO2 > 10000) {
  category = 'Medium';
  categoryClass = 'category-medium';
  gradient = 'linear-gradient(to right, green, orange)';
}

  // Render result
  const resultBox = document.getElementById('resultBox');
  resultBox.innerHTML = `
    <h2>Your Carbon Footprint Result</h2>
    <p><strong>Transport Emissions:</strong> ${transportCO2.toFixed(2)} kg CO₂</p>
    <p><strong>Energy Emissions:</strong> ${energyCO2.toFixed(2)} kg CO₂</p>
    <p><strong>Food Emissions:</strong> ${foodCO2.toFixed(2)} kg CO₂</p>
    <p><strong>Total Carbon Footprint:</strong> ${totalCO2.toFixed(2)} kg CO₂</p>
    <p>Category: <span class="${categoryClass}">${category}</span></p>
    <div class="gauge-container">
      <div class="gauge-bar" id="gaugeBar"></div>
    </div>
  `;

  resultBox.classList.remove('hidden');

  // Set gauge bar style
  const gauge = document.getElementById('gaugeBar');
  const percent = Math.min((totalCO2 / 30000) * 100, 100);
  gauge.style.width = `${percent}%`;
  gauge.style.background = gradient;

  // Auto-scroll
  resultBox.scrollIntoView({ behavior: 'smooth' });
});

function resetForm() {
  document.getElementById('carbonForm').reset();
  document.getElementById('resultBox').classList.add('hidden');
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
});
