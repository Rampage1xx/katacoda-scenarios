declare namespace NodeJS
{
	export interface ProcessEnv
	{
		PORT: string;

		DATABASE_HOST: string;

		DATABASE_PORT: string

		DATABASE_USERNAME: string

		DATABASE_PASSWORD: string

		DATABASE_NAME: string
	}
}
