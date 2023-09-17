let result = {
  tag: "",
  free: false,
  role: false,
  user: "dskjnvhk48r3493",
  email: "dskjnvhk48r3493@codefurry.com",
  score: 0.48,
  state: "undeliverable",
  domain: "codefurry.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("clicked");
  resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`
  let key = "ema_live_vG2hL5wvywVz4zHqRMM6gm35yX4e9KNjYcWv9CNH";
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key]!== " "){
    str = str + `<div>${key}: ${result[key]}</div>`
    }

  }


console.log(str);
resultCont.innerHTML = str
})