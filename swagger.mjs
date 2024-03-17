import swaggerAutogen from 'swagger-autogen';

const doc = {
   info: {
      title: "Users API",
      description: "Users API"
   },
   host: process.env.BASE_URL,
   schemes: ["https", "http"]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.mjs'];


swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
   await import('./server.mjs');
});
