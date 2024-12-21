import ContentWrapper from "../contentWrapper/ContentWrapper";
// import { aboutus } from "../../assets/index";



const multifacetData = {
  welcomeMessage:
    "Welcome To Multifacet Software Systems (P) Ltd., Incubated at IIT Kanpur",
  about: {
    intro:
      "Multifacet Software Systems (P) Ltd. is a leading Software Development Company based in UP, India. Our focus has always been on delivering flexible business-centered solutions to our clients.",
    description:
      "Our portfolio, along with an impressive client list of more than 1,000 satisfied clients, is a result of 15 years of experience in providing a range of services including Custom Software Development, Application Development, Web Application Development, Android Apps, Enterprise Applications, Software Outsourcing, Web Marketing, Ecommerce Website Design Development, PDA Mobile Application, Retail Sales Software, Sales Force Management, Warehouse Management Solution, Outsourcing Company India, Search Engine Optimization, Client Server Application, Web Hosting Services, System Integration Management, Website Designing, and Software Maintenance.",
    motto:
      "Our Motto is to deliver premium quality software development services and products while giving unmatched value to enterprises worldwide at an affordable cost.",
  },
  whyChooseUs: [
    "Three layered security structure to secure Intellectual Property",
    "Over 23 years of experience",
    "Ability and experience in working near-shore, on-shore, and offshore",
    "Regular reviews and reports to clients",
    "Ability to work in 24x7 mode",
    "Senior talent to support complex technology architecture",
  ],
  expertise: [
    "Website Design and Development",
    "Business Application Development",
    "Open Source Development",
    "E-commerce Solutions",
    "Website Maintenance",
    "IT Outsourcing",
    "E-commerce Solutions, Software",
    "Graphic Design/Multimedia",
    "IT Outsourcing Services",
  ],
};

const CompanyProfile = () => {
  return (
    <section className="py-20">
      <ContentWrapper>
        <div>
          <div className="bg-blue-50 min-h-screen text-blue-900">
            {/* Header */}
            <header className="bg-blue-600 text-white py-10 shadow-lg gradient rounded-md">
              <div className="container mx-auto text-center">
                <h1 className="text-3xl hover:scale-[1.01] transition-all duration-300 font-bold">
                  {multifacetData.welcomeMessage}
                </h1>
              </div>
            </header>

            {/* About Section */}
            <section className="container mx-auto py-10 px-4">
              <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
                About Us
              </h2>
              <p className="text-lg mb-4 ">{multifacetData.about.intro}</p>
              <p className="text-lg mb-4 ">{multifacetData.about.description}</p>
              <blockquote className="bg-blue-100 border-l-4 border-blue-400 italic px-4 py-2 rounded-lg hover:scale-[1.01] transition-all duration-300">
                {multifacetData.about.motto}
              </blockquote>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-blue-100 py-10">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
                  Why Choose Us
                </h2>
                <ul className="list-disc pl-6 text-lg space-y-2">
                  {multifacetData.whyChooseUs.map((point, index) => (
                    <li key={index} className="hover:scale-[1.01] transition-all duration-200  cursor-pointer">{point}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Our Expertise Section */}
            <section className="container mx-auto py-10 px-4">
              <h2 className="text-3xl font-bold border-b-4 border-blue-400 inline-block mb-6">
                Our Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {multifacetData.expertise.map((expertise, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md p-4 rounded-lg hover:scale-[1.01] hover:shadow-2xl transition duration-300 cursor-pointer"
                  >
                    <p className="text-lg font-medium text-blue-700">
                      {expertise}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default CompanyProfile;
