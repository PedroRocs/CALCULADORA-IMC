function calculate() {
    let status = document.querySelector(".status");
    let acima = document.querySelector(".acima");
    let abaixo = document.querySelector(".abaixo")
    let ideal = document.querySelector(".ideal")
    var weight;
    var bmi;
    var result
    var height;


    weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + "kg";


   height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1)
    result = document.getElementById("result").innerText = bmi;

    if (bmi > 18.5 && bmi <= 28.5) {
        document.getElementById("result").style.color = "#2ebf75";
        status.classList.add('peso-ideal');
        status.innerText = "Você está no peso ideal";
        status.classList.remove('peso-abaixo');
        status.classList.remove('peso-acima');

        ideal.style.display = "block";
        acima.style.display = "none";
        abaixo.style.display = "none";



    } else if (bmi > 28.5) {
        document.getElementById("result").style.color = "#ee0505";
        status.classList.add('peso-acima');
        status.innerText = "Você está acima do peso ideal";
        status.classList.remove('peso-abaixo');
        status.classList.remove('peso-ideal');

        acima.style.display = "block";
        abaixo.style.display = "none";
        ideal.style.display = "none";

    } else {
        document.getElementById("result").style.color = "#0274f5";
        status.classList.add('peso-abaixo');
        status.innerText = "Você está abaixo do peso ideal";
        status.classList.remove('peso-acima');
        status.classList.remove('peso-ideal');



        acima.style.display = "none";
        abaixo.style.display = "block";
        ideal.style.display = "none";

    }


}