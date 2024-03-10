import supabase from '../client.js';

async function login(email, password) {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    const { data } = await supabase.auth.getSession();

    if (error) {
      console.error('Erro ao realizar o login:', error.message);
      window.location.href = 'http://127.0.0.1:8080/index.html?error=credenciais_invalidas';
    }

    if (data) {
      console.log('Login bem-sucedido!', user);

      const token = data.access_token;

      localStorage.setItem('supabaseToken', token);

      window.location.href = 'http://127.0.0.1:8080/filmes.html';
    } else {
      console.log('Usuário não autenticado.');
    }
  } catch (error) {
    console.error('Erro ao realizar o login:', error.message);
  }
}

window.addEventListener('load', async () => {
  const storedToken = localStorage.getItem('supabaseToken');

  if (storedToken) {

    window.location.href = 'http://127.0.0.1:8080/filmes.html';
  }
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  login(email, password);
});