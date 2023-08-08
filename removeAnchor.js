// Complete the function/method so that it returns the url with anything after the anchor (#) removed. 

function removeUrlAnchor(url){
    if(url.includes('#')){
      const index = url.indexOf('#');
      let removedAnchor = url.slice(0,index)
      return removedAnchor
      }else{
        return url
      }
  }