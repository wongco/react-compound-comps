import React, { Component } from 'react';
import Dessert from '../Templates/Dessert';

const ApplePie = props => (
  <Dessert>
    <Dessert.Name>Apple Pie!</Dessert.Name>
    <Dessert.Calories>340</Dessert.Calories>
    <Dessert.Description>
      Delicious, full of Apples, Number one favorite dessert. The best.
    </Dessert.Description>
    <Dessert.EatClick disabled={false}>Click Me to Eat!</Dessert.EatClick>
  </Dessert>
);

export default ApplePie;
