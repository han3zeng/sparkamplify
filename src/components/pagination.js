import React from 'react'
import styles from './pagination.css'
//  max width: 320px
const page_per_section = 6
const number_itmes_per_page = 10

const getMaxPage = (total) => {
  return Math.ceil(total/number_itmes_per_page)
}

class Pagination extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.props.currentPage,
    }
    this.clickOnNumber = this._clickOnNumber.bind(this)
    this.clickOnNextSection = this._clickOnNextSection.bind(this)
    this.clickOnPreviousSection = this._clickOnPreviousSection.bind(this)
    this.goToLastSection = this._goToLastSection.bind(this)
    this.goToFirstSection = this._goToFirstSection.bind(this)
  }

  _goToFirstSection() {
    if(this.state.currentPage !== 1) {
      this.clickOnNumber(1)
    }
  }

  _goToLastSection() {
    const { total } = this.props
    if(this.state.currentPage !== getMaxPage(total)) {
      this.clickOnNumber(getMaxPage(total))
    }
  }

  _clickOnNextSection() {
    const { total } = this.props
    const targetPage = this.state.currentPage+6
    if(targetPage <= getMaxPage(total)) {
      this.clickOnNumber(targetPage)
    } else {
      this.goToLastSection()
    }
  }

  _clickOnPreviousSection() {
    const targetPage = this.state.currentPage-6
    if(targetPage >= 1) {
      this.clickOnNumber(targetPage)
    } else {
      this.goToFirstSection()
    }
  }

  _clickOnNumber(page) {
    this.props.callback(page)
    this.setState({
      currentPage: page
    })
  }

  render() {
    const { total } = this.props
    const { currentPage } = this.state
    const numberButtons = () => {
      let head = 0
      if(currentPage%page_per_section === 0) {
        head = (currentPage/page_per_section - 1)* 6 + 1
      } else {
        head = Math.floor(currentPage/(page_per_section))*6 + 1
      }
      const tail = (head+5) > getMaxPage(total) ? getMaxPage(total) : (head+5)
      let rows = []
      console.log('head: ', head)
      console.log('tail: ', tail)
      for(let i=head ; i<tail+1 ; i++) {
        const theStyle = i === this.state.currentPage ? styles.currentPage : styles.numberContainer
        rows.push(
          <span
            className={theStyle}
            onClick={() => {this.clickOnNumber(i)}}
            key={i}
          >
            {i}
          </span>
        )
      }
      return rows
    }
    return (
      <div className={styles.container}>
        <span onClick={this.goToFirstSection}>{'<<'}</span>
        <span onClick={this.clickOnPreviousSection}>{'<'}</span>
        {numberButtons()}
        <span onClick={this.clickOnNextSection}>{'>'}</span>
        <span onClick={this.goToLastSection}>{'>>'}</span>
      </div>
    )
  }
}

export default Pagination
