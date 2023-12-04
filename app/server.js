// server.js
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route(routes);

  // Tambahkan handling untuk kesalahan server
  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response.isBoom) {
      console.error(response);
      return h.response({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'An internal server error occurred',
      }).code(500);
    }

    return h.continue;
  });

  try {
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  } catch (error) {
    console.error('Error starting server:', error.message);
  }
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
