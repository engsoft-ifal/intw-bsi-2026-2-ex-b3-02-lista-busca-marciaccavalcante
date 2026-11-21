// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// TODO 1: escreva a função render(filtro) que preenche a #lista com um <li>
//         para cada curso cujo NOME contenha o filtro (use filter + map).
//         Se nenhum curso passar, mostre um <li> com "Nada encontrado".
//
// TODO 2: chame render() ao carregar a página e a cada evento "input" na busca.

// escreva seu código aqui

function render(filtro = "") {
  const encontrados = cursos.filter(curso => curso.nome.toLowerCase().includes(filtro.toLowerCase())
  );

if (encontrados.length === 0) {lista.innerHTML = "<li>Nada encontrado</li>";
  return;
}
  
  const itens = encontrados
    .map(curso => `<li>${curso.nome}</li>`)
    .join("");

  lista.innerHTML = itens;
}

render();

busca.addEventListener("input", () => render(busca.value));