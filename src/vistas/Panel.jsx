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
            
            <h2 className="mt-5">Tickets resueltos</h2>
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
        </div>
    );
}