import React, { Children } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ children }) {
  const links = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/talks">All Talks</Link></li>
    <li><Link to="/about">About Headbangers</Link></li>
    <li><Link to="/contact">Contact Banger</Link></li>
  </>
  return (
    <div className="drawer">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label htmlFor="sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-2xl font-metalMania">HeadBangers Talks</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-metalMania">
              {links}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 font-metalMania">
          {links}
          <label for='sidebar' className='absolute top-5 right-4 border-2 rounded-full px-2.5 font-mono py-0.5 border-red-500'>X</label>
        </ul>

      </div>
    </div >
  )
}
