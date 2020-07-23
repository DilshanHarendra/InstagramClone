import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Signin.css';
import {auth} from "../firebasejs";

class Signin extends Component {

constructor(props) {
    super(props);
    this.state={
        mail:'',
        password:'',
        error:''
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

    login=(e)=>{
        e.preventDefault();
        if (this.state.mail===""){
            this.setState({
                error:"Enter Email"
            });
        }else if(this.state.password===""){
            this.setState({
                error:"Enter Password"
            });
        }else{

            auth.signInWithEmailAndPassword(this.state.mail,this.state.password).then(()=>{

                localStorage.setItem("username",this.state.mail.split("@")[0]);
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
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <img src="/images/signin.png" className="sidePhoto" alt="logo"/>
                    </div>
                    <div className="col-md-4">
                        <div className="card">

                            <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="logo"/>
                            <p className="text-danger text-center">{this.state.error}</p>
                            <form  onSubmit={this.login}>
                            <input type="mail" name="mail" value={this.state.mail} onChange={this.changeHandler}  className="border" placeholder="Phone number,Username or email"/>

                            <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} className="border " autoComplete="true" placeholder="Password"/>
                            <button className="button" id="login">Login</button>
                            </form>
                                <br/>

                        </div>
                        <br/>
                        <div className="card">
                            <p className="p-3 text-center">Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default Signin;