const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
  const personName = document.querySelector("#fullName").value
  const personAddress = document.querySelector("#address").value
  
  container.innerHTML += `
      <section>
          <h1>${personName}</h1>
          <div>${personAddress}</div>
      </section>
  `

})

const wishContainer = document.querySelector("#wishList")

document.querySelector("#saveWish").addEventListener("click", event => {
  const wishName = document.querySelector("#favThingsName").value
  const placeName = document.querySelector("#purchaseLocation").value

  wishContainer.innerHTML += 
  `<p>I can purchase ${wishName} at ${placeName}</p>`
})