import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'

class ListPost extends Component{
	render(){
		return (

			<div>
			<AddPost/>
			This is ListPost page
			<Post/>
			</div>
			)
	}
}

export default ListPost