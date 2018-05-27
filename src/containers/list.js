import React from 'react'
import styles from './list.css'
import { connect } from 'react-redux'
import _get from 'lodash/get'
import Pagination from '../components/pagination'
import { fetchMovie, fetchMovieFromRedux } from '../actions/omdb'

const _ = {
  get: _get
}

class List extends React.Component{
  constructor(props) {
    super(props)
    this.search = this._search.bind(this)
  }

  _search(page) {
    const newParams = {
      ...this.props.params,
      page
    }
    const { type } = this.props.params
    if(_.get(this.props.list, `${type}.${page}`, null) !== null) {
      this.props.fetchMovieFromRedux(newParams)
    } else {
      this.props.fetchMovie(newParams)
    }
  }

  render() {
    const { title, type, year, page } = this.props.params
    const { items, list, isFetching, total } = this.props
    const content = () => {
      const cards = () => {
        const idList = _.get(list, `${type}.${page}`, null)
        if(isFetching === false && idList !== null) {
          return list[type][page].map((id) => {
            return (
              <div className={styles.card} key={id}>
                <img className={styles.image} src={items[id].Poster} />
                <p>{items[id].Title}</p>
              </div>
            )
          })
        } else {
          return (
            <div>loading</div>
          )
        }
      }
      return (
        <div className={styles.contentContainer}>
          {cards()}
        </div>
      )
    }

    return (
      <div>
        <span className={styles.infoContainer}>{total} of {type} {title} found in {year}</span>
        {content()}
        <Pagination
          currentPage={this.props.currentPage}
          total={total}
          callback={this.search}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    params: _.get(state, 'omdb.params', {}),
    items: _.get(state, 'omdb.items', {}),
    currentPage: _.get(state, 'omdb.currentPage', {}),
    list: _.get(state, 'omdb.idList', {}),
    total: _.get(state, 'omdb.totalResults', 0),
    isFetching: _.get(state, 'omdb.isFetching', true),
  }
}


export default connect(mapStateToProps, {fetchMovie, fetchMovieFromRedux})(List)
