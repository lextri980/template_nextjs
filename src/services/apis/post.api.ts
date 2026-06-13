import { ApiService } from '@/services';

export const getPostApi = async () => await ApiService.get('/posts');
