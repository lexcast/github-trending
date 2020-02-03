import axios from "axios";

export const getLanguages = async () => {
    try {
        return await axios.get('https://github-trending-api.now.sh/languages');
    } catch (error) {
        console.error(error);
    }
}

export const getSpokenLanguages = async () => {
    try {
        return await axios.get('https://github-trending-api.now.sh/spoken_languages');
    } catch (error) {
        console.error(error);
    }
}

export const getRepositories = async (params) => {
    try {
        // if (!params.baths) {
        //     delete params.baths;
        // }
        // if (!params.types) {
        //     delete params.types;
        // }
        return await axios.get('https://github-trending-api.now.sh/repositories', { params });
    } catch (error) {
        console.error(error);
    }
}
