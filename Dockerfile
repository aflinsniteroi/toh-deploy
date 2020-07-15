# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:12.18.2-slim as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13 as nginx
COPY --from=node /app/dist/curso-angular-basico /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
