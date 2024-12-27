import { useRef, useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import emailjs from '@emailjs/browser';

const CareersForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    otherDetails: "",
    address: "",
    city: "",
    state: "",
    email: "",
    mobile: "",
    pinCode: "",
    qualification: "",
    education: "",
    gender: "",
    post: "",
    resume: null,
  });
  // const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
      // setLoading(true);
      // setErrorMessage(""); 
      emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CAREER, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // setLoading(false);
          // setShowSuccessMessage(true); // Show the success message
        },
        (error) => {
          console.log('FAILED...', error.text);
          // setLoading(false);
        },
      );

  }
  


  return (
    <ContentWrapper>
      <div className="min-h-screen py-8">
        {/* Header Section */}
        <header className="gradient text-white py-10 shadow-lg rounded-md">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl hover:scale-[1.01] transition-all duration-300 font-bold">
              Careers at Multifacet Software Systems (P) Ltd.
            </h1>
            <p className="mt-2 text-lg">
              Join our team to innovate, grow, and succeed together.
            </p>
          </div>
        </header>

        {/* Form Section */}
        <div className="container mx-auto bg-[#f0f8ff] border-[1px] border-zinc-300 shadow-lg rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Apply Now</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                // name="user_name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Father Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Father Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your father's name"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Post */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Post
              </label>
              <select
                name="post"
                value={formData.post}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>
                  Select Post
                </option>
                <option value="Marketing Executive">Marketing Executive</option>
                <option value="IT Support">IT Support</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>

            {/* Other Details */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Other Details</label>
              <textarea
                name="otherDetails"
                value={formData.otherDetails}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Provide additional details"
                rows="4"
              ></textarea>
            </div>

            {/* Additional Fields */}
            {/* Address, City, State, Email, Mobile, Pin Code, Qualification, Education */}
            {[
              { name: "address", placeholder: "Enter your address", label: "Address" },
              { name: "city", placeholder: "Enter your city", label: "City" },
              { name: "state", placeholder: "Enter your state", label: "State" },
              { name: "email", placeholder: "Enter your email", label: "E-mail", type: "email" },
              { name: "mobile", placeholder: "Enter your mobile number", label: "Mobile No", type: "tel" },
              { name: "pinCode", placeholder: "Enter your pin code", label: "Pin Code" },
              { name: "qualification", placeholder: "Enter your qualification", label: "Qualification" },
              { name: "education", placeholder: "Enter your education details", label: "Education" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-medium mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}

            

            {/* Resume Upload */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Resume</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <footer className="bg-blue-600 text-white text-center py-6 mt-10 rounded-xl">
          <p>
            For inquiries, email us at{" "}
            <a href="mailto:career@multifacet-software.com" className="underline hover:scale-[1.01]">
              career@multifacet-software.com
            </a>{" "}
            or call us at +91-933 681 0652.
          </p>
        </footer>
      </div>
    </ContentWrapper>
);
}



export default CareersForm;
