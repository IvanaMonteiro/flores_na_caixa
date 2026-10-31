# Projeto de website e-commerce utilizando as tecnologias Vite + React

# Descrição:

O projeto é uma aplicação web desenvolvida utilizando a biblioteca React.js. O aplicativo em questão é desenvolvido com o auxílio do Vite.

A estrutura do projeto provavelmente segue a arquitetura de componentes do React, onde os elementos da interface são divididos em componentes reutilizáveis, permitindo uma melhor organização do código e facilitando a manutenção do aplicativo.

A aplicação provavelmente também faz uso do Redux, uma biblioteca de gerenciamento de estado que ajuda a centralizar e gerenciar o estado da aplicação de forma previsível e escalável. O Redux é muito utilizado em conjunto com o React para lidar com estados globais e compartilhados entre os componentes.

O objetivo do aplicativo é criar um site de e-commerce e um carrinho de compras, onde os usuários podem visualizar a página principal, pesquisar os produtos, adicionar produtos, selecionar quantidades, visualizar os itens no carrinho, remover produtos, calcular o preço total das compras e finalizar o pedido de compra. Possivelmente, a aplicação se conecta a uma API para buscar os detalhes dos produtos e atualizar o estado do carrinho conforme as ações do usuário.

Além disso, utilizamos as rotas através do React Router, permitindo a navegação entre diferentes páginas ou seções do aplicativo de forma dinâmica e sem a necessidade de recarregar a página.

# Tecnologias Utilizadas:

- React: Uma biblioteca JavaScript para construir interfaces de usuário interativas.
- Vite: Um bundler e servidor de desenvolvimento rápido para aplicações web modernas, que oferece recarga instantânea das alterações feitas no código (HMR), suporte para módulos modernos e uma compilação otimizada para produção.
- Redux: Um gerenciador de estado para gerenciar o estado global do aplicativo.
- React Router DOM: Uma extensão do React Router para permitir a navegação entre páginas em um aplicativo React.
- PropTypes: Uma biblioteca para validação de tipos de propriedades em componentes React.
- JavaScript (ES6+): A versão mais recente do JavaScript com recursos modernos e melhorias de sintaxe.
- HTML5 e CSS3: Para estrutura e estilização do aplicativo.
- Bootstrap React: Uma biblioteca para criar interfaces responsivas e elegantes utilizando os componentes do Bootstrap no React.

# Funcionalidades Principais:

Página inicial dinâmica: A página inicial adota uma abordagem dinâmica para a exibição dos produtos, apresentando-os de forma atraente e interativa por meio do recurso Slick Slider. Essa funcionalidade permite aos usuários navegar facilmente diversos ítens em destaque. Além disso, um carrossel adicional na parte superior da página cria uma introdução visual envolvente e ao mesmo tempo em que oferece espaço para publicidade, capturando a atenção dos visitantes desde o primeiro momento. Ao final da página inicial, os usuários têm a oportunidade de conhecer a empresa através da seção “sobre nós”.

- Exibir lista de produtos disponíveis: O aplicativo permite exibir uma lista de produtos disponíveis para compra. Cada produto contém informações como nome, imagem, preço e sabor (se aplicável).

- Adicionar e remover produtos ao carrinho: Os usuários podem adicionar produtos ao carrinho de compras clicando em um botão de "adicionar ao carrinho". Além disso, eles também podem remover produtos do carrinho clicando em um botão de "remover".

- Controle de quantidade: Para cada produto no carrinho, os usuários podem controlar a quantidade desejada usando um contador. Ao alterar a quantidade, o subtotal do item é recalculado automaticamente.

- Cálculo do preço total: O aplicativo calcula automaticamente o preço total do carrinho, somando os subtotais de todos os itens no carrinho.

- Persistência do carrinho: Além de calcular o preço total em tempo real, o aplicativo pode armazenar temporariamente o carrinho do usuário usando o armazenamento local (localStorage), permitindo que os usuários retomam suas compras mesmo após fechar o navegador.
  Detalhes do produto: Os usuários podem clicar em um produto para exibir mais detalhes, como descrição, opções de sabor e imagens.

- Pagamento e revisão do carrinho: Após a seleção dos produtos desejados e adicionados no carrinho, os usuários podem prosseguir para pagamento e revisão do carrinho. Ao clicar em “clique para o pagamento”, uma janela de Dialogo/Modal será aberta, permitindo que os escolham duas formas de pagamento: boleto ou cartão de crédito. Além disso, usuários podem revisar todos os itens selecionados no carrinho antes de efetuar o pagamento, garantido que todas as escolhas estejam corretas.

- Notificações: O sistema de notificações manterá os usuários informados sobre eventos cruciais, como a confirmação de um item adicionado ao carrinho, a remoção bem-sucedida de um item, a conclusão bem-sucedida da limpeza do carrinho com sucesso ou preencher de forma incorreta nos campos ou algum erro inesperado ou até mesmo alertas em caso de preenchimento incorreto nos campos ou erros inesperados. Essas notificações serão uma ferramenta valiosa para manter os usuários atualizados sobre o status de suas ações e garantir uma experiência tranquila.

- Janela de confirmação: A janela de confirmação aparecerá sempre que o usuário clicar no ícone vermelho “X” para remover um item do carrinho ou “Limpar tudo” para a confirmação da ação. Essa janela de confirmação evita cliques acidentais e proporciona aos usuários a oportunidade de confirmar ou cancelar a ação. A opção “Cancelar”, a ação será cancelada e o carrinho permanecerá inalterado, e a opção “Confirmar”, a ação será realizada e o carrinho pode sofrer alteração, de acordo com a ação escolhida.

- Responsividade: Considerando a diversidade de dispositivos utilizados pelos usuários nos dias de hoje, é fundamental assegurar que o website seja totalmente responsivo, oferecendo uma experiência de usuário consistente em dispositivos móveis, tablets e desktops.

Após a conclusão da sua compra, o carrinho de compras será automaticamente redefinido. Isso garante que você comece sua próxima experiência de compra com um carrinho vazio. Espero que tenha uma ótima experiência de compra!

#

# Considerações Finais:

O resumo do projeto descreve um website simples de carrinho de compras com funcionalidades básicas. Assim sendo, é possível estender e aprimorar o projeto com recursos adicionais, como autenticação de usuário, backend com API, entre outras melhorias. 🚀
