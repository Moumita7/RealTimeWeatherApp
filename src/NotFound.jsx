
import {AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {

    let navigate=useNavigate()


    let home=()=>{
        navigate("/")
    }
  return (
    <div id="mainInput">
    <div >
    <div style={{display:"flex",alignItems:"center",gap:"10px",color:"white"}}>

<AiOutlineArrowLeft style={{cursor:'pointer'}} onClick={()=>home()}/>
    <h2 style={{color:"white"}}>City  Name Not Found</h2>
</div>
  
    <img style={{width:"50%"}} src="https://cdn-icons-png.flaticon.com/512/1548/1548682.png" alt="" />
    <div>
    
        
    </div>

    
    </div>



   
   
</div>
  )
}

export default NotFound