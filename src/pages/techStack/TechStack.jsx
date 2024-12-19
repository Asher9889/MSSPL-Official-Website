import { useState } from "react";
import { ContentWrapper } from "../../components";

const buttons = ["Development Framework", "Web Development", "Languages", "Mobile Development", "Database" ]


const dotNet =
  "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d88b6b01fb4ba22db89bf4_net-46%2B-p-800.png";
const dotNetCore =
  "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d88b98366ada71b004dbb2_NET_Core_Logo.svg";
const nodeJS =
  "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d88e1524e37eb2edf7184d_nodejs-horizontal.svg";

const frameWork = [dotNet, dotNetCore, nodeJS];

const aspDotNetCore = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b519487d23f7e33cde43_aspnet.ng.png";

const angular = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8ae0b17b8abb19b2e0c4c_Angular.svg";

const react = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8ae0a8c05b6b162621fda_reactjs-ar.svg";

const bootstrap = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8bc5a0430a30adb743110_bootstrap-logo-vector.png";

const webDev = [aspDotNetCore, angular, react, bootstrap];

const typeScript = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8ae0b3d225ccfda818a10_typescriptlang-official.svg";

const javaScript = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8ae0a30e84e5dc555f419_JS.svg";

const python = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8ae6c1b297c29b3df78cf_Python_logo_and_wordmark.svg";

const languages = [typeScript, javaScript, python];

const flutter = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b1e7ba42563902d63cc8_flutterio-ar.svg";
const reactNative = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b1e5db05500e7bd07766_react-native.svg";
const kotlin = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b1e6c302a1309dd6b1d3_Kotlin.svg";

const mobile = [flutter, reactNative, kotlin];

const msSQL = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b44ad52f8a45bea6eeda_Microsoft_SQL_Server.svg";
const msAzure = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b44aca090b1bf91c2767_AZURE.svg";
const redis = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b44c300d4df7387f4326_redis.svg";
const mongoDB = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b44b77a481be901808cd_MongoDB.svg";
const sql = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b44b2db95fa566d249d5_MySQL.svg";
const oracle = "https://cdn.prod.website-files.com/6256688a7a5e476c6dbfec98/66d8b44b65b31624bc6f334e_Oracle_logo.svg";

const database = [msSQL, msAzure, redis, mongoDB, sql, oracle];

const TechStack = () => {

    const [activeSection, setActiveSection] = useState("Development Framework");


    function handleActiveSection (btn){
        console.log(btn)
        setActiveSection(btn)
    }
    
  return (
    <section className="w-full bg-green-950 mt-10 py-20 mb-20 ">
      <ContentWrapper>
        <div>
          <h1 className="poppins-semibold text-white text-[2rem] md:text-[3rem] mb-10">
            Our Tech Stack
          </h1>

            <div className="mb-20 overflow-x-auto ">
                <ul  className="flex flex-row justify-center md:justify-start  justify-start items-center gap-6 text-white text-lg ">
                {buttons.map((btn) => (
                        <li key={btn} onClick={()=>handleActiveSection(btn)} className="text-lg shrink-0 mb-2">
                            <button  className={` ${ activeSection == btn ? "px-8 py-2 rounded-full bg-blue-500" : "" }`}>
                                {btn}
                            </button>
                        </li>
                
                ))}
                </ul>
            
            </div>
            <div className="mt-10">
                {/* Development Framework */}
                <div  className="flex flex-row justify-center md:justify-start  gap-4 md:gap-2 flex-wrap">
                {activeSection == "Development Framework" && frameWork.map((fmw, index)=>(
                        <span key={fmw + index} className="block shrink-0  w-[180px] h-[60px]  md:w-[208px] md:h-[140px] flex flex-row justify-center items-center px-10 py-20 bg-[--new-grey-dark]">
                            <img className="w-56 object-cover" src={fmw} alt="databse" />
                        </span>
                    
                ))}
                </div>
                
                {/* Web Development */}
                <div  className="flex flex-row justify-center md:justify-start  gap-4 md:gap-2 flex-wrap">
                {activeSection == "Web Development" && webDev.map((webdev, index)=>(
                        <span key={webdev + index} className="block shrink-0  w-[180px] h-[60px]  md:w-[208px] md:h-[140px] flex flex-row justify-center items-center px-10 py-20 bg-[--new-grey-dark]">
                            <img className="w-56 object-cover" src={webdev} alt="databse" />
                        </span>
                    
                ))}
                </div>
                {/* Languages */}
                <div  className="flex flex-row justify-center md:justify-start  gap-4 md:gap-2 flex-wrap">
                {activeSection == "Languages" && languages.map((lang, index)=>(
                        <span key={lang + index} className="block shrink-0  w-[180px] h-[60px]  md:w-[208px] md:h-[140px] flex flex-row justify-center items-center px-10 py-20 bg-[--new-grey-dark]">
                            <img className="w-56 object-cover" src={lang} alt="dotNet" />
                        </span>
                    
                ))}
                </div>
                {/* Mobile Development */}
                <div  className="flex flex-row gap-4 justify-center md:justify-start md:gap-2 flex-wrap">
                {activeSection == "Mobile Development" && mobile.map((mobile, index)=>(
                        <span key={mobile + index} className="block shrink-0  w-[180px] h-[60px]  md:w-[208px] md:h-[140px] flex flex-row justify-center items-center px-10 py-20 bg-[--new-grey-dark]">
                            <img className="w-56 object-cover" src={mobile} alt="mobile dev" />
                        </span>
                    
                ))}
                {/* Database */}
                <div  className="flex flex-row justify-center md:justify-start  gap-4 md:gap-2 flex-wrap">
                {activeSection == "Database" && database.map((db, index)=>(
                        <span key={db + index} className="block shrink-0  w-[180px] h-[60px]  md:w-[208px] md:h-[140px]  flex flex-row justify-center items-center px-10 py-20 bg-[--new-grey-dark]">
                            <img className="w-56 object-cover" src={db} alt="databse" />
                        </span>
                    
                ))}
                </div>
            </div>
        </div>
        </div>
      </ContentWrapper>
    </section>
  );
};


export default TechStack;
