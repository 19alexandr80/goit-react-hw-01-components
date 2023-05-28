import styled from '@emotion/styled';

export const UserProfile = styled.div`
    max-width: 700px;
    text-align: center;
    padding: 20px;
    background-color: aliceblue;
`;
export const UserAvatar = styled.img`
    width: 200px;
    border-radius: 50%;
    background-color: bisque;
`;
export const UserStats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0px;
    padding-left: 0px;
    li {
        display: flex;
        flex-direction: column;
        background-color: blanchedalmond;
        width: 100%;
        height: 100%;
        border: 1.5px solid #000;
        padding: 20px;
        font-size: 20px;
    }
`;
export const UserName = styled.p`
    font-size: 32px;
`;
export const UserTag = styled.p`
    font-size: 20px;
`;
export const UserLocation = styled.p`
    font-size: 24px;
`;
export const UserLabel = styled.span`
    font-size: 20px;
`;
export const UserQuantity = styled.span`
    font-size: 20px;
`;
