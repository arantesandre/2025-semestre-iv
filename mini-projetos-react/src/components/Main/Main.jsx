import './Main.css';

// ====== Imports components ======
import Avisador from '../Avisador/Avisador';
import ConversorTemperatura from '../ConversorTemperatura/ConversorTemperatura';
import CronometroSimples from '../CronometroSimples/CronometroSimples';

const Main = () => {
    return (
        <main className='main-container'>
            <Avisador />
            <ConversorTemperatura />
            <CronometroSimples />
        </main>
    );
};

export default Main;

