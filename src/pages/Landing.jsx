import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section
          id="home"
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Achieve Your Dream Career
            </h2>
            <p className="text-lg md:text-2xl mb-8">
              Expert guidance to help you succeed in your career path
            </p>
            <a
              href="#services"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </a>
          </div>
        </section>

        <section id="about" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-center max-w-2xl mx-auto">
              We provide expert career guidance and resources to help you
              achieve your career goals. Our team of experienced professionals
              is dedicated to providing personalized advice and support to help
              you navigate your career path successfully.
            </p>
          </div>
        </section>

        <section id="services" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow rounded">
                <h3 className="text-2xl font-bold mb-4">Career Coaching</h3>
                <p>
                  Personalized career coaching sessions to help you identify and
                  achieve your career goals.
                </p>
              </div>
              <div className="bg-white p-6 shadow rounded">
                <h3 className="text-2xl font-bold mb-4">Resume Writing</h3>
                <p>
                  Professional resume writing services to help you create a
                  standout resume that gets noticed.
                </p>
              </div>
              <div className="bg-white p-6 shadow rounded">
                <h3 className="text-2xl font-bold mb-4">
                  Job Search Assistance
                </h3>
                <p>
                  Expert advice and resources to help you effectively search for
                  and secure your next job.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;

//const navigate = useNavigate();
// <button onClick={() => navigate("/login")}>Go to Login</button>
