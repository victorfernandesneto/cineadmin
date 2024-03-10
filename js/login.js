import supabase from '../client.js';

async function login(username, password) {
  try {
    const { data, error } = await supabase
    .from('admins')
    .select()
    .eq('username', username)
    .eq('password', password);

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
        const user = data[0];
        if (user.password == password) {
          console.log('Login bem-sucedido!');
          window.location.href = 'http://127.0.0.1:8080/filmes.html'
        } else {
          console.log('Senha incorreta.');
          window.location.href = 'http://127.0.0.1:8080/index.html?error=credenciais_invalidas'
        }
      } else {
        console.log('Usuário não encontrado ou usuário inativo.');
        window.location.href = 'http://127.0.0.1:8080/index.html?error=credenciais_invalidas'
      }
    } catch (error) {
      console.error('Erro ao realizar o login:', error.message);
    }
  }

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    login(username, password);
});