function calc(){
    let unitAmt = document.getElementById("unitAmt").value;
    let unitConv = document.getElementById("conversion").value;
    let label;
    let flag;
    let percentage;

    if (unitAmt === "" || unitConv === 0) {
        alert("Error with input.Please re-enter values");
        return;
    }

    flag = unitConv.charAt(0);
    percentage = unitConv.substr(1)

    switch(flag){
        case "L": label = "Litres";
        break;
        case "M": label = "Meters";
        break;
        case "K": label = "Kilograms";
        break;
        case "S": label = "Seconds";
        break;
    }


    let converted = unitAmt * percentage;
    converted = converted.toFixed(2);

    document.getElementById("PostConversion").innerHTML = converted +" "+ label;
}

document.getElementById("calculate").onclick = function() {
    calc();

};

