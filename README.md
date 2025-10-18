<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<!-- <div align="center">
  <a href="https://github.com/okacodes/we-watch">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">We Watch</h3>

  <p align="center">
    A platform to view content that is streamed and synced and real time.
    <br />
    <a href="https://github.com/okacodes/we-watch"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/okacodes/we-watch">View Demo</a>
    <!-- &middot;
    <a href="https://github.com/okacodes/we-watch/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/okacodes/we-watch/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![PostgreSQL][PostgreSQL]][Postgres-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
<!-- * [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project is in its infancy and while I will provide as much information as I can as this progresses, it may look bare for a while.</br>
Stick with me though.
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/okacodes/we-watch.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. We Watch uses PosgreSQL. I pulled the docker image, which was fairly simple.
   ```sh
   docker pull postgres
   ```
   At the time of writing this, Postgres is on version 18. If you want to use the most current version, that should be fine. If you want version 18, do this.
   ```sh
   docker pull postgres:18
   ```
   I will edit this readme at a later date and explain how to install docker to set up postgres to work properly with the scope of this project.
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin okacodes/we-watch
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This project is meant to provide a way to stream synchronized content with anyone from around the world.
I have friends that I don't get to see often, and want to provide a way to have watch parties. You will be able to provide a link from youtube(for example),
and whatever users are in your "party" will see what you see. I aim to add functionality for more than just youtube.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add documentation for setting up Postgres
- [ ] Implement auth
- [ ] Study the definition of insanity
- [ ] Announce project on socials
    <!-- - [ ] Nested Feature -->

See the [open issues](https://github.com/okacodes/we-watch/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/okacodes/we-watch/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=okacodes/we-watch" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Logan Lyons - [@@okacodes](https://twitter.com/okacodes) - admin@loganlyons.me.com

Project Link: [https://github.com/okacodes/we-watch](https://github.com/okacodes/we-watch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/okacodes/we-watch.svg?style=for-the-badge
[contributors-url]: https://github.com/okacodes/we-watch/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/okacodes/we-watch.svg?style=for-the-badge
[forks-url]: https://github.com/okacodes/we-watch/network/members
[stars-shield]: https://img.shields.io/github/stars/okacodes/we-watch.svg?style=for-the-badge
[stars-url]: https://github.com/okacodes/we-watch/stargazers
[issues-shield]: https://img.shields.io/github/issues/okacodes/we-watch.svg?style=for-the-badge
[issues-url]: https://github.com/okacodes/we-watch/issues
[license-shield]: https://img.shields.io/github/license/okacodes/we-watch.svg?style=for-the-badge
[license-url]: https://github.com/okacodes/we-watch/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/loganxlyons
<!-- [product-screenshot]: images/screenshot.png -->
<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-6294BE?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Node.js]: https://img.shields.io/badge/Node.JS-68A063?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-35495E?style=for-the-badge&logo=express&logoColor=4FC08D
[Express-url]: https://expressjs.com/
<!-- [Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com  -->