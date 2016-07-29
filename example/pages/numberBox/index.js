"use strict";

import React from 'react';
import {NumberBox} from '../../../src';
import {Icon} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './style.less';

export default class NumberBoxDemo extends React.Component {
    render() {
        return (
            <Page className="numberBox" spacing>
              <Title text="默认" first></Title>
              <NumberBox/>
            </Page>
        );
    }
};
