import supabase from "../client.js";

let update = false;
const formfilmes = document.getElementById("formfilmes");

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get('id');

  if (idParam) {
      // Se existe um parâmetro 'id', muda para modo de atualização
      const btnSalvar = document.getElementById('btn_salvar');
      btnSalvar.innerText = 'Atualizar';
      btnSalvar.classList.remove('btn-primary');
      btnSalvar.classList.add('btn-success');
      
      // Preenche o formulário com os dados da URL
      document.getElementById('id').value = idParam;
      document.getElementById('titulo').value = urlParams.get('titulo');
      document.getElementById('diretor').value = urlParams.get('diretor');
      document.getElementById('descricao').value = urlParams.get('descricao');
      document.getElementById('lancamento').value = urlParams.get('lancamento');
  }
});

formfilmes.addEventListener("submit", async (e) => {
    e.preventDefault();
    const titulo = formfilmes.titulo.value;
    const diretor = formfilmes.diretor.value;
    const descricao = formfilmes.descricao.value;
    const lancamento = formfilmes.lancamento.value;
    if (!update) {
      const { data, error } = await supabase
        .from("filmes")
        .insert([{ titulo: titulo, diretor: diretor, descricao: descricao, lancamento: lancamento }])
        .select();
    } else {
      const id = formfilmes.id.value;
      const { data, error } = await supabase
        .from("filmes")
        .update([{ titulo: titulo, diretor: diretor, descricao: descricao, lancamento: lancamento }])
        .eq("id", id)
        .select();
    }
    window.location.href = 'http://127.0.0.1:8080/filmes.html';
  });