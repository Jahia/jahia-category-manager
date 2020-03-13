import React from 'react';
import {registry, IframeRenderer} from '@jahia/ui-extender';
import ProfileConstants from './CategoryManager.constants';
import CategoryManager from './CategoryManager';

registry.add('primary-nav-item', 'categorymanagerNavGroup', {
    targets: ['nav-root-top:4'],
    render: () => <CategoryManager/>
});

registry.add('route', 'categorymanager', {
    targets: ['nav-root-top'],
    path: ProfileConstants.ROUTE,
    defaultPath: ProfileConstants.ROUTE,
    render: () => <IframeRenderer url={`${window.contextJsParameters.contextPath}/engines/manager.jsp?conf=categorymanager-anthracite&lang=${window.contextJsParameters.lang}`}/>
});
