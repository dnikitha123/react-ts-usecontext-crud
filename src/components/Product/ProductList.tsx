import React, { useContext, useState } from "react";
import ProductContext, { Product } from "./ProductContext";
import {
  Card,
  Button,
  Modal,
  Container,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import "./Product.css";

const ProductList: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);
  //----NEW OUTPUT STATE MANAGEMENT
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductDesc, setNewProductDesc] = useState("");
  const [newProductLink, setNewProductLink] = useState("");
  //----EDITED NEW OUTPUT STATE MANAGEMENT
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const [editProductName, setEditProductName] = useState("");
  const [editProductPrice, setEditProductPrice] = useState<number | string>("");
  const [editProductImg, setEditProductImg] = useState("");
  const [editProductDesc, setEditProductDesc] = useState("");
  const [editProductLink, setEditProductLink] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: newProductName,
      price: newProductPrice,
      img: newProductImg,
      desc: newProductDesc,
      link: newProductLink,
    };
    addProduct(newProduct);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductImg("");
    setNewProductDesc("");
    setNewProductLink("");
    handleClose();
  };

  const handleDeleteProduct = (id: number) => {
    deleteProduct(id);
  };

  const handleEditProduct = (
    id: number,
    name: string,
    price: number | string,
    img: string,
    desc: string,
    link: string
  ) => {
    setEditProductId(id);
    setEditProductName(name);
    setEditProductPrice(price);
    setEditProductImg(img);
    setEditProductDesc(desc);
    setEditProductLink(link);
  };

  const handleUpdateProduct = () => {
    if (editProductId !== null) {
      const updatedProduct = {
        id: editProductId,
        name: editProductName,
        price: editProductPrice,
        img: editProductImg,
        desc: editProductDesc,
        link: editProductLink,
      };

      updateProduct(editProductId, updatedProduct);
      setEditProductId(null);
      setEditProductName("");
      setEditProductPrice("");
      setEditProductImg("");
      setEditProductDesc("");
      setEditProductLink("");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSearch(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.name.toLowerCase().includes(newSearch.toLowerCase())
  );

  return (
    <div className="container-fulid" style={{ marginLeft: "40px" }}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand className="mr-auto ml-1">Shopping World</Navbar.Brand>
        <Nav>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <Form.Label>Search Product </Form.Label>
            </Navbar.Text>
            <Navbar.Text className="ml-2">
              <Form.Group controlId="formSearchProductName">
                <Form.Control
                  type="text"
                  placeholder="ex: pola sofa"
                  value={newSearch}
                  onChange={handleSearch}
                />
              </Form.Group>
            </Navbar.Text>
            <Navbar.Text>
              <Button
                variant="info"
                onClick={handleShow}
                style={{ marginLeft: "18rem", marginRight: "2.6rem" }}
              >
                Add New Product
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Navbar>

      <div className="d-flex ">
        <div className="flex-d row ">
          {filteredItems.map((product) => (
            <ul key={product.id}>
              {editProductId === product.id ? (
                <>
                  <Form>
                    <Form.Group>
                      <Form.Label>Product Name : </Form.Label>
                      <Form.Control
                        type="text"
                        value={editProductName}
                        onChange={(e) => setEditProductName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Product Price : </Form.Label>
                      <Form.Control
                        type="text"
                        value={editProductPrice}
                        onChange={(e) => setEditProductPrice(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Product Img : </Form.Label>
                      <Form.Control
                        type="text"
                        value={editProductImg}
                        onChange={(e) => setEditProductImg(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Product Desc : </Form.Label>
                      <Form.Control
                        type="text"
                        value={editProductDesc}
                        onChange={(e) => setEditProductDesc(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Product Link:</Form.Label>
                      <Form.Control
                        type="text"
                        value={editProductLink}
                        onChange={(e) => setEditProductLink(e.target.value)}
                      />
                    </Form.Group>

                    <Button
                      className="mt-2 ml-4 mr-4"
                      variant="outline-secondary"
                      onClick={handleUpdateProduct}
                    >
                      Save
                    </Button>
                    <Button
                      className="mt-2 "
                      variant="outline-warning"
                      onClick={() => setEditProductId(null)}
                    >
                      Cancel
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <div style={{ marginLeft: "10px" }}>
                    <div className="row ">
                      <Card
                        style={{
                          width: "17rem",
                          backgroundColor: "ButtonFace",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={product.img}
                          style={{ height: "250px" }}
                        />
                        <Card.Body>
                          <Card.Title style={{ height: "40px" }}>
                            {product.name}
                          </Card.Title>
                          <Card.Text className="desc">{product.desc}</Card.Text>
                          <Card.Text
                            className="priceText"
                            style={{ marginTop: "-10px" }}
                          >
                            <span>Price Rs: </span>
                            {product.price}
                          </Card.Text>
                          <Card.Link href={product.link}>
                            <Button
                              variant="info"
                              style={{ marginTop: "-10px" }}
                            >
                              Know More
                            </Button>
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                  <Button
                    className="mt-2"
                    style={{ marginLeft: "26px" }}
                    variant="outline-primary"
                    onClick={() =>
                      handleEditProduct(
                        product.id,
                        product.name,
                        product.price,
                        product.img,
                        product.desc,
                        product.link
                      )
                    }
                  >
                    <i
                      className="fas fa-edit"
                      style={{ marginRight: "6px" }}
                    ></i>
                    Edit
                  </Button>
                </>
              )}

              <Button
                className="mt-2"
                style={{ marginLeft: "36px" }}
                variant="outline-danger"
                onClick={() => handleDeleteProduct(product.id)}
              >
                <i className="fas fa-trash" style={{ marginRight: "3px" }}></i>{" "}
                Delete
              </Button>
            </ul>
          ))}
        </div>
      </div>

      {/* //Here is the modal for new product */}
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
          <Container>
            <Modal.Header closeButton>
              <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group controlId="formProductName">
                <Form.Label>Product Name : </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formProductPrice">
                <Form.Label>Product Price : </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price example : Rs 20,000"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formProductImg">
                <Form.Label>Product Img : </Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Image"
                  value={newProductImg}
                  onChange={(e) => setNewProductImg(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formProductDesc">
                <Form.Label>Product Description : </Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Description"
                  value={newProductDesc}
                  onChange={(e) => setNewProductDesc(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formProductLink">
                <Form.Label>Product Link : </Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Link"
                  value={newProductLink}
                  onChange={(e) => setNewProductLink(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button
                variant="primary"
                onClick={handleAddProduct}
                disabled={
                  !newProductName ||
                  !newProductPrice ||
                  !newProductImg ||
                  !newProductDesc ||
                  !newProductLink
                }
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Container>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductList;
