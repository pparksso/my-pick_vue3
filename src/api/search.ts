import instance from '@/api/instance';

/**
 * 장소 검색 api
 * @param word string
 * @returns json
 */
function fetchLocationList(word: string, x: string, y: string) {
    return instance.get(`/v2/local/search/keyword.json?query=${word}&x=${x}&y=${y}&sort=distance`);
}

const searchApi = { fetchLocationList };

export default searchApi;
