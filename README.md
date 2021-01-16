# React SSR Boilerplate

Frontend structure with the following stack:

- Next.js
  - React
  - PropTypes
  - SVGR
  - ES6
- Styled Components
- Storybook
- Pre-commit
- ESLint
- Prettier

# Install

`| npm i |`

# IDE Setup

To keep code quality high and keep a standard among the team, the structure has some rules to be followed.

It's using ESLint and Prettier so it's necessary to install both extensions on VSCode (recommended).

| Plugin | README |

| --------- | ------------------------------------------------------------------------------------------ |

`| ESlint |` [check plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |

`| Prettier |` [check plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |

# Pre-commit

You won't be able to commit to the repository if there's warnings in the ESLint console.

# Executando o projeto

See the most used commands below:

| Comando | Description |

| ----------------------- | --------------------------------------------------------------------------------------------- |

`| npm run dev |` Runs the project on `http://localhost:3000` |

`| npm run build |` Builds the project inside the `.next/` folder |

`| npm run export |` Export static HTML inside the `.out/` folter |

`| npm run svg-to-react |` This is the command used to convert the SVGs on the `public/svg` folder, to React components. They are exported inside `src/structure/icons` and this command runs before `build`, `export` and `dev`, so you'll probably won't need it |

`| npm run storybook |` Runs Storybook (opens the browser automatically) |

`| npm run build-storybook |` Builds Storybook inside the `dist-storybook/` folder |

# Styleguide

- Inside `src/structure/styleguide` is where all the components for documentations are built. Fonts, icons and colors are generated automatically with Javascript when `npm run dev` is running so you don't need to keep updating it.
- To check the style guide, run `npm run storybook` and go to the `Styleguide` directory.

# Code standards

- We have two default branches with CI/CD implemented (optional):

  - `main`: Synced with production environment
  - `develop`: Synced with development environment

---

- For new branches, GitFlow is recommended for the names, here are some examples:

  - `feature/${feature}` - For new features
  - `hotfix/${hotfix}` - For hotfixes

---

- Inside `src/structure` we have 3 folders spliting the components:

  - `commons`: Small modules that can be reused inside other components
  - `components`: These are modules that are built with common components
  - `containers`: These are modules that receives components as children (mainly used on page sections)

---

- Each component must have these structure (using `button` as example):
  - `button.jsx` - React template
  - `button.stories.js` - Storybook documentation
  - `button.style.js` - Styles
  - `index.js` - File to export `button.jsx` so we can use the name of the component on the file
- All components must be documented with all it's variations on Storybook
- All components must have PropTypes declaration for easier understanding, with default and required props
- Routes are dinamycally generated based on the files inside `src/pages` folder
- All the variables, colors, fonts, grid and global styles are inside `src/styles`
- The styles must use `rem` instead of `px`. We have a function that does this conversion that can be used on all components, it's in `src/styles/variables`, example: `margin-bottom"${rem(80)};`
- The structure has a LazyLoad component for images that's already configured, so you can use it to improve performance (it's in `src/structure/commons/lazy-image`)
- We have a layout container (`src/structure/containers/layout`) that can be used on all pages. It contains a prop `seo` that must contains all the SEO information for that page
