import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, defineMessages, FormattedMessage, FormattedDate } from 'react-intl'
import { Link } from 'react-router-dom'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { CardActions, CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'

import { Card, CardList, CardMedia } from './ProfileStyles'

const taskIcon = require('../../images/task-icon.png')
const paymentIcon = require('../../images/payment-icon.png')
const toolsIcon = require('../../images/tools-icon.png')

const styles = theme => ({
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  }
})

class ProfileOptions extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <div>
          <Typography variant='headline' component='h3'>
            <FormattedMessage id='account.profile.welcome.headline' defaultMessage='Welcome to Gitpay!' />
          </Typography>
          <Typography component='p'>
            <FormattedMessage id='account.profile.welcome.description' defaultMessage='This is the first steps to start to work with Gitpay' />
          </Typography>
        </div>

        <CardList>
          <Card>
            <FormattedMessage id='account.profile.tasks.caption' defaultMessage='Tasks'>
              {(msg) => (
                <CardMedia
                  image={ taskIcon }
                  title={ msg }
                />
              )}
            </FormattedMessage>
            <CardContent>
              <Typography variant='headline' component='h2'>
                <FormattedMessage id='account.profile.tasks.headline' defaultMessage='Tasks' />
              </Typography>
              <Typography component='p'>
                <FormattedMessage id='account.profile.tasks.description' defaultMessage='Check the tasks available for you' />
              </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary'>
                <Link to={ '/profile/tasks' }>
                  <FormattedMessage id='account.profile.tasks.link.tasks' defaultMessage='See tasks' />
                </Link>
              </Button>
            </CardActions>
          </Card>

          <Card>
            <FormattedMessage id='account.profile.tasks.payment.caption' defaultMessage='Payment'>
              {(msg) => (
                 <CardMedia
                 image={ paymentIcon }
                 title={msg}
               />
              )}
            </FormattedMessage>
            <CardContent>
              <Typography variant='headline' component='h2'>
                <FormattedMessage id='account.profile.tasks.payment.headline' defaultMessage='Payment' />
              </Typography>
              <Typography component='p'>
                <FormattedMessage id='account.profile.tasks.payment.desc' defaultMessage='Fill all your payment details and receive for the tasks concluded' />
              </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary'>
                <Link to={ '/profile/payment-options' }>
                  <FormattedMessage id='account.profile.tasks.payment.setup' defaultMessage='Setup payment' />
                </Link>
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardMedia
              image={ toolsIcon }
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                <FormattedMessage id='account.profile.preferences.headline' defaultMessage='Preferences' />
              </Typography>
              <Typography component='p'>
                <FormattedMessage id='account.profile.preferences.description' defaultMessage='Setup your account with your preferences' />
              </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary'>
                <Link to='/profile/preferences'>
                  <FormattedMessage id='account.profile.preferences.link' defaultMessage='Setup preferences' />
                </Link>
              </Button>
            </CardActions>
          </Card>
        </CardList>
      </div>
    )
  }
}

ProfileOptions.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileOptions)
