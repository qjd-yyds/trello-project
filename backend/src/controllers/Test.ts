import { Body, Controller, Ctx, Get, Header, IsNumberString, Params, Post, Query } from 'koa-ts-controllers';
class GetUserQuery {
  @IsNumberString(
    {},
    {
      message: 'page 必须为数字'
    }
  )
  page: number;
}
@Controller('/test')
class TestController {
  @Get('/hello')
  async hello(a: any) {
    return 'hello';
  }
  // 正则验证
  // @Get('/user/:id(\\d+)')
  // async getUser(@Params('id') id: number) {
  //   return '当前parmas的用户id是' + id;
  // }
  // @Get('/user')
  // async getUser(@Query() q: { id: number }) {
  //   return '当前parmas的用户id是' + q.id;
  // }
  // @Post('/user')
  // async postUser(@Body() body: { name: string; password: string }, @Header() h: any) {
  //   return '我是body' + JSON.stringify(body);
  // }
  @Get('/user')
  async getUser(@Query() q: GetUserQuery) {
    console.log(JSON.stringify(q));
    return '传来的query' + JSON.stringify(q);
  }
}
