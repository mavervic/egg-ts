import { app, mock } from 'egg-mock/bootstrap';

const userObject = {
  email: 'test@gmail.com',
  password: '123456',
  nickname: 'test',
  levelId: 1,
};

async function createUser(userData) {
  const ctx = app.mockContext();
  const result = await ctx.service.user.createNew(userData);
  return result.id;
}

mock.consoleLevel('NONE');
describe('test/app/controller/user.test.ts', () => {
  before(async () => {
    const ctx = app.mockContext();

    await ctx.service.user.deleteAllUser();

    await createUser(userObject);
  });
});
