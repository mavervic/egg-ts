import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getUserById() {
    const { ctx } = this;
    const { id } = ctx.params;

    ctx.body = { body: await ctx.servic.account.findOneByUserId(id) };
  }

  public async postUserById() {
    const { ctx } = this;
    const { email, nickname } = ctx.params;

    ctx.body = {
      body: await ctx.servic.account.createNew({ email, nickname }),
    };
  }

  public async patchUserById() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { email, nickname } = ctx.params;

    ctx.body = {
      body: await ctx.servic.account.findOneByUserId(id, { email, nickname }),
    };
  }

  public async deleteUserById() {
    const { ctx } = this;
    const { id } = ctx.params;

    ctx.body = { body: await ctx.servic.account.findOneByUserId(id) };
  }
}
