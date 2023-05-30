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
} from 'components/usercard/usercard.styled';

export const Profile = ({
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
}) => {
    return (
        <UserProfile>
            <div>
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
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
