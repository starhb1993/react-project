import { axios } from "&"


export async function getLikelist({ url, params }) {
    const res = await axios.get(url, { params })
    return {
        type: 'getLikelist',
        payload: res.data.result
    }
}

export async function getProductdetail({ url, params }) {
    const res = await axios.get(url, { params })
    return {
        type: 'getProductdetail',
        payload: res.data.result
    }
}