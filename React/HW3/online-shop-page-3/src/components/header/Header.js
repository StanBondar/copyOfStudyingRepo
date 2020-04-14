import React from 'react';
import headerStyle from "./HeaderStyle";

function Header() {
    const style = headerStyle();
    return (
        <>
            <header className={style.header}>
                <h1>Hello Dolly!</h1>
            </header>
        </>
    )
}

export default Header;
