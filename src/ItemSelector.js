import React, { useState } from 'react';

const itemsData = [
  { name: '100,000 Steps', type: 'Boots', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken', nmd: 'Dead Man\'s Dredge, Mariner\'s Refuge', img:       
  <img
  src={require('./assets/images/100000steps.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Ancient\'s Oath', type: '2H Axe', monsters: 'Cannibals, Goatmen', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks. Anica\'s Claim, Broken Bulwark, Champion\'s Demise , Domhainne Tunnels, Forsaken Quarry, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Oldstones, Rimescar Caverns, Sepulcher of the Forsworn, Shivta Ruins', nmd: 'Pallid Delve, Faceless Shrine, Bastion of Faith Mercy\'s Reach, Hoarfrost\'s Demise, Domhainne Tunnels, Komdor Temple', img:       
  <img
  src={require('./assets/images/Ancientsoath.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Andariel\'s Visage', type: 'Helmet', monsters: 'Cannibals, Cultist', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Andarielsvisage.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Asheara\'s Khanjar', type: 'Dagger', monsters: 'Bandits, Cultist', dungeon: 'Calibel\'s Mine, Faceless Shrine, Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood , Mournfield, Raethwind Wilds, , Renegade\'s Retreat , Uldur\'s Cave, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Uldir\'s Cave, Faceless Shrine, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Ashearaskhanjar.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Battle Trance', type: 'Amulet', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Battletrance.jpg')}
  alt="{selectedItem.name}"
  />,
  info: 'here',},
  
  { name: 'Blood Artisan\'s Cuirass', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/BloodArtisan.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Bloodless Scream', type: '1H Scythe', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Dead Man\'s Dredge, Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Bloodlessscream.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Butcher\'s Cleaver', type: '1H Axe', monsters: 'Cannibals, Fallen, Goatmen', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Ancient\'s Lament , Demon\'s Wake , Fading Echo, Grinning Labyrinth, Oblivion, Ruinds of Eridu, Wretched Delve, Anica\'s Claim, Broken Bulwark, Champion\'s Demise , Domhainne Tunnels, Forsaken Quarry, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Oldstones, Rimescar Caverns, Sepulcher of the Forsworn, Shivta Ruins', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith Shifting City Mercy\'s Reach, Hoarfrost\'s Demise, Domhainne Tunnels, Komdor Temple', img:       
  <img
  src={require('./assets/images/Butcherscleaver.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Condemnation', type: 'Dagger', monsters: 'Bandits, Cultist', dungeon: 'Calibel\'s Mine, Faceless Shrine, Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood , Mournfield, Raethwind Wilds, , Renegade\'s Retreat , Uldur\'s Cave, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Uldir\'s Cave, Faceless Shrine, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Condemnation.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Cowl of the Nameless', type: 'Helmet', monsters: 'Cannibals, Cultist', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Cowlofthenameless.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Deathless Visage', type: 'Helmet', monsters: 'Cannibals, Cultist', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Deathlessvisage.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Deathspeaker\'s Pendant', type: 'Amulet', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/DeathspeakersPendant.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Doombringer', type: '1H Sword', monsters: 'Beast, Skeleton, Snakes', dungeon: 'Akkhan\'s Grasp, Blind Burrows , Corrupted Grotto, Fetid Mausoleum, Haunted Refuge, Leviathan\'s Maw, Light\'s Refuge, Mournfield, Path of the Blind, Tomb of the Saints, Uldur\'s Cave, Ancient Reservoir, Belfry Zakara, Betrayer\'s Row, Black Asylum , Caldera Gate, Collapsed Vault, Crumbling Hekma, Crusader\'s Cathedral , Defiled Catacomb, Demon\'s Wake , Forgotten Depths, Forgotten Ruins, Garan Hold, Hakan\'s Refuge, Halls of the Damned, Hoarfrost Demise, Komdor Temple, Kor Dragan Barracks , Luban\'s Rest, Maddux Watch, Mournfield, Nostrava Deepwood, Pallid Delve, Seaside Descent, Stockades, Sunken Library, Tomernted Ruins, Underroot, Yshari\'s Sanctum, Zenith , Deserted Underpass, Forgotten Ruins, Ghoa Ruins, Hakan\'s Refuge, Putrid Aquifer, Serpent\'s Lair , Shadowed Plunge , Witchwater ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Akkhan\'s Grasp, Nostrava Deepwood, Hoarfrost\'s Demise, Stockades, Garan Hold, Komdor Temple, Pallid Delve, Shifting City, Betrayer\'s Row, Forgotten Ruins, Halls of the Damned, Collapsed Vault, Ancient Reservoir', img:       
  <img
  src={require('./assets/images/Doombringer.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Esadora\'s Overflowing Cameo', type: 'Amulet', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Esadorasoverflowingcameo.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Esu\'s Heirloom', type: 'Boots', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken', nmd: 'Dead Man\'s Dredge, Mariner\'s Refuge', img:       
  <img
  src={require('./assets/images/Esusheirloom.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Eyes in the Dark', type: 'Pants', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Dead Man\'s Dredge,  Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Eyesinthedark.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Fields of Crimson', type: '2H Sword', monsters: 'Spiders, Vampires', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Sarat\'s Lair, Pallid Delve, Dead Man\'s Dredge, Immortal Emanation, Collapsed Vault, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Fieldsofcrimson.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Fist of Fate', type: 'Gloves', monsters: 'Spiders', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater ', nmd: 'Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Fistsoffate.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Flamescar', type: 'Wand', monsters: 'Ghost, Vampires', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Immortal Emanation, Mariner\'s Refuge, Twisted Hollow, Stockades, Tomb of the Saints, Halls of the Damned, Iron Hold, Lost Keep, Dead Man\'s Dredge, Collapsed Vault, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Flamescar.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Word of Kahan', type: 'Amulet', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Wordofhakan.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Insatiable Fury', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Insatiablefury.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Black River', type: '1H Scythe', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Dead Man\'s Dredge, Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Blackriver.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Frostburn', type: 'Gloves', monsters: 'Spiders', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater ', nmd: 'Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Frostburn.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Gloves of the Illuminator', type: 'Gloves', monsters: 'Spiders', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater ', nmd: 'Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Glovesoftheilluminator.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Gohr\'s Devastating Grips', type: 'Gloves', monsters: 'Spiders', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater ', nmd: 'Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Gohrsdevastatinggrips.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Grasp of Shadow', type: 'Gloves', monsters: 'Spiders', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater ', nmd: 'Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Graspofshadow.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Greatstaff of the Crone', type: 'Staff', monsters: 'Fallen', dungeon: 'Ancient\'s Lament , Demon\'s Wake , Fading Echo, Grinning Labyrinth, Oblivion, Ruinds of Eridu, Wretched Delve', nmd: 'Shifting City', img:       
  <img
  src={require('./assets/images/Greatstaffofthecrone.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Greaves of the Empty Tomb', type: 'Boots', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken', nmd: 'Dead Man\'s Dredge, Mariner\'s Refuge', img:       
  <img
  src={require('./assets/images/Greavesoftheemptytomb.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Harlequin Crest', type: 'Helmet', monsters: 'Cannibals, Cultist', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Harlequincrest.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Hellhammer', type: '2H Mace', monsters: 'Bandits, Drowned', dungeon: 'Calibel\'s Mine, Faceless Shrine, Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood , Mournfield, Raethwind Wilds, , Renegade\'s Retreat , Uldur\'s Cave, Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Uldir\'s Cave, Dead Man\'s Dredge, Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Hellhammer.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Howl from Below', type: 'Gloves', monsters: 'Spiders', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater ', nmd: 'Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Howlfrombelow.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Hunter\'s Zenith', type: 'Ring', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Hunterszenith.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Iceheart Brais', type: 'Pants', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Dead Man\'s Dredge,  Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Iceheartbrais.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Insatiable Fury', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Insatiablefury.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Mad Wolf\'s Glee', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Madwolfsglee.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Melted Heart of Selig', type: 'Amulet', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/meltedheartofselig.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Mother\'s Embrace', type: 'Ring', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Mothersembrace.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Overkill', type: '2H Mace', monsters: 'Bandits, Drowned', dungeon: 'Calibel\'s Mine, Faceless Shrine, Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood , Mournfield, Raethwind Wilds, , Renegade\'s Retreat , Uldur\'s Cave, Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Uldir\'s Cave, Dead Man\'s Dredge, Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Overkill.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Penitent Greaves', type: 'Boots', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken', nmd: 'Dead Man\'s Dredge, Mariner\'s Refuge', img:       
  <img
  src={require('./assets/images/Penitentgreaves.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Rage of Harrogath', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Rageofharrogath.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Raiment of the Infinite', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Raimentoftheinfinite.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Ramaladni\'s Magnum Opus', type: '1H Sword', monsters: 'Beast, Skeleton, Snakes', dungeon: 'Akkhan\'s Grasp, Blind Burrows , Corrupted Grotto, Fetid Mausoleum, Haunted Refuge, Leviathan\'s Maw, Light\'s Refuge, Mournfield, Path of the Blind, Tomb of the Saints, Uldur\'s Cave, Ancient Reservoir, Belfry Zakara, Betrayer\'s Row, Black Asylum , Caldera Gate, Collapsed Vault, Crumbling Hekma, Crusader\'s Cathedral , Defiled Catacomb, Demon\'s Wake , Forgotten Depths, Forgotten Ruins, Garan Hold, Hakan\'s Refuge, Halls of the Damned, Hoarfrost Demise, Komdor Temple, Kor Dragan Barracks , Luban\'s Rest, Maddux Watch, Mournfield, Nostrava Deepwood, Pallid Delve, Seaside Descent, Stockades, Sunken Library, Tomernted Ruins, Underroot, Yshari\'s Sanctum, Zenith , Deserted Underpass, Forgotten Ruins, Ghoa Ruins, Hakan\'s Refuge, Putrid Aquifer, Serpent\'s Lair , Shadowed Plunge , Witchwater ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Akkhan\'s Grasp, Nostrava Deepwood, Hoarfrost\'s Demise, Stockades, Garan Hold, Komdor Temple, Pallid Delve, Shifting City, Betrayer\'s Row, Forgotten Ruins, Halls of the Damned, Collapsed Vault, Ancient Reservoir', img:       
  <img
  src={require('./assets/images/Ramaladnismo.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Razorplate', type: 'Chest', monsters: 'Beast, Spiders', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Path of the Blind, Uldir\'s Cave, Tomb of the Saints, Sarat\'s Lair, Pallid Delve', img:       
  <img
  src={require('./assets/images/Razorplate.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Ring of Mendeln', type: 'Ring', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Ringofmendeln.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Ring of the Starless Skies', type: 'Ring', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Ringofstarlessskies.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Skyhunter', type: 'Bow', monsters: 'Ghost, Vampires', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Immortal Emanation, Mariner\'s Refuge, Twisted Hollow, Stockades, Tomb of the Saints, Halls of the Damned, Iron Hold, Lost Keep, Dead Man\'s Dredge, Collapsed Vault', img:       
  <img
  src={require('./assets/images/Skyhunter.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Staff of Endless Rage', type: 'Staff', monsters: 'Goatmen', dungeon: 'Anica\'s Claim, Broken Bulwark, Champion\'s Demise , Domhainne Tunnels, Forsaken Quarry, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Oldstones, Rimescar Caverns, Sepulcher of the Forsworn, Shivta Ruins', nmd: 'Mercy\'s Reach, Hoarfrost\'s Demise, Domhainne Tunnels, Komdor Temple', img:       
  <img
  src={require('./assets/images/Staffofendlessrage.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Staff of Lam Esen', type: 'Staff', monsters: 'Goatmen', dungeon: 'Anica\'s Claim, Broken Bulwark, Champion\'s Demise , Domhainne Tunnels, Forsaken Quarry, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Oldstones, Rimescar Caverns, Sepulcher of the Forsworn, Shivta Ruins', nmd: 'Mercy\'s Reach, Hoarfrost\'s Demise, Domhainne Tunnels, Komdor Temple', img:       
  <img
  src={require('./assets/images/Staffoflamesen.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Storm\'s Companion', type: 'Pants', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Dead Man\'s Dredge,  Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Stormscompanion.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Temerity', type: 'Pants', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruinds of Eridu, Sunken Library, Vault of the Forsaken.', nmd: 'Dead Man\'s Dredge,  Mariner\'s Refuge, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Temerity.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Tempest Roar', type: 'Helmet', monsters: 'Cannibals, Cultist', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Tempestroar.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'The Grandfather', type: '2H Sword', monsters: 'Spiders, Vampires', dungeon: 'Abandoned Mineworks , Blind Burrows , Champion\'s Demise , Defiled Catacomb, Deserted Underpass, Feral\'s Den , Guulran Canals , Hive Diablo, Oldstones, Pallid Delve, Sarat\'s Lair, Sirocco Caverns, Whispering Pines , Witchwater , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Sarat\'s Lair, Pallid Delve, Dead Man\'s Dredge, Immortal Emanation, Collapsed Vault, Akkhan\'s Grasp', img:       
  <img
  src={require('./assets/images/Grandfather.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Vasily\'s Prayer', type: 'Helmet', monsters: 'Cannibals, Cultist', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Buried Halls, Conclave , Cultist Refuge , Dark Ravine , Endless Gates, Faceless Shrine, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Path of the Blind, Steadfast Barracks, Serpent\'s Lair , Shadowed Plunge , Yashri\'s Sanctum', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith, Path of the Blind, Halls of the Damned, Heretics Asylum', img:       
  <img
  src={require('./assets/images/Vasilysprayer.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Waxing Gibbous', type: '1H Axe', monsters: 'Cannibals, Fallen, Goatmen', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound , Faceless Shrine, Guulrahn Slums , Pallid Delve, Steadfast Barracks, Ancient\'s Lament , Demon\'s Wake , Fading Echo, Grinning Labyrinth, Oblivion, Ruinds of Eridu, Wretched Delve, Anica\'s Claim, Broken Bulwark, Champion\'s Demise , Domhainne Tunnels, Forsaken Quarry, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Oldstones, Rimescar Caverns, Sepulcher of the Forsworn, Shivta Ruins', nmd: 'Charnel House, Pallid Delve, Faceless Shrine, Bastion of Faith Shifting City Mercy\'s Reach, Hoarfrost\'s Demise, Domhainne Tunnels, Komdor Temple', img:       
  <img
  src={require('./assets/images/Waxinggibbous.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Windforce', type: 'Bow', monsters: 'Ghost, Vampires', dungeon: 'Abandoned Mineworks , Black Asylum , Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound , Forbidden City, Guulrahn Slums , Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives , Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold , Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins , Tomb of the Saints, Twisted Hollow, Whispering Vault , Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Heathen\'s keep, Immortal Emanation, Kor Dragan Barracks , Sanguine Chapel, Zenith ', nmd: 'Immortal Emanation, Mariner\'s Refuge, Twisted Hollow, Stockades, Tomb of the Saints, Halls of the Damned, Iron Hold, Lost Keep, Dead Man\'s Dredge, Collapsed Vault', img:       
  <img
  src={require('./assets/images/Windforce.jpg')}
  alt="{selectedItem.name}"
  />},
  
  { name: 'Word of Hakan', type: 'Amulet', monsters: 'none', dungeon: 'none', nmd: 'none', img:       
  <img
  src={require('./assets/images/Wordofhakan.jpg')}
  alt="{selectedItem.name}"
  />},
  // ... Add the rest of the item data here ...
];

const ItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState(itemsData[0]);

  const handleItemChange = (event) => {
    const selectedItemName = event.target.value;
    const selected = itemsData.find(item => item.name === selectedItemName);
    setSelectedItem(selected);
  };

  return (
    <div>
      <label htmlFor="itemSelect">Select an item:</label>
      <select id="itemSelect" onChange={handleItemChange} value={selectedItem.name}>
        {itemsData.map((item) => (
          <option key={item.name} value={item.name}>{item.name}</option>
        ))}
      </select>

      <h2>Selected Item:</h2>
      <p>Name: {selectedItem.name}</p>
      <p>Type: {selectedItem.type}</p>
      <p>Monsters: {selectedItem.monsters}</p>
      <p>Dungeon Location: {selectedItem.dungeon}</p>
      <p>Season 1 Nightmare Dungeons: {selectedItem.nmd}</p>
      <p>{selectedItem.img}</p>
      <p>Please report bugs to me at Twitter @DaveWeedle - Shout out to my homie Laz. You're a good friend.</p>
      <p>TO DO</p>
      <ul>
        <li>Add new season uniques</li>
        <li>Update CSS</li>
        <li>Research better dungeons to farm for each</li>
        <li>Suggestions welcomed!</li>
      </ul>
    </div>
  );
};

export default ItemSelector;
