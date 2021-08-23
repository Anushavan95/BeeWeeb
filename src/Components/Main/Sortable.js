import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Cards from "../Cards";
import ReactIcon from "../../icons/react.webp";
import Js from "../../icons/JS.png";
import VuE from "../../icons/VUE.webp";
import Angular from "../../icons/ANG.png";

export default function Sortable() {
  const [card, setCard] = useState([
    { id: 1, order: 1, name: "Javascript", img: Js },
    { id: 0, order: 0, name: "React", img: ReactIcon },
    { id: 2, order: 2, name: "Angular", img: Angular },
    { id: 3, order: 3, name: "VuE", img: VuE },
  ]);
  const [images, setImages] = useState([]);
  const [blocktext, setblocktext] = useState("");
  const [couurentCart, setcouurentCart] = useState(null);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  let id = 4;
  let order = 4;

  function dragStart(e, card) {
    console.log(e, card);
    setcouurentCart(card);
  }
  function dragleave() {}
  function dragEnd(e) {
    e.target.style.backgroundColor = "white";
  }
  function dragOver(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "lightgray";
  }
  function drop(e) {
    e.preventDefault();
    setCard(
      card.map((item) => {
        if (item.id == card.id) {
          return { ...item, order: couurentCart.order };
        }
        if (item.id == couurentCart.id) {
          return { ...item, order: card.order };
        }
        return item;
      })
    );
    e.target.style.backgroundColor = "white";
  }
  const sortCarts = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  function createitems() {
    const a = images.map((items) => {
      return items.data_url;
    });
    if (blocktext !== "") {
      setCard((prevCard) => {
        return [
          ...prevCard,
          { id: id++, order: order++, name: blocktext, img: a },
        ];
      });
    } else {
      alert("empty name");
    }
  }
  function deleteCard(index) {
    const temp = [...card];
    temp.splice(index, 1);
    setCard(temp);
  }

  return (
    <section className="container">
      <div className="create-block-section">
        <input
          type="text"
          value={blocktext}
          onChange={(e) => setblocktext(e.target.value)}
        />

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          id="icon-button-file"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <PhotoCamera />
                  Upload File/Photo
                </Button>
              </label>
              <Button
                variant="contained"
                color="secondary"
                onClick={onImageRemoveAll}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>

              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <Button variant="contained" onClick={createitems} color="primary">
          Create Block
        </Button>
      </div>
      <div className="list-block">
        {card.sort(sortCarts).map((item, index) => {
          return (
            <Cards
              {...item}
              dragStart={(e) => dragStart(e, item)}
              dragleave={dragleave}
              dragEnd={dragEnd}
              dragOver={dragOver}
              drop={(e) => drop(e, item)}
              deleteCard={() => deleteCard(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
