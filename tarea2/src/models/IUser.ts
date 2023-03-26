import { IAlbum } from './IAlbum';
import { IFoto } from './IFoto';

export interface IUser {
	id: number;
	name: string;
	album?: IAlbum;
	foto?: IFoto[];
}
