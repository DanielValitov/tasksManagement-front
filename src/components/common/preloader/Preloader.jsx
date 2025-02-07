import preloaderGif from '../../../assets/loadinggif.gif'; // Исправлен импорт

const Preloader = () => {
    return (
        <img className="preloader" src={preloaderGif} alt="Loading..." />
    );
}

export default Preloader;
