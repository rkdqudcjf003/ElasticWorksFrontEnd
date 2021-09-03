
import React, {Component} from 'react'
import AdminService from 'src/service/AdminService';
class AdminUserManagementComponent extends Component {

   componentDidMount(){
      AdminService.getMembers().then((res) =>{
         console.log(res)
      })
   }

   render(){
      return(
         <div>

         </div>

      )
   }
}

export default new AdminUserManagementComponent();

