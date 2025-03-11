export default function Header() {
	return (
		<header className='bg-neutral-900 text-white p-5 flex justify-between items-center'>
			<h1 className='text-5xl text-red-600 font-special'>TERRANA</h1>
			<nav>
				<ul className='flex gap-5 items-center'>
					<li>
						<a href='#' className='text-lg hover:text-red-600'>
							Trailer
						</a>
					</li>
					<li>
						<a href='#' className='text-lg hover:text-red-600'>
							Historia
						</a>
					</li>
					<li>
						<a href='#' className='text-lg hover:text-red-600'>
							Escenario
						</a>
					</li>
					<li>
						<a href='#' className='text-lg hover:text-red-600'>
							Personajes
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
