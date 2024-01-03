import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import css from "./Modal.module.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export const ModalCalculator = ({ isOpen, onClose }) => {
  // const [contactName, setContactName] = React.useState(name);
  // const [contactNumber, setContactNumber] = React.useState(number);
  // const dispatch = useDispatch();
  // const operation = useSelector(selectIsLoading);
  // const contacts = useSelector(selectContacts);

  // const handleEdit = async e => {
  //   e.preventDefault();

    // const EditName = contacts.some(
    //   contact => contact.name.toLowerCase() === contactName.toLowerCase()
    // );
    // const EditNumber = contacts.some(
    //   contact => contact.number === contactNumber
    // );

    // if (EditName && EditNumber) {
    //   Notify.error(`${contactName} is already in contacts`);
    //   return;
    // }

    // if (contactName === '' || contactNumber === '') {
    //   Notify.warning('Fields cannot be empty!');
    //   return;
    // }

  //   try {
  //     await dispatch(
  //       updateContact({
  //         name: contactName,
  //         number: contactNumber,
  //         contactId: id,
  //       })
  //     ).unwrap();
  //     Notify.success(`${name} contact was changed`);
  //     onClose();
  //   } catch (error) {
  //     console.log(error);
  //     Notify.warning('Ooops!..Something went wrong! Please try again later');
  //   }
  // };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: { xs: 672, sm: 564 }, display:"flex", flexDirection: "column", alignItems: "center", }}>
        <AiOutlineClose  className={css.closeBtn} onClick={onClose}/>
        <Typography
          sx={{
            mb: 1,
            fontSize: '26px',
          }}
          variant="h2"
          fontWeight="700"
          fontFamily="Verdana"
          color="rgba(33, 33, 33, 1)"
          maxWidth="508px"
          maxHeight="70px"
          marginLeft="3%"
          marginRight="auto"
          marginTop="45px"
          textAlign= "center"
        >
          Your recommended daily calorie intake is
        </Typography>

        <Button
              
            variant="contained"
            type="submit"
            color="ochre"
            sx={{
              mb: 1,
              fontFamily: 'Verdana',
              fontSize: '14px',
              textTransform: 'unset',
              borderRadius: '30px',
              boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
              fontWeight: '700',
              width: '210px',
              height: '43px',
              marginTop: '35px',
            }}
          >
            Start losing weight
          </Button>
          
        </Box>
         
      </Modal>
    </div>
  );
};

 