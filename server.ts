import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as cors from 'kcors';

const app = new Koa();
const router = new Router();

import * as middlewares from './server/middlewares';
import routes from './server/routes';

routes(router);

app
    .use(middlewares.logger)
    .use(middlewares.error)
    .use(cors({
        credentials: true,
        allowHeaders: 'Content-Type'
    }))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

const port = process.env.API_PORT;
app.listen(port, () => console.log(`Listening on port ${port}.`));