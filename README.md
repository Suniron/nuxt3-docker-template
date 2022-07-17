# Nuxt3 Docker developement and production

You can start now you new Nuxt3 project with this template ! 😇

Nodejs and NPM **are not required** because all needs are in the Docker Dev image 

Hot reload is in place 🪄

## Requirements 🛠️

- [Docker or Docker Desktop](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/Download)
- (optional) [Visual Studio Code Docker extension](https://code.visualstudio.com/docs/containers/overview)

## Development mode 💻

1. Build with `yarn docker:dev` or `docker compose -f "docker-compose.dev.yml" up -d --build`
2. Code, code and code 😎

## Production mode ⚡

1. Adapt wanted application exposed port (default to 3000) in `docker-compose.prod.yml`
2. Build with `yarn docker:prod` or `docker compose -f "docker-compose.prod.yml" up -d --build`
3. ... Enjoy 🥳.

## Known limitations 😭

-  This project will works on Windows but **you have to run project in a WSL** (_recommended WSL2_) Linux distribution (like Ubuntu) because there is a bug + bad perfomances with Docker Desktop + files in Windows.
-  For now, Nuxt3 is not ready for production.

## Buy me a coffee 🍵

If you want (_and because i love the coffee 🥰_), [you can buy me a coffee](https://www.buymeacoffee.com/suniron) ❤️‍🔥