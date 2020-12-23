# note: never use the :latest tag in a production site
FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY public /var/www/html