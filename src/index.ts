import { DiscordClientWrapper } from "./discord";
import { Website } from "./site";

import fs from 'fs';
import Routing from "./site/Routing";
import path from "path";

(
    async () => {

        const client = new DiscordClientWrapper("239030086840483840");
        await client.init(fs.readFileSync(path.resolve(__dirname, "../token"), "utf-8"));
        const webserver = new Website({ getUserStatus: () => client.getUserStatus() })
        webserver.init(Routing, 3000);
    }
)();