import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

import Nav from './components/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <header>
                <Nav />
            </header>
            <main>
                <Hero />
                <About />
            </main>
        </ThemeProvider>
    );
}

export default App;
