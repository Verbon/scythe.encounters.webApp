import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Text from '../../common/components/Text';
import seLocalization from '../../resources/localization';

import './AppHeader.scss';


const AppHeader = ({ className }) => (
    <header className={classNames(className, 'app-header')}>
        <Text>
            {seLocalization.scytheEncounters}
        </Text>
    </header>
);

AppHeader.propTypes = {
    className: PropTypes.string.isRequired,
};

export default AppHeader;
