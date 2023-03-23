import Navigation from './src/navigation';
import ThemeAndGlobalStylesProvider from './src/providers/ThemeAndGlobalStylesProvider';

const App = () => (
    <ThemeAndGlobalStylesProvider>
        <Navigation />
    </ThemeAndGlobalStylesProvider>
);

export default App;
