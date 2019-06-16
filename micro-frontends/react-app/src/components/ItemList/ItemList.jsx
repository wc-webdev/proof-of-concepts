import * as React from 'react'
import * as PropTypes from 'prop-types'
import { styled, } from 'styletron-react'
import { Link, } from 'react-router-dom'

const ItemWrapper = styled(Link, {
  textDecoration: 'none',
  color: 'inherit',
})

const Item = styled('article', {
  border: '1px solid currentColor',
  margin: '1rem 0',
})

const ItemHeader = styled('header', {
  padding: '0 1rem',
  margin: '1rem 0',
})

const ItemTitle = styled('h2', {
  margin: 0,
  fontSize: '1em',
})

const ItemList = props => {
  const {
    items = [],
    itemKey,
    itemLink,
  } = props

  return (
    <React.Fragment>
      {
        items.map(item => (
          <ItemWrapper
            key={itemKey(item)}
            to={itemLink(item)}
          >
            <Item>
              <ItemHeader>
                <ItemTitle>
                  {item.title}
                </ItemTitle>
              </ItemHeader>
            </Item>
          </ItemWrapper>
        ))
      }
    </React.Fragment>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  itemKey: PropTypes.func,
  itemLink: PropTypes.func,
}

export default ItemList
