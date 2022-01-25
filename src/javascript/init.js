import {registry} from '@jahia/ui-extender';
import register from './CategoryManager/register';

export default function () {
    registry.add('callback', 'categoryManager', {
        targets: ['jahiaApp-init:11'],
        callback: register
    });
}
