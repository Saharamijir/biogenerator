import DiscordClientActions from "../discord/ClientActions";
import { Express } from "express";

export default (clinet: Express, discordHandle: DiscordClientActions) => {
    clinet.get("/", (_, res) => res.json({ message: "go to /profile, to get profile image" }));
    clinet.get("/profile", async (_, res) => res.json(await discordHandle.getUserStatus()));
}