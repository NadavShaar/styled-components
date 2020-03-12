import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import BaseIcon from './BaseIcon';

RoundIcon.propTypes = {
    iconClass: PropTypes.string,
    iconName: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    gap: PropTypes.number,
    className: PropTypes.string
};

RoundIcon.defaultProps = {
    size: 24,
    gap: 5,
    className: ''
};

function RoundIcon(props) {
    const classes2 = useStyles(props);

    const { iconClass, iconName, color, size, className, baseIconProps, classes, gap, ...rest } = props;

    return (
        <div className={`${className} ${classes2.root}`} {...rest}>
            <BaseIcon size={size} iconClass={iconClass} iconName={iconName} classes={{root: classes2.base}} {...baseIconProps}></BaseIcon>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: props => props.size + props.gap,
        height: props => props.size + props.gap,
        backgroundColor: props => props.color || theme.colors.secondary
    },
    base: {}
}));

export default RoundIcon;