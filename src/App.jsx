import { useState } from "react";
import { CustomModal } from "./CustomModal";
import { DialogModal } from "./DialogModal";

export default function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(true);
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(true);

    console.log(inputRef.current.value);
  }
  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custome modal
      </button>
      <button onClick={() => setIsDialogModalOpen(true)}>
        Show Dialog modal
      </button>
      <CustomModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      >
        <p>
          This is a <strong>CUSTOM!</strong> modal
        </p>
        <button onClick={() => setIsCustomModalOpen(false)}>Close</button>
      </CustomModal>
      <DialogModal
        isOpen={isDialogModalOpen}
        onClose={() => setIsDialogModalOpen(false)}
      >
        <p>
          This is a <strong>Dialog!</strong> modal
        </p>
        <button onClick={() => setIsDialogModalOpen(false)}>Close</button>
      </DialogModal>
    </div>
  );
}
