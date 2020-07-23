import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Signup.css';
import {auth, database, storage} from "../firebasejs";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state={
            mail:'',
            password:'',
            profilePicture:'',

        }
    }


    componentDidMount() {
        auth.onAuthStateChanged((user)=>{
            if (user){
                this.props.history.push('/home');
            }
        });
    }

    changeHandler=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }


    uploadFile=e=>{
        var type=e.target.files[0].type;

        if (type==="image/jpg"||type==="image/jpeg"||type==="image/png"){
            this.setState({
                profilePicture:e.target.files[0],
                error:""
            });
        }else{
            this.setState({
                error:"Enter Valid Image"
            });
        }
    }
     register= async (e)=>{
        e.preventDefault();
        if (this.state.mail===""){
            this.setState({
                error:"Enter Email"
            });
        }else if(this.state.password===""){
            this.setState({
                error:"Enter Password"
            });
        }else if(this.state.password.length<8){
            this.setState({
                error:"Enter Week Password"
            });
        }else{


            await auth.createUserWithEmailAndPassword(this.state.mail,this.state.password).then(async ()=>{
                var username=this.state.mail.split("@")[0];
                var path="profilePicture/"+username;


                await database.ref('userDetails').child(username).set({
                        mail:this.state.mail,
                        profilePicture:path


                })

               await storage.ref(path).put(this.state.profilePicture);
                localStorage.setItem("username",username);
                this.props.history.push("/home");
                }

            ).catch((error)=> {
                this.setState({
                    error:error.message
                });
            });
        }

    }

    render() {
        return (
            <div className="container signin">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="logo"/>
                            <p className="text-danger text-center">{this.state.error}</p>
                            <form onSubmit={this.register}>
                                <input type="file" name="profilePicture" onChange={this.uploadFile}/>
                            <input type="text" name="mail" onChange={this.changeHandler} value={this.state.mail} className="border  mx-auto" placeholder="Phone number,Username or email"/>
                            <input type="password" name="password" autoComplete="true" onChange={this.changeHandler} value={this.state.password} className="border  mx-auto" placeholder="Password"/>
                            <button className="button mx-auto">Sign up</button>
                            </form>
                            <br/>
                        </div>
                        <br/>
                        <div className="card">
                            <p className="p-3 text-center">Have an account? <Link to="/signin">Log in</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default Signup;