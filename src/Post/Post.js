import React, {Component} from "react";
import './Post.css';

import 'swiper/swiper-bundle.min.css';
import {Link} from "react-router-dom";

import ProfilePicture from "./ProfilePicture";
import PostImages from "./PostImages";
import {database} from "../firebasejs";
import CommentsDisplay from "./CommentsDisplay";

class Post extends Component{

    constructor(props) {
        super(props);
        this.state={
            comment:'',
            commentButton:{color: 'rgba(2, 47, 247,0.5)'}
        }
    }



    changeHandler=e=>{
        this.setState({
            [e.target.name]:e.target.value,

        })
        if (e.target.value===""){
            this.setState({
                commentButton:{color: 'rgba(2, 47, 247,0.5)'}
            })
        }else{
            this.setState({
                commentButton:{color: 'rgba(2, 47, 247,1)'}
            })
        }
    }

    addComments=()=>{
        var comment=this.state.comment;
        if (comment!==""){
            console.log(this.state.comment)
            database.ref("post/-"+this.props.pid+"/comments").child(localStorage.getItem("username")).set(comment)
            this.setState({
                comment:''
            })
        }

    }

    render() {
        return <div className="col-md-8 post">
            <br/>
            <div className="card">

                <div className="card-header bg-white">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-around">
                            <ProfilePicture username={this.props.data.data.username} />
                            <p className="userName">
                                {this.props.data.data.username} <br/>
                                {this.props.data.data.title}
                            </p>
                        </div>
                        <Link to="/"><i className="fa fa-ellipsis-v"  aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="card-body">


                           <PostImages data={this.props.data.data.images} />






                   
                </div>


                    <div className="d-flex justify-content-between bottom p-2">
                        <div className="d-flex justify-content-around leftIcons">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </div>
                        <i className="fa fa-bookmark-o rightIcons" aria-hidden="true"></i>
                    </div>
                    <p className="likes">{this.props.data.likes} likes</p>

                    <CommentsDisplay pid={this.props.pid}/>

                    <p className="ml-3 text-uppercase postTime">4 hours ago</p>




                <div className="card-footer d-flex comment">
                    <input type="text" onChange={this.changeHandler} value={this.state.comment} name="comment" placeholder="Add a comment..."/>
                    <button onClick={this.addComments} style={this.state.commentButton}>Post</button>
                </div>
            </div>
            <br/>



        </div>;
    }
}export default Post;