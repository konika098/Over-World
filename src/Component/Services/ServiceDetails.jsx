import { useLoaderData, useParams } from "react-router-dom";
import { BiCheck } from "react-icons/bi";

const ServiceDetails = () => {
    const ServiceData = useLoaderData()
    const { id } = useParams()
    const ServiceInfo = ServiceData.find((ServiceIn) => ServiceIn.id == id)
    console.log(ServiceInfo)



    return (
        <>

            <div class="w-full min-h-screen bg-[url('https://i.ibb.co/Vt8QGD8/pexels-photo-7858743.webp')] bg-cover bg-center">
                <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
                    <div className="text-white container mx-auto">
                        <section class="text-white body-font">
                            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div class="max-w-[800px]  mb-10 md:mb-0">
                                    <img class="object-cover object-center w-full rounded" alt="hero" src={ServiceInfo.image} />
                                </div>
                                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h1 class="text-6xl mb-4 font-semibold  italic text-purple-400">{ServiceInfo.name} </h1>
                                    <p class="mb-8 leading-relaxed text-xl italic font-semibold text-white">{ServiceInfo.short_description}</p>
                                    <h1 className="text-white font-semibold text-3xl mb-3">The value you will get from us</h1>
                                    <ul className="text-white font-bold text-xl ">
                                        <p className="flex items-center">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span><li className="block ">{ServiceInfo.key_values[0]}</li>
                                        </p>


                                        <p className="flex items-center">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span><li className="block ">{ServiceInfo.key_values[1]}</li>
                                        </p>

                                        <p className="flex items-center">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span><li className="block ">{ServiceInfo.key_values[1]}</li>
                                        </p>


                                    </ul>

                                </div>
                            </div>
                        </section>
                        <div>
                            <h1 className="text-6xl mb-5 mt-6  underline">Description:</h1>
                            <p className="text-white text-2xl italic mb-3">{ServiceInfo.long_description}</p>

                        </div>
                    </div>

                    <section class="text-white body-font overflow-hidden">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-col text-center w-full mb-20">
                                <h1 class="sm:text-4xl text-4xl font-semibold title-font mb-2 text-white">Pricing</h1>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                                <div class="flex mx-auto border-2 border-purple-600 rounded overflow-hidden mt-6">
                                    <button class="py-1 px-4 bg-purple-600 text-white focus:outline-none">Monthly</button>
                                    <button class="py-1 px-4 text-white focus:outline-none">Annually</button>
                                </div>
                            </div>
                            <div class="flex flex-wrap -m-4">
                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                        <h2 class="text-sm tracking-widest title-font mb-1 text-white font-medium">START</h2>
                                        <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Vexillologist pitchfork
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Tumeric plaid portland
                                        </p>
                                        <p class="flex items-center text-white mb-6">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Mixtape chillwave tumeric
                                        </p>
                                        <button class="flex items-center mt-auto text-white bg-purple-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                        <p class="text-xs text-white mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                    </div>
                                </div>
                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                        <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                        <h2 class="text-sm tracking-widest title-font mb-1 text-white font-medium">PRO</h2>
                                        <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                            <span>$38</span>
                                            <span class="text-lg ml-1 font-normal text-white">/mo</span>
                                        </h1>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Vexillologist pitchfork
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Tumeric plaid portland
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Hexagon neutra unicorn
                                        </p>
                                        <p class="flex items-center text-white mb-6">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Mixtape chillwave tumeric
                                        </p>
                                        <button class="flex items-center mt-auto text-white bg-indigo-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                        <p class="text-xs text-white mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                    </div>
                                </div>
                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                        <h2 class="text-sm tracking-widest title-font mb-1 text-white font-medium">BUSINESS</h2>
                                        <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                            <span>$56</span>
                                            <span class="text-lg ml-1 font-normal text-white">/mo</span>
                                        </h1>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Vexillologist pitchfork
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Tumeric plaid portland
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Hexagon neutra unicorn
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Vexillologist pitchfork
                                        </p>
                                        <p class="flex items-center text-white mb-6">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Mixtape chillwave tumeric
                                        </p>
                                        <button class="flex items-center mt-auto text-white bg-purple-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                        <p class="text-xs text-white mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                    </div>
                                </div>
                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                        <h2 class="text-sm tracking-widest title-font mb-1 text-white font-medium">SPECIAL</h2>
                                        <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                            <span>$72</span>
                                            <span class="text-lg ml-1 font-normal text-white">/mo</span>
                                        </h1>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Vexillologist pitchfork
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Tumeric plaid portland
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Hexagon neutra unicorn
                                        </p>
                                        <p class="flex items-center text-white mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Vexillologist pitchfork
                                        </p>
                                        <p class="flex items-center text-white mb-6">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-purple-400 text-white rounded-full flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Mixtape chillwave tumeric
                                        </p>
                                        <button class="flex items-center mt-auto text-white bg-purple-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                        <p class="text-xs text-white mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>




        </>
    );
};

export default ServiceDetails;