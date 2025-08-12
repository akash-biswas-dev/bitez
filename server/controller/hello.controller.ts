import { Hono } from "hono";

const hello = new Hono();

hello.get('/', (c) => {
    return c.text('This is from hello controller.');
})

export default hello;