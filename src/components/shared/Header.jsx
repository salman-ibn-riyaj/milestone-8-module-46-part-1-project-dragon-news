import Image from 'next/image';
import HeaderImg from '../../assets/logo.png'
import { format } from 'date-fns';
import BreakingNews from './BreakingNews';

const Header = () => {
    return (
        <div className='text-center space-y-2 my-5'>
            <Image className='mx-auto' src={HeaderImg} alt='header image' height={200} width={400}></Image>

            <p>Journalism Without Fear or Favour</p>

            <p>{format(new Date(), "EEEE MMM dd yyyy")}</p>

            <div className='flex items-center gap-2 bg-gray-200 p-1 container mx-auto'>
                <button className='bg-red-700 text-white p-1 rounded-md font-semibold px-3'>Latest</button>
                <BreakingNews></BreakingNews>
            </div>
        </div>
    );
};

export default Header;