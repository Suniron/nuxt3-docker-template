// =======================
// == PM2 CONFIG (prod) ==
// =======================

// See PM2 Docker help here: https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
// See all options here: https://pm2.keymetrics.io/docs/usage/application-declaration/#attributes-available
module.exports = [{
    script: '.output/server/index.mjs',
    name: 'Nuxt3'
  }]