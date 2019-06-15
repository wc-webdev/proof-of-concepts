import { connect, } from 'react-redux'

import Component from '../components/App/App'

const mapStateToProps = reduxState => ({
  users: reduxState.user.users,
})

const ConnectedComponent = connect(mapStateToProps)(Component)

export default ConnectedComponent
