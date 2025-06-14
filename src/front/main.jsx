import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global state management
import { BackendURL } from './components/BackendURL';
import { useEffect } from 'react'

const Main = () => {


    useEffect(() => {

        let url = import.meta.env.VITE_BACKEND_URL;

        console.log(url);


        fetch("https://verbose-doodle-4jgg4wjj65pvc7g9g-3001.app.github.dev/api/hello")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Errorrrrrrrrrrrrrrr:", error));



        /*
        fetch('https://api.example.com/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data);
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud Fetch:', error);
            });
*/

    }, [])

    if (! import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_BACKEND_URL == "") return (
        <React.StrictMode>
            <BackendURL />
        </React.StrictMode>
    );
    return (
        <React.StrictMode>
            {/* Provide global state to all components */}
            <StoreProvider>
                {/* Set up routing for the application */}
                <RouterProvider router={router}>
                </RouterProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
