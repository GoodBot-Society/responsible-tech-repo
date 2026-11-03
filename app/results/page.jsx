"use client";

import React, { useState, useEffect } from "react";
import Search from "../../components/home-page-ui/Search";
import { getDataForTable } from "@/lib/actions"; // import data fetching function
import { DataTable } from "../comps/DataTable";
import { columns } from "../artifact/[id]/columns";

export default function Results({ searchParams }) {
  const [data, setData] = useState([]); // state to store the data
  const query = searchParams?.query || "";

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data using the query
        const fetchedData = await getDataForTable({ query });
        setData(fetchedData);
      } catch (error) {
        return { message: "Database error: Failed to fetch data" };
      }
    }

    fetchData();
  }, [query]);

  return (
    <>
      <section className="container relative mt-10 ">
        <section className="overflow-hidden rounded-lg border bg-background shadow ">
          <div className=" flex-col md:flex">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <Search />
              </div>
            </div>

            <div className="flex-1 space-y-4 p-8 pt-6">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Results:</h2>
                <div className="flex items-center space-x-2">
                  {/* @todo add feedback button */}
                </div>
              </div>

              <div className=" items-center justify-between space-y-2">
                {/* Render DataTable with fetched data */}
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
