import axios from 'axios'

export function fetch(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            headers: {
                // 'Content-Type': 'application/json',
            },
            timeout: 10000
        });
        instance(options)
            .then(response => {
                if (response.status == '200') {
                    if (response.data.Status == '200') {
                        resolve(response.data);
                    } else {
                        reject(response.data.Msg)
                    }
                }
            })
            .catch(err => {
                reject(err)
            })
    });
}