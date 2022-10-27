const useHttp = () => {
    const post = async (url = '', data = {}, token = '') => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            return response.json();
        } catch (e) {
            throw new Error(e);
        }
    };

    const get = async (url = '', token = '') => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            return response.json();
        } catch (e) {
            throw new Error(e);
        }
    };

    return {
        post,
        get
    };
};

export default useHttp;