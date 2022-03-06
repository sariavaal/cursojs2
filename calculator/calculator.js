const calculate = () =>{
    let opr = document.querySelector("#operation").value;
    let opr = document.querySelector("#num1").value;
    let opr = document.querySelector("#num2").value;

    if(num1===''|| num2 ===''){
        alert("One or more fields are empty");
        return;
    }
    num1= parseFloat(num1);
    num2= parseFloat(num2);
    let result = 0.0;
    if(opr === 'add'){
        result = num1 + num2;
    }else if(opr === 'sub'){
        result = num1+num2;

    }else if(opr === 'div'){
        result = num1/num2;
    }else if(result === 'mul'){
        result = num1*num2;
    }
    document.querySelector('#result').innerHTML = result;
}