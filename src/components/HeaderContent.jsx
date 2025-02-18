import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import { Button, Icon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import NightsStay from '@material-ui/icons/NightsStay';

const styles = () => ({
  header: {
    fontWeight: 500,
    minWidth: 0,
    fontSize: 18,
    '&:hover': {
      backgroundColor: 'transparent',
      borderRadius: 0
    }
  },
  grow: {
    flexGrow: 1
  },
  nav: {
    padding: 8,
    '&:hover': {
      backgroundColor: 'transparent',
      borderBottom: '1px solid',
      borderRadius: 0
    }
  },
});

const options = ['About', 'Work', 'Contact'];

const HeaderContent = ({ classes, screen, applyDark }) => (
  <>
    {screen !== 'xs' && screen !== 'sm' ? (
      <>
        <Button
          noWrap
          className={classes.header}
          disableFocusRipple
          disableRipple
          disableElevation
          href='/'
          variant='text'
        >
          Corinna Yong
        </Button>
        <div className={classes.grow} />
        {options.map((link, i) => (
          <Button
            key={i}
            className={classes.nav}
            disableFocusRipple
            disableRipple
            disableElevation
            href={`#${link.toLowerCase()}`}
            variant='text'
          >
            {link}
          </Button>
        ))}
        {/*<IconButton onClick={() => applyDark(v => !v)}>*/}
        {/*  <Icon><NightsStay /></Icon>*/}
        {/*</IconButton>*/}
      </>
    ) : (
      <></>
      // <IconButton onClick={() => applyDark(v => !v)}>
      //   <Icon><NightsStay /></Icon>
      // </IconButton>
    )}
  </>
);

HeaderContent.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};
HeaderContent.defaultProps = {
  screen: null,
};

export default withStyles(styles)(HeaderContent);
