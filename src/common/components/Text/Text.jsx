import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import TextSize from './TextSize';


const Text = ({ size, ...restProps }) => (
    <Header
        {...restProps}
        size={size}
    />
);

Text.propTypes = {
    size: PropTypes.oneOf([
        TextSize.tiny,
        TextSize.small,
        TextSize.medium,
        TextSize.large,
        TextSize.huge,
    ]),
};

Text.defaultProps = {
    size: TextSize.medium,
};

export default Text;
