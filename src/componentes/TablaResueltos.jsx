


export function TablaResueltos({codigo, fecha, aula, grupo, ordenador, descripcion, alumno}){
    return(
        <div>
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
            <tbody>
                <tr>
                    <td>{codigo}</td>
                    <td>{fecha}</td>
                    <td>{aula}</td>
                    <td>{grupo}</td>
                    <td>{ordenador}</td>
                    <td>{descripcion}</td>
                    <td>{alumno}</td>
                    <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
                    <td>
                        <button className="btn btn-warning" title="Añadir comentario"><i className="bi bi-pencil"></i></button>
                        <button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button>
                    </td>
                    <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i></button></td>
                </tr>
                
            </tbody>
        </table> 
        </div>
    )
}