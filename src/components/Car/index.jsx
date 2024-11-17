import './index.css';

const Cars = (props) => {
    return (
        <div>
            <ul className="userCar">
                {props.cars.map((car) => <li>{car}</li>)}
            </ul>
        </div>
    );
};

export default Cars;
