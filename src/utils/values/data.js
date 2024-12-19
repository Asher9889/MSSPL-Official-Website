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
export { options, products, headerOption };
