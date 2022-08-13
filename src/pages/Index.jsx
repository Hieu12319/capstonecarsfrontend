import { Link } from "react-router-dom"
import { useState } from "react"
import {
    FormStyle, ContainerStyle
} from "../styles/styles"



export default function Index(props) {
    const [newForm, setNewForm] = useState ({
        make: "",
        model: "",
        year: "",
        image: "",
        price: "",
        description: "",
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})} 
        

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCars(newForm)
        setNewForm({
            make: "",
            model: "",
            year: "",
            image: "",
            price: "",
            description: "",
        })
    }

   const loaded = () => {  
     
    return <ContainerStyle> { props.cars.map((car) => (
         
         <div key={car._id} className="">
            <Link to={`/cars/${car._id}`}>
                <h1>{car.make}</h1>
            </Link>
            <img src={car.image} alt={car.make} />
            <h3>{car.model}</h3>
            <h4>price = {car.price}</h4>
        </div>  
   ))}
   </ContainerStyle>
   }
   
   const loading = () => {
    return <h1>loading.....</h1>
   }

   return (
    <section>
        <FormStyle onSubmit={handleSubmit}>
            <input type="text" value={newForm.make} name="make" placeholder="make" onChange={handleChange} required /> <br/>
            <input type="text" value={newForm.model} name="model" placeholder="model" onChange={handleChange} />
            <input type="number" value={newForm.year} name="year" placeholder="year" onChange={handleChange} />
            <input type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleChange} />
            <input type="number" value={newForm.price} name="price" placeholder="price" onChange={handleChange} />
            <input type="text" value={newForm.description} name="description" placeholder="description" onChange={handleChange} />
            <input type="submit" value="Add Car For Sale" />
        </FormStyle>  
        {props.cars ? loaded() : loading()}
    </section>
      
   )





    

}