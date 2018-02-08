import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import HomeIcon from 'material-ui-icons/Home'
import FolderIcon from 'material-ui-icons/Folder'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

const Home = () => {
  return (
    <Link to='/' className='menu-item'>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon className="color-primary" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
  )
}

const Categories = ({ location, categories }) => (
  <div>
    <Home />
    <Divider />
    {categories.map((category, index) => (
      <div key={index}>
        {location.pathname === `/categories/${category.name}`
         ? <Link to={`/${category.name}`} className='menu-item'>
             <ListItem button>
               <Avatar>
                 <FolderIcon />
               </Avatar>
               <ListItemText primary={category.name} />
             </ListItem>
           </Link>
         : <Link to={`/${category.name}`} className='menu-item'>
             <ListItem button>
               <Avatar>
                 <FolderIcon />
               </Avatar>
               <ListItemText primary={category.name} />
             </ListItem>
           </Link>}
      </div>
    ))}
  </div>
)

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(Categories))
