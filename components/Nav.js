import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div className='flex justify-center space-x-7 py-5 dark:text-white'>
        <Link href='/'>
          <a className='font-bold hover:underline'>Home</a>
        </Link>
        <Link href='/converter'>
          <a className='font-bold hover:underline'>
            UUID Converter
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
