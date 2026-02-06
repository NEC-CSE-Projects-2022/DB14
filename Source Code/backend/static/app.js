const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const predictBtn = document.getElementById("predictBtn");
const resultDiv = document.getElementById("result");
const predictionsList = document.getElementById("predictions");

let selectedFile = null;

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    selectedFile = file;
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.classList.remove("hidden");
      predictBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  }
});

predictBtn.addEventListener("click", async () => {
  if (!selectedFile) return;
  predictBtn.disabled = true;
  predictionsList.innerHTML = "<li class='processing'>Analyzing...</li>";
  resultDiv.classList.remove("hidden");

  const formData = new FormData();
  formData.append("image", selectedFile);

  try {
    const res = await fetch("/predict", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    predictionsList.innerHTML = "";

    if (data.error) {
      predictionsList.innerHTML = `<li class='error'>Error: ${data.error}</li>`;
    } else {
      // Find the prediction with highest score
      const diagnosis = data.predictions.reduce((a, b) => a.score > b.score ? a : b);
      const li = document.createElement("li");
      li.className = diagnosis.label.toLowerCase();
      li.textContent = diagnosis.label;
      predictionsList.appendChild(li);
    }
  } catch (error) {
    predictionsList.innerHTML = `<li class='error'>Error processing image</li>`;
  }
  
  predictBtn.disabled = false;
});