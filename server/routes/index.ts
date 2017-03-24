'use strict';

import {setupRoute as setupExampleRoutes} from './example.route';

var routes = function(router) {
    setupExampleRoutes(router);
};

export default routes;
