import {motion} from "framer-motion"

function  Animator({children}){
    
    return(
    <motion.div

    style={{position:"absolute"}}

    initial={{x: 300, scale: 0.8, opacity: 0}}
    animate={{ x: "10%", scale: 1, opacity: 1 }}
    exit={{ x: -300, scale: 0.8, opacity: 0 }}

    >
        {children}
    </motion.div>)
}

export default Animator