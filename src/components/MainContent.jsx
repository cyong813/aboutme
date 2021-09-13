import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Container, Divider, Grid, Typography } from '@material-ui/core'

const styles = ({ breakpoints, transitions }) => ({
  root: {
    padding: 16,
    transition: transitions.create(),
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
  about: {
    paddingTop: 8
  },
  container: {
    paddingTop: 16,
    paddingBottom: 16
  },
  containerHeader: {
    fontWeight: 400,
    fontSize: 18,
    textTransform: 'uppercase',
    paddingBottom: 4,
    borderBottom: '1px solid'
  }
});

const MainContent = ({ classes }) => (
  <div className={classes.root}>
    <Container disableGutters className={classes.container} id='about'>
      <Typography variant='overline' className={classes.containerHeader}>About</Typography>
      <Typography indent='small' className={classes.about}>
        I'm a Software Engineer with a focus in full-stack development.
        I have experience in solution design, front-end and back-end development
        with databases (MERN), and DevOps. I love to build and design strategic solutions and
        convert them into products.
      </Typography>
    </Container>

    <Divider style={{ margin: '24px auto', width: 720 }} />

    <Container disableGutters className={classes.container} id='work'>
      <Typography variant='overline' className={classes.containerHeader}>Work</Typography>
      <Grid container direction='column'>
        <Grid item container direction='row' alignItems='center'>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>
              Travelers Insurance
            </Typography>
            <Typography variant='subtitle2'>
              Apr 2020 - Present
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography indent={'small'}>
              In the Business Insurance Small Commercial division, I lead all
              technical work involving Comparative Raters used by 20+ business partners
              (carrier platforms, agencies, etc.). My accomplishments and projects include:
            </Typography>
            <Typography component={'div'}>
              <ul>
                <li>Building and designing the business owners policy comparative rater and
                  pushing this product into production. This involved microservice integrations, React UI/UX development
                  and hosting, and KPI metrics processing using Grafana and InfluxDB.
                </li>
                <li>Building and designing a book transferral process for workers compensation
                  and pushing this product into production. This involved work similar to the above, with the additional
                  ability to generate Excel reports for business to analyze data for a particular book of business.</li>
                <li>Creating a Mongo Atlas CI/CD pipeline in Gitlab to easily convert and migrate data from Excels
                  across all environments/stages (development to production).</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        <Divider light style={{ margin: '24px auto', width: 720 }} />

        <Grid item container direction='row' alignItems='center'>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>
              Safekeep
            </Typography>
            <Typography variant='subtitle2'>
              Nov 2019 - Mar 2020
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography indent='small'>
              As a backend software engineer in a startup of 4 employees at the time, I've completed
              a variety of proof of concepts and started the development of the subrogation and B2C platforms.
              My accomplishments and projects include:
            </Typography>
            <Typography component='div'>
              <ul>
                <li>Building and designing REST APIs and frontend UI for entity resolution, that copied leads from Salesforce
                  and transformed them into unique entities using Senzing AI. This involved using multi-threading
                  using NodeJS to convert large amounts of data into MongoDB, and using Salesforce and Senzing APIs.
                  Frontend UI development used ReactJS and the Material UI framework.
                </li>
                <li>Building and designing REST APIs to house banking information for consumers
                  on the B2C platform, using MongoDB and Plaid APIs. This involved using Plaid APIs and
                  establishing a modular system design that accounts for various banking integrations.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);

MainContent.propTypes = {};
MainContent.defaultProps = {};

export default withStyles(styles)(MainContent);
