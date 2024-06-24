import TikTokClient from "../client";
import { tiktokEndpoints } from "../config";
import { UserFollowersFields, UserInfoFields, UserVideoFields } from "../types";

export class TikTokUser {
    private client: TikTokClient;

    constructor(client: TikTokClient) {
        this.client = client;
    }

    public async get(type: keyof typeof tiktokEndpoints.user, username: string, fields: UserVideoFields[] | UserFollowersFields[] | UserInfoFields[], maxCount: number = 50, cursor: number | null = null): Promise<any> {
        const endpoint = tiktokEndpoints.user[type];
        let payload: { queryParams: string, body: any };

        if (type === "info")
            payload = this.client.createEndpointAndBody(username, fields);
        else
            payload = this.client.createEndpointAndBody(username, fields, maxCount, cursor);

        return this.client.fetchApi(`${endpoint}?${payload.queryParams}`, 'POST', payload.body);
    }
}

export default TikTokUser;
