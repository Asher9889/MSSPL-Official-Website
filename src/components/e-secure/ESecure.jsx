import ContentWrapper from "../contentWrapper/ContentWrapper";
import { kiosk01, kiosk02, kiosk03, 
  // kiosk04 
} from "../../assets/index.js";

const libraryData = [
  {
    title: "Self-Checkout Kiosk",
    description:
      "Revolutionize transactions with our intuitive Self-Checkout Kiosk. Designed for efficiency, it enhances check-ins and check-outs using advanced RFID technology, a biometric reader, and a high-speed thermal printer. The 22-inch touchscreen ensures a seamless user experience, making it perfect for modern libraries and workspaces.",
    features: [
      {
        name: "Sleek, Durable Kiosk Enclosure",
        detail:
          "Built to last with a stylish yet functional design, ensuring longevity and a professional appearance.",
      },
      {
        name: "Advanced RFID Reader with PAD Antenna",
        detail:
          "Seamlessly reads RFID-enabled cards and tags for quick, secure, and contactless transactions.",
      },
      {
        name: "22-inch LED Touchscreen Monitor",
        detail:
          "A high-resolution display provides an intuitive interface for smooth user interactions.",
      },
      {
        name: "High-Speed Thermal Slip Printer",
        detail:
          "Prints receipts instantly, improving transaction speed and convenience.",
      },
      {
        name: "Biometric Reader for Added Security",
        detail:
          "Fingerprint authentication ensures secure user verification and prevents unauthorized use.",
      },
      {
        name: "Ultra-Small CPU",
        detail:
          "Powerful yet compact CPU ensures fast, responsive performance with minimal space usage.",
      },
      {
        name: "Smart-RFID Client Software",
        detail:
          "Guides users through the process, providing real-time feedback and a seamless experience.",
      },
    ],
    image: kiosk01,
  },
  {
    title: "Book Drop Box",
    description:
      "Simplify and secure book returns with the RFID-enabled Book Drop Box. Featuring a durable enclosure, biometric authentication, and a cushion-drop system, it ensures safe, efficient, and automated returns.",
    features: [
      {
        name: "Sturdy, Secure Book Drop Enclosure",
        detail:
          "Designed for durability and security, perfect for high-traffic areas.",
      },
      {
        name: "Advanced RFID Reader with PAD Antenna",
        detail:
          "Instantly detects RFID-enabled books, ensuring quick and contactless check-ins.",
      },
      {
        name: "22-inch LED Touch Screen Monitor",
        detail:
          "User-friendly display for guided returns and clear on-screen instructions.",
      },
      {
        name: "High-Speed Thermal Slip Printer",
        detail:
          "Provides instant return receipts for user confirmation.",
      },
      {
        name: "Biometric Reader for Enhanced Security",
        detail:
          "Ensures that the correct individual returns the books, reducing errors.",
      },
      {
        name: "Books Cushion Drop & Receiving Cart",
        detail:
          "Minimizes book damage while safely storing returned materials.",
      },
      {
        name: "Smart Client Software",
        detail:
          "Offers real-time feedback and guides users through the return process.",
      },
    ],
    image: kiosk02,
  },
  {
    title: "RFID Library Security Gate",
    description:
      "Protect your library’s collection with the RFID Library Security Gate. Designed to prevent unauthorized book removals, this system seamlessly integrates with library databases for real-time monitoring.",
    features: [
      { name: "Operating Frequency", detail: "950-956 MHz for reliable RFID performance." },
      { name: "Power Supply", detail: "DC (9V-30V) / 2A (60W) for stable operation." },
      { name: "Read Range", detail: "Up to 1 meter with paired gates for optimal accuracy." },
      { name: "Communication Interfaces", detail: "RS-232, RS-485, Wiegand, RJ45, I/O for seamless integration." },
      { name: "Operating Temperature", detail: "-40°C to +70°C, ensuring durability in all environments." },
    ],
    image: kiosk03,
  },
  // {
  //   title: "RFID Handheld Device",
  //   description:
  //     "Enhance inventory management and asset tracking with our RFID Handheld Device. Featuring high-speed scanning, long battery life, and an ergonomic design, it's perfect for logistics, retail, and library operations.",
  //   features: [
  //     { name: "High Performance", detail: "3GB RAM & 16GB ROM for smooth operation." },
  //     { name: "4-inch IPS Touchscreen", detail: "Vibrant display for easy navigation." },
  //     { name: "Long Battery Life", detail: "Up to 16 hours of continuous use." },
  //     { name: "Lightweight & Portable", detail: "Only 690g, ensuring easy handling." },
  //     { name: "RFID Scanning", detail: "Fast and accurate for improved efficiency." },
  //     { name: "Software License Included", detail: "One-year license for updates and support." },
  //     { name: "One-Year Warranty", detail: "Protects your investment with reliable support." },
  //   ],
  //   image: "kiosk04",
  // },
];

const ESecure = () => {
  return (
    <section className=" py-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-3xl md:text-4xl underline hover:scale-[1.02] transition-all duration-300 mb-12">
          E-Secure Products
        </h1>

        <div className="grid gap-12">
          {libraryData.map((data, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <img
                  className="w-60 md:w-80 rounded-lg shadow-lg"
                  src={data.image}
                  alt={data.title}
                />
                
                {/* Content */}
                <div>
                  <h2 className="poppins-bold text-2xl text-[--main-text-color]">
                    {data.title}
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">{data.description}</p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2">
                    {data.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-blue-500 font-bold">•</span>
                        <div>
                          <span className="font-semibold">{feature.name}:</span>{" "}
                          {feature.detail}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ESecure;
