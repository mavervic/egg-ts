import { Context } from 'egg';

export function validateAccountPostBody() {
  return async (ctx: Context, next: () => {}) => {
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
    } catch (error) {
      throw error;
    }

    next();
  };
}
