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

export interface UserFollowers {
    user_followers: UserInfo[];
    cursor: number;
    has_more: boolean;
}

export interface UserFollowing {
    user_following: UserInfo[];
    cursor: number;
    has_more: boolean;
}

export type UserInfoFields = 'display_name' | 'bio_description' | 'avatar_url' | 'is_verified' | 'follower_count' | 'following_count' | 'likes_count' | 'video_count';

export type UserFollowersFields = 'id' | 'username' | 'display_name' | 'avatar_url' | 'follower_count' | 'following_count';
