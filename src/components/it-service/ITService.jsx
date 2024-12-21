import ContentWrapper from "../contentWrapper/ContentWrapper";

const ITService = () => {
  const technicalExpertise = [
    ".NET Remoting Architecture (using TCP/HTTP Protocol)",
    "Microsoft Message Queuing (MSMQ) for Asynchronous Message Delivery",
    "Web Services using XML - SOAP/HTTP",
    "Advanced ADO.NET features",
    "Android Apps Development",
    "Centralized Exception/Error Handling",
    "Ajax Implementation Of .Net",
  ];

  const databaseExpertise = [
    "Internet Information Server",
    "MySQL",
    "Oracle",
    "SQL Server 2005/2008",
  ];

  const services = [
    "Custom Application Development",
    "Application Maintenance",
    "Product Development",
    "Business Consulting",
    "Digitization Of Documents",
    "Cataloguing Of Library Items",
    "RFID Implementation",
    "Data Migration",
  ];

  return (
    <ContentWrapper>
      <div className=" min-h-screen py-20">
        {/* Header */}
        <header className="bg-blue-600 text-white py-10 shadow-lg gradient rounded-md">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl hover:scale-[1.01] transition-all duration-300 font-bold">
              Welcome To Multifacet Software Systems (P) Ltd., Incubated at IIT
              Kanpur
            </h1>
            <p className="mt-2 text-lg">
              Delivering Excellence in Software Development Since 2005
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-blue-800 border-b-4 border-blue-400 inline-block mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Multifacet Softwares Systems (P) Ltd is a global software consulting
            firm committed to innovation, quality, and service. Founded in 2005
            by technocrats, MSSPL has been delivering cutting-edge solutions in
            areas like Web Applications, Software Development, Software
            Re-Engineering, Web Solutions, and Application Development.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            MSSPL provides all the tools necessary for the success of your firm
            on the Internet. Whether it’s increasing visibility, maximizing
            impact, or boosting sales for E-Commerce sites, we deliver the best
            returns on investment, making us the preferred choice for Internet
            solutions like Internet marketing, search engine optimization, and
            E-Commerce website hosting.
          </p>
        </section>

        {/* Services */}
        <section className="bg-blue-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 border-b-4 border-blue-400 inline-block mb-6">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-[1.01] cursor-pointer transition duration-300"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Competencies */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-blue-800 border-b-4 border-blue-400 inline-block mb-6">
            Technical Competencies
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                .Net Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {technicalExpertise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Database Expertise
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {databaseExpertise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ContentWrapper>
  );
};

export default ITService;
