import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const NavHeader = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
      <div style={{ paddingBottom: 16 }} />
      <Typography variant='h6' noWrap>
        Corinna Yong
      </Typography>
      <Typography color='textSecondary' noWrap gutterBottom>
        corinna.y.813@gmail.com
      </Typography>
    </div>
    <Divider />
  </>
);

NavHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};
NavHeader.defaultProps = {};

export default NavHeader;
