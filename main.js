const searchBar = document.getElementById('searchBar');
const korde = document.getElementById('korde');
const arabe = document.getElementById('arabe');
const go = document.getElementById('go')

let ar = [
  {
    korde:'لانكي',
    arabe:'يوسفي'
  },
  {
    korde:'اجفص',
    arabe:'اغلط'
  },
  {
    korde: 'تمن',
    arabe: 'رز'
  },
  {
    korde:'',
    arabe:''
  }
  ]
 

     function search(){
       var b = 0;
       var i=0;
       arabe.innerHTML ='';
       korde.innerHTML = '';
 while(i< ar.length){
  if(searchBar.value==''){
    const a = ar[i].arabe;
    const e = ar[i].korde;
    arabe.innerHTML=arabe.innerHTML +' <br> '+ a;
    korde.innerHTML=korde.innerHTML +' <br> '+ e;
    
  }
  
       
    else if (ar[i].korde.startsWith(searchBar.value)==true) {
            const abrar = ar[i].arabe;
          const abod = ar[i].korde;
         arabe.innerHTML = arabe.innerHTML + '<br>' +abrar;
         korde.innerHTML =  korde.innerHTML + '<br>' + abod;
         
       }
       
       
         i++;
        
      }
   }
   search();