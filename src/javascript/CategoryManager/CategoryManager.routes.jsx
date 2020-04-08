import React from 'react';
import {registry, IframeRenderer} from '@jahia/ui-extender';
import ProfileConstants from './CategoryManager.constants';
import CategoryManager from './CategoryManager';

registry.add('primary-nav-item', 'categorymanagerNavGroup', {
    targets: ['nav-root-top:4'],
    requiredPermission: 'categoryManager',
    requiredPermissionPath: '/sites/systemsite',
    render: () => <CategoryManager/>
});

registry.add('route', 'categorymanager', {
    targets: ['main'],
    path: ProfileConstants.ROUTE,
    defaultPath: ProfileConstants.ROUTE,
    requiredPermission: 'categoryManager',
    requiredPermissionPath: '/sites/systemsite',
    render: () => <IframeRenderer url={`${window.contextJsParameters.contextPath}/engines/manager.jsp?conf=categorymanager-anthracite&lang=${window.contextJsParameters.lang}`}/>
});
