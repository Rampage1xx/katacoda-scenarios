import Sequelize, { INTEGER, Model, Sequelize as SequelizeType } from 'sequelize';
import { injectable } from "inversify";
import * as Bluebird from "bluebird";


export class TableFactory
{


	public readonly TestTable: Model<any, any>;

	constructor (
		private readonly _sequelize: SequelizeType,
	)
	{
		//@ts-ignore
		this.TestTable = this.TestTableBuilder();
	}


	private TestTableBuilder = async () =>
	{
		return this._sequelize.define<any, any>("test_table", {
			id: {
				primaryKey   : true,
				autoIncrement: true,
				type         : INTEGER,
				allowNull    : false,
			},
		});

	};

}

@injectable()
export class DatabaseSQL
{
	public readonly Connection: SequelizeType;

	private readonly _tableFactory: TableFactory;

	constructor ()
	{
		this.Connection = new Sequelize(process.env.DATABASE_NAME as string, process.env.DATABASE_USERNAME as string, process.env.DATABASE_PASSWORD as string, {
			port   : parseInt(process.env.DATABASE_PORT as string),
			dialect: "postgres",
			host   : process.env.DATABASE_HOST as string,
		});

		this._tableFactory = new TableFactory(this.Connection);

	}

	public SyncDbAsync = async (force: boolean) =>
	{
		await this.Connection.sync({ force });
	};
}