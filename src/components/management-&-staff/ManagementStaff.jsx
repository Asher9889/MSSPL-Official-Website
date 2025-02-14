import ContentWrapper from "../contentWrapper/ContentWrapper";
import { foundermd } from "../../assets";
const mssplData = {
    introduction: {
      title: "About MSSPL",
      description:
        "The management at Multifacet Software Systems Pvt. Ltd. is helped by a self-motivated team of expert professionals, proficient at providing effective solutions to suit all client-specific requirements. Their expertise in the fields of Software, Programming, and Content Optimization is unmatched. They stay updated with the latest developments through regular training programs. This allows them to combine time-tested methodology with fresh concepts to produce groundbreaking solutions.",
    },
    founder: {
      name: "Mr. Ashok Kumar Agrawal",
      position: "Founder & Managing Director",
      description:
        "Mr. Ashok Kumar Agrawal, a founder member and the MD of MSSPL, is of great merit and devoted to the functioning of MSSPL as a premier IT Solutions and Web Application Development Company.",
      image: foundermd, // Replace this with the actual image path
    },
    visionMission: {
      vision:
        "To create an excellent opportunity for small organizations to compete with big organizations and for big organizations to grow bigger by providing them with Vision, Tools, and Expertise.",
      mission:
        "Better leverage through innovative business solutions. Continuous improvement of operational efficiency and effectiveness.",
    },
    services: [
      {
        title: "Software Designing",
        description: "To design, develop, deploy, and sustain Information Technology according to the customer’s needs.",
      },
      {
        title: "Client Server Application",
        description: "To provide Quality software at the lowest IT cost.",
      },
      {
        title: "Web Hosting Services",
        description: "To deliver Business solutions and services on time to our clients.",
      },
      {
        title: "System Integration Management",
        description: "To utilize the best and latest proven technologies.",
      },
      {
        title: "Software Maintenance",
        description: "To make Quality as our hallmark.",
      },
      {
        title: "Ecommerce Website Design Development",
        description: "To maintain customer satisfaction as our highest goal.",
      },
      {
        title: "Mobile Software",
        description: "To make ourselves and our clients globally competitive.",
      },
      {
        title: "CRM Solution",
        description:
          "To be a reliable, dependable, and long-lasting IT solutions and services provider.",
      },
      {
        title: "CMS Website",
        description:
          "To attract talented and committed people, develop an entrepreneurial culture, and focus on continuous learning.",
      },
    ],
  };

const ManagementStaff = ()=>{

   
      const { introduction, founder, visionMission, services } = mssplData;
      

    return (
        <ContentWrapper>
        <div className="bg-blue-50 min-h-screen text-blue-900 py-20">
        {/* Header */}
        <header className="bg-blue-600 text-white py-10 shadow-lg gradient rounded-md">
              <div className="container mx-auto text-center">
                <h1 className="text-3xl hover:scale-[1.01] transition-all duration-300 font-bold">
                Welcome To Multifacet Software Systems (P) Ltd., Incubated at IIT Kanpur
                </h1>
                <p className="text-xl">Delivering groundbreaking IT solutions.</p>
              </div>
        </header>
        
  
        {/* Introduction */}
        <section className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
            {introduction.title}
          </h2>
          <p className="text-lg">{introduction.description}</p>
        </section>
  
        {/* Founder Section */}
        <section className="bg-blue-100 py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
            <div className="md:w-1/3">
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                {founder.name}
              </h2>
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {founder.position}
              </h3>
              <p className="text-lg">{founder.description}</p>
            </div>
          </div>
        </section>
  
        {/* Vision and Mission */}
        <section className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
            Vision and Mission
          </h2>
          <blockquote className="bg-blue-100 border-l-4 border-blue-400 italic px-4 py-2 rounded-lg mb-6 hover:scale-[1.01] transition-all duration-300">
            Vision: {visionMission.vision}
          </blockquote>
          <blockquote className="bg-blue-100 border-l-4 border-blue-400 italic px-4 py-2 rounded-lg hover:scale-[1.01] transition-all duration-300">
            Mission: {visionMission.mission}
          </blockquote>
        </section>
  
        {/* Services */}
        <section className="bg-blue-100 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-[1.01] cursor-pointer transition duration-300"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
       
      </div>
      </ContentWrapper>
    )
}

export default ManagementStaff;