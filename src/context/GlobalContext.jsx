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

    const borraTicket = (id, tipo) => {
        fetch(`https://davidvaldezatejsonserver.vercel.app/${tipo}/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setDatos(prevDatos => ({
                    ...prevDatos,
                    [tipo]: prevDatos[tipo].filter(ticket => ticket.id !== id)
                }));
            })
            .catch(error => console.error('Error al borrar el ticket:', error));
    };

    const resolverTicket = (id) => {
        const ticketPendiente = datos.ticketsPendientes.find(ticket => ticket.id === id);
        if (ticketPendiente) {
            const fechaActual = new Date();
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
            const año = fechaActual.getFullYear();
            const fechaFormateada = `${dia}/${mes}/${año}`;

            const ticketResuelto = { ...ticketPendiente, fecha_resuelto: fechaFormateada };

            setDatos(prevDatos => ({
                ...prevDatos,
                ticketsPendientes: prevDatos.ticketsPendientes.filter(ticket => ticket.id !== id),
                ticketsResueltos: [...prevDatos.ticketsResueltos, ticketResuelto]
            }));

            fetch(`https://davidvaldezatejsonserver.vercel.app/ticketsPendientes/${id}`, {
                method: 'DELETE'
            })
            .then(() => {
                return fetch('https://davidvaldezatejsonserver.vercel.app/ticketsResueltos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(ticketResuelto)
                });
            })
            .catch(error => console.error('Error al resolver el ticket:', error));
        }
    };

    const agregarTicketPendiente = (nuevoTicket) => {
        fetch('https://davidvaldezatejsonserver.vercel.app/ticketsPendientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoTicket)
        })
            .then(response => response.json())
            .then(data => {
                setDatos(prevDatos => ({
                    ...prevDatos,
                    ticketsPendientes: [...prevDatos.ticketsPendientes, data]
                }));
            })
            .catch(error => console.error('Error al agregar el ticket:', error));
    };

    return (
        <GlobalContext.Provider value={{ datos, setDatos, borraTicket, resolverTicket, agregarTicketPendiente }}>
            {children}
        </GlobalContext.Provider>
    );
};