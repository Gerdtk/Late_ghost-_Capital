//holder de imagenes. tsx

import ButtonL from "./buttons_l";


interface Arte {
    art: {
        id: number;
        title: string;
        description: string;
        image_url: string;
    };
}

export default function Holder({art}: Arte){
    return (
        <div className="w-full h-full bg-[#f3ecdc]
        flex items-center justify-center p-6">
            <div className="w-[100%] h-[100%] flex 
            flex-col bg-transparent rounded-md
            shadow-[inset_0_0_80px_rgba(0,0,0,0.10)]">
                <div className="flex items-center justify-center w-full h-full">
                    <img 
                        src = {`/assets/arts/${art.image_url}`}
                        alt={art.title}
                        className="
                            max-w-[80hm]
                            max-h-[75vh]
                            object-contain
                            shadow-[10px_10px_rgba(0,0,0,0.09)]" 
                    />
                </div>
                <div className="mt-4 bg-[#f3ecdc] text-[#464439] 
                text-xl border border-[#464439] rounded-xl">
                    <h2> Nombre de la obra: {art.title}</h2>
                    <div className="text-end"><ButtonL text="Adquirir" filled/></div>
                </div>            
            </div>
        </div>
    );
}