import axios from 'axios';
import type { CorreiosError, CorreiosResponse } from '@types';

const baseURL = 'https://rastreamento.correios.com.br/app/resultado.php';

export const fetchObject = async (code: string) => {
	const { data } = await axios.get<CorreiosResponse>(baseURL, {
		params: {
			objeto: code,
			mqs: 'S',
		},
	});

	return data;
};

export function isError(data: any): data is CorreiosError {
	return data.erro !== undefined;
}
