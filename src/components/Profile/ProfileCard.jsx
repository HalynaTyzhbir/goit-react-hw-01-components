import PropTypes from 'prop-types';
import { Profile, Description, Avatar,  Stats, Item, Name, Quantity } from './ProfileCard.styled';

export const ProfileCard = ({ userInfo: { avatar, username, tag, location, stats: { followers, views, likes } } }) => {
    return (
        <Profile>
            <Description>
                <Avatar src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>

            <Stats>
                <Item>
                    <span>Followers</span>
                    <Quantity>{followers}</Quantity>
                </Item>
                <Item>
                    <span>Views</span>
                    <Quantity>{views}</Quantity>
                </Item>
                <Item>
                    <span>Likes</span>
                    <Quantity>{likes}</Quantity>
                </Item>
            </Stats>
        </Profile>
    );
};

ProfileCard.propTypes = {
    userInfo: PropTypes.shape({
        avatar:PropTypes.string.isRequired,
        username:PropTypes.string.isRequired,
        tag:PropTypes.string.isRequired,
        location:PropTypes.string.isRequired,
        stats: PropTypes.shape(
            {
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired,
            }).isRequired,
    }).isRequired
};
