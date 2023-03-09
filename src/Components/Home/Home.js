import { useSelector, useDispatch } from "react-redux";
import {replacemail} from '../../store/MailAction';

const Home =() =>{
    const dispatch = useDispatch()
    const isLoggedIn =useSelector(state=>state.auth.isLoggedin);
    const firstTime = useSelector(state=>state.mail.firstTime);
    console.log(isLoggedIn);
    console.log(firstTime);

    if(isLoggedIn && firstTime){
      const loggedEmail = localStorage.getItem('email');
      const emailUrl = loggedEmail.replace("@","").replace(".","");
     dispatch(replacemail(emailUrl , loggedEmail));
    }
    return(
        <h1>Welcome to Mail box</h1>
    )

}
export default Home;