import Card from 'react-bootstrap/Card'
import CustomList from "./list";



function Customcard(prop) {
    const {item}=prop
    return (
        <>
        <Card style={{ width: '30%' , margin: '10px'}}>
           <Card.body>
            <Card.Title>{item.Name}</Card.Title>
            <Card.Img variant='top' src={item.image}/> 
           
            <h5>Ingredients :</h5>
            <CustomList Name={item.ingredients}></CustomList>.
            <h5>Instructions :</h5>
            <CustomList Name={item.instructions}></CustomList>
           </Card.body>
        </Card>
        </>
    )
}

export default Customcard;