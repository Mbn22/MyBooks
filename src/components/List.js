import image from './images/image.jpg'
import image3 from './images/image3.jpg'
import image2 from './images/image2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function List(){



    return(
        <Carousel  style={{ display:'flex' , justifyContent:'center' ,width:'800px' , height:'650px' , margin:'10px auto'}}>
        
        
         
        <Carousel.Item interval={1000}  >
          <img style={{width:'700px', height:'600px'}}
            className="d-block w-100"
            src={image3}
            alt="First slide"
          />
          <Link to="/ListBook/Livre_Tunisien">
          <Carousel.Caption>
            <h3>Livre Tunisien</h3>
            <p>les meilleurs livres tunisien</p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        


        
        <Carousel.Item interval={500}>
          <img style={{width:'700px', height:'600px'}}
            className="d-block w-100"
            src={image}
            alt="Second slide"
          />
          <Link to="/ListBook/Fiction_Littérature" >
          <Carousel.Caption>
            <h3>Fiction/Littérature</h3>
            <p>les meilleurs livres de Fiction  et  de Littérature</p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>

        
        <Carousel.Item>
          <img  style={{width:'700px', height:'600px'}}
            className="d-block w-100"
            src={image2}
            alt="Third slide"
          />
          <Link to="/ListBook/Jeunesse">
          <Carousel.Caption>
            <h3>Jeunesse</h3>
            <p>les meilleurs livres pour  enfant</p>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        
      </Carousel>
    )
}
export default List