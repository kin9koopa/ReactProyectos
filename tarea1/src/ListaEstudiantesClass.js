import React, { Component } from 'react';

export class ListaEstudiantesClass extends Component {
	render() {
		const { listaEstudiantes } = this.props;
		return (
			<React.Fragment>
				{listaEstudiantes.map((estudiante) => (
					<ul key={estudiante.nombre} className="class">
						<li>
							{estudiante.nombre} {estudiante.apellido} | {estudiante.edad}
						</li>
					</ul>
				))}
			</React.Fragment>
		);
	}
}
