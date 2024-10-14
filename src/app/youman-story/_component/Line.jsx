"use client";

import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';

const items = [
  { title: '1', content: 'Event 1' },
  { title: '2', content: 'Event 2' },
  { title: '3', content: 'Event 3' },
];

const Timeline = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

  return (
    <div>
      {isClient && <Chrono items={items} mode="HORIZONTAL" disableToolbar={true} cardLess={true} />}
    </div>
  );
};

export default Timeline;
