import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Header />
		<ParallaxProvider>
			<App />
		</ParallaxProvider>
		<Footer />
	</StrictMode>
);
