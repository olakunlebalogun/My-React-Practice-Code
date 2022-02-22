import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Manager from "./Task-Manager/Manager";
import Response from "./SWIPE_COMP/Response";

function App() {
	return <Manager />;
	// return <Response code={code} response={res} />;
}

const code = `
curl -X POST "https://swipe.ng:7000/swipepay/entrance/payment/charge/retrieve/pororation" -H "accept: */*"
 -H "Content-Type: application/json" -d "{ \"amount\": 1000, \"period\": 3}"
`;

const res = `

  {
  "message": "Success",
  "code": "200",
  "data": {
    "charges": 217.5,
    "dataList": [
      {
        "duedate": "Mon, 21 Mar 2022 19:34:49 PM",
        "amount": 550,
        "transactionAmount": 1000
      },
      {
        "duedate": "Thu, 21 Apr 2022 19:34:49 PM",
        "amount": 345,
        "transactionAmount": 1000
      },
      {
        "duedate": "Sat, 21 May 2022 19:34:49 PM",
        "amount": 322.5,
        "transactionAmount": 1000
      }
    ]
  },
  "error": null,
  "error_description": null,
  "meta": {}
}`;
export default App;
