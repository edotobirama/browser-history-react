import {Component} from 'react'

import './index.css'

import Website from '../Website/index.js'

class History extends Component {
  state = {
    historyList: this.props.initialHistoryList,
    savedList: this.props.initialHistoryList,
  }

  search = event => {
    const value = event.target.value
    let newHistoryList = this.state.savedList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(value.toLowerCase()),
    )
    this.setState({
      historyList: newHistoryList,
    })
  }

  onDelete = x => {
    this.setState(prev => ({
      historyList: prev.historyList.filter(eachItem => eachItem.id !== x),
      savedList: prev.savedList.filter(eachItem => eachItem.id !== x),
    }))
  }

  render() {
    return (
      <div className='bg-cont'>
        <div className='nav-bar'>
          <img
            src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png'
            alt='app logo'
            className='app-logo'
          />
          <div className='searchbox-container'>
            <div className='search-icon-box'>
              <img
                src='https://assets.ccbp.in/frontend/react-js/search-img.png'
                className='search-icon'
                alt='search'
              />
              <input
                className='text-box'
                type='search'
                onChange={this.search}
                placeholder='Search history'
              />
            </div>
          </div>
        </div>
        <div className='not-nav-bar'>
          {this.state.historyList.length !== 0 && (
            <div className='history-card'>
              <ul className='the-list'>
                {this.state.historyList.map(eachItem => (
                  <Website
                    key={eachItem.id}
                    item={eachItem}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          )}
          {this.state.historyList.length === 0 && (
            <div className='no-history-card'>
              <p className='no-history-text'>There is no history to show</p>{' '}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default History
