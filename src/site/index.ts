import DiscordClientActions from "../discord/ClientActions";
import express, {Express } from "express";

export class Website {
    #discordHandle: DiscordClientActions;
    #client: Express;
    constructor(discordHandle: DiscordClientActions) {
        this.#discordHandle = discordHandle;
        this.#client = express();
    }

    init(expressConfig: (clinet: Express, discordHandle: DiscordClientActions) => void, port: number) {
        expressConfig(this.#client, this.#discordHandle);
        this.#client.listen(port);
    }
}