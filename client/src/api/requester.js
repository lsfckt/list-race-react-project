export default async function requester(method, url, data, accessToken) {

    const options = {};

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        
        if (!accessToken) {
            options.headers = {
                'Content-Type': 'application/json',
            };

        } else {
            options.headers = {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            };
        }

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const patch = requester.bind(null, 'PATCH');
export const del = requester.bind(null, 'DELETE');