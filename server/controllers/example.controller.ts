import { ExampleService } from './../services/example.service'

export class ExampleController {
    private _service;

    constructor() {
        this._service = new ExampleService();
    }

    async getAll(ctx) {
        ctx.body = await this._service.getAll();
    }    

    async getById(ctx) {
        const id = ctx.params.id;
        ctx.body = await this._service.getById(id);
    }

    async create(ctx) {
        const id = ctx.params.id;
        const body = ctx.request.body;
        ctx.body = await this._service.create(body);
    }

    async update(ctx) {
        const id = ctx.params.id;
        const body = ctx.request.body;
        ctx.body = await this._service.update(id, body);
    }

    async remove(ctx) {
        const id = ctx.params.id;
        ctx.body = await this._service.rmove(id);
    }

}
