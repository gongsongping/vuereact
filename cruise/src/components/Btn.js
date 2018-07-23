import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    height: 30px;
    border: none;
    width: ${ props=> props.square?'30px':''};
    line-height: ${ props=>props.square?'':'30px'};
    font-size: ${ props=>props.square?'18px':'14px'};
    padding-left: ${ props=>props.square?'':'1em'};
    padding-right: ${ props=>props.square?'':'1em'};
    color: ${ props=>  {
            switch (props.color) {
                case 'banana':
                    return '#FF9A2A'
                case 'leaf':
                    return '#7FBC39'
                case 'cyan':
                    return '#00B4CF'
                case 'deepcyan':
                    return '#01869A'
                case 'dark':
                    return '#2D4054'
                case 'lightdark':
                    return '#435466'
                default:
                    return 'white'
            }
        }
    };
    ;
    background: ${ props=>  {
            switch (props.bk) {
                case 'banana':
                    return '#FF9A2A'
                case 'leaf':
                    return '#7FBC39'
                case 'cyan':
                    return '#00B4CF'
                case 'deepcyan':
                    return '#01869A'
                case 'dark':
                    return '#2D4054'
                case 'lightdark':
                    return '#435466'
                default:
                    return 'white'
            }
        }
    };

    &:active {
        background: #81b8d8;
        color:#ee6654;
    };
    &:hover{
        // background:orange;
        opacity: 0.8;
    };

    &:focus{
        background:orange;
    };
    
`

export default Btn;