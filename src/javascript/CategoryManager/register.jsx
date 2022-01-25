import {registerRoute} from './CategoryManager.routes';
import {registerMainRoute} from './CategoryManager.main.routes';

export default () => {
    registerRoute();
    registerMainRoute();
};
