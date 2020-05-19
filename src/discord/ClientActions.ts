import { UserStatus } from ".";

export default interface DiscordClientActions {
    getUserStatus(): Promise<UserStatus>;
}