import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history: string[] = JSON.parse(localStorage.getItem('history')!) || [];
  private APIKEY = '8XnhsezOHItHPJtk56ueCRROWaa1EkVf';
  private BASEURL = 'https://api.giphy.com/v1/gifs';
  private _limit = 10;

  public results: Gif[] = JSON.parse(localStorage.getItem('results')!) || [];

  constructor(private http: HttpClient) { }

  get history(): string[] {
    return [...this._history];
  }

  search(query: string) {
    query = query.trim().toLocaleLowerCase()

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.APIKEY)
      .set('limit', this._limit)
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.BASEURL}/search`, { params })
      .subscribe((res) => {
        this.results = res.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      })
  }
}
