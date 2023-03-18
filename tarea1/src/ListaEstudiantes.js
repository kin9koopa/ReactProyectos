import React from 'react';

export const ListaEstudiantes = ({ listaEstudiantes }) => {
	return (
		<React.Fragment>
			{listaEstudiantes.map((estudiante) => (
				<ul key={estudiante.nombre} className="function">
					<li>
						{estudiante.nombre} {estudiante.apellido} | {estudiante.edad}
					</li>
				</ul>
			))}
		</React.Fragment>
	);
};
