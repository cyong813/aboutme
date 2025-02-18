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
    paddingTop: 18
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
        I have experience in system design, front-end and back-end development
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
              CCC Intelligent Solutions
            </Typography>
            <Typography variant='subtitle2'>
              Senior Software Engineer (Fullstack)
            </Typography>
            <Typography variant='subtitle2'>
              Apr 2022 - Oct 2024
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component='div'>
              <ul>
                <li>
                  Responsible for the architecture and implementation of 3 applications. 
                  Implemented module federation using Webpack5 to split monolithic frontends into microfrontends. 
                  Founded 3 shared frameworks to support common UI/API/DB operations.
                </li>
                <li>
                  Built, managed and scaled back-end orchestration of claim eligibility and scoring 
                  of subrogation potential using NodeJS lambda microservices, MongoDB databases, 
                  SQS queues and Kafka.
                </li>
                <li>
                  Responsible for identification and triage of production outages and bugs, 
                  creating production monitors and alerts, and 
                  escalation and delegation of production issues.
                </li>
                <li>
                  Led an agile software engineering team developing multiple features. 
                  Managed development and planning of features and ticketing using Gitlab. 
                  Handled onboarding for all engineering new hires.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        <Divider light style={{ margin: '24px auto', width: 720 }} />
    
        <Grid item container direction='row' alignItems='center'>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>
              CollegeVine
            </Typography>
            <Typography variant='subtitle2'>
              Software Engineer (Fullstack)
            </Typography>
            <Typography variant='subtitle2'>
              Oct 2021 - Mar 2022
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component='div'>
              <ul>
                <li>
                  Delivered and implemented a recruiting platform for university admission counselors 
                  that offer tools to improve networking and discoverability of high school students 
                  through the CollegeVine platform using PureScript, Ruby on Rails, and SQL.
                </li>
                <li>
                  Collaborated with developers, product manager, designer and the 
                  college sales team to understand and serve the needs of 
                  university admission counselors.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        <Divider light style={{ margin: '24px auto', width: 720 }} />
        
        <Grid item container direction='row' alignItems='center'>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>
              Travelers Insurance
            </Typography>
            <Typography variant='subtitle2'>
              Lead Software Engineer (Fullstack)
            </Typography>
            <Typography variant='subtitle2'>
              Apr 2020 - Oct 2021
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component={'div'}>
              <ul>
                <li>
                  Responsible for the design and implementation of Small Commercial business segment digital interaction 
                  channel APIs with brokers such as comparative raters, policy binding and book roll/transfer 
                  for workers compensation and business owners policy product lines.
                </li>
                <li>
                  Led 2 agile software engineering teams developing the API layer and cooperate with product owners, 
                  business stakeholders, user experience designers, and partners (20+) to achieve business outcomes.
                </li>
                <li>
                  Built and managed back-end orchestration of NodeJS microservices and MongoDB databases to support 
                  comparative rater capabilities, as well as front-end microviews using ReactJS.
                </li>
                <li>
                  Implemented and used Gitlab CI/CD pipelines for progressive development and deployment, 
                  including loading React microviews into AWS S3, deploy Docker image microservice instances, 
                  and load Excel files into MongoDB Atlas.
                </li>
                <li>
                  Fine-tuned performance and experience for agents and carrier-facing platforms through 
                  externalization of React components, and gain insights into user interactions by embedding 
                  metrics into said platforms.
                </li>
                <li>
                  Responsible for fixing production outages for multiple products, production monitoring 
                  and alerting, enhancing existing products in production, 
                  and creation of real-time KPI dashboards using Grafana and InfluxDB.
                </li>
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
              Software Engineer (Backend)
            </Typography>
            <Typography variant='subtitle2'>
              Nov 2019 - Mar 2020
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component='div'>
              <ul>
                <li>
                  Built and designed REST API services for both consumer and business platforms 
                  using JavaScript (Express/Node) and MongoDB Atlas; primary focus on entity resolution.
                </li>
                <li>
                  Refactor backend services to perform faster using Node worker threads and thread pooling.
                </li>
                <li>
                  Collaborated closely with CEO and CTO to integrate third-party services and APIs 
                  to the platform including SmartyStreets, Senzing, Plaid, Q2, AWS Pinpoint.
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
