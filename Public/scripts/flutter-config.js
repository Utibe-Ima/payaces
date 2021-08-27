const payForm = document.querySelector("#pay-form")
payForm.addEventListener('submit', payNow)

function payNow(e) {
  // prevents normal form submit
  e.preventDefault();

  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-8eaab52a5c7b5d4282e2077bebd00907-X",
    tx_ref: "aces"+Math.floor((Math.random()*1000000000)+1),
    amount: 1000,
    currency: "NGN",
    country: "NG",
    payment_options: " ",
    redirect_url: 
      "/success",
    meta: {
      consumer_id: Math.floor((Math.random()*1000000)+1),
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: document.querySelector("#email").value,
      phone_number: document.querySelector("#phone_number").value,
      name: document.querySelector("#name").value,
      username: document.querySelector("#username").value,
      session: document.querySelector("#session").value,
    },
    callback: function (data) {
      alert('success')
    },
    onclose: function() {
     
    },
    customizations: {
      title: "ACES Dues Payment",
      description: "Departmental Dues Payment",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  });
}
                                                                                                                  

