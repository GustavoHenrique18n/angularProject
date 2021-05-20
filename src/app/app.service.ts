import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

   async getAllPosts () {
     try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
     } catch (error) {
       throw new Error (error.message)
     }
  }
}
