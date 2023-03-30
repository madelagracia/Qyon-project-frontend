import { Environment } from "../../../environment";
import { Api } from "../axios-config";


export interface IOfxList {
    id: number;
    nameFile: string;
}

interface IOfxDetails {
    id: number;
    nameFile: string;

}

type TOfxTotalCount = {
    data: IOfxList[];
    totalCount: number;
}

const getAll = async (page = 1, filter = '', id = ''): Promise<TOfxTotalCount | Error> => {

    //TODO ajuste backend com nomes de variaveis e rota



    try {
        const urlRelative = `/api/ofx/getAll?_page=${page}&_limit=${Environment.MAX_ROW}&fileName_like=${filter}&id_like=${id}`;

        const { data } = await Api.get(urlRelative);

        if (data) {
            return {
                data,
                totalCount: Number(Environment.MAX_ROW),
            }
        }
        return new Error('Ofx list error');


    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Ofx list error.');
    }
};

const getById = async (id: number): Promise<IOfxDetails | Error> => {
    try {
        const { data } = await Api.get(`/api/ofx/getById/${id}`);

        if (data) {
            return data;
        }

        return new Error('Ofx list error.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Ofx list error.');
    }
};

const upload = async (file: Omit<IOfxDetails, 'id'>): Promise<number | Error> => {
    try {

        const { data } = await await Api.post<IOfxDetails>(`/api/ofx/upload`, file);
        if (data) {
            return data.id;
        }

        return new Error('Upload file error.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Upload file error');
    }
};


const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/api/ofx/delete/${id}`);
      } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Delete file error.');
      }
};

export const OfxService = {
    getAll,
    getById,
    upload,
    deleteById,
};