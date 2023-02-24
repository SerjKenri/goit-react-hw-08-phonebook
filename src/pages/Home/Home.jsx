import { HomeContain, HomeTitle, Paragraph } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function Home() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <HomeContain>
            <HomeTitle>Phonebook</HomeTitle>
            {!isLoggedIn ? (
                <Paragraph>
                    I have created an application using React Create App. My
                    technology stack included React.js, React Router Dom, Redux
                    Toolkit, Redux Persist, ChakraUI, Axios and other relevant
                    libraries to ensure its success. I have also employed unit
                    and integration testing to ensure the application performs
                    optimally.
                    <br />
                    <br />
                    Please log in or register to fully explore the app.
                </Paragraph>
            ) : (
                <Paragraph>
                    I hope you enjoyed my application. Thank you for visiting
                    and rating my work.
                </Paragraph>
            )}
        </HomeContain>
    );
}
