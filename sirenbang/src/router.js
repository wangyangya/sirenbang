import React ,{Fragment}from 'react'
import {HashRouter,Switch,Route,withRouter,Redirect} from 'react-router-dom'
 import  Login from './pages/login/login'
 import Admin from './pages/admin/admin'
 import Home from './pages/home/home'
import Addlist from './pages/rootlist/Addlist'
import Rootlist from './pages/rootlist/rootlist'
import Reg from './pages/reg/reg'
import Addfood from './pages/food/addfood'
import Foodlist from "./pages/food/foodlist"
import Userlist from "./pages/user/list"
import Setting from "./pages/setting/setting"

class RootRoute extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
           <Route path='/login' component={Login}></Route>
           <Route path='/reg' component={Reg}></Route>
           <Route path='/admin' component={()=>{
             return(
               <Admin>
                   <Route path='/admin/home' component={Home}></Route>
                   <Route path='/admin/addlist' component={Addlist}></Route>
                   <Route path='/admin/rootlist' component={Rootlist}></Route>
                   <Route path='/admin/addfood' component={Addfood}></Route>
                   <Route path='/admin/Foodlist' component={Foodlist}></Route>
                   <Route path='/admin/list' component={Userlist}></Route>
                   <Route path='/admin/setting' component={Setting}></Route>


               </Admin>
             )
           }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default RootRoute