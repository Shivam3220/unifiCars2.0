import React, { useEffect, useState } from 'react'
import FilterCars from "../components/cars-listing/FilterCars"


const carsListing = () => {
    const [CarListing, setCarListing] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCarList = async () => {
        setLoading(true)
        const fecthCars = await fetch("https://crm.unificars.com/api/getcustomercars")
        const jsonData = await fecthCars.json()
        if (jsonData.code == 200) {
            setLoading(false)
            setCarListing(jsonData.data.auction)
            console.log(jsonData.data.auction)
        }
    };

    useEffect(() => {
        fetchCarList()
    }, []);

    return (
        <div>
            <FilterCars />
        </div>
    )
}

export default carsListing