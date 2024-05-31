import { GlobalContext } from "../context/GlobalContext";
import { TablaPendientes } from "../componentes/TablaPendientes";
import { TablaResueltos } from "../componentes/TablaResueltos";
import { useContext } from "react";

export function Panel() {
    const { datos } = useContext(GlobalContext);

    return (
        <div>
            <h1>Administración de incidencias</h1>
            <h2 className="mt-5">Tickets pendientes</h2>
            <table className="table mt-4">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Fecha</th>
                    <th>Aula</th>
                    <th>Grupo</th>
                    <th>Ordenador</th>
                    <th>Descripción</th>
                    <th>Alumno</th>
                    <th>Resolver</th>
                    <th>Comentarios</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            {datos.ticketsPendientes.map(ticket => (
                <TablaPendientes
                    key={ticket.id}
                    id={ticket.id}
                    codigo={ticket.codigo}
                    fecha={ticket.fecha}
                    aula={ticket.aula}
                    grupo={ticket.grupo}
                    ordenador={ticket.ordenador}
                    descripcion={ticket.descripcion}
                    alumno={ticket.alumno}
                />
            ))}
            </table>
            <h2 className="mt-5">Tickets resueltos</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Fecha resuelto</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                        <th>Comentarios</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
            {datos.ticketsResueltos.map(ticket => (
                <TablaResueltos
                    key={ticket.id}
                    id={ticket.id}
                    codigo={ticket.codigo}
                    fecha={ticket.fecha}
                    fecharesuelto={ticket.fecha_resuelto}
                    aula={ticket.aula}
                    grupo={ticket.grupo}
                    ordenador={ticket.ordenador}
                    descripcion={ticket.descripcion}
                    alumno={ticket.alumno}
                />
            ))}
            </table>
        </div>
    );
}