import {useEffect, useState} from "react";

const carLists = [
    {
        model: 'Mercedes S600',
        color: 'black'
        },
    {
        model: 'Mercedes S300',
        color: 'white'
    },
    {
        model: 'Mazda CX5',
        color: 'black'
    },
    {
        model: 'Mazda 3',
        color: 'red'
    },
]



function SelectCart () {
    const [carList, setCarList] = useState(carLists)
    const [car, setCar] = useState({
        model: carList[0].model,
        color: carList[0].color
    })


    const handleChangeModel = (e) => {
        setCar({...car, model: e.target.value})
    }
    const handleChangeColor = (e) => {
        setCar({...car, color: e.target.value})
    }

    useEffect(() => {

    })


    return (
        <div>
            <h1>Select your car</h1>
            <select onChange={handleChangeModel}>
                { carList.map(car => (
                    <option>
                        {car.model}
                    </option>
                ))}
            </select>
            <select onChange={handleChangeColor}>
                { carList.map(car => (
                    <option>
                        { car.color }
                    </option>
                ))}
            </select>
            <h2>You selected a { car.color } - { car.model }</h2>
        </div>

    )
}
export default SelectCart;