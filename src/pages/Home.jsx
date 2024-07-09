import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import Card from "../components/Card";

const Home = () => {
  const navigate = useNavigate();
  const [allBlogs, setAllBlogs] = useState([]);
  const [services, setServices] = useState([]);

  async function fetchBlogs() {
    let { data: blogs, error } = await supabase
      .from("blogs")
      .select("title,subtitle,slug,id");
    setAllBlogs(blogs);
  }
  async function fetchServices() {
    let { data: services, error } = await supabase
      .from("services")
      .select("title,subtitle,slug,id");
    setServices(services);
  }

  useEffect(() => {
    fetchBlogs();
    fetchServices();
  }, []);

  function handleLogout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="bg-blue-100 p-2 w-full text-center rounded-md text-2xl text-slate-700">
        Career guides
      </div>

      <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allBlogs.map((item) => (
          <Card key={item.id} data={item} route={"blog"} />
        ))}
      </div>

      <div className="bg-blue-100 p-2 w-full text-center rounded-md text-2xl text-slate-700 mt-8">
        Services
      </div>

      <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((item) => (
          <Card key={item.id} data={item} route={"service"} />
        ))}
      </div>
    </div>
  );
};

export default Home;
