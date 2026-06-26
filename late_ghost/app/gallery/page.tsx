"use client";


import Holder from "../componnets/holder";
import Image from "next/image";
import { useState, useEffect } from "react";



const mockArts = [
    {id: 1, title: 'Invierno', description: 'Invierno en el desierto', image_url: 'buho-cubista.png'},
    {id: 2, title: 'Verano', description: 'Invierno en el desierto', image_url: 'buho-impresionista.png'},
    {id: 3, title: 'Verano-arena', description: 'Invierno en el desierto', image_url: 'buho-Sollora.png'},
    {id: 4, title: 'Primavera', description: 'Invierno en el desierto', image_url: 'buho-Vangogh.png'},
    {id: 5, title: 'Insdiscriminado', description: 'discriminacion onirica', image_url: 'perro-buho-Varo.png'},
    {id: 6, title: 'Trabajo', description: 'Trabajo incansable', image_url: 'campecina-Vangogh.png'},

]



export default function Gallery(){

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentIndex((prev) => (prev + 1) % mockArts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentArt = mockArts[currentIndex];

    return(
        <>
        <main className="fixed inset-0 top-12 bg-[#f3ecdc] flex items-center justify-center p-0">
            <Holder art={currentArt}/>
        </main>
        </>
    );
}