import React from 'react'
import styles from './list.css'
import { connect } from 'react-redux'
import _get from 'lodash/get'

const _ = {
  get: _get
}

class List extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const { title, type, year, page } = this.props.params
    console.log(this.props.items)
    return (
      <div>
        <p>title</p>
        <p>type</p>
        <p>year</p>
        <p>page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: _.get(state, 'items', {}),
  }
}

export default connect(mapStateToProps)(List)
