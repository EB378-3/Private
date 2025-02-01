"use client";

import { Suspense } from "react";

import { Authenticated, useTranslation } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import ResponsiveAppBar from "@components/Front/Nav";
import HeroSection from "@components/Front/Hero";
import Contact from "@components/Front/Contact";
import AircraftOptions from "@components/Front/AircraftOptions";

export default function IndexPage() {
  const { translate: t } = useTranslation();
  return (
    <Suspense>
      <Authenticated key="home-page">
        <ResponsiveAppBar/>
        <HeroSection />
        <AircraftOptions/>
        <Contact/>

        
      </Authenticated>
    </Suspense>
  );
}
