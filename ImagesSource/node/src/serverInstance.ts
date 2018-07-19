import express from 'express';
import { inject, injectable } from "inversify";
import { DatabaseSQL } from "./DatabaseSQL";

@injectable()
export class ServerInstance
{
	constructor (
		public readonly Application = express(),
		@inject(DatabaseSQL) private readonly _databaseSql: DatabaseSQL,
	)
	{
	}

	public Start ()
	{
		this.Application.listen(3000, () =>
		{
			console.log(`Server listening on ${3000}`);
		});
	}
}