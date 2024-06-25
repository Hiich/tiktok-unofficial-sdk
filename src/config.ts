export const tiktokEndpoints = {
    hostname: "https://open.tiktokapis.com/v2",
    videos: {
        comments: "/research/video/comment/list/",
        query: "/research/video/query/",
    },
    user: {
        likes: "/research/user/liked_videos/",
        pinned: "/research/user/pinned_videos/",
        reposts: "/research/user/reposted_videos/",
        followers: "/research/user/followers/",
        following: "/research/user/following/",
        info: "/research/user/info/",
    },
    auth: {
        oauth2: "/oauth2/token",
    },
}