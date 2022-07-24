const BASE_URL = process.env.REACT_APP_BASE_URL;

export const newsServices = {

    getNews: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}getArticlesByUid?uuId=0&sId=5`, {
                method: 'POST',
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

}