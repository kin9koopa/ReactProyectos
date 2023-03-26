import React from 'react';
import { IFoto } from '../../models/IFoto';

interface IFotosProps {
	foto: IFoto;
}

export const Fotos: React.FC<IFotosProps> = ({ foto }) => {
	return (
		<div>
			<h3> {foto.title}</h3>
			<p></p>
			<p>{foto.thumbnailUrl}</p>
			<img src={foto.url} alt="Girl in a jacket" width="100" height="100"></img>
		</div>
	);
};
