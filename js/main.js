function clicou ()
{
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";
    //alert("Obrigado por clicar");
}

function redirecionar()
{
    window.open("https:www.github.com/glaucorsg"); //Abre em uma nova janela
    //window.location.href = "https:www.github.com/glaucorsg"; //Abre na mesma janela
}

function trocar (elemento)
{
    elemento.innerHTML = "Obrigado por passa o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passa o mouse"
    //alert("trocar texto");
}

function voltar (elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load () 
{
    alert("Página carregada");
}

function funcaoChage(elemento)
{
    console.log(elemento.value)
}

function soma (n1, n2)
{
    return n1 + n2;
}

/*function setReplace (frase, nome, novoNome)
{
    return frase.replace(nome, novoNome);
}
*/

function validaIdade(idade)
{
    var validar;
    if (idade >= 18)
    {
        validar = true;
    }
    
    else
    {
        validar = false;
    }
    
    return validar
}

/*
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
*/

//alert (soma(15, 12));
//alert (setReplace("Bom dia João", "João", "Maria"));


/*var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getFullYear());
*/

/*for (count = 0; count < 5; count++)
    {
        alert(count);
    }
*/

/*var count = 0;
var n = prompt("Quantas vezes você deseja repetir a operação?")
while (count < n) {
    console.log(count+1);
    alert("Esta é a " + (count+1) +"ª vez que a operação é realizada");
    count ++;
}
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade");
}
else {
    alert("menor de idade")
}
*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, 
              {nome:"melancia", cor:"verde"},
              {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1]);
console.log(frutas[0].nome);
console.log(frutas[2].cor);
*/

/*var fruta = {nome:"maçã", cor:"vermelha", nome:"melancia", cor:"verde"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

//alert("Luiza ficou " + fruta.cor + " como uma " + fruta.nome);

//var nome = "Glauco Gomes";
//var n1 = 15;
//var n2 = "10";
//var pot = n1/n2; 
//var cpf = "045.588.484-63"
//var frase = "Nunca compre um Marea "
//var lista = ["macã", "laranja", "melancia"]
//lista.push("uva", "banana");
//lista.pop();
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log("CPF: " + cpf);
//console.log(n1/n2);
//console.log(frase.toUpperCase() + pot);
//alert(frase.toUpperCase() + pot);
//console.log(lista.length);
//console.log(lista.reverse()); 
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert(lista[2].toUpperCase() + " é a melhor fruta que existe");
//alert(frase.replace("Marea", "Peugeot"));


