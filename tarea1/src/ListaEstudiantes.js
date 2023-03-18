import React from 'react';

export const ListaEstudiantes = ({ listaEstudiantes }) => {
	return (
		<React.Fragment>
			{listaEstudiantes.map((estudiante) => (
				<p key={estudiante.nombre} className="function">
					{estudiante.nombre} {estudiante.apellido} | {estudiante.edad}
				</p>
			))}
		</React.Fragment>
	);
};
