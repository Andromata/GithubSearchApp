### Built With

* [React](https://es.reactjs.org/)
* [Redux](https://es.redux.js.org/)
* [Expressjs](https://expressjs.com/es/)
* [Redis](https://redis.io/)


<!-- GETTING STARTED -->
## Comenzando

Para clonar y levantar la aplicación será necesario preparar el escenario...

### Prerequisites

npm
  ```sh
  npm install yarn -g
  ```

### Installation

1. Activa un TOKEN en github [https://github.com](https://github.com).
    * Ingresa a tu cuenta
    * Ingresa a Settings --> Developer Settings
    * Selecciona "Personal Access Token"
    * Generate New Token
2. Clona el Repositorio
   ```sh
   git clone https://github.com/Andromata/GithubSearchApp.git
   ```
3. Instala paquetes desde yarn
   ```sh
   yarn install
   ```
4. Crear en /api un archivo ".env"
   ```JS
   PORT = 3001
   REDIS_PORT = 6379
   TOKEN = "Tu TOKEN generado en github"
   ```
4. Crear en /client un archivo ".env.local"
   ```JS
   REACT_APP_URL_BACK = http://localhost:3001
   ```

