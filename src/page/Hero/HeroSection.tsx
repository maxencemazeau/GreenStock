import React from 'react'

export default function HeroSection() {
    return(
        <section className="relative dark:bg-gray-800 dark:text-gray-100">
            <img src="banner.jpg" alt="" className="absolute inset-0 object-cover w-full h-full" />
            <div className="relative container flex flex-col justify-end p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-end">
                <div className="flex flex-col justify-center p-6 text-left rounded-sm lg:max-w-md xl:max-w-lg">
                    <h1 className="font-sans text-5xl text-white font-bold leading-none sm:text-6xl">Ressourcement Naturel
                    </h1>
                    <p className="font-sans mt-6 mb-8 text-lg text-white text-semibold sm:mb-12">Découvrez le pouvoir du bien-être avec nos vitamines et compléments alimentaires de qualité. Chez GreenStock, nous simplifions la santé, la rendant accessible à tous. Embarquez aujourd'hui sur un voyage naturel vers la vitalité.
                        <br className="hidden md:inline lg:hidden"></br>
                    </p>
                    <div className="flex flex-col justify-start space-y-4 sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a rel="noopener noreferrer" href="#" className="font-sans px-8 py-3 w-auto text-lg font-semibold rounded bg-amber-400 text-black">Magasiner</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
