import type {App as app} from "vue"
import JsonTree from './components/Tree';
import "@/assets/jsonFormat.scss"


export {
  JsonTree
}
export default function install(app:app){
  app.component("jsonTree",JsonTree)
}