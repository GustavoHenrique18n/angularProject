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
          userName:'gustavo',
          profilePhoto:'../assets/avatar.png'
        },
        {
          id:2,
          userName:'maria',
          profilePhoto:'../assets/secondaccount.jpg'
        }
      ]
    }
    groups () {
      return [
        {
          nameGroup:'quex',
          owner:'Gustavo Henrique',
          userGroup:[
            {id:1,userName:'fake memberAdmin',profilePhoto:'https://i.pravatar.cc/150?u=fake@pravatar.com'},
            {id:1,userName:'fake member',profilePhoto:'https://i.pravatar.cc/150?u=fake@pravatar.com'},
            {id:1,userName:'fake member',profilePhoto:'https://i.pravatar.cc/150?u=fake@pravatar.com'},
            {id:1,userName:'fake member',profilePhoto:'https://i.pravatar.cc/150?u=fake@pravatar.com'},
            {id:1,userName:'fake member',profilePhoto:'https://i.pravatar.cc/150?u=fake@pravatar.com'},
            {id:1,userName:'fake member',profilePhoto:'https://i.pravatar.cc/150?u=fake@pravatar.com'},
          ]
        }
      ]
    }
}

