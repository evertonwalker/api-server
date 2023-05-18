import fastify from 'fastify'
const app = fastify()

app.get('/hello', () => {
  return 'Hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is Running on port: http://localhost:3333'))
