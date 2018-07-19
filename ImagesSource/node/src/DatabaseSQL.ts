import Sequelize, { Sequelize as SequelizeType } from 'sequelize';
import { injectable } from "inversify";


@injectable()
export class DatabaseSQL
{
	public readonly Connection: SequelizeType;

	constructor ()
	{
		this.Connection = new Sequelize("", "", "", {
			port: 5432
		});

	}
}