// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Feb 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker support"
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-Osamah-Hasan/sw.js", {
    scope: "/ICS2O-Unit-6-01-Osamah-Hasan/",
  })
}

window.onload = function () {

  const params = new URLSearchParams(window.location.search)

  // input
  const radius = params.get("r")
  console.lag(radius)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const roundedVolume = volume.toFixed(2)

  // output
  document.getElementById("dimenstion").innerHTML = "r = " + radius
  document.getElementById("output").innerHTML = "V = " + roundedVolume + "cm³"
}