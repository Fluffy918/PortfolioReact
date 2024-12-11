import T1 from "../assets/T1.png"
import T2 from "../assets/T2.jpg"
import T3 from "../assets/T3.png"
import T4 from "../assets/T4.jpg"

function Testimonial() {
    return (
       <div className="flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row">
        <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-x1 flex items-center gap-6  dark:highlight-white/5" style={{'borderRadius':'10px'}}>
                <img src={T1} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-400">
                        Nom Prenom
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-sate-600">
                        Dévelloppeur Web
                    </div>
                </div>
            </div>

        </div>
        <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-x1 flex items-center gap-6  dark:highlight-white/5" style={{'borderRadius':'10px'}}>
                <img src={T2} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-400">
                        Nom Prenom
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-sate-600">
                        Chef de projet
                    </div>
                </div>
            </div>

        </div>
        <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-x1 flex items-center gap-6  dark:highlight-white/5" style={{'borderRadius':'10px'}}>
                <img src={T3} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-400">
                        Nom Prenom
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-sate-600">
                        Infographiste
                    </div>
                </div>
            </div>

        </div>
        <div className="relative rounded-x1 overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-x1 flex items-center gap-6  dark:highlight-white/5" style={{'borderRadius':'10px'}}>
                <img src={T4} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-400">
                        Nom Prenom
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-sate-600">
                        Assistante marketing
                    </div>
                </div>
            </div>

        </div>
        
        
       </div>
    )
}

export default Testimonial