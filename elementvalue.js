function elementInPiar(object1,object2){

    const key1 = Object.keys(object1)
    const key2 = Object.keys(object2)

    const handleKeyscommon=key1.find(key=>key2.includes(key))
      
    if(handleKeyscommon){
        return object1[handleKeyscommon]===object2[handleKeyscommon]
    }
    return false
}
 fruits={mango:"yellow",avocado:"green",tomatos:"red"}
 const ibirungo={amavuta:"white",tomatos:"red",salade:'orange'}
 resulte=elementInPiar(fruits,ibirungo)
  console.log(resulte)