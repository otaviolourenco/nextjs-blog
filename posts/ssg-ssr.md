---
title: 'Quando usar Static Generation v.s. Server-side Rendering'
date: '2023-08-06'
---

Recomendamos usar a **Geração Estática** (com e sem dados) sempre que possível, porque sua página pode ser construída uma vez e servida por CDN, o que a torna muito mais rápida do que ter um servidor renderizando a página a cada requisição.

Você pode usar a Geração Estática para vários tipos de páginas, incluindo:

- Páginas de marketing
- Posts de blog
- Listagens de produtos de comércio eletrônico
- Ajuda e documentação

Você deve se perguntar: "Posso pré-renderizar esta página **antes** da solicitação do usuário?" Se a resposta for sim, então você deve escolher a Geração Estática.

Por outro lado, a Geração Estática **não** é uma boa ideia se você não puder pré-renderizar uma página antes da solicitação do usuário. Talvez sua página mostre dados atualizados com frequência, e o conteúdo da página muda a cada requisição.

Nesse caso, você pode usar a **Renderização do Lado do Servidor**. Será mais lento, mas a página pré-renderizada estará sempre atualizada. Ou você pode pular a pré-renderização e usar JavaScript do lado do cliente para popular dados.
