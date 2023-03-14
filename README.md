# react-ts-vite-vitest-demo

This is a demo used React, TypeScript, Vite, Vitest.

## quick start

1. start backend server

```shell
$ cd api-server
$ npm install
$ npm run start
```

2. start frontend server

```shell
$ cd frontend
$ npm install
$ npm run dev
```

3. run tests

```shell
$ npm run test
```

If you want to check the coverage:

```shell
$ npm run coverage
```

## Directory layout

Here's frontend directory layout:

    .
    ├── src                   # Source files
    │   └── __tests__         # Test files
    │   ├── api               # Request functions
    │   ├── components        # Common components
    │   ├── pages             # Every pages
    │   ├── style             # Common styles
    │   ├── utils             # Common utils
    │   ├── App.module.css
    │   ├── App.tsx           # Global router container
    │   ├── main.tsx          # Root component
    │   └── vite-env.d.ts
    ├── .elslitrc.cjs         
    ├── .gitignore                     
    ├── .prettierrc                  
    ├── index.html            # HTML template file
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.cjs    # Related to tailwindcss
    ├── tailwind.config.cjs   # Tailwindcss config file
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts        # Vite config file
    └── vitest-setup.ts       # Vitest initial script

## Tech Stack
- React
  - state management: React Context API
- React Router
- TypeScript
- UI framework
  - Antd: used for some out of box components
  - tailwind: used for quick style

- HTTP request
  - axios
  - react-query

- Unit test
  - vitest
  - @testing-library/react
  - jsdom

- Code lint & format
  - Eslint
    - plugins:
      - eslint-plugin-simple-import-sort: to sort import and make it clean
      - eslint-config-react-app: the shareable ESLint configuration used by Create React App, including the recommended configuration for React as well as eslint-plugin-react-hooks
      - ...
  - Prettier: code format
  - lint-staged & husky: make sure ESLint & prettier auto fix before committing your code
