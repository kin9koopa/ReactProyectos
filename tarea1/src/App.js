import { ListaEstudiantes } from './ListaEstudiantes';
import { ListaEstudiantesClass } from './ListaEstudiantesClass';

const listaEstudiantes = [
	{
		nombre: 'José',
		apellido: 'Pérez',
		edad: 20,
	},
	{
		nombre: 'Juan',
		apellido: 'Pérez',
		edad: 20,
	},
	{
		nombre: 'Luis',
		apellido: 'Pérez',
		edad: 20,
	},
	{
		nombre: 'Cristian',
		apellido: 'Pérez',
		edad: 20,
	},
	{
		nombre: 'Fiorella',
		apellido: 'Pérez',
		edad: 20,
	},
	{
		nombre: 'Yensy',
		apellido: 'Pérez',
		edad: 20,
	},
];

function App() {
	return (
		<div className="lista">
			<div>
				<ListaEstudiantes listaEstudiantes={listaEstudiantes} />
			</div>
			<div>
				<ListaEstudiantesClass listaEstudiantes={listaEstudiantes} />
			</div>
		</div>
	);
}

export default App;
