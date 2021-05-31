import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor () {}
    users () {
      return [
        {
          id:1,
          userName:'gustavo'
        },
        {
          id:2,
          userName:'maria'
        }
      ]
    }
    groups () {
      return []
    }
}

