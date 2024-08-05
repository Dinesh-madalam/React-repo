// import Heading1, { Heading2 } from "../headings/headings";
// import CustomImage from "../image/image";
import "./card.css"

// const Card= (prop) =>{
//   const {name,cups,image}=prop
//   return(
//     <div>
//     <Heading1 data={name}></Heading1>
//     <CustomImage data={image}></CustomImage>
//     <Heading2 data={cups}></Heading2>
//     </div>
//   )
  
// };

// export default Card;

const Customcard = (prop) => {
  const {path,height,width}=prop
  return (
    <div style= {{height:"400px",Width:"250px" ,border:"2px solid green" }}>
    <img  src={path}  height={height} width={width} />
    <p>id : 1</p>
    </div>
  
  )
}

export default Customcard;