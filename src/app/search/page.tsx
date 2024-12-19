"use client";

import React, { useEffect, useState } from "react";

export default function PaginationSearch() {
  const [data, setData] = useState([]); // Menyimpan hasil data
  const [searchQuery, setSearchQuery] = useState(""); // Query pencarian
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const [isLoading, setIsLoading] = useState(false); // Indikator loading

  const itemsPerPage = 20; // Jumlah item per halaman

  // Fetch data berdasarkan query pencarian dan halaman
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Tampilkan indikator loading
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchQuery}&limit=${itemsPerPage}&skip=${
            (currentPage - 1) * itemsPerPage
          }`
        );
        const result = await response.json();
        setData(result.products);
        console.log("https://dummyjson.com/products/search?q="+searchQuery+"&limit="+itemsPerPage+"&skip="+(currentPage-1)*itemsPerPage);
        console.log(searchQuery,currentPage, itemsPerPage);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Sembunyikan indikator loading
      }
    }
    fetchData();
  }, [searchQuery, currentPage]); // Jalankan setiap kali query atau halaman berubah

  // Event handler untuk pencarian
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset ke halaman 1 setiap kali melakukan pencarian
  };

  // Render
  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search products..."
        className="border rounded-lg p-2 mb-4"
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.id} {item.title}</li>
          ))}
        </ul>
      )}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>
        <span className="px-4">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
