import React from 'react';
import {useTranslation} from 'react-i18next';
import {PrimaryNavItem} from '@jahia/moonstone';
import Collections from '@jahia/moonstone/dist/icons/CollectionsBookmark';
import {useHistory} from 'react-router';
import CMConstants from './CategoryManager.constants';

const CategoryManager = () => {
    const history = useHistory();
    const {t} = useTranslation('jahia-category-manager');

    return (
        <PrimaryNavItem role="category-manager-menu-item"
                        icon={<Collections/>}
                        label={t('label')}
                        isSelected={history.location.pathname.startsWith(CMConstants.ROUTE)}
                        onClick={() => history.push(CMConstants.ROUTE)}/>
    );
};

export default CategoryManager;
