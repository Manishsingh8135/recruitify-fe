"use client"
import { FormEvent, useState } from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';

function UserProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    location: '',
    education: '',
    experience: '',
    resume: null,
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(profile);
    // Add your form submission logic here
  };

  return (
    <div className="mx-auto my-10  shadow-md max-w-[85%] dark:bg-gray-800 dark:text-white bg-white mt-32 rounded-lg p-12 transition-shadow hover:shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          {/* Name */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="name">Name</Label>
            <TextInput id="name" name="name" type="text" onChange={handleChange} />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="email">Email</Label>
            <TextInput id="email" name="email" type="email" onChange={handleChange} />
          </div>

          {/* Phone */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="phone">Phone</Label>
            <TextInput id="phone" name="phone" type="tel" onChange={handleChange} />
          </div>

          {/* Gender */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="gender">Gender</Label>
            <TextInput id="gender" name="gender" type="text" onChange={handleChange} />
          </div>
        </div>

        {/* Right Column */}
        <div>
          

          {/* Location */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="location">Location</Label>
            <TextInput id="location" name="location" type="text" onChange={handleChange} />
          </div>

          {/* Education */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="education">Education</Label>
            <TextInput id="education" name="education" type="text" onChange={handleChange} />
          </div>

          {/* Experience */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="experience">Experience</Label>
            <Textarea id="experience" name="experience" onChange={handleChange} />
          </div>

          {/* Resume */}
          <div className="flex flex-col space-y-2 p-3">
            <Label htmlFor="resume">Resume</Label>
            <TextInput id="resume" name="resume" type="file" onChange={handleChange} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 p-3">
          <Button type="submit" className="w-full md:w-auto px-8 rounded-full font-bold text-4xl">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
