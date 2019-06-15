import * as React from 'react'
import * as PropTypes from 'prop-types'

import 'normalize.css'

import '../../assets/styles/global.css'

import UserList from '../UserList/UserList'
import { styled, } from 'styletron-react'

const Container = styled('div', {
  margin: '0 auto',
  maxWidth: '768px',
  padding: '0 1rem',
})

const App = (props) => {
  const {
    users = [],
    ...etcProps
  } = props

  return (
    <div
      {...etcProps}
    >
      <Container>
        <h1>
          Users
        </h1>
        <UserList
          items={users}
        />
      </Container>
    </div>
  )
}

App.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  })),
}

export default App
