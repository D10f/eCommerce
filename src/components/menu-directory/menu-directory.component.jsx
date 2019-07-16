import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './menu-directory.styles.scss'

class MenuDirectory extends React.Component {
  constructor(){
    super()

    this.state = {
      sections: [
      {
        title: 'hats',
        imageUrl: 'https://source.unsplash.com/600x400/?hats',
        id: 1
      }, {
        title: 'jackets',
        imageUrl: 'https://source.unsplash.com/600x400/?jackets',
        id: 2
      }, {
        title: 'sneakers',
        imageUrl: 'https://source.unsplash.com/600x400/?sneakers',
        id: 3
      }, {
        title: 'women',
        imageUrl: 'https://source.unsplash.com/600x400/?women',
        size: 'large',
        id: 4
      }, {
        title: 'men',
        imageUrl: 'https://source.unsplash.com/600x400/?men',
        size: 'large',
        id: 5
      }]
    }
  }

  render(){
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...restSectionProps }) => (
          <MenuItem key={id} {...restSectionProps} />
        ))}
      </div>
    )
  }
}

export default MenuDirectory
