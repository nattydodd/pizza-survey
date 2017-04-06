var assert = require('assert');
import React from 'react';
import App from '../components/app';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('App', function() {
    it('should have a render method', function() {
      assert.equal(typeof App.render, 'function');
    });
});
