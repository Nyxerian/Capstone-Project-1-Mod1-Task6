let inputMetric = prompt("Are you converting from Kelvin, Celsius or Fahrenheit?".toLowerCase());
let metric_num = Number(prompt("What temperature do you want to convert?"));
let metric_out = prompt("What metric are you converting to?").toLowerCase();


switch(inputMetric){
    case"celsius":
        if (metric_out === "kelvin"){
            console.log((metric_num+273).toFixed(1)+"\u00B0K");
            }
        else if(metric_out === "fahrenheit"){
            console.log((metric_num*(9/5)+32).toFixed(1)+"\u00B0F");
        }
    break;
    case"fahrenheit":
        if (metric_out === "celsius"){
            console.log((metric_out-32)*(5/9).toFixed(1)+"\u00B0C");
        }
        else if(metric_out === "kelvin"){
            console.log((metric_out+4599.67)*(5/9).toFixed(1)+"\u00B0K");
        }
    break;
    case"kelvin":
        if (metric_out === "celsius"){
            console.log((metric_num-273).toFixed(1)+"\u00B0C");
        }
        else if (metric_out === "fahrenheit"){
            console.log(((metric_num*(9/5))-459.67).toFixed(1)+"\u00B0F");
    }
}