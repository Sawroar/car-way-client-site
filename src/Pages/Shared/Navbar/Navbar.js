import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../Assets/logo.png'

const Navbar = () => {
    const meuItems = <React.Fragment>
        <li><Link to='/home' className='bg-base-300  rounded-md mr-2' >Home</Link></li>
        <li><Link to='/about' className='bg-base-300 text-red rounded-md mr-2' >About</Link></li>
        <li><Link to='/login' className='bg-base-300 text-red rounded-md mr-2' >Login</Link></li>
        <li><Link to='/blogs' className='bg-base-300 text-red rounded-md mr-2' >Blogs</Link></li>
    </React.Fragment>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {meuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img src={logo} alt="" height={'300px'} width={'150px'} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {meuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn btn-active btn-secondary text-white" >Make Appoinments</Link>
            </div>
        </div>
    );
};

export default Navbar;