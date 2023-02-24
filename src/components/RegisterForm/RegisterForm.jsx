import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegForm, RegBtn, RegLabel, RegInput } from './RegisterForm.styled';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const { name, email, password } = form.elements;
        dispatch(
            register({
                name: name.value,
                email: email.value,
                password: password.value,
            })
        );
        form.reset();
    };

    return (
        <RegForm onSubmit={handleSubmit} autoComplete="off">
            <RegLabel>
                Username
                <RegInput
                    type="text"
                    name="name"
                    placeholder="Enter user name"
                />
            </RegLabel>
            <RegLabel>
                Email
                <RegInput type="email" name="email" placeholder="Enter email" />
            </RegLabel>
            <RegLabel>
                Password
                <RegInput
                    type="password"
                    name="password"
                    placeholder="Enter password"
                />
            </RegLabel>
            <RegBtn type="submit">Register</RegBtn>
        </RegForm>
    );
};
