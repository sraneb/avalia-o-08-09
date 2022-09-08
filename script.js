function calcmut() {
    let num1 = document.getElementsByName("n1")[0].value;
    let num2 = document.getElementsByName("n2")[0].value;

    let soma = Number(num1) * Number(num2)

    document.getElementsByName("re")[0].value = soma;
}