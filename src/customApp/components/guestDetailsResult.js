import React, {useState} from "react";
import IntlMessages from '../../components/utility/intlMessages';
import GuestDetailStyle from "./guestDetailsResult.style";
import guest_detail_data from "../data/guest_details_data.json";

export default function GuestDetailsResult({data}) {
    if (JSON.stringify(data) === "{}") {
        data = guest_detail_data;
    }
    const [inputTime, setInputTime] = useState(data.arrivalTime);
    const [arrivalTime, setArrivalTime] = useState(data.arrivalTime);

    const submit = () => {
      setArrivalTime(inputTime);
    }

    return (
        <GuestDetailStyle>
          <div>
            <img src={data.image} alt="guest" />
            <br />
            <IntlMessages id="guestDetails.hi" />
            {data.guestName}
            <IntlMessages id="!" />
            <br />
            <br />
            <IntlMessages id="guestDetails.intro" />
            <br />
            <br />
            <IntlMessages id="guestDetails.propertyName" />
            <strong>{data.propertyName}</strong>
            <br />
            <br />
            <div style={{display:'flex', justifyContent: 'space-between'}}>
              <div>
                <IntlMessages id="guestDetails.checkIn" />
                <strong>{data.checkInDate}</strong>
              </div>
              <div>
                <IntlMessages id="guestDetails.checkOut" />
                <strong>{data.checkOutDate}</strong>
              </div>
            </div>
            <br />
            <IntlMessages id="guestDetails.arrivalTime" />
            {arrivalTime ? (
              <>
                {arrivalTime}
                <IntlMessages id="guestDetails.Arrival" />
              </>
            ) : (
              <>
                <IntlMessages id="guestDetails.noArrival" />
                <br />
                <input 
                type="time"
                onChange={e => setInputTime(e.target.value)}/>
                <button onClick={submit}>set arrival</button>
              </>
            )}
          </div>
        </GuestDetailStyle>
    )
}