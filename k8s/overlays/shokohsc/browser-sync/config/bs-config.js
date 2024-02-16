
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  ui: {
    port: 3001
  },
  open: false,
  files: false,
  watch: false,
  https: false,
  proxy: {
    target: "pj-recrutement-et-conseil.dev-pj-recrutement-et-conseil:80",
    ws: true
  },
  cors: true,
  port: 3000,
  logPrefix: "pj-recrutement-et-conseil",
  logLevel: "debug",
  logConnections: true,
  socket: {
    port: 443
  }
};
