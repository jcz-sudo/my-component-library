import type {App as app} from "vue"
import JsonTree from './components/Tree';


export {
  JsonTree
}
export default function install(app:app){
  app.component("jsonTree",JsonTree)
}