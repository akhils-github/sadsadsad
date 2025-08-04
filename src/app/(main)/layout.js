"use client";
import Footer from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import Loader from "@/components/layout/Loader";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function MainLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800); // Simulates loading for 3 seconds
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <section className="">
      <Header />
      <div className=" mt-20">{children}</div>
      <Footer />
    </section>
  );
}
