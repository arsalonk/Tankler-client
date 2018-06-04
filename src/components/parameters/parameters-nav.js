import React from 'react';

export default function ParametersNav(props) {
  return (
    <nav className='tabnav'>
      <a href='/dashboard/parameters'>Alkalinity</a>
      <a href='/dashboard/parameters/ammonia'>Ammonia</a>
      <a href='/dashboard/parameters/calcium'>Calcium</a>
      <a href='/dashboard/parameters/nitrate'>Nitrate</a>
      <a href='/dashboard/parameters/pH'>pH</a>
      <a href='/dashboard/parameters/phosphate'>Phosphate</a>
      <a href='/dashboard/parameters/salinity'>Salinity</a>
      <a href='/dashboard/parameters/temperature'>Temperature</a>
    </nav>
  );
}