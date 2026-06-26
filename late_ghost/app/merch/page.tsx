"use client";

const mockMerch = [
    {
        id: 1,
        title: "Taza begginer",
        image_url: "late ghost-taza.png",
    },
    {
        id: 2,
        title: "Invitacion",
        image_url: "late ghost-carta.png",
    },
    {
        id: 3,
        title: "gorro de bienvenida",
        image_url: "late ghost-gorros.png",
    }
];

export default function Merch() {
    return (
        <main className="fixed inset-0 top-12 bg-[#f3ecdc] overflow-auto">

            <section className="max-w-7xl mx-auto px-10 py-10">

                <h1 className="text-4xl font-light text-[#464439] mb-10">
                    Merch
                </h1>

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-10
                ">

                    {mockMerch.map((item) => (

                        <article
                            key={item.id}
                            className="flex flex-col items-center"
                        >

                            <img
                                src={`/assets/merch/${item.image_url}`}
                                alt={item.title}
                                className="
                                    w-full
                                    aspect-square
                                    object-contain
                                    bg-[#c9c0b1]
                                    p-6
                                    shadow-[18px_10px_28px_rgba(0,0,0,0.15)]
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                "
                            />

                            <h2 className="mt-5 text-lg font-light text-[#464439]">
                                {item.title}
                            </h2>

                        </article>

                    ))}

                </div>

            </section>

        </main>
    );
}