import TikTokClient from '../../client';
import { tiktokEndpoints } from '../../config';
import { Query, QueryVideoResponseData } from './types';

export class TikTokVideo {
    private client: TikTokClient;

    constructor(client: TikTokClient) {
        this.client = client;
    }

    async query(query: Query, fields: string, start_date: string, end_date: string, max_count: number = 20, cursor?: number, search_id?: string, is_random?: boolean): Promise<QueryVideoResponseData> {
        const body = {
            query,
            fields,
            start_date,
            end_date,
            max_count,
            cursor,
            search_id,
            is_random
        };

        return this.client.fetchApi(tiktokEndpoints.videos.query, 'POST', body);
    }

    async queryComments(video_id: number, fields: string, max_count: number = 10, cursor?: number): Promise<QueryVideoResponseData> {
        const body = {
            video_id,
            max_count,
            cursor
        };

        const queryParams = new URLSearchParams({ fields }).toString();
        return this.client.fetchApi(`${tiktokEndpoints.videos.comments}?${queryParams}`, 'POST', body);
    }

}
