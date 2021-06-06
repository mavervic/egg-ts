import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async signin() {
    console.log('signin');
    const { ctx } = this;
    ctx.body = { body: 'ok' };
  }

  public async csrf() {
    const { ctx } = this;
    ctx.body = { csrf: ctx.csrf };
  }
}
