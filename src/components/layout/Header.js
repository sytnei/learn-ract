import Navigation from "./Navigation";

const Header = ({ username, isLogged, setIsLogged }) => {
 
    return (
        <>
            <div>
                <p className="header">Cursuri {isLogged ? username : ''}</p>
            </div>

            <Navigation isLogged={isLogged} setIsLogged={setIsLogged} />

        </>

    );
}

export default Header;