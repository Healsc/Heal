const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
router.get('/abc',(ctx,next)=>{
    ctx.body = ctx.query;
  /*   console.log(ctx);
    console.log(next);
    ctx.body = "sunchuang"; */
})
router.get('/cba',(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body = "cba";
})
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx=>{

})
app.listen(3000,()=>{
    console.log('s')
})