import PropTypes from 'prop-types';
import {
    UserProfile,
    UserAvatar,
    UserStats,
    UserName,
    UserTag,
    UserLocation,
    UserLabel,
    UserQuantity,
} from './usercard.styled';

export const App = props => {
    const { avatar, name, tag, location, followers, views, likes } = props;
    return (
        <UserProfile>
            <div className="description">
                <UserAvatar src={avatar} alt="User avatar" />
                <UserName>{name}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </div>

            <UserStats>
                <li>
                    <UserLabel>Followers</UserLabel>
                    <UserQuantity>{followers}</UserQuantity>
                </li>
                <li>
                    <UserLabel>Views</UserLabel>
                    <UserQuantity>{views}</UserQuantity>
                </li>
                <li>
                    <UserLabel>Likes</UserLabel>
                    <UserQuantity>{likes}</UserQuantity>
                </li>
            </UserStats>
        </UserProfile>
    );
};
App.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
