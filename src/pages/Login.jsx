import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";

const Login = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState("login"); // 'login' or 'register'
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmEmail: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const resetFormData = () => {
    setFormData({
      email: "",
      password: "",
      confirmEmail: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSignUp = async () => {
    // Validate email and password
    const newErrors = {};
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Supabase sign-up logic
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (!error) {
      // Store necessary data in local storage
      localStorage.setItem("accessToken", data?.session.access_token);
      localStorage.setItem("refreshToken", data?.session.refresh_token);
      localStorage.setItem("user", JSON.stringify(data?.user));

      navigate("/home");
    } else {
      setErrors({ signUp: error.message });
    }
  };

  const handleSignIn = () => {
    // Supabase sign-in logic
    supabase.auth
      .signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      .then(({ data, error }) => {

        if (!error) {
          // Store necessary data in local storage
          localStorage.setItem("accessToken", data?.session.access_token);
          localStorage.setItem("refreshToken", data?.session.refresh_token);
          localStorage.setItem("user", JSON.stringify(data?.user));

          navigate("/home");
        } else {
          setErrors({ signIn: error.message });
        }
      })
      .catch((error) => {
        setErrors({ signIn: error.message });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (formType === "register") {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };

  const switchForm = () => {
    setFormType((prevType) => (prevType === "login" ? "register" : "login"));
    resetFormData();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="shadow-md p-6 rounded-lg">
        <div className="bg-primary text-white text-center p-2 rounded-md my-2">
          Career App
        </div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {formType === "register" && (
            <div className="mb-5">
              <label
                htmlFor="confirmEmail"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm email
              </label>
              <input
                type="email"
                id="confirmEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                value={formData.confirmEmail}
                onChange={handleChange}
              />
              {errors.confirmEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmEmail}
                </p>
              )}
            </div>
          )}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {formType === "register" && (
            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full p-2.5"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}
          {errors.signUp && (
            <p className="text-red-500 text-sm mt-1">{errors.signUp}</p>
          )}
          {errors.signIn && (
            <p className="text-red-500 text-sm mt-1">{errors.signIn}</p>
          )}
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {formType === "login" ? "Sign In" : "Register"}
          </button>
          <button
            type="button"
            onClick={switchForm}
            className="text-primary hover:text-primary-dark focus:outline-none font-medium text-sm px-5 py-2.5 text-center mt-3"
          >
            {formType === "login"
              ? "Don't have an account? Register"
              : "Already have an account? Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
