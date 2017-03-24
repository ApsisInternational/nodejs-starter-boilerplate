FROM keymetrics/pm2-docker-alpine:latest

EXPOSE 80

CMD ["pm2-docker", "start", "init.js"]