import { StorageUtil } from '@/utils';
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';

// Declare type for API response
type ApiResponse<T> = {
  message: boolean;
  status: number;
  data: T;
};

/**
 * Api service from axios
 */
class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com',
    });
  }

  /**
   * Get instance of ApiService
   * @returns {ApiService} The singleton instance of ApiService
   */
  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  /**
   * Set access token to axios instance
   * @param {string | null} token - The access token to set
   */
  async setAccessToken(token: string | null) {
    this.accessToken = token;
    if (this.accessToken) {
      this.axiosInstance.defaults.headers.common['Authorizations'] =
        `Bearer ${this.accessToken}`;
    } else {
      delete this.axiosInstance.defaults.headers.common['Authorizations'];
    }
  }

  /**
   * Set refresh token to axios instance
   * @param {string} token - The refresh token to set
   */
  async setRefreshToken(token: string) {
    this.refreshToken = token;
  }

  /**
   * Get data from API
   * @param {string} endpoint - The endpoint to get data
   * @returns {Promise<AxiosResponse<ApiResponse<T>>>} The response from API
   */
  async get<T>(endpoint: string): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() => this.axiosInstance.get(endpoint));
      return response;
    } catch {
      throw new Error('Something wrong');
    }
  }

  /**
   * Post data to API
   * @param {string} endpoint - The endpoint to post data
   * @param {unknown} data - The data to post
   * @returns {Promise<AxiosResponse<ApiResponse<T>>>} The response from API
   */
  async post<T>(
    endpoint: string,
    data: unknown
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.post(endpoint, data)
        );
      return response;
    } catch {
      throw new Error('Something wrong');
    }
  }

  /**
   * Put data to API
   * @param {string} endpoint - The endpoint to put data
   * @param {unknown} data - The data to put
   * @returns {Promise<AxiosResponse<ApiResponse<T>>>} The response from API
   */
  async put<T>(
    endpoint: string,
    data: unknown
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.put(endpoint, data)
        );
      return response;
    } catch {
      throw new Error('Something wrong');
    }
  }

  /**
   * Delete data from API
   * @param {string} endpoint - The endpoint to delete data
   * @returns {Promise<AxiosResponse<ApiResponse<T>>>} The response from API
   */
  async delete<T>(endpoint: string): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.delete(endpoint)
        );
      return response;
    } catch {
      throw new Error('Something wrong');
    }
  }

  /**
   * Request with retry
   * @param {() => Promise<AxiosResponse<ApiResponse<T>>>} requestFunction - The function to request
   * @returns {Promise<AxiosResponse<ApiResponse<T>>>} The response from API
   */
  private async requestWithRetry<T>(
    requestFunction: () => Promise<AxiosResponse<ApiResponse<T>>>
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      this.setAccessToken(StorageUtil.getLocal('token'));
      const response = await requestFunction();
      return response;
    } catch (err) {
      const error = err as AxiosError<AxiosResponse<T>>;
      // Check error related to expired token
      if (error.response && error.response.status === 401) {
        // If accessToken is expired, handle refresh token here
        await this.refreshAccessToken();
        // After refresh token successfully, handle calling API agian
        return await requestFunction();
      } else {
        throw error;
      }
    }
  }

  /**
   * Refresh access token
   */
  private async refreshAccessToken() {
    // Send refresh token request and update new accessToken
    try {
      const response = await this.axiosInstance.post('/refreshToken', {
        refreshToken: this.refreshToken,
      });
      const newAccessToken = response.data.accessToken;
      this.setAccessToken(newAccessToken);
    } catch {
      throw new Error('Failed to refresh access token');
    }
  }
}

export default ApiService.getInstance();
