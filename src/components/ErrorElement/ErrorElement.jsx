import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div>
            <h3>Oops</h3>
            <button className='btn bg-gray-400'><Link to='/'>Go To Home</Link></button>
        </div>
    );
};

export default ErrorElement;