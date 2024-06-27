# build from source
# ----------------------------
FROM node:20 AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/pet-pal-frontendweb/browser /usr/share/nginx/html