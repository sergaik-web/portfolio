export default class MyService {
  STATIC_URL = "http://localhost:3001";

  async getDataDb(url) {
    const res = await fetch(`${this.STATIC_URL}${url}`);
    if (!res.ok) {
      throw new Error(`Возникла ошибка ${res.error}`);
    }
    return res.json();
  }

  async getMenuItem() {
    return await this.getDataDb("/menu");
  }
}
