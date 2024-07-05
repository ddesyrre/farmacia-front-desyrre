import React from 'react';
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import ListaCategoria from '../../components/categoria/listaCategorias/ListaCategorias'



function Home() {
    return (
        <>
            <div class="bg-white pb-8">
                <div class="p-4 pb-0 bg-third-bg sm:max-w-7xl mx-auto">
                    <div class="gap-6 grid-cols-2 sm:flex sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:items-center sm:justify-between bg-white p-6">
                        <div class="grid justify-items-center text-center">
                            <img class="w-32" src="https://png.pngtree.com/png-clipart/20230801/original/pngtree-facade-pharmacy-store-with-a-signboard-picture-image_7734898.png" alt="" />
                            <div class="text-xl font-bold">Sua farmácia de confiança perto de você</div>
                            <div class="">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing elit dolor sit a amet, conse adipisci</div>
                        </div>
                        <div class="grid justify-items-center">
                            <img class="w-32" src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-drug-capsule-pill-from-prescription-in-drugstore-pharmacy-for-treatment-health-png-image_12466918.png" alt="" />
                            <div class="sm:flex text-xl font-bold">Seu medicamento em poucos cliques </div>
                            <div class="sm:flex sm:text-center">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing elit dolor sit a amet, conse adipisci</div>
                        </div>

                    </div>
                </div>
            </div>



            <ListaCategoria/>
        </>
    );
}

export default Home;