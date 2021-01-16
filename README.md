# React SSR Boilerplate

Estrutura de projetos front-end com o seguinte stack

- Next.js
  - React
  - PropTypes
  - SVGR
- Styled components
- Pre-commit
  - ESLint
  - Prettier

# Instalação

`| npm i |`

# Setup de sua IDE

Para manter a qualidade de código e ter sempre um padrão entre todos da equipe o projeto tem regras definidas para javascript.

Usamos o Eslint/Prettier para Javascript/React.

É necessário a integração dessas regras com o sua IDE favorita. Recomendamos o uso do Visual Studio Code com os seguintes plugins:

| Plugin | README |

| --------- | ------------------------------------------------------------------------------------------ |

`| ESlint |` [check plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |

`| Prettier |` [check plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |

# Pre-commit

Antes de commitar as alterações, o Pre-commit vai rodar as validações do ESLint. Caso haja algum erro, não será possível commitar.

# Executando o projeto

Abaixo os comandos que são usados no projeto:

| Comando | Description |

| ----------------------- | --------------------------------------------------------------------------------------------- |

`| npm i |` Instala as dependências do projeto |

`| npm run dev |` Executa o projeto em modo de desenvolvimento na porta `3000` |

`| npm run build |` Executa o build do projeto e gera o diretório `.next/` |

`| npm run start |` Gera uma compilação da aplicação no diretório `dist/` e roda o servidor de express na porta `3000` |

`| npm run export |` Gera o diretório com a aplicação estática dentro da pasta `.out/` |

`| npm run svg-to-react |` Comando rodado juntamente com o `npm run dev` que converte os vetores (SVGs) da pasta `public/svg/` para componentes React |

`| npm run storybook |` Executa o Storybook com a documentação dos componentes. (Porta escolhida automaticamente) |

`| npm run build-storybook |` Gera o diretório `dist-storybook/` com o Storybook optimizado para produção |

# Styleguide

- Dentro da pasta `src/structure` temos uma outra pasta chamada `styleguide` designada para manter a documentação das cores, fontes e ícones do projeto. Todas essas 3 documentações são geradas automaticamente através de Javascript, sem a necessidade de atualizar o Storybook caso haja alguma atualização.
- Para consultar, rode `npm run storybook` e acesse a pasta `Styleguide` na navegação da esquerda.

# Padrões de código/desenvolvimento

- Temos duas branches default no projeto onde temos CI:

  - `master`: Vinculada com o ambiente de produção
  - `develop`: Vinculada com o ambiente de homologação
  - Quando em qualquer uma dessas branches ocorrer um merge, um deploy automático do projeto e do storybook será feito nos buckets configurados nas variáveis do repositório.
  - Só é permitido merge nessas branches com Pull Request.

---

- Para nomenclatura de branches, utilizamos o padrão do Gitflow

  - `feature/${nomeDaFeature}` - Para features novas
  - `hotfix/${nomeDoHotfix}` - Para hotfixes

---

- Dentro da pasta structure temos 3 pastas dividindo os componentes, onde seguimos o modelo de `Atom Design`:

  - `commons`: Átomos
  - `components`: Módulos
  - `containers`: Organismos

---

- Cada componente deve ter seu Storybook, JSX no seu nome e um arquivo de estilização no padrão `component.style.js`, com um `index.js` exportando o próprio componente como default.
- Todos os componentes precisam estar documentados no Storybook com todas as suas variações.
- Caso haja a necessidade de utilizar SVGs no projeto, jogue-os dentro da pasta `public/svg`. Vão ser gerados componentes React (quando o comando `npm run dev` é rodado) para cada um dos ícones na pasta `src/structure/icons`.
- As rotas são geradas automaticamente com base nos arquivos `.jsx` dentro da pasta `src/pages`.
- As definições de variáveis e funções de estilos para Styled Components estão dentro da pasta `src/styles`.
- O projeto precisa ser feito em `rem` ao invés de `px`. Para facilitar, temos uma função no Styled Components onde pode ser passado um valor em `px` como inteiro e essa função vai fazer a conversão para `rem`. Ex: `margin-bottom: ${rem(80)}`.
- Temos um componente de LazyLoad para imagens que deve ser usado para melhorias na parte de performance, está na pasta: `structure/commons/lazy-image`.
- O container `structure/containers/layout` deve ser utilizado como layout do projeto. Ele também possui uma prop chamada `seo` que deve conter todas as informações de tags do projeto.
