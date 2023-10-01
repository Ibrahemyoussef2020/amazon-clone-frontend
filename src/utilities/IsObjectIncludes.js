

const IsObjectIncludes = (array , value) => {
 return array.filter(object => object['title'].toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
}

export default IsObjectIncludes

