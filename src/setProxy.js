const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dating-sim-server.herokuapp.com',
      changeOrigin: true,
    }),
  );
};
