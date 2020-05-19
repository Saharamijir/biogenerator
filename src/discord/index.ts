import { Client, Activity, PresenceStatus } from "discord.js";

export interface UserStatus {
    activities: Activity[],
    isOnline: boolean
}

export class DiscordClientWrapper {
    #client = new Client();
    #userName: string;
    constructor(username: string) {
        this.#client.on("ready", () => {
            console.log("Successfully logged in");
        });
        this.#userName = username;
    }
    async init(token: string) {
        await this.#client.login(token);
    }
    async getUserStatus() {
        const user = await this.#client.users.fetch(this.#userName, false);
        return {
            activities: user.presence.activities,
            isOnline: isUserOnline(user.presence.status)
        };
    }
}

const isUserOnline = (status: PresenceStatus) => {
    switch (status) {
        case "dnd":
        case "idle":
        case "online":
            return true;
        case "offline":
            return false;
    }
};
