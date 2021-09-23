import React from 'react'
import Icon from '@ant-design/icons';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',  background : '#EDFBF7',
        }}>
            <p> vamos  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer