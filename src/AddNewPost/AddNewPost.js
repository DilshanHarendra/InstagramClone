import React, { useState} from 'react';
import {database, storage} from "../firebasejs";



function AddNewPost(props) {


            var postImage="";
            const [error, setError]=useState('');





    function setImage(e){

        var type;
        type=e.target.files[0].type;

        if (type==="image/jpg"||type==="image/jpeg"||type==="image/png"){
            postImage=e.target.files[0];
            setError("");

            }else{
                setError("Enter Valid Image");
            }


    }
    async function  post(e){
        console.log(postImage);
        var title= document.getElementById('title').value;
        if(title===""){

            setError("Enter Title");

        }else if(postImage.length===0){

            setError("Select Image");

        }else{

            var path="posts/"+localStorage.getItem("username")+"_"+title+"_image";
           await storage.ref(path).put(postImage);


            await database.ref("post").push().set({
                title:title,
                images:path,
                username:localStorage.getItem("username")
            });
            props.history.push("/home");
        }
    }




        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card shadow p-5">
                                <p className="text-danger text-center"><b>{error}</b></p>

                                <input name="file" onChange={setImage} type="file" multiple={true}/>
                                <h5 className="mt-4">Title</h5>
                                <input className="form-control" name="title" id="title" type="text"/><br/>
                                <button onClick={post} className="btn btn-primary mt-3 mx-auto" >Post </button>

                        </div>

                    </div>
                </div>

            </div>
        );

}



export default AddNewPost;