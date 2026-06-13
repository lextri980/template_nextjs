/**
 * Local storage and Cookie storage handler
 */
export default class StorageUtil {
  /**
   * Get item from local storage
   * @param {string} item - Item name
   * @returns {string | null} Local storage item value
   */
  static getLocal(item: string): string | null {
    const localItem = localStorage.getItem(item);
    return localItem;
  }

  /**
   * Set item to local storage
   * @param {string} itemName - Item name
   * @param {string} item - Item value
   */
  static setLocal(itemName: string, item: string): void {
    localStorage.setItem(itemName, item);
  }

  /**
   * Get item from cookie storage
   * @param {string} item - Item name
   * @returns {string} Cookie item value
   */
  static getCookie(item: string): string {
    const name = item + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const splitedCookie = decodedCookie.split(';');
    for (let i = 0; i < splitedCookie.length; i++) {
      let cookie = splitedCookie[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  }

  /**
   * Set item to cookie storage
   * @param {string} itemName - Item name
   * @param {string} item - Item value
   */
  static setCookie<T extends string | number | boolean | object>(
    itemName: string,
    item: T
  ) {
    document.cookie = `${itemName}=${item}`;
  }

  /**
   * Remove item from storage
   * @param {string} item - Item name
   */
  static removeStorage(item: string): void {
    localStorage.removeItem(item);
    document.cookie = `${item}=`;
  }

  /**
   * Remove many items from storage
   * @param {string[]} array - Item names
   */
  static removeManyStorage(array: string[]): void {
    array.forEach((item) => {
      localStorage.removeItem(item);
      document.cookie = `${item}=`;
    });
  }
}
