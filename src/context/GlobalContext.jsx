import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [datos, setDatos] = useState({ ticketsResueltos: [], ticketsPendientes: [] });

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const resueltosResponse = await fetch('https://davidvaldezatejsonserver.vercel.app/ticketsResueltos');
                const ticketsResueltos = await resueltosResponse.json();

                const pendientesResponse = await fetch('https://davidvaldezatejsonserver.vercel.app/ticketsPendientes');
                const ticketsPendientes = await pendientesResponse.json();

                setDatos({ ticketsResueltos, ticketsPendientes });
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <GlobalContext.Provider value={{ datos, setDatos }}>
            {children}
        </GlobalContext.Provider>
    );
};