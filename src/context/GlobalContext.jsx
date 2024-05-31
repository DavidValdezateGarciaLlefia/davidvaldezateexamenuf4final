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
                console.error('Error al obtener los tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const borraTicket = (codigo, tipo) => {
        fetch(`https://davidvaldezatejsonserver.vercel.app/${tipo}/${codigo}`, {
            method: 'DELETE'
        })
            .then(() => {
                setDatos(prevDatos => ({
                    ...prevDatos,
                    [tipo]: prevDatos[tipo].filter(ticket => ticket.codigo !== codigo)
                }));
            })
            .catch(error => console.error('Error al borrar el ticket:', error));
    };

    return (
        <GlobalContext.Provider value={{ datos, setDatos, borraTicket }}>
            {children}
        </GlobalContext.Provider>
    );
};