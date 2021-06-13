import { Service } from 'egg';

const UserAttributes = ['id', 'email', 'createdAt'];
const LevelAttributes = ['name'];

/**
 * Test Service
 */
export default class Account extends Service {
  public async findOneByUserId(id: string) {
    return await this.ctx.model.User.findOne({
      attributes: UserAttributes,
      where: { id },
      include: {
        model: this.ctx.model.level,
        attributes: LevelAttributes,
      },
    });
  }

  public async updateOneByUserId(
    id: number,
    { email, nickname }: { email: string; nickname: string },
  ) {
    return await this.ctx.model.User.updeate(
      { email, nickname },
      { where: { id } },
    );
  }

  public async createNew({
    email,
    nickname,
  }: {
    email: string;
    nickname: string;
  }) {
    return await this.ctx.model.User.updeate({
      email,
      nickname,
    });
  }

  public async deleteOneByUserId(id: number) {
    return await this.ctx.model.User.destory({
      where: { id },
    });
  }
}
