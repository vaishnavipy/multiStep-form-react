import React, { useContext, useState } from "react"
import {Link, useHistory} from "react-router-dom"
import {useForm} from "react-hook-form"
import {FormContext} from "./formContext"
import Animator from "./animator"

function Profile(){

    const {register,handleSubmit,errors} = useForm()
    const history = useHistory()

    const {handleProfileInfo,handleInput,input} = useContext(FormContext)

    const handleNext =(data)=>{
        handleProfileInfo(data)
        
        history.push("/multiStep-form-react/social")
    }

    function handleChange(event){
      
        handleInput(event.target)
        
    }
   


    return(
    <Animator>
            <div  className="form">
            
            <form onSubmit={handleSubmit(handleNext)}>
                    <h2>Tell Us About Yourself</h2>
                    <input type="text" name="name"  placeholder="What's your name?" ref={register({required:true})} value={input.name} onChange={handleChange}/>
                    {errors.name && <h5>A Name is required.</h5>}
                    <input type="text" name="email" placeholder="What's your email ?" ref={register({required:true,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} value={input.email} onChange={handleChange}/>
                    {errors.email && <h5>An valid email is required</h5>}
                    {errors.type === "pattern" && <h5>An valid email is required</h5>}
                    
                    <input type="submit"  value="Next" className="button"/>
            </form>
            </div>
    </Animator>)
}

export default Profile