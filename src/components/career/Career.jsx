import { useState } from "react";

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
    resume: null,
  });

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
    // Add form submission logic (API or email integration)
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen p-8">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold">Careers at MSSPL</h1>
        <p className="mt-2 text-lg">
          Join our team to innovate, grow, and succeed together.
        </p>
      </header>

      {/* Form Section */}
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Apply Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Father Name
            </label>
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

          {/* Other Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Other Details
            </label>
            <textarea
              name="otherDetails"
              value={formData.otherDetails}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Provide additional details"
              rows="4"
            ></textarea>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your city"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your state"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile No
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Pin Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Pin Code
            </label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your pin code"
              required
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Qualification
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your qualification"
              required
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Education
            </label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your education details"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
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

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Resume
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>
          For inquiries, email us at{" "}
          <a
            href="mailto:career@multifacet-software.com"
            className="underline"
          >
            career@multifacet-software.com
          </a>{" "}
          or call us at +91-933 681 0652.
        </p>
      </footer>
    </div>
  );
};

export default CareersForm;
