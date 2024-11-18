import './index.css';

const Cars = (props) => {
    return (
        <div className='userCarWrapper'>
            {props.cars.length ? props.cars.map((car) => <ul className="userCar"><li>{car}</li></ul>) : ''}
        </div>
    );
};

export default Cars;
