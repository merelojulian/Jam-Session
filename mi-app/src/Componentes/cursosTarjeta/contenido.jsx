import React from "react";



function ContList() {
    const contenidos = ['Diseño UX/UI',
        "Diseño UX/UI Avanzado",
        "UX Writing",
        "UX Research"];
    const listItems = contenidos.map((item) =>
        <li>{item}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}



export default ContList;

