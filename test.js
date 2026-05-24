fetch("https://script.google.com/macros/s/AKfycbw_WGs9W9E8oTXFyn9VTYheUi1FnrK_NFYQ_E4tOZGY-aWRiVRdwkhYer_PsmuChN5l/exec", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
  },
  body: JSON.stringify({ name: "test" }),
})
  .then(res => res.text().then(text => console.log(res.status, text)))
  .catch(err => console.error(err));
