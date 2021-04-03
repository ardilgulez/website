import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';
import config from '../config.json';

const App = ({ Component, pageProps }) => <Component config={config} {...pageProps} />;

export default App;
