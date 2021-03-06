export const error = async (ctx, next) => {
    try {
        await next(); // next is now a function
    } catch (err) {
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
    }
};