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

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3
  const dimenstion = "Radius (r) = " + radius + " units"

  // output
  document.getElementById("radius ").innerHTML = dimenstion
  document.getElementById("volume").innerHTML = "Volume (V) = " + volume.toFixed(2) + " units³"
}