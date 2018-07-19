import express from 'express';
import { inject, injectable } from "inversify";
import { DatabaseSQL } from "./DatabaseSQL";
import { Express } from "express-serve-static-core";

@injectable()
export class ServerInstance
{
	public readonly Application: Express;

	constructor (
		@inject(DatabaseSQL) private readonly _databaseSql: DatabaseSQL,
	)
	{
		this.Application = express();
	}

	public Start = async () =>
	{
		 await this._databaseSql.SyncDbAsync(true);

		this.Application.listen(3000, () =>
		{
			console.log(`Server listening on ${3000}`);
		});
	}
}