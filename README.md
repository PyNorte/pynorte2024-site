![cover](https://github.com/PyNorte/pynorte2024-site/assets/71537090/773312c7-0078-42b2-a122-a06b9986375d)

# 🐍 Python Norte 2024

Repositório do website do evento Python Norte 2024 construído pela comunidade de voluntários.

## 🖥️ Faça sua contribuição

Caso queira realizar uma contribuição, clone o projeto usando o seguinte comando:

```bash
git clone https://github.com/PyNorte/pynorte2024-site
```

Fique de olho nas nossas issues para saber as atividades que serão desenvolvidas. Além disso, caso identifique algum bug ou melhoria no projeto, fique a vontade para fazer uma pull request.

### Como funciona

Caso seja membro do time de voluntários, basta clonar o repositório e criar uma nova branch para realizar alterações. Caso não seja, aconselhamos a realizar um [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) do repositório.

Com o projeto clonado, você precisa instalar as dependências:
```bash
npm install
```

Usamos a API do Even3 para obter alguns conteúdos da página, então aconselhamos a leitura da [documentação](https://docs.even3.com.br/) e, também, adicionar a variável de ambiente `EVEN3_API_TOKEN` para que as requisições sejam autenticadas. Basta criar um arquivo `.env.local` com a seguinte estrutura:
```env
EVEN3_API_TOKEN="example-token"
```

Para conseguir o token, basta falar com alguns voluntários ou usar nosso canal do Discord.

Feito isso, inicie o projeto e boa codificação 👏:
```bash
npm run dev
```

### Enviando a contribuição

Com suas alterações realizadas, fique a vontade para enviar uma pull request. Aconselhamos fortemente o uso do modelo criado pela comunidade para o envio das contribuições.

Você também pode **contribuir identificando problemas e melhorias** no projeto abrindo uma issue.

## 🔗 Links rápidos

Uma lista de links úteis para ajuda no projeto:

- [🎨 Protótipo | Figma](https://www.figma.com/file/1JPn6eLZb1mrZfPvvhXGSY/Material-Gr%C3%A1fico?type=design&node-id=761%3A2258&mode=design&t=bEHg6WEs2Jj9ZSuH-1)
- [👕 Artes e Logos](https://github.com/PyNorte/artes_e_logomarcas)
- [📲 Discord - Comunicação](https://discord.gg/DRT3vdHyDW)

## 🤓 Contribuidores

<a href="https://github.com/PyNorte/pynorte2024-site/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PyNorte/pynorte2024-site" />
</a>

## Licença 📃

Esse projeto está sob a licença [CC BY-NC-SA](./LICENSE.md) 🫡
