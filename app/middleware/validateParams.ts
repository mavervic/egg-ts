import { Context } from 'egg';

export async function validateAccountPostBody(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.validate(
      {
        email: {
          type: 'string',
          required: true,
          allowEmpty: true,
        },
      },
      ctx.request.body,
    );
    await next();
  } catch (error) {
    throw error;
  }
}
