import { Modal, Center, CloseButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CenteredModal = ({ children, onClose }) => {
  return (
    <Modal>
      <Center>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </CloseButton>
        {children}
      </Center>
    </Modal>
  );
};

export default CenteredModal;
