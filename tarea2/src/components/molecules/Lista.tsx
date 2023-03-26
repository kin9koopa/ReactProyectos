import { IUser } from '../../models/IUser';
import { Contenido } from './Contenido';

export interface IListaProps {
	usuarios: IUser[];
}

export const Lista: React.FC<IListaProps> = ({ usuarios }) => {
	return (
		<ul>
			<ul>
				{usuarios.map((usuarios) => (
					<Contenido key={`${usuarios.id}`} usuario={usuarios} />
				))}
			</ul>
		</ul>
	);
};
