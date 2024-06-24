
Here's an extensive `README.md` file for your TikTok SDK:

```markdown
# TikTok SDK

A simple SDK for interacting with the TikTok API. This SDK provides methods to fetch user information, liked videos, pinned videos, reposted videos, followers, and following lists.

## Features

- Fetch user info
- Fetch user's liked videos
- Fetch user's pinned videos
- Fetch user's reposted videos
- Fetch user's followers
- Fetch user's following

## Installation

You can install the SDK via npm:

```sh
npm install tiktok-sdk
```

## Usage

### Import the SDK

```typescript
import TikTokClient from 'tiktok-sdk';
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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This SDK is not affiliated with or endorsed by TikTok. It is a simple wrapper to facilitate interaction with the TikTok API.
```