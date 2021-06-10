import { Controller } from 'egg';
import { SignInBodyRequest } from './dto/account';

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

  public async signinGetToken() {
    const { ctx } = this;
    const data: SignInBodyRequest = ctx.request.body;
    const { account, password, nickname } = data;

    const token = ctx.app.jwt.sign(
      {
        account: account,
        password,
        nickname,
      },
      ctx.app.config.jwt.secret,
    );

    ctx.body = { token: token };
  }
}
