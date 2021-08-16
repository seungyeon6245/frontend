import React, { useEffect } from 'react';

const { kakao } = window; // 이걸 해줘야 카카오 api 에서 사용하는 변수들을 리엑트가 알 수 있다.

const Map = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id='myMap' style={{
            width: '500px',
            height: '500px'
        }}></div>
    );
}

export default Map; 