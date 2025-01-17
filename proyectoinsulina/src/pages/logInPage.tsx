import { useState } from 'react';
import { LoginUser } from '../services/insulineServices';
import FormLogIn from '../components/molecule/formLogIn/formLogIn';
import { useLocalStorage } from '../services/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../modelsclass/login';

// LogInpage me trae el token de la persona y me lo almacena en el local storage
// Algunas paginas como const y otras como function, estandarizar
function LogInPage() {
    const [userLogged, setUserLogged] = useState(new LogIn('', ''));
    // Puntos y comas
    const [_getUserToken, setGetUserToken] = useLocalStorage('access_token', '');
    const navigate = useNavigate()

    const getToken = async () => {
        const userLogin = await LoginUser(userLogged);
        console.log(userLogin);
        if (userLogin === 401) {
            window.alert('Your password or user is incorrect');
        } else {
            setGetUserToken(userLogin);
            navigate("/Permissions");
        }
    }

    return (
        <FormLogIn
            userLogged={userLogged}
            setUserLogged={setUserLogged}
            getTokenButton={getToken}/>
    );
}

export default LogInPage;
