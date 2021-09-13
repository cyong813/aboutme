import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

const options = ['About', 'Work', 'Contact'];

const styles = () => ({
});

const NavContent = ({ classes })  => (
  <List>
    {options.map((primaryText, i) => (
      <ListItem
        key={primaryText}
      >
        <Button
          href={`#${primaryText.toLowerCase()}`}
          variant='text'
        >
        <ListItemText>
          {primaryText}
        </ListItemText>
        </Button>
      </ListItem>
    ))}
  </List>
);

NavContent.propTypes = {
  classes: PropTypes.shape({}).isRequired
};
NavContent.defaultProps = {};

export default withStyles(styles)(NavContent);
