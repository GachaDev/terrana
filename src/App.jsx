import { Parallax } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
	return (
		<>
			<main className='bg-neutral-900 text-white'>
				{/* Sección de Introducción */}
				<section className='h-screen flex flex-col justify-center items-center text-center px-4'>
					<Parallax speed={-10}>
						<h2 className='text-6xl font-bold'>Bienvenido a Terrana</h2>
						<p className='mt-4 text-lg max-w-2xl'>
							Un viaje al terror psicológico donde la realidad se
							distorsiona.
						</p>
					</Parallax>
				</section>

				{/* Sección de Características del Juego */}
				<section className='bg-neutral-800 py-16'>
					<div className='max-w-7xl mx-auto text-center'>
						<h3 className='text-4xl font-bold text-red-600 mb-8'>
							Características Clave
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<div className='p-6 bg-neutral-700 rounded-lg shadow-lg'>
								<h4 className='text-2xl font-semibold mb-4'>
									Ambiente Opresivo
								</h4>
								<p className='text-lg'>
									La cabaña cambia de forma, creando una atmósfera de
									claustrofobia y aislamiento.
								</p>
							</div>
							<div className='p-6 bg-neutral-700 rounded-lg shadow-lg'>
								<h4 className='text-2xl font-semibold mb-4'>
									Distorsión de la Realidad
								</h4>
								<p className='text-lg'>
									Objetos que desaparecen, voces susurrantes y reflejos
									distorsionados que alteran la percepción.
								</p>
							</div>
							<div className='p-6 bg-neutral-700 rounded-lg shadow-lg'>
								<h4 className='text-2xl font-semibold mb-4'>
									Miedo a lo Desconocido
								</h4>
								<p className='text-lg'>
									Un terror constante que no sigue patrones fijos,
									desafiando tus sentidos.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Sección de Historia */}
				<section id='historia' className='py-16 bg-neutral-900'>
					<div className='max-w-3xl mx-auto text-center'>
						<h3 className='text-4xl font-bold text-red-600 mb-8'>
							La Historia de Terrana
						</h3>
						<p className='text-lg'>
							En un pueblo remoto, un científico creó una máquina para
							atrapar almas en un bucle eterno. El experimento falló y la
							cabaña quedó sellada. Años después, un investigador descubre
							una señal de auxilio y se adentra en el bosque... Pero algo no
							está bien.
						</p>
					</div>
				</section>

				{/* Sección del Trailer */}
				<section id='trailer' className='bg-neutral-800 py-16'>
					<div className='max-w-7xl mx-auto text-center'>
						<h3 className='text-4xl font-bold text-red-600 mb-8'>Trailer</h3>

						{/* Video de Trailer */}
						<video
							className='w-full rounded-lg shadow-lg'
							controls
							preload='auto'
							muted
							loop
						>
							<source src='/TRAILER.webm' type='video/webm' />
							<source src='/TRAILER.mp4' type='video/mp4' />
							<source src='/TRAILER.ogv' type='video/ogg' />
							Tu navegador no soporta el formato de video.
						</video>
					</div>
				</section>

				{/* Sección de Personajes */}
				<section id='personajes' className='bg-neutral-800 py-16'>
					<div className='max-w-7xl mx-auto text-center'>
						<h3 className='text-4xl font-bold text-red-600 mb-8'>
							Personajes
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
							<div className='p-6 bg-neutral-700 rounded-lg shadow-lg'>
								<h4 className='text-2xl font-semibold mb-4'>
									El Investigador
								</h4>
								<p className='text-lg'>
									Un hombre decidido a descubrir la verdad detrás de la
									señal de auxilio, pero cuya cordura se ve amenazada.
								</p>
							</div>
							<div className='flex flex-col items-center justify-center p-6 bg-neutral-700 rounded-lg shadow-lg'>
								<h4 className='text-2xl font-semibold mb-4'>Terrana</h4>
								<p className='text-lg'>
									Una entidad mecánica con un monitor por cabeza que
									proyecta las almas atrapadas, acechando al
									protagonista.
								</p>
								<img
									src='/TERRANA.webp'
									alt='Terrana'
									className='h-[25rem] mt-5'
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Sección de Escenarios (Carrusel) */}
				<section id='escenarios' className='py-16 bg-neutral-800'>
					<div className='max-w-7xl mx-auto text-center'>
						<h3 className='text-4xl font-bold text-red-600 mb-8'>
							Escenarios
						</h3>

						{/* Carrusel de Escenarios */}
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
							loop
						>
							<SwiperSlide>
								<img
									src='/escenario1.webp'
									alt='Escenario 1'
									className='w-full h-[400px] object-cover rounded-lg shadow-lg'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src='/escenario2.webp'
									alt='Escenario 2'
									className='w-full h-[400px] object-cover rounded-lg shadow-lg'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src='/escenario3.webp'
									alt='Escenario 3'
									className='w-full h-[400px] object-cover rounded-lg shadow-lg'
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className='py-16 bg-neutral-900 text-center'>
					<h3 className='text-4xl font-bold text-red-600 mb-8'>
						¿Estás listo para enfrentar el terror?
					</h3>
					<a
						href='#'
						className='bg-red-600 text-white py-2 px-8 rounded-lg text-lg hover:bg-red-500 transition duration-300'
					>
						PROXIMAMENTE
					</a>
				</section>
			</main>
		</>
	);
}

export default App;
