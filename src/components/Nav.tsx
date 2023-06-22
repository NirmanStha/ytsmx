import React from 'react'

const Nav = () => {
    return (
        <nav className='bg-prim text-white border-b-white border-b shadow-white'>
            <div className="container flex justify-between items-center m-auto py-3">
                <div className="logo">Logo</div>
                <div className="nav-links">
                    <ul className='flex justify-between items-center space-x-2'>
                        <li>Home</li>
                        <li>4K</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav