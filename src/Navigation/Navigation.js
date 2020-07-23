import React,{Component} from "react";
import './Navigation.css';
import {auth, database, storage} from "../firebasejs";
import {Link} from "react-router-dom";

class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state={
            islogin:false,
            profilePicture:''
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((user)=>{
            if (user){
                var id=user.email.split("@")[0];
                var path;
                try{
                    database.ref('userDetails').child(id).on('value',snapshot=>{
                        this.setState({
                            islogin:true,

                        });
                        path=snapshot.val().profilePicture

                        storage.ref(path).getDownloadURL().then(url=>{
                            this.setState({
                                profilePicture:url||"images/avtar.png"

                            });
                        });
                    })
                }catch (e) {

                }



            }
        });
    }


    logout=()=>{
        auth.signOut().then(()=>{
            localStorage.setItem("username","");
        }).catch(err=>{
            console.log(err)
        });
    }
    render() {
        return <div className="navigation container-fluid border-bottom shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="instagram"/>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between icons">
                            <Link to="/home"><i className="fa fa-home"></i></Link>
                            <i className="fa fa-send"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-compass"></i>

                            <div className="dropdown">
                                {this.state.islogin?<img className="profile"  src={this.state.profilePicture} alt="profile"/>:<></>}
                                <div className="dropdown-content">
                                    <Link to="/addpost"><div >Add Post</div></Link>
                                    <div onClick={this.logout} className="text-danger"> Log out</div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>;
    }
}export default Navigation;