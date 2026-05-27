"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../../components/Footer";
import schoolsData from "../../../../public/schools.json";
import PageTitle from "../../components/PageTitle";

const OurSchoolsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Get unique values dynamically for filters
  const uniqueDistricts = useMemo(() => {
    const districts = schoolsData.map((s) => s.district).filter(Boolean);
    return Array.from(new Set(districts)).sort();
  }, []);

  const uniqueTypes = useMemo(() => {
    const types = schoolsData.map((s) => s.type).filter(Boolean);
    return Array.from(new Set(types)).sort();
  }, []);

  // Extract states dynamically from address string (e.g. "KERALA", "KARNATAKA")
  const uniqueStates = useMemo(() => {
    const statesList = schoolsData
      .map((s) => {
        const addr = s.address || "";
        if (addr.toUpperCase().includes("KERALA")) return "KERALA";
        if (addr.toUpperCase().includes("KARNATAKA")) return "KARNATAKA";
        if (addr.toUpperCase().includes("TAMIL NADU") || addr.toUpperCase().includes("TAMILNADU")) return "TAMIL NADU";
        return null;
      })
      .filter(Boolean);
    return Array.from(new Set(statesList)).sort();
  }, []);

  // 2. Filter logic
  const filteredSchools = useMemo(() => {
    return schoolsData.filter((school) => {
      // General text search
      const textToSearch = `${school.school_name} ${school.address} ${school.district} ${school.contact}`.toLowerCase();
      const matchesSearch = textToSearch.includes(searchTerm.toLowerCase());

      // Type Filter
      const matchesType = schoolType ? school.type === schoolType : true;

      // District Filter
      const matchesDistrict = districtFilter ? school.district === districtFilter : true;

      // State Filter
      let matchesState = true;
      if (stateFilter) {
        matchesState = (school.address || "").toUpperCase().includes(stateFilter.toUpperCase());
      }

      return matchesSearch && matchesType && matchesDistrict && matchesState;
    });
  }, [searchTerm, schoolType, districtFilter, stateFilter]);

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, schoolType, districtFilter, stateFilter, entriesPerPage]);

  // 3. Pagination math
  const totalEntries = filteredSchools.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);

  const paginatedSchools = useMemo(() => {
    return filteredSchools.slice(startIndex, startIndex + entriesPerPage);
  }, [filteredSchools, startIndex, entriesPerPage]);

  // Helper to split contacts cleanly
  const parseContacts = (contactString) => {
    if (!contactString) return [];
    return contactString
      .split(/[,/]/)
      .map((c) => c.trim())
      .filter((c) => c.length > 2);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
      <PageTitle title="Our Schools" />

      {/* ── HEADER: compact fixed-height banner matching Mission/Vision ── */}
      <div className="relative text-white overflow-hidden" style={{ height: "220px" }}>

        {/* Background image — natural object-cover, form_d.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/form_d.png"
            alt="Albirr Header Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* subtle dark overlay matching mission/vision for text readability */}
          <div className="absolute inset-0 bg-black/25" />
        </div>



        {/* Page title — pinned exactly to bottom-left of header banner like Mission/Vision */}
        <div className="absolute bottom-4 left-6 sm:left-8 md:left-10 xl:left-12 z-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            Our Schools
          </h1>
        </div>

      </div>
      {/* ── END HEADER ── */}

      {/* ── CONTENT AREA: pure white ── */}
      <main className="flex-grow w-full bg-white">
        <div className="p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center max-w-7xl mx-auto w-full">
          <div className="w-full flex flex-col gap-8">

            {/* Filters Dashboard Panel (Light grey box with border) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-sm">
              {/* Filter: School Type */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[11px] font-extrabold text-[#0c2557] uppercase tracking-wider">
                  School Type
                </label>
                <select
                  value={schoolType}
                  onChange={(e) => setSchoolType(e.target.value)}
                  className="w-full bg-white text-slate-800 text-sm font-semibold px-3 py-2.5 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-[#9C4A9C]/40 transition cursor-pointer"
                >
                  <option value="">All School Types</option>
                  {uniqueTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter: District */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[11px] font-extrabold text-[#0c2557] uppercase tracking-wider">
                  District
                </label>
                <select
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value)}
                  className="w-full bg-white text-slate-800 text-sm font-semibold px-3 py-2.5 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-[#9C4A9C]/40 transition cursor-pointer"
                >
                  <option value="">All Districts</option>
                  {uniqueDistricts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter: State */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[11px] font-extrabold text-[#0c2557] uppercase tracking-wider">
                  State
                </label>
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full bg-white text-slate-800 text-sm font-semibold px-3 py-2.5 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-[#9C4A9C]/40 transition cursor-pointer"
                >
                  <option value="">All States</option>
                  {uniqueStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Global Search Input */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[11px] font-extrabold text-[#0c2557] uppercase tracking-wider">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search name, address..."
                    className="w-full bg-white text-slate-800 text-sm font-semibold pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-[#9C4A9C]/40 transition placeholder:text-slate-400"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Selector & Counter bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <span>Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="bg-white border border-slate-300 rounded px-2 py-1 outline-none text-slate-800 focus:ring-1 focus:ring-[#9C4A9C]"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span>entries</span>
              </div>

              <div className="text-slate-500 text-xs sm:text-sm font-bold">
                Found <span className="text-[#0c2557] font-extrabold">{totalEntries}</span> schools matching filters
              </div>
            </div>

            {/* Directory Results View */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              {/* Desktop Table */}
              <table className="hidden md:table w-full border-collapse bg-white text-slate-800 text-left text-xs lg:text-[13px] leading-relaxed">
                <thead>
                  <tr className="bg-[#0c2557] text-white font-bold uppercase tracking-wider text-[11px] lg:text-[12px]">
                    <th className="py-4 px-4 w-12 text-center rounded-tl-xl">#</th>
                    <th className="py-4 px-4 w-28">Type</th>
                    <th className="py-4 px-4 font-bold">School Name</th>
                    <th className="py-4 px-4 w-32">District</th>
                    <th className="py-4 px-4">Address</th>
                    <th className="py-4 px-4 w-44 rounded-tr-xl">Contact Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedSchools.length > 0 ? (
                    paginatedSchools.map((school, idx) => {
                      const globalIdx = startIndex + idx + 1;
                      const contacts = parseContacts(school.contact);
                      const isEven = idx % 2 === 0;
                      return (
                        <tr
                          key={school.number || globalIdx}
                          className={`${isEven ? "bg-white hover:bg-slate-50/70" : "bg-slate-50/40 hover:bg-slate-50/70"
                            } transition-colors`}
                        >
                          <td className="py-4 px-4 text-center font-bold text-slate-400">
                            {globalIdx}
                          </td>
                          <td className="py-4 px-4">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${school.type === "Primary"
                                ? "bg-purple-100 text-purple-700 border border-purple-200/50"
                                : "bg-emerald-100 text-emerald-700 border border-emerald-200/50"
                              }`}>
                              {school.type}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-extrabold text-[#0c2557]">
                            {school.school_name}
                          </td>
                          <td className="py-4 px-4 font-bold text-slate-600">
                            {school.district}
                          </td>
                          <td className="py-4 px-4 text-slate-600 font-medium max-w-xs whitespace-pre-line">
                            {school.address}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex flex-wrap gap-1.5">
                              {contacts.length > 0 ? (
                                contacts.map((phone, cIdx) => (
                                  <a
                                    key={cIdx}
                                    href={`tel:${phone}`}
                                    className="flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/60 px-2 py-1 rounded-md text-[11px] font-bold transition-all shadow-sm shrink-0 active:scale-95"
                                  >
                                    <Phone className="w-3 h-3 shrink-0 text-emerald-600" />
                                    {phone}
                                  </a>
                                ))
                              ) : (
                                <span className="text-slate-400 text-xs italic">N/A</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 px-4 text-center text-slate-500 font-semibold text-sm">
                        No schools found matching your search filters. Try clearing some selections.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Mobile Stacked Cards View */}
              <div className="block md:hidden bg-white text-slate-800 divide-y divide-slate-100">
                {paginatedSchools.length > 0 ? (
                  paginatedSchools.map((school, idx) => {
                    const globalIdx = startIndex + idx + 1;
                    const contacts = parseContacts(school.contact);
                    return (
                      <div key={school.number || globalIdx} className="p-5 flex flex-col gap-3.5 text-left">
                        {/* Title Header */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex gap-2.5 items-center">
                            <span className="text-sm font-bold text-slate-400">#{globalIdx}</span>
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${school.type === "Primary"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-emerald-100 text-emerald-700"
                              }`}>
                              {school.type}
                            </span>
                          </div>
                          <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded">
                            {school.district}
                          </span>
                        </div>

                        {/* Name */}
                        <h3 className="text-base font-extrabold text-[#0c2557] leading-tight">
                          {school.school_name}
                        </h3>

                        {/* Address */}
                        <div className="flex gap-2 items-start text-xs text-slate-600 font-medium">
                          <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="whitespace-pre-line">{school.address}</span>
                        </div>

                        {/* Contact Actions */}
                        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                          {contacts.length > 0 ? (
                            contacts.map((phone, cIdx) => (
                              <a
                                key={cIdx}
                                href={`tel:${phone}`}
                                className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-100/60 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95"
                              >
                                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                                {phone}
                              </a>
                            ))
                          ) : (
                            <span className="text-slate-400 text-xs italic">No contact details</span>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="py-12 px-4 text-center text-slate-500 font-semibold text-sm">
                    No schools found matching your search filters.
                  </div>
                )}
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div className="text-slate-500 text-xs sm:text-sm font-semibold">
                  Showing <span className="text-slate-700 font-bold">{startIndex + 1}</span> to{" "}
                  <span className="text-slate-700 font-bold">{endIndex}</span> of{" "}
                  <span className="text-slate-700 font-bold">{totalEntries}</span> entries
                </div>

                <div className="flex items-center gap-1">
                  {/* Prev */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 transition active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer text-xs font-bold"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                    let pageNum = index + 1;
                    if (currentPage > 3 && totalPages > 5) {
                      pageNum = currentPage - 3 + index;
                      if (pageNum + (4 - index) > totalPages) {
                        pageNum = totalPages - 4 + index;
                      }
                    }

                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold border transition cursor-pointer select-none active:scale-95 ${isActive
                            ? "bg-[#9C4A9C] border-[#9C4A9C] text-white shadow"
                            : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Ellipsis */}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="px-2 text-slate-400 text-xs font-bold">...</span>
                  )}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold border transition cursor-pointer select-none active:scale-95 ${currentPage === totalPages
                          ? "bg-[#9C4A9C] border-[#9C4A9C] text-white shadow"
                          : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      {totalPages}
                    </button>
                  )}

                  {/* Next */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 transition active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer text-xs font-bold"
                    aria-label="Next Page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* ── END CONTENT AREA ── */}

      <Footer className="bg-transparent" />
    </div>
  );
};

export default OurSchoolsPage;
