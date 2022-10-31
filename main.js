 //https://teachablemachine.withgoogle.com/models/hEAG2Lrt1/
function Classify_some() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/hEAG2Lrt1/model.json", model_ready)
}

function model_ready() {
    classifier.classify(got_result)
}

function got_result(error, result) {
    if (error) {
        console.log("have gotten the output")
    } else {
        console.log(result)
        random_number_R  = Math.floor(Math.random() * 255) + 1
        random_number_G = Math.floor(Math.random() * 255) + 1
        random_number_B = Math.floor(Math.random() * 255) + 1
        document.getElementById("sound_name").innerHTML = "I can hear " + result[0].label;
        document.getElementById("confidence").innerHTML = "accuracy " + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("sound_name").style.color = "rgb(" + random_number_R + "," + random_number_G + "," + random_number_B + ")";
        document.getElementById("confidence").style.color = "rgb(" + random_number_R + "," + random_number_G + "," + random_number_B + ")";

        img4 = document.getElementById("ear");

        if (result[0].label == "cat") {
            img4.src = "OIP.jpg";
        } else if (result[0].label == "dog") {
            img4.src = "OIP1.jpg";
        } else if (result[0].label == "bird") {

            img4.src = "OIP2.jpg";
        } else {
            img4.src = "th.jpg";
        }
    }
}

//<img src="OIP.jpg" id="cat" width="300">
//<img src="OIP1.jpg" id="dog" width="300">
//<img src="OIP2.jpg" id="birds" width="300">