import Modal from "react-bootstrap-modal"
import React, { Component } from "react";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";


function openModal() {
  this.setState({ open: true });
}
function closeModal() {
  this.setState({ open: false });
}

class ModalExample extends Component {
   //popup
   constructor(props) {
    super(props);
     this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
 
  render(){
  
    return (
      <Popup
      open={this.state.open}
      closeOnDocumentClick
      onClose={this.closeModal}
    >
      <div className="modal">
        <a className="close" onClick={this.closeModal}>
          &times;
        </a>
        <div className="font-bold text-4xl flex flex-no-wrap mx-auto  justify-center mt-20 mb-10">
          Žiadosť bola úspešne odoslaná
        </div>
        <div className="xl:flex xl:flex-no-wrap xl:mx-auto  xl:justify-center mb-5">
          <div className="mx-10">
            <button class="flex1 my-5 text-2xl">
             Ďakujeme za Vašu pomoc!<br/>
             V najbližšej dobe Vás bude útulok kontaktovať.
            </button>
          </div>
        </div>
        <div className="flex flex-no-wrap mx-auto justify-center mb-10">
          <NavLink
            className="text-white font-semibold text-center bg-orange px-4 py-2 m-2 rounded-full py-2 px-4"
            to="/"
          >
            Späť na stránku
          </NavLink>
        </div>
      </div>
    </Popup>
    );
  }
}


export default {
  ModalExample,
  openModal,
  closeModal,

};