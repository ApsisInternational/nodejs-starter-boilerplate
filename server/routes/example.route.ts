import {ExampleController} from './../controllers/example.controller'

export function setupRoute(router) {

    const ctrl = new ExampleController();

    const basePath = '/api/v1/example';

    router
        .get(`${basePath}`, ctx => ctrl.getAll(ctx))
        .get(`${basePath}/:id`, ctx => ctrl.getById(ctx))
        .post(`${basePath}/:id`, ctx => ctrl.create(ctx))
        .put(`${basePath}/:id`, ctx => ctrl.update(ctx))
        .delete(`${basePath}/:id`, ctx => ctrl.remove(ctx))

};
