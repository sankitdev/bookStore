import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ModalProps } from "../types/types";
import { useState } from "react";
import { modalConfig } from "../config/modalConfig";
function Model({
  isModelOpen,
  setIsModelOpen,
  modalType,
  onSubmit,
}: ModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const config = modalConfig[modalType];
  const handleClose = () => {
    setIsModelOpen(false);
    setFormData({});
  };
  const handleSubmit = () => {
    onSubmit(formData);
    handleClose();
  };
  return (
    <>
      <Modal
        show={isModelOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{config.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {config.fields.map((field) => (
            <Form.Control
              key={field.name}
              type="text"
              placeholder={field.placeholder}
              className="mb-2"
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
