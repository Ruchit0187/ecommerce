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
    if (e.target.innerText === "Yes") {
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
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="w-full">
          Do You Really Remove?
        </DialogTitle>
        <DialogActions className="mt-20 flex gap-3">
          <button
            onClick={handleClose}
            className="text-white p-2 px- cursor-pointer border-2 rounded bg-black "
          >
            No
          </button>
          <button
            onClick={handleClose}
            autoFocus
            className="text-red-500 p-2 cursor-pointer border-2 rounded"
          >
            Yes
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Confomation;
