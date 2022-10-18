import React from "react";
import { Card } from "react-bootstrap";
import products from "../../helper/data";



const Products = ({images,title,price}) => {
	return (
		<div className="d-flex flex-wrap gap-3 ">
			{products.map((products, index) => (
				<Card className="shadow" style={{ width: "22rem" }} key={index}>
					<Card.Img variant="top" src={images} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Subtitle>${price}</Card.Subtitle>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default Products;
