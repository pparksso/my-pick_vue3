import instance from '@/api/instance';

/**
 * 장소 검색 api
 * @param word string
 * @returns json
 */
function fetchLocationList(word: string) {
    return instance.get(`/v2/local/search/keyword.json?query=${word}`);
}

const searchApi = { fetchLocationList };

export default searchApi;
