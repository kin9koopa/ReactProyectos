import React, { Component } from 'react';

export class ListaEstudiantesClass extends Component {
	render() {
		const { listaEstudiantes } = this.props;
		return (
			<React.Fragment>
				{listaEstudiantes.map((estudiante) => (
					<p key={estudiante.nombre} className="class">
						{estudiante.nombre} {estudiante.apellido} | {estudiante.edad}
					</p>
				))}
			</React.Fragment>
		);
	}
}
