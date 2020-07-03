// file path: src/index.js

import renderProfile from './profile/renderProfile';
import './index.css';

const profileData = {
    name: 'Horn',
    location: 'The World'
};

renderProfile(profileData);