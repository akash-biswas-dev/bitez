import { Hono } from 'hono'
import hello from './controller/hello.controller'

const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello')
})

app.route('/hello',hello);

export default {
  port:8000,
  fetch: app.fetch
}
