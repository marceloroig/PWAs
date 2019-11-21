

function actualizarCacheDinamico( dynamicCache, req, res ){

    if( res.ok ){
       return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );
            
            return res.clone();
        });
    }else{
        //Si falla la llamada y el Cache
        return res;
    }

}