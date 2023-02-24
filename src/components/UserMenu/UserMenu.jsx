import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import {
    MenuContainer,
    Paragraph,
    UserName,
    MenuButton,
} from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <MenuContainer>
            <Paragraph>
                Welcome, <UserName>{user.name}</UserName>
            </Paragraph>
            <MenuButton type="button" onClick={() => dispatch(logOut())}>
                Logout
            </MenuButton>
        </MenuContainer>
    );
};
