import axios from 'axios';
import React, { useEffect } from 'react';
import { IAlbum } from '../../models/IAlbum';
import { IFoto } from '../../models/IFoto';
import { IUser } from '../../models/IUser';
import { Lista } from '../molecules/Lista';

export const ListaWrapper = () => {
	const [publicaciones, setPublicaciones] = React.useState<IUser[]>([]);
	const [cargando, setCargando] = React.useState(true);

	const traerContenido = async () => {
		try {
			const [usuarios, album, fotos] = await Promise.all([
				axios.get('https://jsonplaceholder.typicode.com/users'),
				axios.get('https://jsonplaceholder.typicode.com/albums'),
				axios.get('https://jsonplaceholder.typicode.com/photos'),
			]);

			const contentUsuariosYAlbums = (usuarios.data as IUser[]).map(
				(usuario) => {
					const creadorAlbum = (album.data as IAlbum[]).find(
						(album) => album.userId === usuario.id
					);

					const fotosDeAlbums = (fotos.data as IFoto[]).filter(
						(foto) => foto.albumId === usuario.id
					);

					return {
						...usuario,
						album: creadorAlbum,
						foto: fotosDeAlbums,
					};
				}
			);

			setPublicaciones(contentUsuariosYAlbums);
			setCargando(false);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		traerContenido();
	}, []);

	if (cargando) {
		return <p>Cargando...</p>;
	}

	return <Lista usuarios={publicaciones} />;
};
