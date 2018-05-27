import React from 'react'
import { connect } from 'react-redux'
import _get from 'lodash/get'
import styles from './card.css'

const _ = {
  get: _get,
}

class Card extends React.Component {
  render() {
    const { id } = this.props.params
    const { Title, Year, Type, Poster } = _.get(this.props.items, id, {})
    return (
      <div>
        <img className={styles.image} src={Poster} />
        <div>{`Title: ${Title}`}</div>
        <div>{`Year: ${Year}`}</div>
        <div>{`Type: ${Type}`}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: _.get(state, 'omdb.items' ,null),
  }
}

export default connect(mapStateToProps)(Card)
