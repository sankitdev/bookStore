import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ModalProps } from "../types/types";
import { useState } from "react";
import { modalConfig } from "../config/modalConfig";
import { FormData } from "../types/types";
function ModalComponent({
  isModalOpen,
  setIsModalOpen,
  modalType,
  onSubmit,
}: ModalProps) {
  const [formData, setFormData] = useState<FormData>({});
  const config = modalConfig[modalType as keyof typeof modalConfig];

  if (!config) {
    return (
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          No configuration found for modal type: {modalType}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setFormData({});
  };

  const handleSubmit = () => {
    const isValid = config.fields.every((field) =>
      formData[field.name]?.trim()
    );
    if (!isValid) {
      alert("Please fill out all fields");
      return;
    }
    onSubmit(formData);
    handleClose();
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{config.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {config.fields.map((field, index) => (
          <Form.Control
            key={field.name}
            type="text"
            placeholder={field.placeholder}
            className="mb-2"
            autoFocus={index === 0}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [field.name]: e.target.value,
              }))
            }
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
