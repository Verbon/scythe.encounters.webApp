import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Divider from '../../common/components/Divider';
import Text, { TextSize } from '../../common/components/Text';
import seLocalization from '../../resources/localization';

import './AppFooter.scss';


const AppFooter = ({ className }) => (
    <footer className={classNames(className, 'app-footer')}>
        <Divider />
        <div className='app-footer__content'>
            <Text size={TextSize.small}>
                &copy; {new Date().getFullYear()} - {seLocalization.scytheEncounters}
            </Text>
        </div>
    </footer>
);

AppFooter.propTypes = {
    className: PropTypes.string.isRequired,
};

export default AppFooter;
