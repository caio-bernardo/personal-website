+++
title = "Make your Reads: Uma CLI para a documentação do seu projeto"
date = "2026-03-09"

template = "blog_post.html"

[taxonomies]
tags = ["projects", "cli", "project-documentation"]
publish-year = ["2026"]
+++

# Make your Reads: uma CLI para fazer a documentação do seu projeto

Você já encontrou algum daqueles projetos Open Source “famosos/profissionais” e viu uma dúzia de arquivos `.txt` ou `.md` com nomes tipo `CODE_OF_CONDUCT`, `CONTRIBUTING`, `CHANGELOG`, etc? Já parou pra ler eles ou pensar no que cada arquivo significa? Se você respondeu sim (ou se eu só consegui chamar sua atenção), então comemore: neste artigo eu vou explicar o que cada arquivo significa e mostrar um projeto que te ajuda a criar esses arquivos.

## Um glossário rápido

Esses arquivos podem ser chamados de “Documentação do Projeto”, “Metadados do Repositório” (ou _Repository Metadata_) e o GitHub chama alguns deles de _“Community Health Files”_[^1]. No geral, é uma coleção de arquivos de texto diferentes: cada um com um propósito específico (e com algumas áreas de sobreposição). Vamos falar dos mais comuns que você encontra por aí:

1. `README.md`: você com certeza já viu esse. É a porta de entrada do projeto: mostra o que é, o que faz, como usar, como instalar, etc. Pra mim, os outros arquivos são só seções do README que cresceram demais.
1. `CONTRIBUTING.md`: como alguém pode contribuir com o projeto; como reportar um problema, sugerir ideias ou abrir um pull request.
1. `CODE_OF_CONDUCT.md`: como as pessoas devem se comportar ao interagir com a comunidade em torno do projeto. Também explica como reportar comportamento inaceitável. Isso anda lado a lado com o seu `CONTRIBUTING.md`.
1. `SECURITY.md`: este é pra projetos onde reportar um problema pode colocar o software em risco ou expor uma vulnerabilidade para ataques. Então você cria um arquivo dedicado com instruções de como reportar esse tipo de issue.
1. `CHANGELOG.md`: eu gosto desse. É um arquivo feito pra acompanhar mudanças no projeto conforme você lança novas versões.
1. `LICENSE`: é um arquivo que carrega algumas declarações legais (mais ou menos). Você diz o que as pessoas podem fazer com o seu projeto: podem lucrar com ele? precisam seguir regras? A sua licença define isso.
1. Outros: podem existir vários outros como `USAGE.md`, `FUNDING.md` e `ROADMAP.md`. Você decide como quer estruturar seu projeto.

Com isso apresentado, bora ver uma ferramenta que facilita o processo de gerenciar esses arquivos.

## Make your Reads

O _Make your Reads_ é uma CLI feita em Rust que vem com um conjunto de **templates curados de metadados/documentação de projeto** pra você usar.

Esse projeto é, na verdade, um “revival” de um projeto mais antigo, feito pra gerar arquivos _README_ lá atrás. Ao invés de encarar meus problemas de frente, eu decidi reconstruir tudo do zero. E até agora eu não me arrependi! Essa versão está mais madura e mais refinada do que a anterior. Você pode encontrar o código-fonte no [GitHub](https://github.com/caio-bernardo/make-your-reads) e ele também está disponível no [crates.io](https://crates.io/crates/make-your-reads).

### Uso

Agora que eu falei das minhas motivações, vamos ver como usar a ferramenta.

```sh
$ mkyr help
Easily build common file of your repository, e.g. README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING and more.

Usage: mkyr [OPTIONS] [COMMAND]

Commands:
  readme     Creates a new README file
  license    Creates a new License file
  coc        Creates a new Code of Conduct file
  contrib    Creates a new Contributing file
  changelog  Creates a new Changelog file
  help       Print this message or the help of the given subcommand(s)

Options:
  -f, --force        overrides file with same output name
  -p, --path <PATH>  output file path
  -h, --help         Print help
  -V, --version      Print version
```

Primeiro: o binário se chama `mkyr` (porque _myr_ já estava ocupado :cry:). Para cada tipo de arquivo existe um comando equivalente, com um nome parecido. Cada subcomando pode funcionar de um jeito: alguns pedem o nome do projeto, outros oferecem parâmetros opcionais pra inserir mais informações no arquivo. No entanto, existem duas flags fixas: `--force`, pra sobrescrever arquivos, e `--path`, pra mudar o caminho padrão de saída.

Aqui vai um exemplo de como gerar um README. A linha de comando fica assim:

```sh
$ mkyr readme new_project
New README created. Remember to change the file for your personal needs.
```

E o arquivo gerado fica assim:

```md
<!-- This file conforms to the Standard Readme Style -->

# new_project

<!-- INSERT BANNER HERE -->

<!-- INSERT BADGES HERE -->

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

<!-- INSERT SHORT DESCRIPTION HERE -->

<!-- LONG DESCRIPTION HERE -->

<!-- ## Table of Contents -->

<!-- ## Security -->
<!-- ## Background -->

## Install

<!-- ### Dependencies -->

## Usage

<!-- ### CLI/Others -->

<!-- ## EXtra Sections -->

<!-- ## API -->

<!-- ## Maintainers -->

<!-- ## Acknowledgements -->

## Contributing

Feel free to [Open a New Issue](/issues/new) or [Submit a Pull Request](/compare).
See our [CONTRIBUTING](CONTRIBUTING.md) file for more information in how to contribute in more specific ways.
Don't forget to check our [Code of Conduct](CODE_OF_CONDUCT.md) for the repository guidelines.

<!-- ### Contributors -->

## License

This project is under the \_\_\_ license. For more info see [LICENSE](LICENSE).

This file was made with [Make Your Reads](https://github.com/caio-bernardo/make-your-reads).
```

Cada espaço que você precisa completar está marcado com um comentário, incluindo sugestões e dicas do que fazer.

## Fontes dos templates

Quase todos os templates foram coletados de lugares diferentes. Eu tentei pegar os mais populares (ou os que eu mais gostei). Aqui vai a lista de fontes:

- READMEs do [README Standard](https://github.com/RichardLitt/standard-readme)
- Changelog do [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- Contribuição e Código de Conduta do [Contributor Covenant](https://www.contributor-covenant.org/)
- Licenças de várias fontes, mas as opções vieram do [Choose a License](https://choosealicense.com/).

## Ferramentas parecidas

**Outras ferramentas**

Existem muitos sites e CLIs especializadas em gerar `README`, mas eu nunca tinha visto uma que fizesse o mesmo pros outros arquivos **e**, ao mesmo tempo, estivesse tudo empacotado em **uma única ferramenta**. Se você conhece alguma, por favor me conta pelos comentários ou me manda uma mensagem.

**Geradores de arquivo do GitHub**

O GitHub consegue gerar a maioria desses arquivos usando templates: você só precisa colocar o nome desejado e escolher suas opções. Inclusive, eu peguei as opções de `CODE_OF_CONDUCT` de lá. Eu não estou tentando competir com eles; mas se você não usa GitHub ou prefere uma opção **local**, o _Make your Reads_ provavelmente é mais atraente.

**Modelos de linguagem**

_Sim_, a minha ferramenta não consegue competir com um _LLM_, eu admito. Mas se pergunte: vale a pena gastar seus tokens pedindo pra uma IA gerar esses arquivos, quando existe uma ferramenta mais barata? Você pode até gerar os arquivos com o _Make your Reads_ e depois pedir pro modelo completar.

## Conclusão

Organizar e desenvolver uma boa documentação é essencial pra projetos Open Source: isso mostra maturidade e ajuda outras pessoas a se situarem no ambiente. Então, mesmo que você não use essa ferramenta, por favor: <mark>make your reads</mark>.

Além disso, se você curtiu o projeto, dá uma chance — ou só deixa uma [estrela](https://github.com/caio-bernardo/make-your-reads) :star:. Até a próxima.

[^1]: [Community Health Files - Github Docs](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
