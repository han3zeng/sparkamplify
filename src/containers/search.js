import React from 'react'
import styles from './search.css'
import { fetchMovie } from '../actions/omdb'
import { connect } from 'react-redux'


class Search extends React.PureComponent{
  constructor(props) {
    super(props)
    this.titleInput = {}
    this.yearInput = {}
    this.select = {}
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e) {
    e.preventDefault()
    const title = this.titleInput.value || null
    const year = this.yearInput.value || null
    const type = this.select.value || null
    const page = 1
    if(title && year && type) {
      this.props.fetchMovie({title, year, type, page})
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Title:
              <input type="text" ref={(input) => this.titleInput = input} />
            </label>
          </div>
          <div>
            <label>
              Year:
              <input type="text" ref={(input) => this.yearInput = input} />
            </label>
          </div>
          <div>
            <select
              defaultValue="Movie"
              ref={(select) => this.select = select}
            >
              <option value="Movie">Movie</option>
              <option value="Series">Series</option>
              <option value="Episode">Episode</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {fetchMovie})(Search)
