import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const ApplyForm: React.FC = () => {
const location = useLocation();
const course = location.state?.course;
const courseTitle = course?.title || "Full Stack Intern Form";

const [formData, setFormData] = useState({
title: "None",
firstName: "",
lastName: "",
email: "",
contact: "",
graduationYear: "",
gender: "",
experience: "",
employer: "",
currentCTC: "",
expectedCTC: "",
noticePeriod: "",
skillSet: "",
source: "",
currentLocation: "",
preferredLocation: "",
});

const [resume, setResume] = useState<File | null>(null);

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
if (e.target.files && e.target.files.length > 0) {
setResume(e.target.files[0]);
}
};

const handleClear = () => {
setFormData({
title: "None",
firstName: "",
lastName: "",
email: "",
contact: "",
graduationYear: "",
gender: "",
experience: "",
employer: "",
currentCTC: "",
expectedCTC: "",
noticePeriod: "",
skillSet: "",
source: "",
currentLocation: "",
preferredLocation: "",
});
setResume(null);
};

const handleCancel = () => {
window.history.back();
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
alert("Application submitted successfully!");
};

return ( <section className="min-h-screen bg-white py-10 px-8 font-sans text-gray-800"> <div className="max-w-3xl mx-auto text-center mb-10 pt-6 pb-4 border-b border-gray-200"> <h1 className="text-3xl font-bold text-blue-600 tracking-wide mb-3">
{courseTitle} </h1> <div className="flex justify-center gap-6 mt-2 text-gray-600 text-2xl"> <a
         href="https://www.facebook.com/vdartacademy"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-blue-600"
       > <FaFacebookF /> </a> <a
         href="https://www.linkedin.com/company/vdartacademy"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-blue-700"
       > <FaLinkedinIn /> </a> <a
         href="https://www.instagram.com/vdartacademy"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-pink-500"
       > <FaInstagram /> </a> <a
         href="https://www.youtube.com/@vdartacademy"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-red-600"
       > <FaYoutube /> </a> </div> </div>

{/* Breadcrumb Navigation */}
<div className="max-w-3xl mx-auto mb-8 text-sm text-gray-600 flex items-center gap-2">
  <button
    onClick={() => window.history.back()}
    className="text-blue-500 hover:underline"
  >
    Job listing
  </button>
  <span className="text-gray-400">›</span>
  <button
    onClick={() => window.history.back()}
    className="text-blue-500 hover:underline"
  >
    Job details
  </button>
  <span className="text-gray-400">›</span>
  <span className="text-gray-800 font-medium">Job application</span>
</div>

  <div className="max-w-3xl mx-auto">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h2 className="text-base font-semibold text-gray-800 mb-2 sm:mb-0">
        Personal Details
      </h2>
      <button
        type="button"
        onClick={handleClear}
        className="text-sm text-blue-500 hover:underline leading-none self-start sm:self-auto"
      >
        Clear
      </button>
    </div>

    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">
          First Name <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-24 border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
          >
            <option value="None">None</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="flex-1 border border-gray-300 rounded-sm px-3 h-[38px] text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Last Name</label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          className="w-full border border-gray-300 rounded-sm px-3 h-[38px] text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-sm px-3 h-[38px] text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Contact <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <select className="border border-gray-300 rounded-l-sm px-2 h-[38px] bg-gray-50 text-sm">
            <option>+91</option>
          </select>
          <input
            name="contact"
            type="text"
            value={formData.contact}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-r-sm px-3 h-[38px] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Year of Graduation<span className="text-red-500">*</span>
        </label>
        <input
          name="graduationYear"
          type="text"
          value={formData.graduationYear}
          onChange={handleChange}
          placeholder="Enter Year of Graduation"
          className="w-full border border-gray-300 rounded-sm px-3 h-[38px] text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Gender<span className="text-red-500">*</span>
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Experience (in years)
        </label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
        >
          <option value="">Select Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="0-1">0-1</option>
          <option value="1-3">1-3</option>
          <option value="3-5">3-5</option>
          <option value="5+">5+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Employer</label>
        <input
          name="employer"
          type="text"
          value={formData.employer}
          onChange={handleChange}
          placeholder="Enter Employer"
          className="w-full border border-gray-300 rounded-sm px-3 h-[38px] text-sm"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Current CTC
          </label>
          <select
            name="currentCTC"
            value={formData.currentCTC}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
          >
            <option value="">Select Current CTC</option>
            <option value="None">None</option>
            <option value="Not applicable">Not applicable</option>
            <option value="1-3">1-3</option>
            <option value="3-5">3-5</option>
            <option value="5+">5+</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Expected CTC<span className="text-red-500">*</span>
          </label>
          <select
            name="expectedCTC"
            value={formData.expectedCTC}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
          >
            <option value="">Select Expected CTC</option>
            <option value="Open">Open</option>
            <option value="3-5LPA">3-5 LPA</option>
            <option value="5-7LPA">5-7 LPA</option>
            <option value="7-10LPA">7-10 LPA</option>
            <option value="10+LPA">10+ LPA</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Notice Period<span className="text-red-500">*</span>
        </label>
        <select
          name="noticePeriod"
          value={formData.noticePeriod}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
        >
          <option value="">Select Notice Period</option>
          <option value="Immediate">Immediate</option>
          <option value="Notapplicable">Not applicable</option>
          <option value="1 month">1 Month</option>
          <option value="2 month">2 Month</option>
          <option value="3 month">3 Month</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Skill Set<span className="text-red-500">*</span>
        </label>
        <input
          name="skillSet"
          type="text"
          value={formData.skillSet}
          onChange={handleChange}
          placeholder="Enter Skills"
          className="w-full border border-gray-300 rounded-sm px-3 h-[38px] text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          How did you come across the vacancy?
          <span className="text-red-500">*</span>
        </label>
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm"
        >
          <option value="">Select Source</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Current Location<span className="text-red-500">*</span>
          </label>
          <input
            name="currentLocation"
            type="text"
            value={formData.currentLocation}
            onChange={handleChange}
            placeholder="Enter Current Location"
            className="w-full border border-gray-300 rounded-sm px-3 h-[38px] text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Preferred Location<span className="text-red-500">*</span>
          </label>
          <select
              name="preferredLocation"
              value="Trichy" // fixed value
              disabled // make it non-editable
              className="w-full border border-gray-300 rounded-sm px-2 h-[38px] bg-gray-50 text-sm text-gray-700 cursor-not-allowed"
            >
              <option value="Trichy">Trichy</option>
            </select>

          </div>
        </div>

      <div className="pt-4 border-t border-gray-200">
        <label className="text-sm font-medium text-blue-500 mb-2 block">
          Upload Your Resume <span className="text-blue-500">*</span>
        </label>
        <div className="border border-dashed border-gray-400 rounded-sm w-full h-16 flex items-center justify-center text-sm text-gray-500">
          <input
            type="file"
            onChange={handleResumeChange}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="cursor-pointer px-3 py-1.5 border border-gray-300 rounded-sm bg-gray-50 hover:bg-gray-100 transition"
          >
            {resume ? resume.name : "Browse"}
          </label>
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={handleCancel}
          className="px-6 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          Submit Application
        </button>
      </div>
    </form>
  </div>
</section>

);
};

export default ApplyForm;