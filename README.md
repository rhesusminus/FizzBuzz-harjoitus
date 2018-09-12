# FizzBuzz-harjoitus
![Travis build badge](https://api.travis-ci.org/rhesusminus/FizzBuzz-harjoitus.svg?branch=master)

Tehtävänanto: http://codingdojo.org/kata/FizzBuzz/

FizzBuzz-harjoittelua funktionaalisella tyylillä. Yritetty myös kirjoittaa muutamia testejä funktioille.

Jotain linkkejä:

* [Hindley-Milner type signatures](https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch7.html)

## asennus ja ajaminen
Ohjelma on tehty MacOS:lla ja Node.js:n versiolla 10.5.0 ja tietenkin jätetty testaamatta muilla Noden versioilla ja käyttöjärjestelmillä.

Asennus: `git clone ...` ja `npm install` asentaa riippuvuudet (Ramda sekä pari testikirjastoa).

Ajaminen: `npm run start` tulostaa lopputuloksen kaiken kansan nähtäville. `node src/index.js` toimii myös ja tälle voidaan antaa halutessa parametrinä mihin saakka halutaan FizzBuzzia vääntää [1...n] (default 100).

### stage-2
Stage-2:n ratkaisu on omassa branchissä. `git checkout stage-2` ja em. komennot toimivat ohjelman ajamiseen ja testaamiseen.

## testit
Tulipahan harjoiteltua miten Nodella voidaan tehdä/ajaa testejä.

Asennuksen jälkeen testit voidaan ajaa kommennolla `npm run test`.

Pyörivät myös Traviksella: https://travis-ci.org/rhesusminus/FizzBuzz-harjoitus