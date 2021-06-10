import { Context } from 'egg';

export async function validateAccountPostBody(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.validate(
      {
        account: {
          type: 'string',
          required: true,
        },
        password: {
          type: 'string',
          required: true,
        },
        nickname: {
          type: 'string?',
        },
      },
      ctx.request.body,
    );
    await next();
  } catch (error) {
    throw error;
  }
}
