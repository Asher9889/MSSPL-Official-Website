import ContentWrapper from "../contentWrapper/ContentWrapper";

const mssplData = {
    introduction: {
      title: "MSSPL's Vision and Mission",
      description:
        "To create an excellent opportunity for small organizations to compete with big organizations and for big organizations to grow bigger by providing them with: Vision, Tools, and Expertise.",
      mission: "Better leverage through innovative business solutions.",
      vision:
        "Continuous improvement of operational efficiency and effectiveness. Helping organizations become cost-effective in a cost-sensitive market, making each one of us globally competitive."
    },
    services: [
      {
        title: "Software Designing Kanpur",
        description: "To design, develop, deploy, and sustain Information Technology according to the customer's needs."
      },
      {
        title: "Client Server Application Kanpur",
        description: "To provide Quality software at the lowest IT cost."
      },
      {
        title: "Web Hosting Services Kanpur",
        description: "To deliver Business solutions and services on time to our clients."
      },
      {
        title: "System Integration Management Kanpur",
        description: "To utilize the best and latest proven technologies."
      },
      {
        title: "Software Maintenance",
        description: "To make Quality as our hallmark."
      },
      {
        title: "Ecommerce Website Design Development",
        description: "To maintain customer satisfaction as our highest goal."
      },
      {
        title: "Mobile Software Kanpur",
        description: "To make ourselves and our clients globally competitive."
      },
      {
        title: "CRM Solution Kanpur",
        description:
          "To be a reliable, dependable, and long-lasting IT solutions and services provider."
      },
      {
        title: "CMS Website Kanpur",
        description:
          "To attract talented and committed people, develop an entrepreneurial culture, and focus on continuous learning."
      }
    ]
  };
  

const Objectives = () => {
  const { introduction, services } = mssplData;

  return (
    <ContentWrapper>
    <div className="bg-blue-50 min-h-screen text-blue-900 py-20">
      {/* Header */}
      <header className="bg-blue-600 text-white py-10 shadow-lg gradient rounded-md">
              <div className="container mx-auto text-center">
                <h1 className="text-3xl hover:scale-[1.01] transition-all duration-300 font-bold">
                Welcome To Multifacet Software Systems (P) Ltd., Incubated at IIT Kanpur
                </h1>
              </div>
        </header>

      {/* Vision and Mission */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
          {introduction.title}
        </h2>
        <p className="text-lg mb-4">{introduction.description}</p>
        <blockquote className="bg-blue-100 border-l-4 border-blue-400 italic px-4 py-2 rounded-lg mb-6">
          Mission: {introduction.mission}
        </blockquote>
        <blockquote className="bg-blue-100 border-l-4 border-blue-400 italic px-4 py-2 rounded-lg">
          Vision: {introduction.vision}
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
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-[1.01] transition duration-300"
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
  );
};

export default Objectives;
