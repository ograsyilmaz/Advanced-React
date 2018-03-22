import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    it('renders correctly', () => {
        renderer.create(
            <div>Hello</div>
        );
    });
});