import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
    LoginFormS,
    LoginLabel,
    LoginInput,
    LoginBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const { email, password } = {
            email: form.elements.email.value,
            password: form.elements.password.value,
        };
        dispatch(logIn({ email, password }));
        form.reset();
    };

    return (
        <LoginFormS onSubmit={handleSubmit} autoComplete="off">
            <LoginLabel>
                Email
                <LoginInput
                    type="email"
                    name="email"
                    placeholder="Enter email"
                />
            </LoginLabel>
            <LoginLabel>
                Password
                <LoginInput
                    type="password"
                    name="password"
                    placeholder="Enter password"
                />
            </LoginLabel>

            <LoginBtn type="submit">Log In</LoginBtn>
            <div></div>
        </LoginFormS>
    );
};
