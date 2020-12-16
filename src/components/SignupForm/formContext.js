import { useSpring } from "framer-motion";
import React, { useState } from "react";


const FormContext = React.createContext();

function FormContextProvider(props){

    

    const [socialInfo,setSocialInfo] = useState("");

    const [profileInfo,setProfileInfo] = useState("");

    const [input,setInput] = useState({name:"",email:"",twitter:"",facebook:""})

    function handleInput({name,value}){
        setInput(prevState => ({...prevState,[name]:value}))
    }

    function  handleProfileInfo(data){
        setProfileInfo(data)
    }

    function  handleSocialInfo(data){
        setSocialInfo(data)
    }

    function handleFormSubmit(){
       setInput({name:"",email:"",twitter:"",facebook:""})
       setProfileInfo("")
       setSocialInfo("")
    }

    return(
    <FormContext.Provider value={{handleProfileInfo,profileInfo,handleSocialInfo,socialInfo,handleFormSubmit,handleInput,input}}>
        {props.children}
    </FormContext.Provider>)
}

export {FormContext,FormContextProvider} 