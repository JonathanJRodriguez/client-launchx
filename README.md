# vue-3-crud

### Project diagram v1

```mermaid
graph TD
    A[http-common] -->|import| B(Explorer Service)
    C(Add Explorer)-->|create| B
    B -->|get, delete, update| D(Explorer)
    B -->|getAll| E(Explorer List)
    B -->|PUT,POST,DELETE,GET| I[fa:fa-database Backend]
    C <--> F[Router]
    D <--> F
    E <--> F
    F --> G(main.js)
    G <--> H[fa:fa-user User]
```

### Project diagram v2

```mermaid
graph TD
    A[http-common] -->|import| B(Explorer Service)
    B<-->|create| C(Add Explorer)
    A --> |import|J(Mission Commander Service)
    B -->|get, delete, update| D(Explorer)
    B -->|getAll| E(Explorer List)
    B -->|PUT,POST,DELETE,GET| M[fa:fa-database Backend]
    C <--> F[Router]
    D <--> F
    E <--> F
    J <-->|create| I(Add Mission Commander)
    J -->|get, delete, update| K(Mission Commander)
    J -->|getAll| L(Mission Commander List)
    J -->|PUT,POST,DELETE,GET| M[fa:fa-database Backend]
    K --> F
    L --> F
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
