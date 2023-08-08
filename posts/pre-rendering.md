---
title: 'Duas formas de pré-renderizar'
date: '2023-08-05'
---

Next.js tem duas formas de pré-renderização: **Geração Estática** e **Renderização do Lado do Servidor**. A diferença está em **quando** ele gera o HTML para uma página.

- **Geração Estática** é o método de pré-renderização que gera o HTML no momento da **compilação**. O HTML pré-renderizado é então _reutilizado_ em cada requisição.
- **Renderização do Lado do Servidor** é o método de pré-renderização que gera o HTML a cada **requisição**.

Importante, o Next.js permite que você **escolha** qual forma de pré-renderização usar para cada página. Você pode criar um aplicativo Next.js "híbrido" usando Geração Estática para a maioria das páginas e usando Renderização do Lado do Servidor para outras.
