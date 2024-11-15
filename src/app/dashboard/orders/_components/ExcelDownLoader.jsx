"use client";

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelDownLoader = ({ data,query }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Format date to DD/MM/YYYY
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Filter data by date
  const filterDataByDate = () => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();

    return data.filter((item) => {
      const itemDate = item.date ? new Date(item.date).getTime() : null;
      return itemDate && itemDate >= start && itemDate <= end;
    });
  };

  // Generate Excel file
  const downloadExcel = () => {
    const filteredData = filterDataByDate();

    if (filteredData.length === 0) {
      alert('No data found for the selected date range.');
      return;
    }

    // Clean up data: Remove _id and isSuccess, and format dates
    const cleanedData = filteredData.map(({ _id, isSuccess, ...rest }) => ({
      ...rest,
      date: rest.date ? formatDate(rest.date) : undefined,
    }));

    const worksheet = XLSX.utils.json_to_sheet(cleanedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Filtered Data');

    const fileName = `Order_${query}_${startDate}_to_${endDate}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div style={{ padding: '20px' }} className="flex items-center text-base gap-4">
      <div style={{ marginBottom: '10px' }}>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <button
        onClick={downloadExcel}
        style={{
          padding: '6px 15px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Download Excel
      </button>
    </div>
  );
};

export default ExcelDownLoader;
