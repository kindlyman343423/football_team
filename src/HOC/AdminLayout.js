import React from "react";
import AdminNav from "../Components/admin/AdminNav";

function AdminLayout(props) {
  return (
    <div className="admin_container">
      <div className="admin_left_nav">
        <AdminNav />
      </div>
      <div className="admin_right">{props.children}</div>
    </div>
  );
}

export default AdminLayout;
