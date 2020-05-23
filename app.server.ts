import { Application } from 'https://deno.land/x/oak/mod.ts';
import REST from './src/rest.services.ts';

const server = new Application();
server.use(REST.routes());
server.use(REST.allowedMethods());

console.log(`Server is up`);

await server.listen({port : 5000});