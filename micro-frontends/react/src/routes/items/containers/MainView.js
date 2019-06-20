import { connect, } from 'react-redux'

import Component from '../components/MainView/MainView'

const mapStateToProps = reduxState => ({
  items: reduxState.item.loadedItems,
})

const ConnectedComponent = connect(mapStateToProps)(Component)

export default ConnectedComponent
