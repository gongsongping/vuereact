import React from 'react';
import styled from 'styled-components';

const His = styled.div`
    color: #999;
    padding-left: 25px;
    & li {
        font-size: 12px;
        text-overflow: ellipsis;
        &:hover {
            color: #00B4CF;
        }
    }
`

export default function History (props) {
    return <His>
        <h4>History</h4>
        <ul>
            {props.historyData.map((h,i)=>{
                return <li key={i} >{h}</li>
            })}
        </ul>
    </His>
}