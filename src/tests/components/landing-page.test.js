import React from 'react';
import {LandingPage} from '../../components/landing-page';
import {shallow} from 'enzyme';

describe('LandingPage', () => {
  it('should render without crashing', function() {
    shallow(<LandingPage />);
  });
});