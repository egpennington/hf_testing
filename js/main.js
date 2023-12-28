const fullBombEl = document.getElementById("fullBomb-el")
const minusSampleEl = document.querySelector("#minusSample-el")  /* copy this number down */
const afterSampleEl = document.querySelector("#afterSample-el")
const withHfEl = document.querySelector("#withHF-el")
const emptyHfEl = document.querySelector("#emptyHF-el")
const hfWeightEl = document.querySelector("#hfWeight-el")
const asoResultEl = document.querySelector("#asoResult-el")
const afterTotalEl = document.getElementById("afterTotal-el")
const purityFullBombEl = document.querySelector("#purityFullBomb-el")
const minusPuritySampleEl = document.querySelector("#minusPuritySample-el")
const afterPuritySampleEl = document.querySelector("#afterPuritySample-el")
const titrateHFEl = document.querySelector("#titrateHF-el")
const hfResultEl = document.querySelector("#hfResult-el")

startHF.addEventListener("click", function() {
   let weight1 = prompt("Enter caught Sample Bomb Weight to the nearest 0.001g.")
   fullBombEl.textContent = weight1
   let weight4 = prompt("Enter Empty Crucible Weight to the nearest 0.001g.")
   withHfEl.textContent = parseFloat(weight4).toFixed(3) + "g"
  
   
   let weight2 = prompt("Add 4-6ml of acid sample into crucible from the sample.  Weigh the HF sample bomb after and enter the weight.")
   minusSampleEl.textContent = weight2 + "g"
   purityFullBombEl.textContent = weight2 + "g"
   let weight5 = prompt("After cooking crucible at 126 degrees for 15 minutes and at 250 degrees for 5 minutes. Weigh the crucible when it reaches room temperature (approx. 1hr). Enter weight to the nearest 0.001g.")
   emptyHfEl.textContent = weight5 + "g"
   let weight3 = parseInt(weight1 - weight2)
   afterSampleEl.textContent = parseFloat(weight3).toFixed(3) + "g"

   
   let weight6 = weight5 - weight4
   hfWeightEl.textContent = parseFloat(weight6).toFixed(3) + "g"
   
   asoResultEl.textContent = parseFloat((weight6 * 100) / weight3).toFixed(2) + "%"
})

reset.addEventListener("dblclick", function() {
    fullBombEl.textContent = 0
    withHfEl.textContent = 0
    minusSampleEl.textContent = 0
    afterSampleEl.textContent = 0
    emptyHfEl.textContent = 0
    hfWeightEl.textContent = 0
    withHfEl.textContent = 0
    asoResultEl.textContent = 0
})

startPurityHF.addEventListener("click", function() {
   let weight7 = prompt("Enter Bomb Weight(g) to the nearest 0.001g after flask mixture turns clear.")
   minusPuritySampleEl.textContent = weight7 + "g"
   let weight8 = parseInt(purityFullBombEl.textContent) - weight7
   afterPuritySampleEl.textContent = parseFloat(weight8).toFixed(3) + "g"
   let titrate = prompt("Tritrate the clear phenaphaline/acid mixture until it turns back to pink. Enter the amount of NaOH dispensed.")
   titrateHFEl.textContent = titrate   
   afterTotalEl.textContent = 50 + Number(titrate)
   let resultHf = (afterTotalEl.textContent * 2.001) / weight8
   hfResultEl.textContent = parseFloat(resultHf).toFixed(2)
})

reset2.addEventListener("dblclick", function() {
    purityFullBombEl.textContent = 0
    minusPuritySampleEl.textContent = 0
    afterPuritySampleEl.textContent = 0
    titrateHFEl.textContent = 0
    afterTotalEl.textContent = 0
    hfResultEl.textContent = 0
})