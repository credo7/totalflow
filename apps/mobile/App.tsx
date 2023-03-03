import ThemeAndGlobalStylesProvider from './src/providers/ThemeAndGlobalStylesProvider';
import MainScreen from './src/screens/MainScreen';

const App = () => (
    <ThemeAndGlobalStylesProvider>
        <MainScreen />
    </ThemeAndGlobalStylesProvider>
);

export default App;
