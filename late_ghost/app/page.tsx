"use client";

export default function Home() {

    // Placeholder
    const days = "127";
    const hours = "08";
    const minutes = "42";

    return (
        <main className="fixed inset-0 top-12 bg-[#f3ecdc] flex flex-col items-center justify-center">

          <section className=" text-center max-w-xl">

                <h2 className="text-3xl font-light text-[#464439]">
                    Bienvenido a Late Ghost: Capital
                </h2>

                <p className="mt-6 text-[#6b665c] leading-8">
                    La próxima exhibición es en
                </p>

            </section>


            <div className="flex gap-8">

                <div className="w-40 h-44 bg-[#bd684c] flex items-center justify-center">
                    <span className="text-7xl font-light text-[#f3ecdc]">
                        {days}
                    </span>
                </div>

                <div className="w-40 h-44 bg-[#bd684c] flex items-center justify-center">
                    <span className="text-7xl font-light text-[#f3ecdc]">
                        {hours}
                    </span>
                </div>

                <div className="w-40 h-44 bg-[#bd684c] flex items-center justify-center">
                    <span className="text-7xl font-light text-[#f3ecdc]">
                        {minutes}
                    </span>
                </div>

            </div>

            <div className="flex gap-[120px] mt-3 text-[#464439] text-sm tracking-[0.20em] uppercase">

                <span>Días</span>
                <span>Horas</span>
                <span>Minutos</span>

            </div>

            
        </main>
    );
}