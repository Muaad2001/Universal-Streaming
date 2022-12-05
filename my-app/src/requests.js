const APIKEY = "ce17d631f999e4c131077cd8ee3b120c";

const requests = {
    fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
}

export default requests;