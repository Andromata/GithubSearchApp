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

ES necesario tener instalado Redis en tu pc.

* ARC MANJARO

Aquí podes encontrar una guia para instalar Redis en Manjaro
https://snapcraft.io/install/redis/manjaro

```sh
  $ sudo pacman -S snapd
  $ sudo systemctl enable --now snapd.socket
  $ sudo ln -s /var/lib/snapd/snap /snap
  $ sudo snap install redis
  ```
* WINDOWS

Aquí podes encontrar una guia para instalar Redis en Windows
https://github.com/MicrosoftArchive/redis/releases

Descargar del release 3.0.504 
```sh
Redis-x64-3.0.504.zip
```
1. Ejecutar redis-server.exe 
2. Ejecutar redis-cli.exe
3. En la terminal del cliente ejecutar "ping" y debemos recibir la respuesta "pong"



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

### Inicializar

1. Correr el back
Abrir una terminal en /api y ejecutar el siguiente comando

  ```sh
   yarn run dev
   ```
2. Correr el front
Abrir una terminal en /client y ejecutar el siguiente comando

  ```sh
   yarn run
   ```