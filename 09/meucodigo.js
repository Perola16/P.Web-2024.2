let pilhaPessoas = []; 
const nomeInput = document.getElementById("nomePessoa");
const adicionarButton = document.getElementById("adicionarPessoa");
const removerButton = document.getElementById("removerPessoa");
const listaPessoasElement = document.getElementById("listaPessoas");
function atualizarLista() {
  listaPessoasElement.innerHTML = "";
  for (let i = 0; i < pilhaPessoas.length; i++) {
    let item = document.createElement("li");
    item.textContent = pilhaPessoas[i];
    listaPessoasElement.appendChild(item);
  }
}
adicionarButton.addEventListener("click", function() {
  let nome = nomeInput.value.trim(); 
  if (nome !== "") {
    pilhaPessoas.push(nome);
    nomeInput.value = ""; 
    atualizarLista();
  } else {
    alert("Por favor, digite um nome.");
  }
});
removerButton.addEventListener("click", function() {
  if (pilhaPessoas.length > 0) {
    let ultimaPessoa = pilhaPessoas.pop();
    alert("A última pessoa adicionada foi removida: " + ultimaPessoa);
    atualizarLista();
  } else {
    alert("A lista está vazia!");
  }
});