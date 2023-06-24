import React, { useEffect, useState } from 'react'
import axios from '../../hooks/axios';

  interface Collection {
    id : number,
    nom : string,
    image : string 
  }
  
  export default function Collection() {

    const [collection, setCollection] = useState<Collection[]>([]);

    useEffect(() => {
      const fetchCollection = async () => {
       
          await axios.get('/api/collection').then((res) => {
            const imageCollection = res.data.map((item: any) => {   
              const blob = new Blob([new Uint8Array(item.image.data)]);     
              const imageUrl = URL.createObjectURL(blob);
              console.log(imageUrl);
              return{...item, image : imageUrl}
            });
            setCollection(imageCollection);
          });                       
      };
  
      fetchCollection();

    

      
    }, []);

    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="font-sans text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
               {collection.map((collections) => (
                <div key={collections.id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={collections.image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="font-sans mt-6 text-sm text-gray-500">
                    <a href="">
                      <span className="absolute inset-0" />
                      {collections.nom}
                    </a>
                  </h3>                
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  