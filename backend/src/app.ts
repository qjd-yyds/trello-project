import { IerrorHandler } from './configs/error';
import configs from './configs';
import koa, { Context } from 'koa';
import KoaRouter from 'koa-router';
import path from 'path';
import { bootstrapControllers, Params } from 'koa-ts-controllers';
import KoaBodyParser from 'koa-bodyparser';
const app = new koa();
const router = new KoaRouter();
(async () => {
  await bootstrapControllers(app, {
    router,
    basePath: '/api',
    versions: [1],
    controllers: [path.resolve(__dirname, 'controllers/**/*')],
    errorHandler: async (err: any, ctx: Context) => {
      let status = 500;
      let body: IerrorHandler = {
        statusCode: 500,
        error: 'internal server error',
        message: 'an internal server error occurred'
      };
      if (err.output) {
        status = err.output.statusCode;
        body = {
          ...err.output.payload
        };
        if (err.data) {
          body.errorDetails = err.data;
        }
      }

      ctx.status = status;
      ctx.body = body;
    }
  });
  // 解析body
  app.use(KoaBodyParser());

  app.use(router.routes());
  app.listen(configs.server.port, configs.server.host, () => {
    console.log(`服务启动成功:http://${configs.server.host}:${configs.server.port}`);
  });
})();
