export default function destructuring({special}){
  for(const prop in special){
    if(!("description" in special[prop])){
      special[prop]["description"] = "Описание недоступно";
    }
  }
  return special
}