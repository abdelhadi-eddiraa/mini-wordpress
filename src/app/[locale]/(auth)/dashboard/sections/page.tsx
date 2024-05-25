'use client';

import React, { useState } from 'react';

import Frame from './frame';

const page = () => {
  const scrollBarWidth = 15;
  // Original sizes array
  const originalSizes = [
    { id: 2, title: '480px', width: 480 + scrollBarWidth },
    { id: 4, title: '720px', width: 720 + scrollBarWidth },
    { id: 5, title: '960px', width: 960 + scrollBarWidth },
    { id: 7, title: '1024', width: 1024 + scrollBarWidth },
  ];

  const [dimention, setDemention] = useState([originalSizes[2]]);

  const [site, setSite] = useState({
    src: 'http://localhost:3000',
    srcNew: '',
    frameHeight: 720,
  });

  const filterResponsiveViewer = (width: number) => {
    const adjustedWidth = width + scrollBarWidth;
    // Filter the original sizes array based on the specified width range
    const filteredSizes = originalSizes.filter(
      (size) => size.width === adjustedWidth,
    );
    // Update the state with the filtered sizes
    setDemention(filteredSizes);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (site.srcNew) {
      setSite((prevState) => ({ ...prevState, src: prevState.srcNew }));
    }
  };

  const handleChangeSrc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSite((prevState) => ({ ...prevState, srcNew: e.target.value }));
  };

  const handleChangeFrameHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSite((prevState) => ({
      ...prevState,
      frameHeight: parseInt(e.target.value, 10),
    }));
  };

  const frames = dimention.map((size, index) => (
    <Frame
      key={index}
      title={size?.title}
      filterResponsiveViewer={filterResponsiveViewer}
      height={site.frameHeight}
      width={size?.width}
    />
  ));
  return (
    <div>
      <ul className="frames">{frames}</ul>
    </div>
  );
};

export default page;
