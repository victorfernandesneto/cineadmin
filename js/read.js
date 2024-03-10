import supabase from "../client.js";

const cards = document.getElementById("cards");

async function lerDados() {
    let { data: filme, error } = await supabase.from("filmes").select("*");
    if (!error) {
      filme.forEach((item) => {
        cards.innerHTML += `<div class="card w-50 m-2">
  <div class="card-body">
  <h5 class="card-title">Titulo: <spam>${item.titulo} </spam> </h5>
  <p class="card-text">Diretor: <spam>${item.diretor}</spam></p>
  <p class="card-text">Descrição: <spam>${item.descricao} </spam> </p>
  <p class="card-text">Data de lançamento: <spam>${item.lancamento} </spam> </p>
  
  <a href="./cadastro.html?id=${item.id}&titulo=${encodeURIComponent(item.titulo)}&diretor=${encodeURIComponent(item.diretor)}&descricao=${encodeURIComponent(item.descricao)}&lancamento=${item.lancamento}" class="btn btn-primary">Editar</a>
  <a href="#" class="btn btn-danger"
  onclick=deletar(${item.id})>Excluir</a>
  </div>
  </div>`;
      });
    }
  }
  lerDados();
      