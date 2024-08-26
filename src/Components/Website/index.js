import {Component} from 'react'

import './index.css'

class Website extends Component {
  render() {
    let {onDelete, item} = this.props
    return (
      <li className="list-item">
        <div className="item-content">
          <p className="time">{item.timeAccessed}</p>
          <div className="content-container">
            <img
              src={item.logoUrl}
              className="item-logo"
              alt="domain logo"
            />
            <p className="heading">{item.title}</p>
            <p className="url">{item.domainUrl}</p>
          </div>
        </div>
        <button
          className="btn"
          onClick={()=> onDelete(item.id)}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-btn"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default Website
