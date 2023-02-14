import React from 'react'
import { useState } from 'react'
import {restaurantList} from '../../constant'
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './Body.css'




export default function Body() {
    
    
    
    
  return (
   
    <div className="restaurant-list">
        {
            restaurantList.map((restaurant)=>{
                return (
                    <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
                )

              
        
            })
        }
       
            
        
     </div>
  )
}
