import React from 'react';
import {registry} from '@jahia/ui-extender';
import CategoryManager from './CategoryManager';

export const registerRoute = () => {
    registry.add('primary-nav-item', 'category-manager', {
        targets: ['nav-root-top:4'],
        requiredPermission: 'categoryManager',
        requiredPermissionPath: '/sites/systemsite',
        render: () => <CategoryManager/>
    });
};
