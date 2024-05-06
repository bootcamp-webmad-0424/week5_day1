const ApartmentCard = ({ _id, img, title, pricePerDay }) => {

    return (
        <div className="ApartmentCard card">
            <img src={img} alt="apartment" />
            <h3>{title}</h3>
            <p>Price: {pricePerDay}</p>
        </div>
    )
}

export default ApartmentCard