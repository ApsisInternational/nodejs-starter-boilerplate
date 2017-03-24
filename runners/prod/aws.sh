#!/bin/bash
cd /var/www/api
npm install
pm2-docker start init.js
