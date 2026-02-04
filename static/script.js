async function predictPrice() {
    const data = {
        area: parseFloat(document.getElementById("area").value),
        bedRoom: parseInt(document.getElementById("bedRoom").value),
        bathroom: parseInt(document.getElementById("bathroom").value),
        balcony: parseInt(document.getElementById("balcony").value),
        floorNum: parseFloat(document.getElementById("floorNum").value),
        facing_direction_clockwise: parseFloat(document.getElementById("facing_direction_clockwise").value),
        Environment: parseFloat(document.getElementById("Environment").value),
        Lifestyle: parseFloat(document.getElementById("Lifestyle").value),
        Connectivity: parseFloat(document.getElementById("Connectivity").value),
        Safety: parseFloat(document.getElementById("Safety").value),
        Furnished_Weighted_Score: parseFloat(document.getElementById("Furnished_Weighted_Score").value),
        has_servant_room: parseInt(document.getElementById("has_servant_room").value),
        has_store_room: parseInt(document.getElementById("has_store_room").value),
        has_pooja_room: parseInt(document.getElementById("has_pooja_room").value),
        has_study_room: parseInt(document.getElementById("has_study_room").value),
        has_others: parseInt(document.getElementById("has_others").value)
    };

    const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.prediction) {
        document.getElementById("result").innerText = "Predicted Price: ₹ " + result.prediction;
    } else {
        document.getElementById("result").innerText = "Error: " + result.error;
    }
}
