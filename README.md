# TikTok SDK

A simple SDK for interacting with the TikTok API. This SDK provides methods to fetch user information, liked videos, pinned videos, reposted videos, followers, following lists, and querying videos.

## Features

- Fetch user info
- Fetch user's liked videos
- Fetch user's pinned videos
- Fetch user's reposted videos
- Fetch user's followers
- Fetch user's following
- Query videos

## Installation

You can install the SDK via npm:

```sh
npm install tiktok-unofficial-sdk
```

## Usage

### Import the SDK

```typescript
import TikTokClient from 'tiktok-unofficial-sdk';
```

### Initialize the Client

Create an instance of the `TikTokClient`. Ensure you replace `YOUR_CLIENT_ID_HERE` and `YOUR_CLIENT_SECRET_HERE` with your actual TikTok API credentials.

```typescript
const client = new TikTokClient();
```

### Fetch User Information

To fetch user information, use the `getUserInfo` method. You need to specify the username and the fields you want to retrieve.

```typescript
const username = 'test_username';
const userInfoFields = ['display_name', 'bio_description', 'avatar_url', 'is_verified', 'follower_count', 'following_count', 'likes_count', 'video_count'];

const userInfo = await client.user.getUserInfo(username, userInfoFields);
console.log(userInfo);
```

### Fetch User's Liked Videos

To fetch a user's liked videos, use the `get` method with the type 'likes'. You need to specify the username, the fields you want to retrieve, and optionally the maximum count and cursor for pagination.

```typescript
const userVideoFields = ['id', 'create_time', 'username', 'region_code', 'video_description', 'music_id', 'like_count', 'comment_count', 'share_count', 'view_count', 'hashtag_names'];

const likedVideos = await client.user.get('likes', username, userVideoFields);
console.log('Liked Videos:', likedVideos);
```

### Fetch User's Pinned Videos

To fetch a user's pinned videos, use the `get` method with the type 'pinned'.

```typescript
const pinnedVideos = await client.user.get('pinned', username, userVideoFields);
console.log('Pinned Videos:', pinnedVideos);
```

### Fetch User's Reposted Videos

To fetch a user's reposted videos, use the `get` method with the type 'reposted'.

```typescript
const repostedVideos = await client.user.get('reposts', username, userVideoFields);
console.log('Reposted Videos:', repostedVideos);
```

### Fetch User's Followers

To fetch a user's followers, use the `get` method with the type 'followers'.

```typescript
const userFollowersFields = ['id', 'username', 'display_name', 'avatar_url', 'follower_count', 'following_count'];

const followers = await client.user.get('followers', username, userFollowersFields);
console.log('Followers:', followers);
```

### Fetch User's Following

To fetch a user's following, use the `get` method with the type 'following'.

```typescript
const following = await client.user.get('following', username, userFollowersFields);
console.log('Following:', following);
```

### Query Videos

To query videos using the TikTok Research API, use the `query` method from the `Videos` module.

#### Parameters:

- `query`: Query object containing the conditions.
- `fields`: A comma-separated string of fields to retrieve.
- `start_date`: The lower bound of video creation time in UTC (YYYYMMDD).
- `end_date`: The upper bound of video creation time in UTC (YYYYMMDD).
- `max_count` (optional): The number of videos in response (default: 20, max: 100).
- `cursor` (optional): Retrieve video results starting from the specified index.
- `search_id` (optional): The unique identifier assigned to a cached search result.
- `is_random` (optional): Whether to return results in a random order.

#### Example:

```typescript
const query = {
  and: [
    { field_name: 'region_code', operation: 'IN', field_values: ['JP', 'US'] },
    { field_name: 'hashtag_name', operation: 'EQ', field_values: ['animal'] }
  ],
  not: [
    { field_name: 'video_length', operation: 'EQ', field_values: ['SHORT'] }
  ]
};

const fields = 'id,video_description,create_time';
const start_date = '20230101';
const end_date = '20230115';

const response = await client.videos.query(query, fields, start_date, end_date);
console.log(response);
```

## API Reference

### TikTokClient

The main class for interacting with the TikTok API.

#### Constructor

```typescript
new TikTokClient()
```

### Methods

#### fetchApi

A generic method to fetch data from the TikTok API.

```typescript
fetchApi(endpoint: string, method: string = 'GET', body: any = null): Promise<any>
```

### TikTokUser

A class for user-related methods.

#### getUserInfo

Fetch user information.

```typescript
getUserInfo(username: string, fields: UserInfoFields[]): Promise<any>
```

#### get

Fetch user's liked, pinned, reposted videos, followers, or following.

```typescript
get(type: 'likes' | 'pinned' | 'reposted' | 'followers' | 'following', username: string, fields: UserVideoFields[] | UserFollowersFields[], maxCount?: number, cursor?: number | null): Promise<any>
```

### Videos

A class for video-related methods.

#### query

Query videos using the TikTok Research API.

```typescript
query(query: Query, fields: string, start_date: string, end_date: string, max_count?: number, cursor?: number, search_id?: string, is_random?: boolean): Promise<QueryVideoResponseData>
```

### Query Video Comments

To query video comments using the TikTok Research API, use the `queryComments` method from the `Videos` module.

#### Parameters:

- `video_id`: The ID of the video to query comments for.
- `fields`: A comma-separated string of fields to retrieve.
- `max_count` (optional): The number of comments in response (default: 10, max: 100).
- `cursor` (optional): The starting index of the comments in the response.

#### Example:

```typescript
const video_id = 1234567890123456789;
const fields = 'id,like_count,create_time,text,video_id,parent_comment_id';

const comments = await client.videos.queryComments(video_id, fields, 50, 150);
console.log(comments);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This SDK is not affiliated with or endorsed by TikTok. It is a simple wrapper to facilitate interaction with the TikTok API.
