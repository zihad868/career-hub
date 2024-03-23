import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='w-9/12 mx-auto'>
              <Header />
              <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;