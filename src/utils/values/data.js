import { libraryComp, library_quality, fts, mobileDev} from "../../assets";
import { cSoftwareDev, ProjManagment, qualityAssurance, techSupport, uiux, wSoftwareDev } from "../links/links";




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
        // "Campsys",
        // "DigLib",
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
      title: "Career",
      child:  [
        // "Press Release",
        // "Career",
        // "Site Map",
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

  //------ For campsys_erp_management page ------------->

  // This is List
  const digitalAcademicsCampus = [
    { category: "DIGITAL ACADEMICS CAMPUS", services: 
    
       [ "Member Patron",
         "College Management Software",
        "Students Admission",
        "Establish Management System",
        "Fee Management",
        "Student Records",
        "Student Attendance",
        "Examination",
        "Financial Accounting",
        "Payroll",
        "Library",
        "Hostel",
        "Inventory",
        "Transportation",
        "Student Health",
        "Alumni",
        "Campus Placement",
        "Sports Management"
    ]
    }];
  

  // this is content data
  const campSysInfo = [
    {
      section: "Introduction",
      content: [
        {
          title: "Overview",
          description:
            "CampSys is an 'Academic Campus Automation Software' developed with over two decades of expertise from IIT Kanpur campus experts, further enriched by knowledge from other campus experts and online resources. It incorporates state-of-the-art cutting-edge technology, making it superior to existing solutions. The software is completely web-based, operating on both internet and intranet, and developed at SIIC, IIT Kanpur under the supervision of computer experts.",
          img: libraryComp
          }
      ]
    },
    {
      section: "Objective",
      content: [
        {
          title: "CampSys Objective",
          description:
            "The objective of CampSys is to completely automate daily campus functions such as Registration, Entrance Tests, Fee Management, Hostel Management, Transport, Assessment, Payroll, and more. Through the Campus Network and Internet, members can access the Student/Staff Online Query System to obtain up-to-date, relevant information."
        }
      ]
    },
    {
      section: "Features",
      content: [
        {
          title: "Salient Features",
          description: 
            "Fully web-based application supports various browsers like IE, Firefox, over internet/intranet with TCP/IP protocol. Accessible worldwide (24x7) and easy to use. Configurable through extensive parameterization in the Admin module.Fully integrated modules to eliminate redundant data entry.User-specific menus and role-based access for personalization.Supports MS-SQL, MySQL, and Oracle as RDBMS. Scalable for any number of members/users. Online Campus Query System for Fee and Registration queries."
          
        }
      ]
    },
    {
      section: "Software Quality",
      content: [
        {
          title: "Quality Assurance",
          description:
            "Our Quality Management System ensures quality at all stages of the software development process. We adopt suitable development models based on project requirements, offering both onsite and offshore support. We align our services for client IT resource optimization, ensuring cost savings and peace of mind.",
            img: library_quality
        }
      ]
    },
    {
      section: "Additional Information",
      content: [
        {
          title: "Online Demo",
          description: "An online demo of the CampSys Automation System (DAC) is available."
        },
        {
          title: "Presentation Download",
          description: "The CampSys presentation can be downloaded as 'CampSys.pptx'."
        }
      ]
    }
  ];

   //------ For file_tracking_system page ------------->
    // This is List
    const systemFeatures = [
      {
        category: "File Tracking System",
        services: [
          "Employees Management",
          "Authorities Management",
          "Security Management",
          "Register Management",
          "Files Management",
          "Route",
          "Barcode",
          "Dynamic Letters",
          "E-mail & SMS services",
          "File on Desk",
          "Reports",
          "Search/Indexing Search"
        ]
      },
      {
        category: "Bar-Association Management",
        services: [
          "Member Registration",
          "Fees Management",
          "Overdue Collection",
          "Reporting",
          "Digital Lib",
          "OPAC N-Driod Apps"
        ]
      },
      {
        category: "Contact Management System",
        services: [
          "Contact Creation",
          "Group Creation",
          "Sharing of Contact among Users",
          "E-Mail & SMS Services",
          "Notes Management",
          "OCR Integration",
          "Events Management",
          "Level Designing",
          "Imports/Exports Contacts",
          "Searching"
        ]
      }
    ];

    // this is content data
    const rfidSystemInfo = [
      {
        section: "Introduction",
        content: [
          {
            title: "Overview",
            description:
              "RFID (Radio Frequency Identification) is the latest technology used in Library Theft Detection Systems. Unlike EM (Electro-Mechanical) and RF (Radio Frequency) systems, which have been used in libraries for decades, RFID-based systems move beyond security to become tracking systems. These systems combine security with more efficient tracking of materials throughout the library, including easier and faster charge and discharge, inventorying, and materials handling.",
            img: fts
          }
        ]
      },
      {
        section: "Objective",
        content: [
          {
            title: "Purpose of RFID in Libraries",
            description:
              "The objective of RFID technology is to enhance library operations by providing efficient tracking and security of materials, reducing manual effort, and ensuring seamless handling of library resources."
          }
        ]
      },
      {
        section: "Features",
        content: [
          {
            title: "Key Features",
            description: 
              "Combines security with efficient material tracking. Facilitates easier and faster charge and discharge of materials. Enables streamlined inventorying and material handling. Provides advanced theft detection systems."
            
          }
        ]
      },
      {
        section: "Software Quality",
        content: [
          {
            title: "Quality Assurance",
            description:
              "Our Quality Management System ensures quality at all stages of the software development process. We adopt suitable development models based on project requirements, offering both onsite and offshore support. We align our services for client IT resource optimization, ensuring cost savings and peace of mind.",
            img: library_quality
          }
        ]
      },
      {
        section: "Additional Information",
        content: [
          {
            title: "Online Demo",
            description: "An online demo of the File Tracking System (FTS) is available."
          },
          {
            title: "Presentation Download",
            description: "The FTS presentation can be downloaded as 'FTS.pptx'."
          }
        ]
      }
    ];
    
// ------ For Our Processes --------->
      // Requirement analysis
      const requirementsAnalysis = [
        {
          title: "Research on Application Requirements",
          description:
            "This document includes the URLs that are the web application and similar to the current project, which will be used to elicit the requirements. It also contains the necessary user name and password for the research sites, along with the research report where required. This type of document can also include the user questionnaire interviews if necessary.",
        },
        {
          title: "Research on Technical Issues [Developer View]",
          description:
            "This section covers technical issues that developers will need to consider, focusing on the developer’s perspective and resolving challenges related to the application.",
        },
        {
          title: "Application Basic Features [User View ? Top Level]",
          description:
            "This document includes the basic key features for the current project. This describes the application from a very top-level point of view, so that anyone can understand the system very quickly and easily. It also helps the developer to identify and articulate the development process from a very early stage.",
        },
        {
          title: "Use Cases [User/Developer View ? Top Level]",
          description:
            "This includes text and diagrams that illustrate how all the application features and sub-features are acting and communicating through various stages of usage and workflow. It helps the user and developer to understand and identify system processes from a basic, initial, and top-level point of view.",
        },
        {
          title: "User Interface Specification [User/Developer View ? Mid Level]",
          description:
            "This document is useful while building the application. Through this specification, the client gets an initial idea about what the system is, and it becomes easy for the client to verify and confirm whether they are going to get all the required features. We can use Microsoft doc (for wireframes) or simply static HTML layouts to illustrate the UI.",
        },
        {
          title: "User Requirements Specification [User/Developer View ? Low Level]",
          description:
            "This document includes the detailed specification of the application. Basically, this is the detailed description of the basic features that have been identified.",
        },
        {
          title: "Architecture",
          points: [
            "Security model",
            "Skinning and page settings",
            "Global data transfer among pages",
          ],
        },
        {
          title: "Identifying the Modules & Module Boundaries [Top Level]",
          description:
            "It describes the basic, core modules that are being considered to be developed. This is especially useful while working with large-scale projects. Although this is used to define the system boundaries from a top-level view, defining the sub-modules as well makes the future development process more requirement-specific and makes the complex task of integrating the modules and identifying module communication during design time easier.",
        },
        {
          title: "Data Fields [User/Developer View ? Low Level]",
          description:
            "The data fields of the application have been identified in this step. Database schema, relations, and data fields are recognized and validated with the client to ensure that the current requirement analysis grabs all the required things.",
        },
        {
          title: "Time Estimation [Manager View]",
          points: [
            "According to modules",
            "According to development steps",
            "According to developer expert level",
            "According to logical tiers (as well as level of engineering)",
          ],
        },
      ];

//  App.jsx => Service Componet
const data = [
  {
    title: "Custom Software Development",
    pic: cSoftwareDev,
    paragraph1: "Web and mobile application development",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",
    link: "/products/android_apps",
  },
  {
    title: "Web Application Development",
    pic: wSoftwareDev,
    paragraph1: "Frontend development",
    paragraph2: "Backend development",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance of legacy systems",
    link: "/products/library_automation_system",
  },
  {
    title: "UI/UX Design",
    pic: uiux,
    paragraph1: "Mobile app design",
    paragraph2: "Business analysis",
    paragraph3: "Software architecture",
    paragraph4: "Maintenance",
    link: "/products/campsys_erp_management",
  },
  {
    title: "Mobile App Development",
    pic: mobileDev,
    paragraph1: "iOS app development",
    paragraph2: "Android App development",
    paragraph3: "Cross-platform development",
  },
  {
    title: "Quality Assurance",
    pic: qualityAssurance,
    paragraph1: "Manual Testing",
    paragraph2: "Automation Testing",
    paragraph3: "Functional Testing",
    paragraph4: "Security Testing",
  },
  {
    title: "Technical Support",
    pic: techSupport,
    paragraph1: "Software Maintenance",
    paragraph2: "Infrastructure Support",
  },
  {
    title: "Project Management",
    pic: ProjManagment,
    paragraph1: "Project portfolio management",
    paragraph2: "Change management",
    paragraph3: "Project management consultation",
    paragraph4: "Project scoping and delivery",
    link: "/products/e-commerce_development",
  },
];

export { requirementsAnalysis, options, products, headerOption, softGranthInfo, libraryAutomationServices, campSysInfo, digitalAcademicsCampus, systemFeatures, rfidSystemInfo, data };
