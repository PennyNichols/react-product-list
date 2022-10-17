import React from "react";
import { Card } from "react-bootstrap";
import products from "../../helper/data";



const Products = () => {
	return (
		<div className="d-flex flex-wrap gap-3 ">
			{products.map((products, index) => (
				<Card className="shadow" style={{ width: "18rem" }} key={index}>
					<Card.Img variant="top" src={products.images} />
					<Card.Body>
						<Card.Title>{products.title}</Card.Title>
						<Card.Subtitle>{products.price}</Card.Subtitle>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default Products;
