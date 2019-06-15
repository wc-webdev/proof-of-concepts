import * as React from 'react'
import * as PropTypes from 'prop-types'
import { styled, withStyle, } from 'styletron-react'

const Table = styled('table', {
  borderCollapse: 'collapse',
  width: '100%',
  border: '1px solid currentColor',
})

const Cell = styled('div', {
  textAlign: 'left',
  padding: '1rem',
  border: '1px solid currentColor',
})

const BodyCell = withStyle(Cell, {
  borderTop: 0,
  borderBottom: 0,
})

const UserList = (props) => {
  const {
    items = [],
    ...etcProps
  } = props

  return (
    <Table
      {...etcProps}
    >
      <thead>
        <tr>
          <Cell
            $as="th"
          >
            Name
          </Cell>
          <Cell
            $as="th"
          >
            Email
          </Cell>
        </tr>
      </thead>
      <tbody>
        {
          items.map(item => (
            <tr
              key={item.id}
            >
              <BodyCell
                $as="th"
              >
                {item.name}
              </BodyCell>
              <BodyCell
                $as="td"
              >
                {item.email}
              </BodyCell>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

UserList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  })),
}

export default UserList
