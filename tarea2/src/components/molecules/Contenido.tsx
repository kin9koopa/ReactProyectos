import { IUser } from '../../models/IUser';
import { Fotos } from './Fotos';

interface IContenidoProps {
	usuario: IUser;
}

export const Contenido: React.FC<IContenidoProps> = ({ usuario }) => {
	const renderFotos = () => {
		if (!usuario.foto) {
			return null;
		}

		return usuario.foto.map((foto) => {
			return <Fotos key={foto.id} foto={foto} />;
		});
	};

	return (
		<li>
			<p># {usuario.id}</p>
			<h2>{usuario.album?.title}</h2>
			<h2>{usuario.name}</h2>
			{renderFotos()}
		</li>
	);
};
