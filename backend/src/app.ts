import configs from './configs';
import koa from 'koa';
import KoaRouter from 'koa-router';
import path from 'path';
import { bootstrapControllers, Params } from 'koa-ts-controllers';
const app = new koa();
const router = new KoaRouter();
(async () => {
  await bootstrapControllers(app, {
    router,
    basePath: '/api',
    versions: [1],
    controllers: [path.resolve(__dirname, 'controllers/**/*')]
  });
  app.use(router.routes());
  app.listen(configs.server.port, configs.server.host, () => {
    console.log(`服务启动成功:http://${configs.server.host}:${configs.server.port}`);
  });
})();
