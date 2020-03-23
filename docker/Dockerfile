FROM alpine:latest AS build-env

ARG VUE_APP_API_BASE_URL=http://localhost
ENV VUE_APP_API_BASE_URL $VUE_APP_API_BASE_URL

WORKDIR /app

RUN apk update && \
    apk add nodejs npm --no-cache

COPY ["./", "/app/"]

RUN npm install && \
    npm run build

FROM alpine:latest AS run-env

WORKDIR /app

RUN apk update && \
    apk add nginx --no-cache && \
    mkdir -p /run/nginx

COPY --from=build-env ["/app/dist/", "/app/"]
COPY ["docker/nginx.conf", "/etc/nginx/nginx.conf"]
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
