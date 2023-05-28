import styled from '@emotion/styled';

export const TitleFriends = styled.h2`
    font-size: 40px;
`;
export const AvatarFriends = styled.img`
    width: 120px;
    border-radius: 50%;
    background-color: bisque;
`;
export const NameFriends = styled.p`
    font-size: 24px;
`;
export const FriendsList = styled.ul`
    list-style: none;
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }
`;
export const StatusFriend = styled.span`
    width: 20px;
    height: 20px;
    gap: 20px;
    border: 3px outset;
    border-radius: 50%;
    ${prop => {
        return prop.isOnline
            ? 'background-color: green'
            : 'background-color: red';
    }}
`;
