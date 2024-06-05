
import Swal from 'sweetalert2';
import './App.css';
import { useTranslation } from 'react-i18next';


function App() {

const handelAlert = () => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Запрос отправлен",
    showConfirmButton: false,
    timer: 2500
  });
}
const { t, i18n } = useTranslation();

const toggleLang = () => {
  i18n.changeLanguage(i18n.language === 'en' ? "ru" : 'en')
}
  return (
    <div className="App">
      <button onClick={handelAlert}> Alert</button>
      <h1> {t ("Welcome to React")}</h1>
      <button onClick={toggleLang}> 
        {i18n.language === 'en' ? "en" : 'ru'}
      </button>
    </div>
  );
}

export default App;
