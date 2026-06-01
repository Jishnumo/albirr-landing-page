import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Target, Compass, Building, User } from "lucide-react";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

export const metadata = {
  title: "Chairman's Message",
  description:
    "Read the Chairman's Message from ALBiRR Schools and learn about our values, vision, and commitment to balanced Islamic education.",
  alternates: {
    canonical: "/pages/chairmansmessage",
  },
  openGraph: {
    title: "Chairman's Message | ALBiRR Schools",
    description:
      "Read the Chairman's Message from ALBiRR Schools and learn about our values, vision, and commitment to balanced Islamic education.",
    url: "/pages/chairmansmessage",
  },
};

// NOTE: This page must be a Server Component (no "use client") because it exports `metadata`.
// The interactive UI is implemented in `ChairmansMessageClient`.
import ChairmansMessageClient from "./view";

export default function ChairmansMessagePage() {
  return <ChairmansMessageClient />;
}
