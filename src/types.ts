export interface Video {
    id: number; // int64
    create_time: number; // int64
    username: string;
    region_code: string;
    video_description: string;
    music_id: number; // int64
    like_count: number; // int64
    comment_count: number; // int64
    share_count: number; // int64
    view_count: number; // int64
    hashtag_names: string[]; // list<string>
}

export interface RepostedVideosData {
    user_reposted_videos: Video[]; // list<Video>
    cursor: number; // int64
    has_more: boolean; // bool
}

export interface UserInfo {
    display_name: string;
    bio_description: string;
    avatar_url: string;
    is_verified: boolean;
    following_count: number;
    follower_count: number;
    video_count: number;
    likes_count: number;
}

export interface CommentObject {
    id: number; // int
    text: string;
    video_id: number; // int
    parent_comment_id?: number; // int (optional)
    like_count: number; // int
    reply_count: number; // int
    create_time: number; // int
}

export interface ResearchVideoCommentsData {
    comments: CommentObject[];
    cursor: number; // int64
    has_more: boolean; // bool
}

export interface UserLikedVideos {
    user_liked_videos: Video[]; // list<Video>
    cursor: number; // int64
    has_more: boolean; // bool
}

export interface UserPinnedVideos {
    user_pinned_videos: Video[]; // list<Video>
}

export interface UserRepostedVideos {
    user_reposted_videos: Video[]; // list<Video>
    cursor: number; // int64
    has_more: boolean; // bool
}

export interface UserFollowers {
    user_followers: UserInfo[]; // list<UserInfo>
    cursor: number; // int64
    has_more: boolean; // bool
}

export interface UserFollowing {
    user_following: UserInfo[]; // list<UserInfo>
    cursor: number; // int64
    has_more: boolean; // bool
}

export type UserInfoFields = 'display_name' | 'bio_description' | 'avatar_url' | 'is_verified' | 'follower_count' | 'following_count' | 'likes_count' | 'video_count';
export type UserFollowersFields = 'id' | 'username' | 'display_name' | 'avatar_url' | 'follower_count' | 'following_count';
export type VideoCommentFields = 'id' | 'video_id' | 'text' | 'like_count' | 'reply_count' | 'parent_comment_id' | 'create_time';
export type UserVideoFields = 'id' | 'create_time' | 'username' | 'region_code' | 'video_description' | 'music_id' | 'like_count' | 'comment_count' | 'share_count' | 'view_count' | 'hashtag_names';
