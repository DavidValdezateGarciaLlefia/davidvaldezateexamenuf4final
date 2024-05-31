
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export function CrearTicket() {
    const navigate = useNavigate();

    const { agregarTicketPendiente } = useContext(GlobalContext);

    const [nuevoTicket, setNuevoTicket] = useState({
        id: '',
        codigo: '',
        fecha: '',
        aula: '',
        grupo: '',
        ordenador: '',
        descripcion: '',
        alumno: ''
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setNuevoTicket({
            ...nuevoTicket,
            [name]: value
        });
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        agregarTicketPendiente(nuevoTicket);
        navigate('/');
    };

    return (
        <form onSubmit={manejarSubmit}>
            <div>
                <label>Código:</label>
                <input type="text" name="codigo" value={nuevoTicket.codigo} onChange={manejarCambio} />
            </div>
            <div>
                <label>Fecha:</label>
                <input type="text" name="fecha" value={nuevoTicket.fecha} onChange={manejarCambio} />
            </div>
            <div>
                <label>Aula:</label>
                <input type="text" name="aula" value={nuevoTicket.aula} onChange={manejarCambio} />
            </div>
            <div>
                <label>Grupo:</label>
                <input type="text" name="grupo" value={nuevoTicket.grupo} onChange={manejarCambio} />
            </div>
            <div>
                <label>Ordenador:</label>
                <input type="text" name="ordenador" value={nuevoTicket.ordenador} onChange={manejarCambio} />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" name="descripcion" value={nuevoTicket.descripcion} onChange={manejarCambio} />
            </div>
            <div>
                <label>Alumno:</label>
                <input type="text" name="alumno" value={nuevoTicket.alumno} onChange={manejarCambio} />
            </div>
            <button type="submit">Agregar Ticket</button>
        </form>
    );
}