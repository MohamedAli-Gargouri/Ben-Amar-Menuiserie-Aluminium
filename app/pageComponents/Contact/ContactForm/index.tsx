import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState,useRef } from "react";
import {countries_data_list} from "@/app/data/Contacts/countries"
import emailjs from 'emailjs-com';
import { toast, ToastOptions } from 'react-toastify';
const ContactForm = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  const toastOptions:ToastOptions = {
    position:"bottom-center",
    autoClose:5000,
    hideProgressBar:false,
    closeOnClick:true,
    rtl:false,
    pauseOnFocusLoss:true,
    draggable:true,
    pauseOnHover:true,
    theme:"light"
  };
  useEffect(() => {
    // Function to update window size
    function updateWindowSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    // Initial window size
    updateWindowSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);
  interface Country {
    countryId: string;
    countryName: string;
  }
  const NameRef=useRef<HTMLInputElement | null>(null)
  const emailRef=useRef<HTMLInputElement | null>(null)
  const companyNameRef=useRef<HTMLInputElement | null>(null)
  const messageRef=useRef<HTMLInputElement | null>(null)
  // Country Id
  const [countryId, setCountryId] = useState<any>({countryId: 'TN', countryName: 'Tunisia'});

  // Country Id Error
  const [countryIdError, setCountryIdError] = useState(false);

  // For Country autocomplete component
  const [countryList, setCountryList] = useState<Country[]>([]);
  // For autocomplete component
  const countryDefaultProps = {
    options: countryList,
    getOptionLabel: (option: any) => option.countryName,
  };
  // For Country autocomplete component

  // Use Effect for Country autocomplete component

  useEffect(() => {
    // Fetch Country List
    let countryList:Country[] = [];

    countries_data_list.map((country)=>{
      countryList.push({ countryId: country.code, countryName: country.name })
    })
    setCountryList(countryList);
  }, []);
  useEffect(()=>{
console.log(countryId)
  },[countryId])

  //this function sends an email
const sendEmail = () => {
  
  const receiveremail:string = process.env.RECEIVER_MAIL??""; 
  const senderName:string = NameRef.current?.value || ''; 
  const senderEmail:string = emailRef.current?.value || '';
  const senderCompanyName:string = companyNameRef.current?.value || '';
  const senderMessage:string = messageRef.current?.value || '';
  console.log(countryList.find((country)=>country.countryId==countryId.countryId)?.countryName)
  const country:string=countryList.find((country)=>country.countryId==countryId.countryId)?.countryName || "";
  if(receiveremail!=""&&senderName!=""&&senderEmail!=""&&senderCompanyName!=""&&senderMessage!=""&&country!="")
  {
    const templateParams = {
      to_email: receiveremail,
      from_name:senderName,
      from_email:senderEmail,
      from_companyName:senderCompanyName,
      from_country:country,
      message: senderMessage,
    };
  
    const serviceID:string = process.env.EMAILJS_SERVICE_ID??""; // Replace with your service ID
    const templateID = process.env.EMAILJS_TEMPLATE_ID??""; // Replace with your template ID
    const userID = process.env.EMAILJS_PUBLIC_KEY??""; // Replace with your user ID
    const email_promise=emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  
      toast.promise(email_promise,
        {
          pending: "Veuillez patienter, j'envoie un message...",
          success: "Message envoyé avec succès.",
          error: "Erreur, le message n'a pas été envoyé, veuillez réessayer."
        },
        toastOptions,
      );
  }
  else
  {
    toast.info("Veuillez remplir toutes les entrées...",
      toastOptions
    );
  }

};


  return (
    <div className="w-full text-center">
      <Grid
        container
        spacing={
          // Categorize according to small, medium, large screen
          windowSize[0] < 576
            ? 0
            : windowSize[0] < 768
            ? 1
            : windowSize[0] < 992
            ? 2
            : 3
        }
      >
        {/* @1 Name  */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <TextField
            id="name"
            label={"Votre nom"}
            placeholder={"S'il vous plaît entrez votre nom"}
            variant="outlined"
            margin="normal"
            inputRef={NameRef}
            fullWidth
          />
        </Grid>

        {/* @2 Email  */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <TextField
            id="email"
            label={"Email du contact"}
            placeholder={"votre@emailid.com"}
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={emailRef}

          />
        </Grid>

        {/* @3 Company Name  */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <TextField
            id="companyName"
            label={"Nom de l'entreprise"}
            placeholder={"Entrez le nom de votre entreprise"}
            variant="outlined"
            margin="normal"
            inputRef={companyNameRef}
            fullWidth
          />
        </Grid>

        {/* @4 Country */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <Autocomplete
            {...countryDefaultProps}
            id="countryAutoComplete"
            className="w-full mt-3"
            autoHighlight
            value={countryId}
            onChange={(event, newValue: string) => {

              console.log(newValue)
              setCountryId(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={"Pays"}
                variant="outlined"
                placeholder="Choisissez le pays ..."
              />
            )}
          />
        </Grid>

        {/* @5 Message  */}
        <Grid item xs={12}>
          <TextField
            id="message"
            label={"Votre message"}
            placeholder={"Tapez votre message…."}
            variant="outlined"
            margin="normal"
            rows={5}
            className="mt-4"
            multiline
            inputRef={messageRef}

            fullWidth
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        className="mt-8 mb-8 mx-auto hover:bg-[#558b2fa0]  font-[lato] uppercase text-[16px]"
        onClick={sendEmail}
      >
        Envoyer un message
      </Button>
    </div>
  );
};
export default ContactForm;
