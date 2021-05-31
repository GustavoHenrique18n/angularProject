import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  showtasks:any[]= []

  constructor () {}
    getBindNotes () {
     return []
    }
    getPublicFolder () {
      return [
        {
          id:1,
          folderName:'FRONTEND',
          color:'',
          tasks:[
            {
              id:1,
              titleTask:'DesenLorem ipsum dolor sit amet, consectetur efficitur.',
              user:'gustavo henrique',
              reference:[
                { nameChip:'bug',color:'red'}
              ],
            },
            {
              id:2,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'alexandre',
              reference:[
                { nameChip:'teste',color:'blue'},
                { nameChip:'reuniao',color:'yellow'}
              ]
            },
            {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fere',
              reference:[
                { nameChip:'bug',color:'#606e64'},
                { nameChip:'reuniao',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fere',
              reference:[
                { nameChip:'bug',color:'#606e64'},
                { nameChip:'reuniao',color:'#35de62'}
              ]
            },
                                    {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fere',
              reference:[
                { nameChip:'bug',color:'#606e64'},
                { nameChip:'reuniao',color:'#35de62'}
              ]
            },
                                    {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fere',
              reference:[
                { nameChip:'bug',color:'#606e64'},
                { nameChip:'reuniao',color:'#35de62'}
              ]
            },
                                    {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fere',
              reference:[
                { nameChip:'bug',color:'#606e64'},
                { nameChip:'reuniao',color:'#35de62'}
              ]
            },
                                    {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fere',
              reference:[
                { nameChip:'bug',color:'#606e64'},
                { nameChip:'reuniao',color:'#35de62'}
              ]
            },

          ]
        },
        {
          id:2,
          folderName:'BACKEND',
          color:'',
          tasks:[
            {
              id:1,
              titleTask:'DesenLorem ipsum dolor sit amet, consectetur efficitur.',
              user:'fabio',
              reference:[
                { nameChip:'1231',color:'#a4b567'},
                { nameChip:'ap1231i',color:'#b51f42'},
                { nameChip:'ap123i',color:'#db91a2'},
              ]
            },
            {
              id:2,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'carlos',
              reference:[
                { nameChip:'documentacao',color:'#3e4782'},
                { nameChip:'reuniao',color:'#a65326'}
              ]
            },
            {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },

                        {
              id:3,
              titleTask:'Lorem ipsum dolor sit amet, consectetur efficitur.',
              user:'maria',
              reference:[
                { nameChip:'teste',color:'#8024bd'},
                { nameChip:'teste',color:'#35de62'}
              ]
            },
          ]
        },
      ]
    }
    folderContent (id:any) {
      const folders = this.getPublicFolder()
      for(let content of folders){
        if(content.id === id){
          this.showtasks = content.tasks
        }
      }
      return false
    }
    getFolderContent () {
      return this.showtasks
    }
}
