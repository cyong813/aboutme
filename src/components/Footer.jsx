import React from 'react';
import { Divider, Icon, IconButton, Grid } from '@material-ui/core';
import Mail from '@material-ui/icons/Mail';
import Github from '@material-ui/icons/Github';
import LinkedIn from '@material-ui/icons/LinkedIn';

const Footer = () => (
  <div style={{ maxWidth: 700, margin: 'auto', textAlign: 'center' }} id='contact'>
    <Divider style={{ margin: '24px auto', width: 60 }} />
    <Grid container justify='center' spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <IconButton href='mailto:corinna.y.813@gmail.com'>
          <Icon><Mail /></Icon>
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <IconButton href='https://github.com/cyong813'>
          <Icon><Github /></Icon>
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <IconButton href='https://www.linkedin.com/in/corinnay813'>
          <Icon><LinkedIn /></Icon>
        </IconButton>
      </Grid>
    </Grid>
  </div>
);

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
