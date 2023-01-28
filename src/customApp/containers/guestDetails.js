import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import { InputSearch } from '../../components/uielements/input';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {message: "search.instruction"};
  }
  
  onSearch = value => {
    const valid = /^[A-Z0-9]+$/.test(value)
    if (!valid) {
      console.log("Input not valid")
      return;
    }

    if (value && value.length > 0) {
      console.log(value);
    } else {
      console.log("Please type something");
    }
  }

  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>

        {/* Add header to page */}
        <PageHeader>
          <IntlMessages id={this.state.message} />
        </PageHeader>

        <LayoutContent>
        <IntlMessages id="page.bookingCode"/>
        {/* Search Bar using reusable component */}
        <InputSearch
          placeholder="Booking number..."
          onSearch={this.onSearch}
        />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
