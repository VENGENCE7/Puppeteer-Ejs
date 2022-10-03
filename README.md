<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![BSD3 License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Heroku][heroku-shield]][heroku-url]


<!-- PROJECT LOGO -->
<br />

<div align="center">
  <a href="https://github.com/VENGENCE7/Puppeteer-Ejs">
    <img src="https://user-images.githubusercontent.com/86911386/193514499-5fa949b2-dc36-4a58-a9c3-54387f5d4fe8.jpg" alt="Logo" width="250" height="250">
  </a>


<h3 align="center">Puppeteer-Ejs</h3>


#### To record user data and phone Numbers.Later create separate pdfs of each entry of the user in the database.All pdfs are then compressed in a zip and is made available to be downloaded.
 
  <p align="center">
    Can click on the heroku shield to view deployment and interact with the app.
    <br />
    <br />
    <a href="https://puppeteer-ejs.herokuapp.com/"><strong> << Heroku Deployment >></stro
    <br />
    <br />
    <a href="https://github.com/VENGENCE7/Puppeteer-Ejs/issues">Report Bug</a>
     : 
    <a href="https://github.com/VENGENCE7/Puppeteer-Ejs/issues">Request Feature</a>
      :
    <a href="#contact">Contact me</a>
  </p>
</div>

# Introduction
+ Backend based project which uses __`template engine: EJS`__ to display output and **`MongoDb`**.
+ Has 2 parts :
  - Part 1: Input Form
    + Here you can enter entries which will be stored in a database.
    + The phone Number has to be unique.
    + A User can have multiple numbers connected to him.
    + Uses a __sequence number__ from another database to assign __`Token_no`__
  - Part 2: Display & Download data to be printed 
    + Display all data in a table
    + Generate PDF in one go
    + Download the zipped folder containing all the PDF.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

##### Make sure to install devdependency: Nodemon 
#### Install using : `npm i nodemon`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Bhavish Anand- bhavish007anand@gmail.com

Project Link: [https://github.com/VENGENCE7/Puppeteer-Ejs](https://github.com/VENGENCE7/Puppeteer-Ejs)

Github Profile : [https://github.com/VENGENCE7](https://github.com/VENGENCE7)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/VENGENCE7/Puppeteer-Ejs.svg?style=for-the-badge
[contributors-url]: https://github.com/VENGENCE7/Puppeteer-Ejs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/VENGENCE7/Puppeteer-Ejs.svg?style=for-the-badge
[forks-url]: https://github.com/VENGENCE7/Puppeteer-Ejs/network/members
[stars-shield]: https://img.shields.io/github/stars/VENGENCE7/Puppeteer-Ejs.svg?style=for-the-badge
[stars-url]: https://github.com/VENGENCE7/Puppeteer-Ejs/stargazers
[issues-shield]: https://img.shields.io/github/issues/VENGENCE7/Puppeteer-Ejs.svg?style=for-the-badge
[issues-url]: https://github.com/VENGENCE7/Puppeteer-Ejs/issues
[license-shield]: https://img.shields.io/github/license/VENGENCE7/Puppeteer-Ejs.svg?style=for-the-badge
[license-url]: https://github.com/VENGENCE7/Puppeteer-Ejs/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/bhavish-anand-2113a6206
[heroku-shield]:https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[heroku-url]:https://puppeteer-ejs.herokuapp.com/
