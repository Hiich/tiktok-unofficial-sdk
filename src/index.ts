import { tiktokEndpoints } from "./config";
import { TikTokUser } from "./modules/user";
import { TikTokVideo } from "./modules/video";

class TikTokClient {
    private baseUrl: string;
    private accessToken: string;
    public user: TikTokUser;
    public video: TikTokVideo;

    constructor() {
        if (!process.env.TIKTOK_CLIENT_ID || !process.env.TIKTOK_CLIENT_SECRET) {
            throw new Error('Environment variables TIKTOK_CLIENT_ID and TIKTOK_CLIENT_SECRET must be set');
        }

        this.baseUrl = tiktokEndpoints.hostname;
        this.accessToken = '';
        this.user = new TikTokUser(this);
        this.video = new TikTokVideo(this);
        this.initialize();
    }

    private async initialize() {
        try {
            this.accessToken = await this.fetchAuthCode();
        } catch (error) {
            console.error('Error initializing TikTokClient:', error);
        }
    }

    private async fetchAuthCode(): Promise<string> {
        const body = {
            grant_type: 'client_credential',
            client_id: process.env.TIKTOK_CLIENT_ID,
            client_secret: process.env.TIKTOK_CLIENT_SECRET
        };

        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch(`${this.baseUrl}${tiktokEndpoints.auth.oauth2}`, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data.access_token;
        } catch (error) {
            throw new Error(`Fetch error: ${error}`);
        }
    }

    public async fetchApi(endpoint: string, method: string = 'GET', body: any = null): Promise<any> {
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            }
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            throw new Error(`Fetch error: ${error}`);
        }
    }

    public createEndpointAndBody(username: string, fields: string[], maxCount?: number, cursor?: number | null) {
        const queryParams = new URLSearchParams({ fields: fields.join(',') }).toString();
        const body: any = { username };

        if (maxCount) {
            body.max_count = maxCount;
        }

        if (cursor !== null) {
            body.cursor = cursor;
        }

        return { queryParams, body };
    }
}

export default TikTokClient;
