import {Observable} from "rxjs";
import axios from "axios";

const requestGit = new Observable((observable) => {
  axios.get(`https://api.github.com/search/repositories?q=${123}`).then((res) => {
    observable.next(res)
  })
})

const requestJson = new Observable((observable) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${1}`).then((res) => {
    observable.next(res)
  })
})

requestGit.subscribe({
  next: (value: any) => console.log('Next github:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})

requestJson.subscribe({
  next: (value: any) => console.log('Next :', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})