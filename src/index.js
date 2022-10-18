// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';
import { createRoot } from "react-dom/client";

// style + assets
import 'assets/scss/style.scss';

//authProvider
import { AuthProvider } from './contexts/JWTAuthContexts'
// ==============================|| REACT DOM RENDER  ||============================== //

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
         <AuthProvider>
            <App />
        </AuthProvider>
        </BrowserRouter>
    </Provider>,
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
