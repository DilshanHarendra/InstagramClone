import React, {useEffect, useState} from 'react';
import {storage} from "../firebasejs";


function ProfilePicture(props) {


        const [picture,setpicture]=useState("");

        useEffect(()=>{
            storage.ref("profilePicture/"+props.username).getDownloadURL().then(url=>{
                setpicture(url);
            })
        },[props.username])


        return (
            <img className="userImage" src={picture} alt={props.username}/>
        );

}



export default ProfilePicture;