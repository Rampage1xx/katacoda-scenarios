import { AppContainer } from "./inversify.config";
import { ServerInstance } from "./serverInstance";

const serverInstance = AppContainer.get<ServerInstance>(ServerInstance);


serverInstance.Start();