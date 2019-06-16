import * as React from 'react'
import * as PropTypes from 'prop-types'
import { styled, } from 'styletron-react'

import ItemList from '../../../../components/ItemList/ItemList'

const Container = styled('div', {
  margin: '0 auto',
  maxWidth: '768px',
  padding: '0 1rem',
})

const MainView = props => {
  const {
    items = [],
  } = props

  return (
    <div>
      <Container>
        <h1>
          To Do
        </h1>
        <ItemList
          items={items}
          itemKey={item => item.id}
          itemLink={item => `/items/${item.id}`}
        />
      </Container>
    </div>
  )
}

MainView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })),
}

export default MainView
