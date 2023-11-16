import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'
import axios from 'axios'

const ViewProduct = () => {
    const [data,ChangeData]=useState([])

    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                ChangeData(response.data)
            }
        )
        
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Addheader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {data.map((value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                <div class="card" >
                                    <img src={value.image} height="200px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}</h5>
                                        <p class="card-text">{value.title}</p>
                                        <p class="card-text">{value.price}</p>
                                        <p class="card-text">{value.description}</p>
                                        <p class="card-text">{value.category}</p>
                                        
                                        <a href="#" class="btn btn-primary">Buy now</a>
                                    </div>
                                </div>
                            </div>
                            
                            })}
                         
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        
    )
}

export default ViewProduct