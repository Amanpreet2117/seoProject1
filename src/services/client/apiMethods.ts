import instance from './apiConfig';

export const getClientSideData = async (endpoint: string) => {
    const response = await instance.get(endpoint);
    return response
}

export const postData = async (endpoint: string, data: any) => {
    const response = await instance.post(endpoint, data)
    return response
}