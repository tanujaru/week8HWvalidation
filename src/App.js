import React, { useState } from "react";
function App() {
   let [cardNumber, setCardNumber] = useState("");
   let [message, setMessage] = useState("");
   
   // function to validate credit card numbers using the Luhn algorithm
   function validateByLuhn(cardNumber) {
      let sum = 0;
      let shouldDouble = false;
      for (let i = cardNumber.length - 1; i >= 0; i--) {
         let digit = parseInt(cardNumber.charAt(i));
         if (shouldDouble) { 
            if ((digit *= 2) > 9) digit = digit - 9;
         }
         sum = sum + digit;
         shouldDouble = !shouldDouble;
      }
      return sum % 10 === 0;
   }
   function validateCreditCard(event) {
      let cardNumber = event.target.value;
      setCardNumber(cardNumber);
      let isValid =
      (validateByLuhn(cardNumber) &&
      cardNumber.length == 15 &&
      (cardNumber.indexOf("34") == 0 || cardNumber.indexOf("37") == 0)) ||
      (cardNumber.length == 13 && cardNumber[0] == 4) ||
      (cardNumber.length == 16 &&
      (cardNumber[0] == 4 ||
      (cardNumber[0] == 5 && cardNumber[1] >= 1 && cardNumber[1] <= 5)));
      if (isValid) {
         setMessage("Valid Card Number");
      } else {
         setMessage("Invalid Card Number");
      }
   }
   return (
      <div>
         <h3>
            {" "}
            Using the <i> Luhn algorithm </i> to validate credit card number in ReactJS.{" "}
         </h3>
         <input type = "number" value = {cardNumber} onChange = {validateCreditCard} />
         <p> {message} </p>
      </div>
   );
}
export default App; 