import React, { useState } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import { InputSearch } from '../../components/uielements/input';
import TestApiResults from "../components/testApiResults.js";
import Card from "../../containers/Uielements/Card/card.style.js";

export default function testApi() {
  const [result, setResult] = useState({});

  const onSearch = value => {

    // Check if input is empty
    if (value && value.length > 0) {
      // call the api to get the data)
      // code to fetch data from jsonplaceholder.typicode.com
      fetch('https://jsonplaceholder.typicode.com/posts/' + value)
      .then((response) => response.json())
      .then((data) => setResult(data));
    }
  }
  return (
      <LayoutContentWrapper style={{ textAlign: "center", height: "100vh"}}>

      {/* header page */}
        <PageHeader>
          <IntlMessages id={"sidebar.test_api"} />
        </PageHeader>

        {/* Search Bar using reusable component */}
        <LayoutContent>
        <IntlMessages id="page.testApi"/>
        
        <InputSearch
          placeholder="ID..."
          onSearch={onSearch}
        />
        <Card>
          <TestApiResults data={result} />
        </Card>
        </LayoutContent>
      </LayoutContentWrapper>
  );
}
