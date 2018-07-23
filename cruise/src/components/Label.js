import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    line-height: 30px;
    font-size: 14px;
    border: none;
    padding: 1px 2px;
    background: ${ props=>  {
            switch (props.bk) {
                case 'banana':
                    return '#FF9A2A'
                case 'leaf':
                    return '#7FBC39'
                default:
                    return '#E1E4E6'
            }
        }
    };
`

export default Label;
