import React from 'react'

const categoriesData =  {
    "sections":['products Several','highest_rating','todays_offers','pets Meals','','hair_devices','consider To','sports & Fitness'],
    "categories":['appliaces','highest_rating','computers','mobiles','fashion'],
    "prands":['poma','highest_rating','lacoste','toshiba','sharp','D_&_C','corn','black_Roket'],

    "todays_offers":["Todays offers" , "Todays offers are products have discounts on sell or delivery for one day since 12 Am for 12 Bm wish a benefit and easy browesing"],
    "pets":["Pets category", "Pets is a part wrappes all pets meal chicken meat cors and milk helpe your pet for pure and healthy life wish a benefit and easy browesing"],
    "saving_corner":["Saving corner", "saving corner Is a special section or corner wrappes customized products with premium quality and on the ather side have a decreased price"],
    "hair_devices":["Hair devices" , "Hair devices are products contain many types of machiens maked for making your hair as you letterly want and we have very intelligent helpers, happy browesing"],
    "consider":["Consider corener" , "In consider corner we love to suggest some of most premium products in several sections and categories and corners wish a benefit and easy browesing"],
    "sports":["Sports devices" , "Undoubtedly you like to like a heavier weaghts plyers and want to be a body building or make your body active and healthy we prepare our selfs to helpe you for that"],
    "devices":["Home devices","Devices corner is a home devices section containes coocks mashiens and clean mashiens and several means of comfort to make your live easier , happy browesing "],
    "Beauty":["Beauty devices" , "Beauty devices are products contain many types of machiens maked for making your look as you letterly want and we have very intelligent helpers, happy browesing"],
    "computers":["Computers" , "Computer corner is a section contains several parts of a computer and labtop , screens , mouses , keybords headphones and fully assembled devices , God luck"],
    "mobiles":["Mobiles",  "Mobiles corner is a section contains several parts of a mobile accessories and airpods , covers , connecters , screens external speaker  and several types op mobile brands , Go a head"],
    "searchAllheighestRating":[ "heighest rating" , "In heighest rating corner we love to suggest some of most premium products whitch gave a heigh rated by anuther clients in several sections and categories and corners wish a benefit and easy browesing"],

    "D-&-R":["D & R" , "DCR brand name is a shorthand to dogs , cat , rat ,  as we are wory about your think if we do'nt have Meals except these types ? We have several meals for all pets and animal these may used as pets , make your pets happy"],
    "poma":["Poma" , "Poma brand is the brand contain many several products for exmples we have one of the most premium clothes , shoeses , bags , and other , we are prepare to make your appearance more nice and people's look to you more best, Make your presence attractive"],
    "lacoste":["Lacoste" , "Lacoste brand is the brand contain many several products for exmples we have one of the most premium clothes , shoeses , bags , and other , we are prepare to make your appearance more nice and people's look to you more best, Make your presence attractive"],
    "books":["Book locker" , "Book locker is a very important corner we have and we consider it the most important as we believe in important of reeding , we have many books in the several fields like Sincess , History , Math , interrested stories , more and more fields , benefit reeding!"],

    "default desc":["How are You" , "We are very concerned about your comfort and your happiness we have very several types of sections , types , barnds , corners , colors of our products and we are ready to increase all that with your support and help about rating us and providing your seuggessions , Thank you!"]
}

const catchCtaegoryDesc = (prop)=>{
    const sliceBodyProp = prop.split('').slice(1);
    const capitalizedProp = `${prop[0].toLowerCase()}${sliceBodyProp.join('')}`
    

    return {
        title:categoriesData.hasOwnProperty([prop]) ? categoriesData[prop][0] : categoriesData.hasOwnProperty([capitalizedProp]) ? categoriesData[capitalizedProp][0] : categoriesData["default desc"][0],
        desc:categoriesData.hasOwnProperty([prop]) ? categoriesData[prop][1] : categoriesData.hasOwnProperty([capitalizedProp]) ? categoriesData[capitalizedProp][1] : categoriesData["default desc"][1],
        
        filters:categoriesData.sections.some(string => string.includes(prop)) ? 
        categoriesData.sections :

        categoriesData.categories.some(string => string.includes(prop)) ?
        categoriesData.categories :

        categoriesData.prands.some(string => string.includes(prop)) ?
        categoriesData.prands : []

    }
}




export default catchCtaegoryDesc