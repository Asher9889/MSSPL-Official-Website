import { libraryComp, library_quality } from "../../assets";




const options = ["Home","Our Processes", "Products", "Our Clients", " Technology", "About Us"];

const products = ["VTS", "VWMS", "E-library", "DMS", "Smart Class", "Kiosk", "E-Attendance", "SWMS", "IMS", "AMS", "E-Office"]

// for header component heading navigation
const headerOption = [
    {
      title: "Home",
      child: []
    },
    {
      title: "Our Processes",
      child: [
        "Requirement Analysis",
        "Acceptance Testing",
        "Project Proposal",
        "Project Design",
        "Project Development",
        "Installation",
      ],
    },
    {
      title: "Products",
      child: [
        "Library Automation System",
        "Campsys ERP Management",
        "File Tracking System",
        "Android Apps",
        "E-Commerce Development",
        "Campsys",
        "DigLib",
        "E-Secure",
      ],
    },
    {
      title: "Our Clients",
      child: [
        "Be Our Partner",
        
      ],
    },
    {
      title: "Our Technology",
      child:  []
    },
    {
      title: "About Us",
      child:  [
        "Company Profile",
        "Objectives",
        "Management & Staff",
        "IT Service"
      ]
    },
    {
      title: "Contact Us",
      child:  [
        "Press Release",
        "Career",
        "Site Map",
      ]
    },
  ];

  const softGranthInfo = [
    {
      section: "Introduction",
      content: [
        {
          title: "Overview",
          description:
            "SoftGranth is a sophisticated version of IIT-KLAS (IIT Kanpur Library Automation Software developed, tested, and implemented by IIT Kanpur Library over the last couple of decades). The current version incorporates state-of-the-art technology and is now available in the open market. Libraries outside IITK can now avail themselves of an upgraded version of the Library Automation Technology developed, tested, and perfected at IIT Kanpur at a comparatively low price.",
          img: libraryComp
        },
      ],
    },
    {
      section: "SoftGranth Library",
      content: [
        {
          title: "Development and Commercialization",
          description:
            "IIT Kanpur, as part of its effort to indigenously design, develop, and deliver products at low cost to the Indian market, has assigned the customization and commercialization of IIT-KLAS to MSSPL (Multifacet Softwares Systems (P) Ltd.) at SIIC (SIDBI Innovation and Incubation Center), IIT Kanpur.",
        },
        {
          title: "Expertise",
          description:
            "The Managing Director of MSSPL is a B.Tech graduate from IIT Kanpur with over two decades of experience in the IT Industry. During the process of improvisation, close association with faculty and Library experts ensured intensive testing at P.K. Kelkar Library, IIT Kanpur. The product is on par with, if not better than, the most advanced Library Software currently available in the market.",
        },
        {
          title: "Objective",
          description:
            "The objective of the Library Software is to completely automate the operations of the Library, such as Acquisitioning, Cataloguing, Circulation, User & Member Management, and Managerial Information System.",
        },
      ],
    },
    {
      section: "Software Quality",
      content: [
        {
          title: "Quality Assurance",
          description:
            "Our Quality Management System ensures quality at all stages of the software development process. We adopt a suitable development model based on the project's requirements, offering both onsite and offshore support.",
            img: library_quality
        },
        {
          title: "Client Alignment",
          description:
            "We align our services for the client's IT resource optimization, ensuring cost savings and peace of mind for our clients.",
        },
      ],
    },
    {
      section: "Additional Information",
      content: [
        {
          title: "Online Demo",
          description:
            "An online demo of the Library Automation System (SoftGranth) is available.",
        },
        {
          title: "Presentation Download",
          description:
            "A presentation about the Library Automation System can be downloaded as 'Library.pptx'.",
        },
      ],
    },
  ];


  const libraryAutomationServices = [
    {
      category: "Library Automation",
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
      ],
    },
    {
      category: "Other Services",
      services: [
        "OPAC",
        "Integrated Search",
        "Member Registration",
        "Other Online Services",
        "Integrated CAS and SDI",
        "Digital Lib",
        "OPAC N-Driod Apps",
      ],
    },
    {
      category: "E-Commerce Website",
      services: [
        "Website Design and E-Commerce",
        "Website Development",
        "Corporate Website Designing",
        "Web Development",
        "E-Commerce Development",
        "Logo Designing",
        "Flash Animation",
        "Wordpress Customization",
      ],
    },
    {
      category: "Contact",
      services: ["Contact Us"],
    },
  ];

export { options, products, headerOption, softGranthInfo, libraryAutomationServices };
