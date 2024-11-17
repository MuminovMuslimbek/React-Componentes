import './index.css'

const index = (props) => {
    const { addressReg, addressZip } = props
    return (
        <div>
            <ul className='adress'>
                <li>{addressReg}</li>
                <li>{addressZip}</li>
            </ul>
        </div>
    )
}

export default index
