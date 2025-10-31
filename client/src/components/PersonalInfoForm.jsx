import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
import React from "react";

const PersonalInfoForm = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  }

  const fields = [
    {key: "full_name", label: "Full Name", icon: User, type: "text", required: true},
    {key: "email", label: "Email Address", icon: Mail, type: "text", required: true}, 
    {key: "phone", label: "Phone Number", icon: Phone, type: "tel"}, 
    {key: "location", label: "Location", icon: MapPin, type: "text"}, 
    {key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text"}, 
    {key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url"}, 
    {key: "website", label: "Personal Website", icon: Globe, type: "url"}, 
    
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className="text-sm text-gray-600">
        Get started with the personal information
      </p>
      <div className="flex items-center gap-2">
        <label className="cursor-pointer inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700">
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user"
              className="w-20 h-20 rounded-full object-cover object-center border border-slate-300 shadow-sm hover:opacity-80 transition-all duration-200"

            />
          ) : (
            <>
              <User className="size-10 p-2.5 border rounded-full" />
              Upload user image
            </>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>

        {data.image && (
  <div className="flex flex-col gap-1 pl-4 text-sm">
    <p className="font-medium text-gray-700">Remove Background</p>
    <label className="relative inline-flex items-center cursor-pointer text-gray-500 gap-3">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={() => setRemoveBackground((prev) => !prev)}
        checked={removeBackground}
      />

      <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
      <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
    </label>
  </div>
)}

      </div>
    
    {fields.map((field)=>{
        const Icon = field.icon;
        return(
            <div key={field.key} className='space-y-1 mt-5'>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <Icon className="size-4"/>
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                </label>
                <input type={field.type} value={data[field.key] || ""} onChange={(e)=>handleChange(field.key, e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm" placeholder={`Enter your ${field.label.toLowerCase()}`} required={field.required}/>
            </div> 
        )
    })}

    </div>
  );
};

export default PersonalInfoForm;
