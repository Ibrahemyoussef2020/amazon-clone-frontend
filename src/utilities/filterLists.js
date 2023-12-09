

export const filterProductsList = (filters, list , checkValuesLength = 1) => {
   
      let filterdList = list;

      if (!filters.length) {
            console.log(list);
            return list
      }else{

      


      filters.forEach(filter => {
            switch (filter.type) {
                  case 'boolean': {
                        //filterdList = filterdList.filter(item => item[filter.prop] === filter.checkd)
                        filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                        break;
                  }
                  case 'list': { 
                       filterdList = checkValuesLength > 0 ? filterdList.filter(item =>  filter.values.includes(item[filter.prop])) : filterdList;
                       // filterdList = filterdList.filter(product => filter.filterFn(product,filter)) 
                        break;
                  }
                  case 'custom': {
                        filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                        break;
                  }
                  case 'clear': {
                       // filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                        break;
                  }
                  default:
                        break;
            }
      });

}

      return filterdList
}

/*
const filterLists = (filtersList, prop, list, filteringoperator, isBoolean) => {


      let filterdList;
      const booleanResults = [];
      const stringsResults = [];
      let numbers;


      if (Array.isArray(filteringoperator)) {


            const numbers = filteringoperator.map(value => value.slice(-1))

            filterdList = list.filter(item => numbers.some(number => item[prop] >= number) || filteringoperator.some(operator => item[operator] === true))



      }
      else if (typeof filteringoperator === "boolean") {


            filterdList = list.filter(item => item[prop] === true)
      }

      else {

            filterdList = list.filter(item => item[prop] >= filteringoperator)
      }

      return filterdList
}

export default filterLists



/**************
 * 
 * 
 *                 let  arr1 = filteringoperator.length ? list.filter(item => filteringoperator.some( value => item[value] === true)) : list

              booleanResults.push(...arr1)

              const numbers = filteringoperator.map(value => value.slice(-1))
                let arr2 = numbers.length ? list.filter(item => numbers.some( number => item[prop] >= number)) : list

                stringsResults.push(...arr2)
                
              
              filterdList = [...booleanResults , ...stringsResults]



const filterLists = (productList)=>{

}
   
export default filterLists */