import { Container } from 'inversify';
import { DatabaseSQL } from "./DatabaseSQL";
import { ServerInstance } from "./serverInstance";


const AppContainer = new Container();

AppContainer.bind(ServerInstance).toSelf().inSingletonScope();
AppContainer.bind(DatabaseSQL).toSelf().inSingletonScope();


export { AppContainer };