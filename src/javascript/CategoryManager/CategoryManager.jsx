import React from 'react';
import {useTranslation} from 'react-i18next';
import {PrimaryNavItem, Tag} from '@jahia/moonstone';
import {useHistory} from 'react-router';
import CMConstants from './CategoryManager.constants';

const CategoryManager = () => {
    const history = useHistory();
    const {t} = useTranslation('jahia-category-manager');

    return (
        <PrimaryNavItem role="category-manager-menu-item"
                        icon={<Tag/>}
                        label={t('label')}
                        isSelected={history.location.pathname.startsWith(CMConstants.ROUTE)}
                        onClick={() => history.push(CMConstants.ROUTE)}/>
    );
};

export default CategoryManager;
