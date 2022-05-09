# vue-3-crud

### Project diagram

```mermaid
graph TD
    A[http-common] -->|import| B(Explorer Service)
    C(Add Explorer)-->|create| B
    B -->|get, delete, update| D(Explorer)
    B -->|getAll| E(Explorer List)
    B -->|PUT,POST,DELETE,GET| I[fa:fa-db Backend]
    C <--> F[Router]
    D <--> F
    E <--> F
    F --> G(main.js)
    G <--> H[fa:fa-user User]
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
