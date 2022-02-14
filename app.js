// alert('JS connected')

const submitButton = document.getElementById('detail-submit-btn');

submitButton.addEventListener('click', function() {
  const buyerDetailsInput = document.getElementById('buyer-details-input');

  const buyerDetails = document.getElementById('buyer-info');
  // console.log(buyerDetailsInput.value);
  buyerDetails.innerText = buyerDetailsInput.value;
  buyerDetailsInput.value = '';
})

const addProductsBtn = document.getElementById('add-details-btn');

addProductsBtn.addEventListener('click', function(){
  const infoTable = document.getElementById('info-table');
  const itemName = document.getElementById('item-name-input');
  const itemPrice = document.getElementById('item-price-input');
  const itemQuantity = document.getElementById('item-quantity-input');

  // console.log(itemName, itemPrice, itemQuantity);

  /*
  <!-- <tr>
          <th >1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
      </tr> -->
  */


  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  td3.classList.add('item-total');


  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

  th.innerText = itemName.value;
  td1.innerText = itemPrice.value;
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);


  infoTable.appendChild(tr);

  itemName.value = '';
  itemPrice.value = '';
  itemQuantity.value = '';

  calculateTotal();
});

function calculateTotal() {
  const cost = document.getElementsByClassName('item-total');
  // console.log(cost);
  let subTotal = 0;
  for (let i = 0; i < cost.length; i++) {
    const element = cost[i];
    // console.log(element.innerText);
    subTotal += parseInt(element.innerText);
  }
  console.log(subTotal);
  document.getElementById('sub-total').innerText = subTotal;
  const tax = subTotal * 0.2;
  document.getElementById('tax').innerText = tax.toFixed(2);
  document.getElementById('grand-total').innerText = parseFloat(subTotal) + parseFloat(tax);
  document.getElementById('grand-total-2').innerText = parseFloat(subTotal) + parseFloat(tax);
}