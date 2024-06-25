export interface Video {
    id: number;
    create_time: number;
    username: string;
    region_code: string;
    video_description: string;
    music_id: number;
    like_count: number;
    comment_count: number;
    share_count: number;
    view_count: number;
    hashtag_names: string[];
}

export interface UserLikedVideos {
    user_liked_videos: Video[];
    cursor: number;
    has_more: boolean;
}

export interface UserPinnedVideos {
    user_pinned_videos: Video[];
}

export interface UserRepostedVideos {
    user_reposted_videos: Video[];
    cursor: number;
    has_more: boolean;
}

export type UserVideoFields = 'id' | 'create_time' | 'username' | 'region_code' | 'video_description' | 'music_id' | 'like_count' | 'comment_count' | 'share_count' | 'view_count' | 'hashtag_names';

export type QueryVideoResponseData = {
    videos: Video[];
    cursor: number;
    has_more: boolean;
    search_id: string;
};

export type Condition = {
    field_name: string;
    operation: "EQ" | "IN" | "GT" | "GTE" | "LT" | "LTE";
    field_values: string[];
};

export type Query = {
    and?: Condition[];
    or?: Condition[];
    not?: Condition[];
};
