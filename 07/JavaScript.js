function escrever(arg){
    N = prompt("Digite um número:")
    for (let i = 1; i <= N; i++){
        document.getElementById("div").innerHTML+=i+'<br>';
    }
}