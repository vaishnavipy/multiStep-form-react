import React from "react"
import { useForm } from "react-hook-form"
import {Link, useHistory} from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { FormContext } from "./formContext"
import Animator from "./animator"

function Social(){

    const {register,handleSubmit,errors} = useForm()

    const {handleSocialInfo,handleInput,input} = useContext(FormContext)

    const history = useHistory()

    function handleNext(data){
        handleSocialInfo(data)
        history.push("/review")
    }

    function handleChange(event){
        handleInput(event.target)
    }

    return(
        <Animator>
    <div   className="form">
       
       <form onSubmit={handleSubmit(handleNext)}>
        <h2>How Can we find you on Social ?</h2>
        <input type="text" name="twitter"  placeholder="What's your Twitter?" ref={register({required:true})} value={input.twitter} onChange={handleChange}/>
        {errors.twitter && <h5>This field is required</h5>}
        <input type="text" name="facebook" placeholder="What's your Facebook?" ref={register({required:true})}  value={input.facebook} onChange={handleChange}/>
        {errors.facebook && <h5>This field is required</h5>}
        <input type="submit"  value="Next" className="button"/>
   </form>
</div>
   </Animator>
    )
}

export default Social