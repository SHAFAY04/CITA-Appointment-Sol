
    import * as express from 'express';
import verifyRoles from '../middleware/verifyRoles';
import ROLES_LIST from '../config/rolesList';
import { browseStores,createStore,editStore,deleteStore,browseStore } from '../controllers/storesController';

const browseRoute = express.Router();

// Set up routes with middleware
browseRoute.route('/')

    .get(verifyRoles(ROLES_LIST.User), browseStores)
    .post(verifyRoles( ROLES_LIST.Manager), createStore)
    .put(verifyRoles( ROLES_LIST.Manager), editStore)
    .delete(verifyRoles(ROLES_LIST.Manager), deleteStore);

    //represent a specific store
browseRoute.route('/:storeid')
    .get(verifyRoles(ROLES_LIST.User),browseStore);

    //represent a specific store's specific service
browseRoute.route('/:storeid/:serviceid')
    .get(verifyRoles(ROLES_LIST.User),browseStore);

    //represent a specific store's specific service's payment route
browseRoute.route('/:storeid/:serviceid/checkout')
    .get(verifyRoles(ROLES_LIST.User),browseStore);

export default browseRoute;
