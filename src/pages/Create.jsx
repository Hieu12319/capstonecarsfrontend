import { useParams, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Link } from "react-router-dom"


export default function Create() {
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
            createCars(newForm)
            setNewForm({
                make: "",
                model: "",
                year: "",
                image: "",
                price: "",
                description: "",
            })
        }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newForm.make} name="make" placeholder="make" onChange={handleChange} />
                <input type="text" value={newForm.model} name="model" placeholder="model" onChange={handleChange} />
                <input type="number" value={newForm.year} name="year" placeholder="year" onChange={handleChange} />
                <input type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleChange} />
                <input type="number" value={newForm.price} name="price" placeholder="price" onChange={handleChange} />
                <input type="text" value={newForm.description} name="description" placeholder="description" onChange={handleChange} />
                <input type="submit" value="Add Car For Sale" />
            </form>
        </section>
    )
}