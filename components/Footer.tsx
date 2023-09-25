import React from "react";

const Footer = () => {
    return(<div>
        
        
<footer className="bg-white">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="acercade" className="mr-4 hover:underline md:mr-6 ">Acerca de nosotros</a>
                </li>
                <li>
                    <a href="politicasdeprivacidad" className="mr-4 hover:underline md:mr-6">Política De Privacidad</a>
                </li>
                <li>
                    <a href="terminoslegales" className="mr-4 hover:underline md:mr-6 ">Términos Legales</a>
                </li>
                
            </ul>
          
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Montemorelos, N.L. México C.P. 67600 </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Hacienda Del Fraile</a>. </span>
      
    
    </div>
</footer>


        
        
        </div>)
}

export default Footer