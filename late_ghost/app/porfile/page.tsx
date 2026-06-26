export default function Porfile() {
    return (
        <main className="fixed inset-0 top-12 bg-[#f3ecdc] flex justify-center items-center">

            <section className="
                w-[80vw]
                max-w-5xl
                h-[80vh]
                bg-[#f8f3e8]
                rounded-sm
                shadow-inner
                p-12
                flex
                flex-col
            ">

                <h1 className="text-4xl font-light text-center text-[#464439]">
                    Perfil
                </h1>

                <div className="flex flex-col items-center mt-8">

                    <div className="
                        w-28
                        h-28
                        rounded-full
                        border-2
                        border-[#bd684c]
                        bg-[#c9c0b1]
                    " />

                    <h2 className="mt-6 text-2xl text-[#464439]">
                        Late Ghost Collector
                    </h2>

                    <p className="mt-2 italic text-[#65604f]">
                        Toda colección comienza con una sola obra.
                    </p>

                </div>

                <div className="mt-16">

                    <h3 className="text-xl text-[#464439] mb-6">
                        Colección
                    </h3>

                    <div className="flex gap-6">

                        {[1,2,3].map((item)=>(
                            <div
                                key={item}
                                className="
                                    w-36
                                    h-48
                                    bg-[#d6cec1]
                                    border
                                    border-[#bd684c]
                                "
                            />
                        ))}

                    </div>

                </div>

                <div className="mt-auto flex justify-end">

                    <button className="
                        px-8
                        py-2
                        border
                        border-[#bd684c]
                        rounded-full
                        text-[#464439]
                    ">
                        Editar Perfil
                    </button>

                </div>

            </section>

        </main>
    );
}