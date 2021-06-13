import { Context } from 'egg';

export async function validateParams(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.params.id = parseInt(ctx.params.id, 10);
    ctx.validate(
      {
        id: {
          type: 'integer',
        },
      },
      ctx.params,
    );
    await next();
  } catch (error) {
    throw { status: 400, message: error };
  }
}
