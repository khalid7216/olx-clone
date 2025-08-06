import React from 'react';
import './index.css';
import Header from './componets/Nav';
import Serach from './componets/Serach';
import CategoryGrid from './componets/category_grid_ui';
import ProductCard from './componets/ProductCard';
import Sample from './componets/Sample';
import Bikes from './componets/bikes';
import Houses from './componets/Houses';
import Video from './componets/video';
import Tablet from './componets/Tablet';
import Land from './componets/land';
import Jobs from './componets/jobs';










function App() {
  return (
    <>
      <Header />
      <Serach />
      <CategoryGrid />
      <ProductCard />
      <Sample />
      <Bikes />
      <Houses />
      <Video />
      <Tablet />
      <Land />
      <Jobs />
    </>




  );
}

export default App;
