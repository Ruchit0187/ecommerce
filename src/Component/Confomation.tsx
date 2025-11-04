import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { removeToCart } from "../Redux/Reducer";

function Confomation(props: any) {
  const { id } = props;
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e: any) => {
    if (e.target.innerText === "Agree") {
      dispatch(removeToCart(id));
    }
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="bg-black text-white px-2 rounded mb-2.5 cursor-pointer"
      >
        Remove
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Do you Really Remove?</DialogTitle>
        <DialogActions>
          <button
            onClick={handleClose}
            className="text-black p-2 cursor-pointer"
          >
            Disagree
          </button>
          <button
            onClick={handleClose}
            autoFocus
            className="text-black p-2 cursor-pointer"
          >
            Agree
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Confomation;
