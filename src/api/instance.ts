import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_KEY}`,
    },
});

export default instance;
