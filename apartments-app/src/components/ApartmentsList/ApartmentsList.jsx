import { useEffect, useState } from "react"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import axios from 'axios'

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments"

const ApartmentsList = () => {

    const [apartments, setApartments] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {                   // Efecto de montaje
        getAllApartments()
    }, [])

    const getAllApartments = () => {

        axios
            .get(apiURL)
            .then(response => {
                setApartments(response.data)                // axios coloca la respuesta del server en .data
                setIsLoading(false)
            })
            .catch(err => alert('ERROR RECIBIENDO LOS APARTAMENTOS'))
    }

    return (
        <div className="ApartmentsList list">
            {
                isLoading
                    ?
                    <h1>CARGANDO...</h1>
                    :
                    apartments.map(eachApartment => {
                        return (
                            <ApartmentCard key={eachApartment._id} {...eachApartment} />
                        )
                    })
            }
        </div>
    )
}

export default ApartmentsList