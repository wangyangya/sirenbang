import React ,{Fragment}from 'react'
import {HashRouter,Switch,Route,withRouter,Redirect} from 'react-router-dom'
 import  Login from './pages/login/login'
 import Admin from './pages/admin/admin'
 import Home from './pages/home/home'
class RootRoute extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/admin'></Redirect>
           <Route path='/login' component={Login}></Route>
           <Route path='/admin' component={()=>{
             return(
               <Admin>
                   <Route path='/admin/home' component={Home}></Route>
               </Admin>
             )
           }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default RootRoute