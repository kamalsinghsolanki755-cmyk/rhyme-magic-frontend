const BACKEND_URL = ""; // baad me add karenge

function generate() {
  const text = document.getElementById("text").value;
  document.getElementById("status").innerText = "Generating...";

  fetch(BACKEND_URL + "/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
  .then(res => res.blob())
  .then(audio => {
    const url = URL.createObjectURL(audio);
    document.getElementById("audio").src = url;
    document.getElementById("status").innerText = "Done ✅";
  })
  .catch(() => {
    document.getElementById("status").innerText = "Error ❌";
  });
      }
