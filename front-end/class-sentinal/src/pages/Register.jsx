import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../state/auth/Action";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "STUDENT",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser({ userData: formData, navigate }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-green-400 font-mono">
      <div className="bg-[#0d0d0d] border border-green-500 shadow-[0_0_20px_#00ff00] rounded-lg p-8 w-96 transition transform hover:scale-[1.02] hover:shadow-[0_0_40px_#00ff00]">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-400 tracking-wider">
          [ REGISTER ACCESS ]
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="> Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-black border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="> Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-black border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-600"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="> Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-black border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-600"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 bg-black border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="STUDENT"> Student</option>
            <option value="ADMIN"> Admin</option>
          </select>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-black font-bold rounded hover:bg-green-400 hover:text-black transition duration-300"
          >
            ▶ Register
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-green-500">
          Already have access?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-300 cursor-pointer hover:underline hover:text-green-100"
          >
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
