# Cine Admin

Cine Admin é um projeto feito somente com HTML, CSS e JavaScript, com integração feito pelo Supabase.

## Instalando

Para instalar, clone o repositório utilizando o comando 
```
git clone https://github.com/victorfernandesneto/cineadmin.git
```

em um diretório de sua escolha. Após isso, precisamos fazer a integração com o Supabase. Primeiro, crie, na raiz do projeto, um arquivo ```client.js```.

```
    import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
    const supabaseUrl = 'SUPABASE_URL'; // Substitua pelo seu URL do Supabase
    const supabaseKey = 'SUPABASE_KEY'; // Substitua pelo sua chave anon
    const supabase = createClient(supabaseUrl, supabaseKey);

    export default supabase;
```

Esse arquivo é necessário para fazer funcionar todas as integrações com o Supabase no projeto.

No seu Supabase, crie uma tabelaa: filmes (case sensitive) com as colunas "id" (int8), "titulo" (varchar), "diretor" (varchar), "descricao" (text) e "lancamento" (date). 

Agora, em Authentication, é necessário criar um usuário para realizar o login da página inicial. Na aba Policies, desative a RLS na tabela "filmes".