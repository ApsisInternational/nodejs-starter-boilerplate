export const logger = async (ctx, next) => {
    const start : number = Number(new Date());
    await next();
    const ms : number = Number(new Date()) - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};