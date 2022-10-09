import React from 'react'

const Header = () => {
	return (
		<nav className='h-16 w-full p-4 fixed backdrop-blur-lg'>
			<ul className="flex items-center justify-around w-full font-sm-heading text-xl font-semibold">
				<li className="inline"><a>home</a></li>
				<li className="inline"><a>about</a></li>
				<li className="inline"><a>work</a></li>
				<li className="inline"><a>play</a></li>
			</ul>
		</nav>
	)
}

export default Header; 