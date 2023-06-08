"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };

  return (
    <div>
      <Modal
        title="Upload modal title"
        description="Upload Modal description"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
      >
        Upload Content
      </Modal>
    </div>
  );
};

export default UploadModal;
