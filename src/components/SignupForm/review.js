import React from "react"
import { useHistory } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { FormContext } from "./formContext"
import Animator from "./animator"

function Review(){
    const {profileInfo,socialInfo,handleFormSubmit} = useContext(FormContext)

    const history = useHistory()

    function handleSubmit(e){
       
        history.push("/multiStep-form-react/")
        alert("You have successfully submitted your information!")
        handleFormSubmit();
    }

    return(
    <Animator>
        <div className="form review">
            <form onSubmit={handleSubmit}>
            <h2>Review All Your Info</h2>
            <h5>Name : {profileInfo.name}</h5>
            <h5>Email : {profileInfo.email}</h5>
            <h5>Twitter : {socialInfo.twitter}</h5>
            <h5>Facebook : {socialInfo.facebook}</h5>
            <input type="submit"  value="Submit All your info" className="button"/>
            </form>
        </div>
    </Animator>
        )
}

export default Review