import React, { Component } from 'react';
class Fourth extends Component {
    state = {  
        Assignment:[
            {"id":5,
            "title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category":"jewelery",
            "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            "rating":{"rate":4.6,"count":400}},
            {"id":6,
            "title":"Solid Gold Petite Micropave ",
            "price":168,
            "description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery",
            "image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            "rating":{"rate":3.9,"count":70}},
            {"id":7,
            "title":"White Gold Plated Princess",
            "price":9.99,
            "description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category":"jewelery",
            "image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            "rating":{"rate":3,"count":400}},
            {"id":8,
            "title":"Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price":10.99,
            "description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            "category":"jewelery",
            "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            "rating":{"rate":1.9,"count":100}}
        ]
    } 
    render() { 
        return (
            <table className='table'>
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Image</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Count</th>
                </thead>
                <tbody>
                    {this.state.Assignment.map(
                        eachAssign=><tr>
                            <th scope="row">{eachAssign.id}</th>
                            <th>{eachAssign.title}</th>
                            <th>{eachAssign.price}</th>
                            <th>{eachAssign.description}</th>
                            <th>{eachAssign.category}</th>
                            <th><img src={eachAssign.image} width='100' height='100'/></th>
                            <th>{eachAssign.rating.rate}</th>
                            <th>{eachAssign.rating.count}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
 
export default Fourth;