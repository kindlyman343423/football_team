import React from 'react'

function AdminLayout(props) {
  return (
    <div className="admin_container">
      <div className="admin_left_nav">
      navbar
      </div>
      <div className="admin_right">
        {props.children}
      </div>
    </div>
  )
}

export default AdminLayout
