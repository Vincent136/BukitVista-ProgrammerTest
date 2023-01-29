import React, { useState} from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import { InputSearch } from '../../components/uielements/input';
import GuestDetailsResult from "../components/guestDetailsResult.js";
import Card from "../../containers/Uielements/Card/card.style.js";

export default function guestDetails() {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("Please input a booking number");

  const onSearch = value => {
    // Check if input is valid, only allow uppercase letters and numbers
    const valid = /^[A-Z0-9]+$/.test(value)
    if (!valid) {
      if (value.length === 0) {
        setMessage("Please type something");
      } else {
        setMessage("Input not valid");
      }
      return;
    }

    // Check if input is empty
    if (value && value.length > 0) {
      // call the api to get the data

      setMessage(null);

      // code to fetch guest data from api, unfortunately the api is unavailable
      fetch('https://bv-online-assessment.herokuapp.com/api/bookings' + value)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {console.log(error)});
    }
  }
  return (
      <LayoutContentWrapper style={{ textAlign: "center", height: "100vh"}}>

      {/* header page */}
        <PageHeader>
          <IntlMessages id={"sidebar.guestDetail"} />
        </PageHeader>

        {/* Search Bar using reusable component */}
        <LayoutContent>
        <IntlMessages id="page.bookingCode"/>
        
        <InputSearch
          placeholder="Booking number..."
          onSearch={onSearch}
        />
        {message ? 
        <p>{message}</p> 
        :
        // Display the guest details
        <Card>
          <GuestDetailsResult data={data} />
        </Card>
        }
        </LayoutContent>
      </LayoutContentWrapper>
  );
}
