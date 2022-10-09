import React from 'react'

const Header = () => {
	return (
		<nav className='h-18 w-full p-4 pt-5 fixed backdrop-blur-lg'>
			<ul className="flex items-center justify-around w-full font-sm-heading text-xl font-semibold">
				{/* {TODO: change these to link elements} */}
				<li className="inline -rotate-12 active:rotate-0"><a>home</a></li>
				<li className="inline -rotate-12"><a>about</a></li>
				<li className="inline -rotate-12"><a>work</a></li>
				<li className="inline -rotate-12"><a>play</a></li>
			</ul>
		</nav>
	)
}

export default Header; 