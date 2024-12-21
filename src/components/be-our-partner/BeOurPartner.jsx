import { ContentWrapper } from "../../components";
import { partner } from "../../assets";


const partnerProgramInfo = [
    {
      section: "Introduction",
      content: [
        {
          title: "Overview",
          description:
            "The Partner Program of Multifacet Software System aims to expand strategic alliances and supply chain offerings with higher value-added products. It is part of MSSPL's growth plan, focusing on profitability as the central hub for better joint ventures. Partners benefit from preferential positioning of commercial tools and techniques, gaining promotional access to MSSPL's product solutions."
        }
      ]
    },
    {
      section: "Be Our Partner",
      content: [
        {
          title: "Partner Types",
          list: [
            "Strategic Partners (SP).",
            "Resellers.",
            "Authorized Agents (AA).",
            "Service Providers.",
            "Sponsors (not trading companies promoting services).",
            "New talent partner plans are also welcome.",
            "Partners can belong to more than one category."
          ]
        }
      ]
    },
    {
      section: "Retain Your Customers",
      content: [
        {
          title: "Enhancing System Integrity",
          description:
            "MSSPL continues to develop features that improve system integrity, simplify operations and management, reduce operating costs, and generate additional income."
        },
        {
          title: "Web Platform for Partners",
          description: [
            "Partners (Resellers) can offer customers options to securely choose and manage their database of sales and client interactions.",
            "End customers experience a seamless solution without interruptions or manual page loads.",
            "Partners gain the ability to perform service tests, analyze usage statistics, and provide services remotely."
          ]
        }
      ]
    },
    {
      section: "Win New Customers",
      content: [
        {
          title: "Flexibility of Solutions",
          description:
            "MSSPL's flexible solutions allow partners to effectively gain new customers. Remote configuration based on templates reduces installation times at client offices."
        }
      ]
    },
    {
      section: "Benefits",
      content: [
        {
          title: "Collaborative Relationships",
          description: [
            "Collaboration with service providers, manufacturers, hardware distributors, integrators, and installers of telematics and automation solutions.",
            "Partnerships with service suppliers, wholesale services, advisory firms, and consulting companies."
          ]
        }
      ]
    },
    {
      section: "Business Resources",
      content: [
        {
          title: "Resources for Partners",
          list: [
            "Assigning a sales contact for account management.",
            "Opportunity assessment and project acquisition.",
            "Shared commercial campaigns.",
            "Participation in joint activities and special events.",
            "Joint publication of news and updates.",
            "Sales and marketing tools.",
            "Tools and back-office support."
          ]
        },
        {
          title: "Business Concept",
          description: [
            "Inclusion in MSSPL's partner listing under the 'Business Ally' category.",
            "Integration of additional hardware with MSSPL solutions.",
            "Use of Multifacet Software System Pvt. Ltd.'s emblems and logos.",
            "Commercial training on hardware/software complementary to the solution."
          ]
        }
      ]
    },
    {
      section: "Technical Resources",
      content: [
        {
          title: "Technical Benefits",
          list: [
            "Special prices and favorable terms.",
            "Technical documentation.",
            "Optional solution training courses.",
            "Technical support for specialized integration.",
            "Communication of new integration tools.",
            "Management of special projects."
          ]
        }
      ]
    }
  ];

  const libraryAutomation = [
    {
      category: "LIBRARY AUTOMATION",
      services: [
        "Member Patron",
        "I-Card Generation",
        "Acquisitioning",
        "Cataloguing",
        "Circulation Management",
        "E-Resource Management",
        "Digital Aura Management",
        "E-Serial Management",
        "Stock Management",
        "Audit Trail",
        "Other Services",
      ]
    },
    {
        category: "OPAC",
        services: [
            "Integrated Search",
            "Member Registration",
            "Other Online Services",
            "Integrated CAS and SDI",
            "Digital Lib",
            "OPAC N-Driod Apps"
        ]
    }
  ];
  
  

const BeOurPartner = () => {
  return (
    <div className="w-full my-10 md:my-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[2rem] md:text-[1.8rem] underline hover:scale-[1.02] transition-all duration-300">
          {"Softgranth: Library Automation System".toUpperCase()}
        </h1>
        <img
          className=" w-full md:w-[80vw] mx-auto  border-[1px] border-zinc-200 my-10 md:my-20 drop-shadow-xl hover:scale-[1.02] transition-all duration-300"
          src={partner}
          alt="libraries"
        />
        <div className="w-full flex md:flex-row flex-col flex-wrap gap-4">
          {/* left */}
          <div className=" p-4 border-[1px] border-zinc-500 h-fit">
            <div>
              <ul>
                {libraryAutomation && libraryAutomation.map((obj, index) => (
                  <>
                   
                    {obj.category && (
                      <h1 className="poppins-bold text-[20px]" key={index * 20}>
                        {obj.category}
                      </h1>
                    )}
                    {obj.services.map((service, index) => (
                      <li
                        className="poppins-regular text-[--main-text-color] hover:scale-[1.02] hover:underline transition duration-300 cursor-pointer"
                        key={index * 10}
                      >
                        <strong>{service}</strong>
                      </li>
                    ))}
                  </>
                ))}
              </ul>
            </div>
          </div>
          {/* right */}

          <div className="flex-1 p-4">
            {partnerProgramInfo.map((obj, index) => (
              <div key={index * 10}>
                <h1 className="poppins-bold text-[28px] text-[--main-text-color] text-start">{obj.section}</h1>
                {obj.content.map((obj, index) => (
                    <div key={index * 20} className="flex flex-col  mb-6">
                        <h1 className="poppins-regular font-medium text-[20px] text-[--main-text-color]  text-wrap">{obj.title} :</h1>
                        <section className="flex-1 poppins-regular text-[--main-text-color]">
                            <p className="">
                                {obj?.description}
                            </p>
                        </section>
                        {obj.img &&  <img  className="h-[30vh] md:h-[20vw] mx-auto py-4" src={obj.img} alt="img" />}
                        {obj.list && 
                        <ul className=" px-4">
                            {obj.list.map((e,i) => (
                                <li className="list-decimal text-[--main-text-color] text-[18px] py-2
                                 poppins-regular" key={ i * 10}>{e}</li>
                            ))}
                        </ul>}
                       
                    {/* <img className="flex-1" src={""} alt="" /> */}
                  </div>
                ))}

                
              </div>
            ))}

            
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BeOurPartner;
