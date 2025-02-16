import { toggleNavigation, setupRoutes, handleFormSubmit, carouselSlide} from "./script.js";
import "./src/output.css";

document.querySelector("#app").innerHTML = `
<div id="backgroundImage">
  <img class="absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
    src="https://i.postimg.cc/xCzdXpfK/portrait-engineer-job-site-work-hours-1.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
    loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="  hide-page" id="aboutImage">
  <img class="  absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
    src="https://i.postimg.cc/15F8C87k/pexels-photo-5324973.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
    loading="lazy" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="serviceImage">
  <img class=" absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
    src="https://i.postimg.cc/d3XWD0cL/pexels-hngstrm-2186572.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
    loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="blogImage">
  <img class=" absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
    src="https://i.postimg.cc/sg6yvRkG/2.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
    loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="locationsImage">
  <img class="hidden absolute h-full inset-0 object-cover w-full object-center overflow-hidden"
    src="https://i.postimg.cc/C5LqCmYv/pexels-pixabay-271667.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
    loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<div class="hide-page" id="contactImage">
  <img class="absolute h-4/5 inset-0 object-cover w-full object-center overflow-hidden"
    src="https://i.postimg.cc/3Jc9f4dZ/Screenshot-2024-09-23-103055.jpg?auto=compress%2Cformat&amp;crop=focalpoint&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;h=1004&amp;q=80&amp;w=1600"
    loading="" style="aspect-ratio: 1600 / 1004;">
</div>
<nav id="navigationHover"
  class="lg:min-h-[90px] min-h-[90px] relative flex flex-wrap z-50 group transition-all items-center bg-white lg:border-b dark:border-b-zinc-800 dark:bg-zinc-800 lg:hover:border-black group lg:text-white lg:bg-opacity-10 lg:dark:bg-opacity-10 lg:dark:bg-gray-200 drop-shadow-md px-9 lg:bg-gray-200 lg:hover:bg-white lg:hover:text-black lg:dark:hover:bg-zinc-800">
  <a href="#" class="inline-flex items-center mr-4">
    <div class="mt-1 ">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        class="fill-amber-400 group-hover:fill-amber-400 dark:group-hover:fill-amber-400 text-gray-700" width="100px" height="80px"
        viewBox="0 0 450 450" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,500.000000) scale(0.1,-0.1)" stroke="none">
          <path d="M2803 4138 c-11 -13 -28 -46 -37 -74 l-17 -52 -67 24 c-64 23 -132
31 -145 18 -8 -8 134 -142 182 -171 l36 -23 -402 0 -403 0 0 -109 0 -109 193
-1 192 0 3 -79 3 -79 52 9 c29 5 80 6 114 3 l62 -6 3 77 3 77 193 -2 192 -2 0
60 c0 34 2 61 5 61 3 0 32 -13 63 -30 81 -42 130 -47 184 -21 57 27 91 78 92
137 1 63 -25 84 -104 84 -37 0 -60 -5 -63 -12 -3 -7 -6 23 -6 68 -1 101 -11
115 -81 122 -66 6 -66 -12 0 -47 37 -19 40 -22 15 -16 -16 3 -52 24 -80 45
-98 74 -146 87 -182 48z m75 -70 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0
14 -5 12 -12z m54 -13 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11
13 6 -2 11 -8 11 -13z m-202 -50 c30 -12 84 -41 120 -64 66 -43 139 -69 200
-71 59 -3 68 -1 73 18 3 9 5 -2 6 -25 1 -41 0 -42 -35 -49 -19 -3 -53 -4 -76
-1 l-40 5 28 -31 c22 -24 19 -23 -11 5 -21 21 -36 40 -33 44 4 3 27 2 51 -4
53 -11 107 -5 107 13 0 9 -13 11 -42 8 -24 -2 -66 2 -95 10 -29 8 -50 10 -47
5 14 -22 -23 -4 -61 30 -54 50 -119 88 -203 118 -37 13 -51 21 -32 18 19 -3
60 -16 90 -29z" />
          <path d="M2348 3367 c-82 -23 -147 -87 -183 -177 -26 -67 -32 -212 -10 -285
32 -112 83 -173 304 -367 49 -43 98 -97 119 -131 32 -52 36 -67 40 -140 3 -71
0 -88 -20 -126 -34 -66 -67 -86 -141 -86 -119 1 -165 57 -175 211 l-5 84 -73
0 -74 0 0 -62 c0 -74 22 -183 45 -228 53 -102 141 -150 278 -150 100 0 141 11
204 53 37 25 56 48 83 101 35 68 35 71 35 195 0 119 -2 129 -29 182 -37 75
-95 144 -181 215 -143 121 -205 186 -237 251 -28 58 -30 69 -26 140 8 130 53
183 156 183 110 0 158 -52 169 -181 l6 -69 73 0 74 0 0 50 c0 153 -68 279
-178 326 -50 22 -194 28 -254 11z" />
          <path d="M2432 3108 c-36 -46 -18 -144 38 -209 l39 -44 1 113 c0 62 -5 122
-10 133 -12 21 -52 26 -68 7z" />
          <path d="M2400 2327 c0 -138 7 -157 55 -157 32 0 35 3 45 41 18 66 0 121 -64
194 l-35 40 -1 -118z" />
        </g>
      </svg>
    </div>
    <span
      class="text-lg -ml-4 font-bold tracking-wide text-zinc-600 lg:text-white uppercase lg:group-hover:text-zinc-600 lg:dark:group-hover:text-white dark:text-white">Sedic
      Texas</span>
  </a>



  <button
    class="inline-flex p-3 ml-auto text-zinc-600 lg:text-white uppercase lg:group-hover:text-zinc-600 lg:dark:group-hover:text-white dark:text-white rounded outline-none transition-all lg:hidden"
    id="toggleButton">
    <i class="material-icons">menu</i>
  </button>
  </button>
  <button
    class="hide-page p-3 ml-auto text-zinc-600 lg:text-white uppercase lg:group-hover:text-zinc-600 lg:dark:group-hover:text-white dark:text-white rounded outline-none transition-all lg:hidden"
    id="closeButton">
    <i class="material-icons">close</i>
  </button>
  <div
    class="hidden w-full text-sm font-sans tracking-widest uppercase transition-all lg:inline-flex lg:flex-grow lg:w-auto">
    <div
      class="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
      <button id="home"
        class="inline-flex justify-center items-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white lg:inline-flex lg:w-auto hover:underline">
        <span>Home</span>
      </button>
      <button id="about"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>About</span>
      </button>
      <button id="service"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Services</span>
      </button>
      <button id="blog"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Projects
        </span>
      </button>
      
      
      <button id="contact"
        class="inline-flex items-center justify-center w-full px-3 py-2 text-white rounded group-hover:text-zinc-600 lg:text-opacity-0 lg:hover:text-opacity-100 lg:dark:text-opacity-0 lg:dark:hover:text-opacity-100 lg:dark:group-hover:text-white hover:underline lg:inline-flex lg:w-auto">
        <span>Contact Us</span>
      </button>
    </div>
  </div>
  <div
    class="hide-page absolute top-[90px] right-0 p-4 rounded-b min-w-[100vw] shadow-md font-sans tracking-widest uppercase drop-shadow-lg transition-all lg:hidden dark:bg-zinc-800 bg-white "
    id="navigation">
    <div
      class="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
      <button id="home2"
        class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline ">
        <span>Home</span>
      </button>
      <button id="about2"
        class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline ">
        <span>About</span>
      </button>
      <button id="services2"
        class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline ">
        <span>Services & Divisions</span>
      </button>
      <button id="blog2"
        class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline">
        <span>Projects</span>
      </button>
      
      <button id="contact2"
        class="inline-flex justify-start w-full px-5 py-6 dark:text-white text-zinc-600 rounded hover:underline">
        <span>Contact Us</span>
      </button>
    </div>
  </div>
</nav>
<main class="grow" id="homepage">
  <div class="min-h-screen mt-[81vh] dark:bg-zinc-900 pt-16">
    <div class="py-12 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-8 flex justify-center">
          <p
            class="relative rounded-full px-4 py-1.5 text-sm leading-6 dark:text-white text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span class="hidden md:inline">Already know what you need..</span>
            <button href="#" id="contactlink" class="font-semibold text-lime-600">
              <span class="absolute inset-0"></span> Contact an Engineer
              <span>→</span>
            </button>
          </p>
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <strong class="text-amber-400">SEDIC</strong> Texas Civil Engineering
          </h1>
          <p class="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-600">
            "At <strong class="text-amber-400">SEDIC</strong>, we don't just build projects—we build legacies. With over five decades of experience, we’ve
            established a reputation for delivering cutting-edge engineering solutions that stand the test of time. From
            designing complex infrastructure to providing expert oversight, we ensure that every project is executed
            with precision, integrity, and a focus on sustainability. As we expand into new markets, including the U.S.,
            our commitment to driving progress through responsible, innovative engineering remains stronger than ever.
            Partner with us to create a future built on excellence."
          </p>
        </div>
      </div>
      <div class="mt-10 flow-root sm:mt-20">
        <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <!-- Photo by '@tvick' on Unsplash -->
          <img src="https://i.postimg.cc/v8Lps5DD/portrait-male-engineer-working-field-engineers-day-celebration.jpg"
            width="2000" height="1200" class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="py-16 dark:bg-zinc-900">
    <div class="mx-auto px-6 max-w-6xl  text-gray-500">
      <div class="text-center">
        <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Our Goals and Objectives</h2>
        <p class="mt-6 text-gray-700 dark:text-gray-300"></p>
      </div>
      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div aria-hidden="true"
            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
          </div>
          <div class="relative">
            <div
              class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <svg class="text-[#000014] dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                viewBox="0 0 128 128">
                <defs>
                  <linearGradient id="deviconAstro0" x1="882.997" x2="638.955" y1="27.113" y2="866.902"
                    gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="currentColor"></stop>
                    <stop offset="1" stop-color="currentColor"></stop>
                  </linearGradient>
                  <linearGradient id="deviconAstro1" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91"
                    gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#ff1639"></stop>
                    <stop offset="1" stop-color="#ff1639" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#deviconAstro0)"
                  d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0">
                </path>
                <path fill="#ff5d01"
                  d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0">
                </path>
                <path fill="url(#deviconAstro1)"
                  d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0">
                </path>
              </svg>
            </div>

            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
              <p class="text-gray-700 dark:text-gray-300">Multidisciplinary Excellence
                "A team of over 300 experts combining deep technical knowledge with practical insights."</p>
            </div>
          </div>
        </div>
        <div href="#"
          class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div aria-hidden="true"
            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
          </div>
          <div class="relative">
            <div
              class="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 263">
                <defs>
                  <linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%">
                    <stop offset="0%" stop-color="#249361"></stop>
                    <stop offset="100%" stop-color="#3ecf8e"></stop>
                  </linearGradient>
                  <linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%">
                    <stop offset="0%"></stop>
                    <stop offset="100%" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#logosSupabaseIcon0)"
                  d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z">
                </path>
                <path fill="url(#logosSupabaseIcon1)" fill-opacity="0.2"
                  d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z">
                </path>
                <path fill="#3ecf8e"
                  d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z">
                </path>
              </svg>
            </div>

            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
              <p class="text-gray-700 dark:text-gray-300">"Explore our range of consulting services, and project designs
                . Learn how SEDIC has successfully completed over 550 projects, offering tailored solutions for both
                public and private sectors."</p>
            </div>

            <div class="flex gap-3 -mb-4 py-4 border-t border-gray-200 dark:border-0">
              <button id="serviceslink"
                class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950  disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:border-gray-600 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                  fill="#e8eaed">
                  <path d="M666.15-464H232v-32h434.15L457.46-704.69 480-728l248 248-248 248-22.54-23.31L666.15-464Z" />
                </svg>
              </button>
              

            </div>
          </div>
        </div>
        <div
          class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div aria-hidden="true"
            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
          </div>
          <div class="relative">
            <div
              class="border border-red-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="0.95em" height="1em" viewBox="0 0 256 271">
                <defs>
                  <linearGradient id="logosAngularIcon0" x1="25.071%" x2="96.132%" y1="90.929%" y2="55.184%">
                    <stop offset="0%" stop-color="#e40035"></stop>
                    <stop offset="24%" stop-color="#f60a48"></stop>
                    <stop offset="35.2%" stop-color="#f20755"></stop>
                    <stop offset="49.4%" stop-color="#dc087d"></stop>
                    <stop offset="74.5%" stop-color="#9717e7"></stop>
                    <stop offset="100%" stop-color="#6c00f5"></stop>
                  </linearGradient>
                  <linearGradient id="logosAngularIcon1" x1="21.863%" x2="68.367%" y1="12.058%" y2="68.21%">
                    <stop offset="0%" stop-color="#ff31d9"></stop>
                    <stop offset="100%" stop-color="#ff5be1" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#logosAngularIcon0)"
                  d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z">
                </path>
                <path fill="url(#logosAngularIcon1)"
                  d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z">
                </path>
              </svg>
            </div>

            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
              <p class="text-gray-700 dark:text-gray-300">"Discover how over 50 years of engineering excellence is
                shaping the future. Learn more about SEDIC's commitment to innovation, sustainability, and our recent
                expansion into the U.S."</p>
            </div>
            <div class="flex gap-3 -mb-4 py-4 border-t border-gray-200 dark:border-gray-800">
              <button id="aboutlink"
                class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                  fill="#e8eaed">
                  <path d="M666.15-464H232v-32h434.15L457.46-704.69 480-728l248 248-248 248-22.54-23.31L666.15-464Z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
        <div
          class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div aria-hidden="true"
            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
          </div>
          <div class="relative">
            <div
              class="border border-gray-500/10 flex relative *:relative *:size-6 *:m-auto  text-gray-950 dark:text-white size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                <path fill="currentColor"
                  d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z">
                </path>
              </svg>
            </div>

            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
              <p class="text-gray-700 dark:text-gray-300">Project Efficiency
                "Delivering projects with precision, quality, and efficiency using cutting-edge methodologies."</p>
            </div>
          </div>
        </div>
        <div
          class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div aria-hidden="true"
            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-yellow-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
          </div>
          <div class="relative">
            <div
              class="border border-yellow-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-yellow-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="0.73em" height="1em" viewBox="0 0 256 351">
                <defs>
                  <filter id="logosFirebase0" width="200%" height="200%" x="-50%" y="-50%"
                    filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur>
                    <feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic"
                      result="shadowInnerInner1"></feComposite>
                    <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0">
                    </feColorMatrix>
                  </filter>
                  <filter id="logosFirebase1" width="200%" height="200%" x="-50%" y="-50%"
                    filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur>
                    <feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic"
                      result="shadowInnerInner1"></feComposite>
                    <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0">
                    </feColorMatrix>
                  </filter>
                  <path id="logosFirebase2"
                    d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z">
                  </path>
                  <path id="logosFirebase3"
                    d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z">
                  </path>
                </defs>
                <path fill="#ffc24a"
                  d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z">
                </path>
                <use fill="#ffa712" fill-rule="evenodd" href="#logosFirebase2"></use>
                <use filter="url(#logosFirebase0)" href="#logosFirebase2"></use>
                <path fill="#f4bd62"
                  d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z">
                </path>
                <use fill="#ffa50e" fill-rule="evenodd" href="#logosFirebase3"></use>
                <use filter="url(#logosFirebase1)" href="#logosFirebase3"></use>
                <path fill="#f6820c" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path>
                <path fill="#fde068"
                  d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005">
                </path>
                <path fill="#fcca3f"
                  d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z">
                </path>
                <path fill="#eeab37"
                  d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z">
                </path>
              </svg>
            </div>

            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
              <p class="text-gray-700 dark:text-gray-300">"SEDIC’s growth into new markets is fueled by our unwavering
                commitment to innovation, sustainability, and delivering transformative engineering solutions."

              </p>
            </div>
          </div>
        </div>
        <div
          class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div aria-hidden="true"
            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
          </div>
          <div class="relative">
            <div
              class="border border-sky-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-sky-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
                <path fill="#0080ff"
                  d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0">
                </path>
              </svg>
            </div>

            <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
              <p class="text-gray-700 dark:text-gray-300">"Every project we undertake is a reflection of our dedication
                to creating a better, more sustainable future through the power of engineering."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<div id="aboutpage" class="hide-page dark:bg-zinc-900   min-h-screen ">

  <div class=" mt-[100vh]  ">
    <section class="p-2  ">
      <div class="container   m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class=" space-y-6 md:space-y-0  md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 s lg:w-5/12 relative">
            <img class="w-full " src="https://i.postimg.cc/JzfwZNvx/sedic-team.png" alt="SEDIC Team">
            <div class="img-blur"></div>
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">Introduction: Over 5 Decades of Experience in
              High-Level Projects</h2>
            <p class="mt-6 dark:text-gray-300 text-gray-600">
              With more than 50 years of expertise, <strong class="text-amber-400">SEDIC</strong> is committed to transforming lives through engineering. Our
              multidisciplinary team of 300+ professionals specializes in studies, design, planning, and project
              management. We go beyond technical precision, embracing the human impact of our work to create sustainable
              value.
            </p>
            <p class="dark:text-gray-300 text-gray-600">
              Our mission is clear: partner with organizations to execute efficient, sustainable projects that maximize
              resources, reduce risks, and lower maintenance costs. Through our proprietary methodologies, we ensure
              each project is handled with rigor and excellence:
            </p>
            <ul class="mt-4 dark:text-gray-300 text-gray-600 list-disc list-inside">
              <li><strong class="dark:text-lime-600 ">Needs Identification Methodology (MIN):</strong> Pinpoints client needs to develop customized
                solutions.</li>
              <li><strong class="dark:text-lime-600 ">Project Development Methodology (PDM):</strong> Ensures thorough data gathering and analysis
                to mitigate technical risks.</li>
              <li><strong class="dark:text-lime-600 ">Financial Risk Assessment Methodology (FRA):</strong> Evaluates financial risks for long-term
                project sustainability.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="p-2  bg-white dark:bg-zinc-900 ">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:7/12 lg:w-6/12 sm:ml-0 lg:ml-0 lg:m-24 lg:mr-24">
            <h2 class="text-2xl text-gray-900 font-bold dark:text-white md:text-4xl">Expansion into the U.S. Market</h2>
            <p class="mt-6 dark:text-gray-300 text-gray-600">
              Building upon our strong foundation in Latin America, <strong class="text-amber-400">SEDIC</strong> is excited to announce its strategic expansion
              into the United States. This move allows us to bring our extensive expertise, innovative approaches, and
              unwavering commitment to engineering excellence to U.S.-based companies and institutions.
              By establishing a presence in the U.S. market, <strong class="text-amber-400">SEDIC</strong> aims to:

            </p>
            <ul class="mt-4 dark:text-gray-300 text-gray-600 list-disc list-inside">
              <li><strong class="dark:text-lime-600">Forge Strategic Partnerships: </strong> Collaborate with local firms and institutions to
                deliver comprehensive engineering solutions.

              </li>
              <li><strong class="dark:text-lime-600">Contribute to Infrastructure Development: </strong> Apply our experience in large-scale
                projects to enhance U.S. infrastructure.
              </li>
              <li><strong class="dark:text-lime-600">Drive Innovation:</strong> Introduce cutting-edge technologies and methodologies to the U.S.
                engineering landscape.
              </li>
            </ul>
            <p class="mt-4 dark:text-gray-300 text-gray-600">
              This expansion reflects <strong class="text-amber-400">SEDIC'S</strong> dedication to growth and its mission to transform lives through
              engineering on a global scale.

            </p>
          </div>
          <div class="md:5/12  lg:w-5/12 relative mr-4">
            <img class="w-full" src="https://i.postimg.cc/br4s56VB/team-2.png" alt="Development Team">
            <div class="img-blur dark:imgd-blur "></div>
          </div>
        </div>
      </div>
    </section>
     <section class="p-2 -mt-20  bg-white dark:bg-zinc-900 ">
      <div class="mb-10 flow-root sm:mt-20">
        <div class="-m-2 rounded-xl bg-gray-900/5 lg:rounded-2xl">
          <img src="https://i.postimg.cc/hj5F8NhN/history-pic-2.png"
            width="2000" height="1200" class="rounded-md " />
        </div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
  <div class="mx-auto max-w-5xl text-center">
    <h1 class="text-4xl font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-6xl">
      History of <strong class="text-amber-400">SEDIC</strong>: A Tradition of Excellence and Innovation
    </h1>
    <p class="mt-8 dark:text-gray-300 text-lg leading-relaxed text-gray-700">
      Founded in 1971 by four visionary engineers, <strong class="text-amber-400">SEDIC</strong> owes much of its success to Lucio Chiquito Caicedo, 
      the intellectual driving force behind its inception. His vision was shaped by years of experience working 
      in Europe, particularly with the renowned Sir Alexander Gibbs & Partners consulting firm.
    </p>
    <p class="mt-4 dark:text-gray-300 text-lg leading-relaxed text-gray-700">
      Over the past five decades, <strong class="text-amber-400">SEDIC</strong> has transformed from a small group of engineers into one of Colombia’s premier 
      engineering consulting firms. With over 600 projects completed across sectors such as power generation, 
      road infrastructure, and sanitation, the company has built a solid reputation for quality, innovation, 
      and responsibility.
    </p>
    <p class="mt-4 dark:text-gray-300 text-lg leading-relaxed text-gray-700">
      Reflecting its founders’ values, <strong class="text-amber-400">SEDIC</strong> continues to evolve by embracing new technologies, methodologies, 
      and market dynamics. In 2018, the firm expanded its operations with the establishment of 
      <strong class="text-amber-400">SEDIC Consulting S.A.S.</strong>, a subsidiary focused on harnessing 
      the power of science, innovation, and technology to transform the engineering landscape.
    </p>
    <p class="mt-4 dark:text-gray-300 text-lg leading-relaxed text-gray-700">
      Today, <strong class="text-amber-400">SEDIC</strong> plays a pivotal role in sectors 
      like solar energy and the digitalization of construction processes, pushing the boundaries of modern 
      engineering and ensuring that SEDIC remains at the forefront of the industry for years to come.
    </p>
  </div>
</div>

    </div>
  </section class="">
  <div class="min-w-[800px] mx-auto my-20 dark:bg-zinc-900 sm:max-w-2xl">
      <div id="default-carousel" class="relative   rounded-lg overflow-hidden shadow-lg" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-[500px]  s md:h-[500px]" data-carousel-inner>
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item id="slideOne">
            <img src="https://i.postimg.cc/v8LgHJgM/sedic-founder-about-2.jpg" class="object-scale-up w-full h-full"
              alt="Slide 1">
            <span
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800"></span>
          </div>
          <!-- Item 2 -->
          <div class="hide-page duration-700 ease-in-out" data-carousel-item id="slideTwo">
            <img src="https://i.postimg.cc/RV7yWfyJ/cowboy-sedic.jpg" class="object-cover w-full h-full"
              alt="Slide 2">
              <span
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800"></span>
          </div>
          <!-- Item 3 -->
          <div class="hide-page duration-700 ease-in-out" data-carousel-item id="slideThree">
            <img src="https://i.postimg.cc/wMV5p64M/sedic-carousel.jpg" class="object-cover w-full h-full"
              alt="Slide 3">
            <span
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800"></span>
          </div>
        </div>
        <!-- Slider indicators -->
        <div class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
          <button type="button"
            id="slideOneIndicator"
            class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
          <button type="button"
            id="slideTwoIndicator"
            class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
          <button type="button"
            id="slideThreeIndicator"
            class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
          id="decreaseIndex"
          class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-prev>
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button type="button"
          id="increaseIndex"
          class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-next>
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>


    





    <div class="min-h-screen  overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div  class="section relative dark:bg-zinc-900  pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:w-screen mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center dark:text-white mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold dark:text-white ">Our Certifications</h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto dark:text-white pb-2">At SEDIC, we take pride in adhering to the highest international standards. Our commitment to quality, sustainability, and safety is demonstrated through our certifications:

</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8   px-12 mb-12 bg-gray-50 border-b dark:bg-white  border-gray-100 dark:border-amber-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block dark:text-white text-gray-900 mb-6 mt-4">
                        <!-- icon -->
                       <img class="" src="https://i.postimg.cc/vTGx65c3/M01-1.png" alt="MIN CERT">

                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Needs Identification Methodology</h3>
                    <p class="text-gray-500">Identifies the true needs of clients to develop tailored solutions.
</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 dark:bg-white  bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                         <img class="" src="https://i.postimg.cc/PxW8xSrC/M03-1.png" alt="MDP CERT">

                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">PROJECT DEVELOPMENT METHODOLOGY </h3>
                    <p class="text-gray-500">The process to be followed for the collection, study and presentation of information for technical risk analysis is identified.</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <img class=""  src="https://i.postimg.cc/d1PywbvM/M02.png" alt="MRF CERT">

                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">FINANCIAL RISK ASSESSMENT METHODOLOGY </h3>
                    <p class="text-gray-500">Financial risks that jeopardize the sustainability of a project over time are identified.</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-1 px-12 mb-12 dark:border-amber-600  bg-gray-50 border-b dark:bg-white  border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mt-4 mb-4">
                        <!-- icon -->
                     <img class="" height="260px" width="180px" src="https://i.postimg.cc/dtMNTp01/SEDIC-01.png" alt="icontec 14001">

                    </div>
                   
                </div>
                <!-- end service block -->
            </div>



            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 dark:bg-white   bg-gray-50 border-b dark:border-amber-600 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 ">
                        <!-- icon -->
                         <img class="" src="https://i.postimg.cc/wBGMnzGc/CERT1.png" alt="icontec 9001">
                    </div>
                    
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-5 px-12 mb-12 dark:bg-white  bg-gray-50 border-b border-gray-100 dark:border-amber-600 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mt-5 mb-1 ">
                        <!-- icon -->
                         <img class="" height="150px" width="120px" src="https://i.postimg.cc/zv9nNW27/SELLO-ICONTEC-ISO-45001-1-1-pbf33moh1mojm7ranbyvow3nduuhb2c1f2tfde96sa.png" alt="icontec 45001">

                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black"></h3>
                    <p class="text-gray-500"></p>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>

</div>
</div>
<div id="servicepage" class="hide-page min-h-screen ">

    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script src="https://cdn.tailwindcss.com"></script>

<!-- ====== Services Section Start -->

<div class="min-h-screen mt-[81vh] dark:bg-zinc-900 pt-16">
    <div class="py-12 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-8 flex justify-center">
          <p
            class="relative rounded-full px-4 py-1.5 text-sm leading-6 dark:text-white text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
  <span class="hidden md:inline">Already know what you need..</span>
  <button href="#" id="contactlink" class="font-semibold text-lime-600">
    <span class="absolute inset-0"></span> Contact an Engineer
    <span>→</span>
  </button>
</div>
<div class="mx-auto max-w-2xl text-center">
  <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
    <strong class="text-amber-400">SEDIC</strong> Texas Civil Engineering
  </h1>
  <p class="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-600">
    We are <strong class="text-amber-400">Sedic Texas</strong>, a Consulting Engineering firm with over five decades of experience in the market. We are pleased to announce our intention to expand our services to the United States, aiming to deliver comprehensive, high-quality solutions in the field of engineering.
  </p>
  <p class="mt-4 text-lg leading-8 dark:text-gray-300 text-gray-600">
    At <strong class="text-amber-400">Sedic Texas</strong>, we specialize in a wide range of engineering services, including design, consulting, project management, and construction management. Our highly skilled team of engineers and technical professionals is dedicated to excellence and innovation in every project we undertake.
  </p>
  <p class="mt-4 text-lg leading-8 dark:text-gray-300 text-gray-600">
    Our firm has participated in large-scale national and international projects, enabling us to build extensive expertise in infrastructure development and the implementation of advanced technical solutions. We are committed to quality, safety, and sustainability in all our activities, working closely with our clients to ensure their needs and expectations are fully met.
  </p>
</div>
      </div>
      <div class="mt-10 flow-root sm:mt-20">
        <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <!-- Photo by '@tvick' on Unsplash -->
          <img src="https://i.postimg.cc/bdc4VDKn/pexels-outandaboutwithliz-10916104.jpg"
            width="2000" height="1200" class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
        </div>
      </div>
    </div>
  </div>


  <div class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span class="font-semibold text-lg dark:text-amber-400  mb-2 block">
               Our Services
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  
                  mb-4
                  dark:text-white
                  "
                  >
                  What We Offer
               </h2>
               <p class="text-base dark:text-gray-300 ">
  Our engineering services are designed to meet the highest industry standards, delivering innovative solutions that drive success and ensure long-term project sustainability.
</p>

            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
   <!-- Box 1 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.2667" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Auditing and Technical Project Management
         </h4>
         <p class="text-sm text-body-color">We provide comprehensive technical and administrative oversight throughout every stage of your project, ensuring all tasks are executed with precision and professionalism.

</p>
      </div>
   </div>

   <!-- Box 2 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5004 0C14.6345 0 11.4767 2.14015 10.0251 6.42044"/>
               <path d="M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4 fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Sanitation and Potable Water
         </h4>
         <p class="text-body-color">
         We develop comprehensive systems for the supply of potable water and the collection, treatment, and disposal of wastewater. This includes the design of treatment plants, distribution networks, sewage systems, and sustainable sanitation solutions tailored to the specific needs of each project.


         </p>
      </div>
   </div>

   <!-- Box 3 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062" fill="white"/>
               <path d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Hydraulic Designs</h4>
         <p class="text-body-color">We create advanced designs for hydraulic projects such as canals, dams, irrigation and drainage systems, and complex hydraulic structures. We use modern modeling tools to ensure efficiency, safety, and sustainability in the management of water resources.
         </p>
      </div>
   </div>

   <!-- Box 4 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.2667" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Geology and Geotechnics
         </h4>
         <p class="text-sm text-body-color">We offer detailed geological and geotechnical studies that include soil analysis, slope stability, geotechnical characterization, and foundation designs. Our approach ensures that structures are safe and appropriate for the site conditions.

</p>
      </div>
   </div>

   <!-- Box 5 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5004 0C14.6345 0 11.4767 2.14015 10.0251 6.42044"/>
               <path d="M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4 fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Structural Designs
         </h4>
         <p class="text-body-color">
         We develop high-quality structural designs for buildings, bridges, industrial and institutional infrastructure. We use advanced seismic and structural analysis to ensure safety, efficiency, and compliance with current regulations.

        </p>
      </div>
   </div>

   <!-- Box 6 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062" fill="white"/>
               <path d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Hydroelectric Generation
         </h4>
         <p class="text-body-color">We develop hydroelectric projects that include feasibility studies, dam designs, hydroelectric plants, and generation and transmission systems. Our goal is to maximize the energy potential of water resources with a sustainable approach.
         </p>
      </div>
   </div>

   <!-- Box 7 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.2667" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Power Transmission Lines</h4>
         <p class="text-sm text-body-color">We design and plan high and low voltage power transmission lines, ensuring efficient solutions for energy distribution. We also conduct environmental impact studies and technical and economic feasibility analysis.
         </p>
      </div>
   </div>

   <!-- Box 8 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5004 0C14.6345 0 11.4767 2.14015 10.0251 6.42044"/>
               <path d="M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4 fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Institutional and Industrial Infrastructure
         </h4>
         <p class="text-body-color">We offer comprehensive designs for institutional buildings and industrial facilities, considering functionality, energy efficiency, and sustainability. We integrate architecture and technical solutions to meet the specific requirements of each project.

</p>
      </div>
   </div>

   <!-- Box 9 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062" fill="white"/>
               <path d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Environmental and Hydrological Studies
         </h4>
         <p class="text-body-color">We conduct environmental impact and hydrological studies to assess the viability of projects and their interaction with the environment. We propose strategies to minimize environmental impact and optimize the use of natural resources.
         </p>
      </div>
   </div>

   <!-- Box 10 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.2667" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Roads and Airports
         </h4>
         <p class="text-sm text-body-color">We design transportation infrastructure such as roads, urban roads, highways, and airports, focusing on road safety, operational efficiency, and environmental integration. We use advanced modeling tools to ensure quality and durability.
         </p>
      </div>
   </div>

   <!-- Box 11 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4 flex">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5004 0C14.6345 0 11.4767 2.14015 10.0251 6.42044"/>
               <path d="M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4 fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Topography
         </h4>
         <p class="text-body-color">We provide precision topographic services, including cadastral surveys, 3D mapping, and terrain modeling. Our data is essential for planning and executing projects with accuracy.</p>
      </div>
   </div>

   <!-- Box 12 -->
   <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col justify-between">
         <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062" fill="white"/>
               <path d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062" fill="white"/>
            </svg>
         </div>
         <h4 class="font-semibold text-xl text-dark mb-3">Consulting and Project Design
         </h4>
         <p class="text-body-color">We specialize in high-level consulting services, providing diagnostic studies, in-depth research, and expert analysis to guide the planning and design of projects. Our focus is on delivering tailored blueprints and technical solutions that ensure projects are optimized for success before breaking ground.</p>
      </div>
   </div>
</div>

   </div>
</div>
  </div>

<!-- ====== Services Section End -->
</div>
 
</div>
<div id="blogpage" class="hide-page relative px-4 py-10 sm:mr-4 min-h-screen">
  <!-- component -->\
   <div class="mt-[100vh] "
   
<section class="bg:white dark:bg-zinc-900 -mt-20">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-amber-400 capitalize lg:text-4xl dark:text-amber-400">Our Projects</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.postimg.cc/Xvjk6wx9/Mesa-de-trabajo-2.jpg" alt="">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <button id="projectEnergyLink" href="#" class="text-xl font-semibold text-gray-800 hover:text-amber-400 dark:text-white ">
                    Energy
</button>
                    
                    
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.postimg.cc/zfwrHSSV/Mesa-de-trabajo-6.jpg" alt="">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <button id="projectInfrastructureLink" href="#" class="text-xl font-semibold text-gray-800 hover:text-amber-400 dark:text-white ">
                    Infrastructure
</button>

                    
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.postimg.cc/BnrSKnrw/Mesa-de-trabajo-3.jpg" alt="">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <button id="ProjectWaterSanitationLink" href="#" class="text-xl font-semibold text-gray-800 hover:text-amber-400 dark:text-white ">
                    Water & Sanitation
</button>

                    
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.postimg.cc/x13Qc3Pq/Mesa-de-trabajo-28.jpg" alt="">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <button id="ProjectSubstationsLink" href="#" class="text-xl font-semibold text-gray-800 hover:text-amber-400 dark:text-white ">
                    Grid Engineering Masterpieces

</button>

                    
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.postimg.cc/kGS39Q4J/Mesa-de-trabajo-5.jpg" alt="">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <button id="ProjectConstructionLink" href="#" class="text-xl font-semibold text-gray-800 hover:text-amber-400 dark:text-white ">
                    Building the Future
</button>

                    
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://i.postimg.cc/TYrM4JFQ/Mesa-de-trabajo-7.jpg" alt="">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <button id="ProjectIndustrialLink" href="#" class="text-xl font-semibold text-gray-800 hover:text-amber-400 dark:text-white ">
                    Industrial Ventures
                    </button>
                    
                    
                </div>
            </div>
        </div>
    </div>
</section>

</div>
</div>


    <div id="projectEnergyPage" class="hide-page dark:bg-zinc-900 min-h-screen">
    <!-- component -->

    <div id="locations" class="section relative bg:white dark:bg-zinc-900  pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold  text-amber-400 ">Energy Projects</h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-red-500 leading-relaxed font-light text-xl mx-auto pb-2">button maybe</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-gray-900 dark:text-white">
  <a href="https://genmas.com.co/central-hidroelectrica-la-cascada/" 
     target="_blank" 
     class="text-blue-600 hover:underline">
    ACASSA – Repowering Designs for La Cascada Small Hydroelectric Plant
  </a>
</h3>
<p class="text-gray-600 dark:text-gray-600 leading-relaxed">
  The <strong>La Cascada Small Hydroelectric Plant (PCH)</strong>, located in <strong>Abejorral, Antioquia</strong>, is undergoing a 
  <span class="font-medium text-gray-700 dark:text-gray-600">repowering initiative</span> to enhance its energy generation capacity. 
  This project is designed to <strong>improve efficiency</strong>, <strong>modernize infrastructure</strong>, and 
  <strong>optimize hydroelectric performance</strong> through cutting-edge engineering solutions.
</p>
<ul class="mt-3 text-gray-600 dark:text-gray-600 list-disc pl-5 space-y-1">
  <li><strong>Advanced civil, mechanical, and electrical designs</strong> to ensure long-term sustainability.</li>
  <li><strong>Structural reinforcements</strong> to enhance reliability and resilience.</li>
  <li><strong>Integration of cutting-edge hydroelectric technologies</strong> for increased efficiency.</li>
</ul>
<p class="mt-3 text-gray-600 dark:text-gray-600">
  This initiative aligns with our commitment to <strong>sustainable energy solutions</strong>, ensuring the plant operates at 
  its highest potential for years to come.
</p>



                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.epm.com.co/institucional/sobre-epm/quienes-somos.html" target="_blank" class="text-blue-600 hover:underline">
    EPM 
  </a>
</h3>
<p class="text-gray-600 mb-3">
  Extensive experience in technical, administrative, and environmental supervision of major hydroelectric and infrastructure projects, including:
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Ituango Hydroelectric Project</strong> – Supervision during civil works construction and installation of electromechanical equipment.</li>
  <li><strong>La Herradura & La Vuelta</strong> – Supervision and advisory services for civil works construction, equipment installation, and commissioning.</li>
  <li><strong>Porce II</strong> – Technical supervision of installations, testing, and commissioning of the generation unit control system and remote control between substations and the National Dispatch Center.</li>
  <li><strong>Mini Hydroelectric Plants Pajarito & Dolores</strong> – Construction and installation supervision.</li>
  <li><strong>Nechí Project</strong> – Civil and electrical design for the underground power plant and control building for bidding and construction.</li>
  <li><strong>Porce II</strong> – Supervision during construction and installation.</li>
  <li><strong>Riachón</strong> – Feasibility study review.</li>
  <li><strong>Penderisco & Murrí</strong> – Supervision during construction and design review.</li>
  <li><strong>Playas</strong> – Feasibility study, bidding design, construction design, and advisory during construction, installation, and commissioning.</li>
  <li><strong>Penderisco & Murrí</strong> – Site reconnaissance and prefeasibility studies.</li>
  <li><strong>Hydrological & Hydraulic Study</strong> – Río Guatapé.</li>
  <li><strong>Piedras Blancas Dam</strong> – Construction advisory services.</li>
</ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.isa.co/en/" target="_blank" class="text-blue-600 hover:underline">
    ISA
  </a>
</h3>
<p class="text-gray-600 mb-3">
  Comprehensive oversight and technical supervision for hydroelectric and infrastructure projects, including:
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Bahía Solano</strong> – Detailed designs for construction and specifications.</li>
  <li><strong>Arrieros del Micay</strong> – Feasibility study.</li>
  <li><strong>Río Calderas & Río Tafetanes Diversion</strong> – Supervision during construction and review of design plans.</li>
</ul>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://isagen.com.co/es/nosotros/quienes-somos" target="_blank" class="text-blue-600 hover:underline">
    Isagen S.A.
  </a>
</h3>
<p class="text-gray-600 mb-3">
  Expert consulting and supervision for the construction and commissioning of major hydroelectric projects, including:
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Río Amoyá Hydroelectric Project</strong> – Supervision during construction and operational delivery.</li>
  <li><strong>Sogamoso Project</strong> – Additional feasibility study and detailed designs for bidding on civil works and electromechanical generation equipment.</li>
  <li><strong>Río Amoyá Project</strong> – Development of key infrastructure, including intake structures, desanders, an 8.5 km conduction tunnel, a 29m-high cavern, and other essential components.</li>
</ul>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://mejiavillegas.com/mejia-villegas-constructores/" target="_blank" class="text-blue-600 hover:underline">
  Mejía Villegas Ltda.
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Guadalupe IV Project</strong> – Scope: Structural designs for the intake system and its closure panels, the substructure of the surface powerhouse, and the gates for the suction pipes. This work was executed in collaboration with the lead consultant of this project for Empresas Públicas de Medellín.</li>
  
</ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.celsia.com/es/quienes-somos/la-nueva-era-de-la-energia/" target="_blank" class="text-blue-600 hover:underline">
  Celsia
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Restrepo Hydroelectric Plant Project</strong> – This project focused on estimating the conversion factors for the generation units at the Carlos Lleras Restrepo Hydroelectric Plant. The aim was to optimize energy efficiency by evaluating environmental conditions and operational factors, ensuring accurate performance monitoring and forecasting for the plant.</li>
  
</ul>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>


</div>



<div id="ProjectInfrastructurePage" class="hide-page  min-h-screen">
    <!-- component -->
    <div  class="section relative bg:white dark:bg-zinc-900 pt-20  pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-amber-400">Infrastructure Projects</h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">button maybe</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://aeropuertodelcafe.com.co/" target="_blank" class="text-blue-600 hover:underline">
    Aeropuerto del Café
  </a>
</h3>
<p class="text-gray-600 mb-3">
  Phase III studies and designs for the recovery of embankments in the area of influence of Aeropuerto del Café, located in the municipality of Palestina, Caldas.
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Embankment Recovery</strong> – Design and supervision of stabilization structures.</li>
  <li><strong>Airport Infrastructure</strong> – Detailed studies for land optimization and operational safety.</li>
  <li><strong>Technical Analysis</strong> – Assessment of environmental and geotechnical impact in the area of influence.</li>
</ul>




                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.epm.com.co/institucional/proyectos/proyectos-en-el-territorio/" target="_blank" class="text-blue-600 hover:underline">
    EPM
  </a>
</h3>
<p class="text-gray-600 mb-3">
  Supervision during the construction of infrastructure works for the Ituango Hydroelectric Project.
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Equipment Registration Methodology</strong> – Development of a structured approach for energy division.</li>
  <li><strong>Land Parcels</strong> – Planning and supervision in the municipalities of El Peñol and Guatapé.</li>
  <li><strong>Infrastructure Supervision</strong> – Oversight of adaptation works in Nuevo Peñol.</li>
</ul>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.idu.gov.co/page/quienes-somos-2" target="_blank" class="text-blue-600 hover:underline">
    IDU
  </a>
</h3>
<p class="text-gray-600 mb-3">
Studies and designs for the Tintal Avenue, from Bosa Avenue to Alsacia Avenue, Alsacia Avenue from Tintal Avenue to Constitution Avenue, Constitution Avenue from Alsacia Avenue to Centenario Avenue, and Bosa Avenue from Ciudad de Cali Avenue to Tintal Avenue in Bogotá, D.C.
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Soil Analysis</strong> – Geotechnical studies and recommendations to assess the feasibility of infrastructure projects managed by the Urban Development Institute in Bogotá.</li>
</ul>




                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.medellin.edu.co/" target="_blank" class="text-blue-600 hover:underline">
  Secretariat of Education and Culture
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>City of Learning Project</strong> – Construction oversight and supervision of educational institutions in the city of Medellín. This includes monitoring the progress and quality of construction projects for school buildings and educational facilities, ensuring they meet the required standards and regulations. The supervision ensures that the construction processes adhere to timelines, budgets, and safety protocols to provide optimal learning environments for students and staff.</li>
  
</ul>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://antioquia.gov.co/" target="_blank" class="text-blue-600 hover:underline">
  GOVERMENT OF ANTIOQUIA
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Mellito - Tambo Project</strong> – Technical, Administrative, and Environmental Supervision for the rehabilitation of the Mellito - Tambo - Arboletes road, including the construction of embankments, drainage, and sub-drainage works, located in the department of Antioquia.</li>
  <li><strong>Mellito - Tambo Project</strong> – Technical, Administrative, and Environmental Supervision for the rehabilitation of the Mellito - Tambo - Arboletes road, including the construction of embankments, drainage, and sub-drainage works, located in the department of Antioquia.</li>
</ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.metrodemedellin.gov.co/usuarios/que-hacer-y-donde-ir-en-medellin" target="_blank" class="text-blue-600 hover:underline">
  METROMED
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>HydroTrack Design Project</strong> – Design of Hydraulic Structures for the Metropolitan Train, an essential part of Medellín’s urban transportation network. Medellín is the only city in Colombia with a metro system, providing efficient and eco-friendly transportation to its residents. The design focuses on ensuring the hydraulic infrastructure supports the safe and sustainable operation of the metropolitan train, contributing to the city’s clean and modern reputation.</li>
  
</ul>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>

</div>


<div id="ProjectWaterSanitationPage" class="hide-page  min-h-screen">
    <!-- component -->
 <!-- component -->
<div id="locations2" class="section bg:white dark:bg-zinc-900 relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-amber-400">Water & Sanitation Projects </h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">button maybe</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">FONADE</h3>
                    <p class="text-gray-500">
  Technical, administrative, and budgetary control supervision for the construction of main canals 2, 3, and 4, including component structures and complementary works of the 
  <a href="https://www.findeter.gov.co/system/files/convocatorias/PAF-ADR-C-023-2020/PAF-ADR-C-023-2020%40paf-adr-c-023-2020_anexo-especificaciones-tecnicas-triangulo-fd-revision-ga-dat-vip.pdf" target="_blank" class="text-blue-500 hover:underline">
    Triángulo del Tolima irrigation district
  </a> in the municipality of Coyaima, Tolima.
</p>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.epm.com.co/institucional/sobre-epm/quienes-somos.html" target="_blank" class="text-blue-600 hover:underline">
      EPM – Water & Sanitation Projects
    </a>
  </h3>
  <p class="text-gray-600 mb-3">
    Extensive experience in technical, administrative, environmental, and social supervision of major infrastructure projects, including:
  </p>
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Relocation of networks & civil works</strong> – Parques del Río (Stage 1.1, Eastern Side).</li>
    <li><strong>Modernization & expansion of sewer systems</strong> – Bello, Copacabana, and Girardota.</li>
    <li><strong>Construction & rehabilitation of water and sewer networks</strong> – Doce de Octubre, Cuenca La Seca, Picacho, and Popular circuits.</li>
    <li><strong>Supervision of water supply & sanitation contracts</strong> – Sabaneta, Envigado, and Retiro.</li>
    <li><strong>Rehabilitation of the Piedras Blancas Reservoir</strong> and loss reduction studies.</li>
    <li><strong>Optimization of wastewater collection & treatment systems</strong> – Aburrá Valley.</li>
    <li><strong>Supervision of aqueduct & sewer infrastructure</strong> – Cuenca Norte and Santa Helena.</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://tinyurl.com/yzj2fvh3" target="_blank" class="text-blue-600 hover:underline">
      EAAB – Water Infrastructure Projects
    </a>
  </h3>
  <p class="text-gray-600 mb-3">
    EAAB specializes in the rehabilitation and construction of water infrastructure, with key projects such as:
  </p>
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong><a href="https://tinyurl.com/j7ns5m9p" target="_blank" class="text-blue-600 hover:underline">Supervision during the rehabilitation of tunnels</a></strong> and other structures in the <strong>Chingaza system</strong>, including the installation of a guard valve at La Ventana.</li>
    <li><strong>Supervision during the construction of flood control works</strong> in the <strong>Tunjuelo River basin</strong> – Cantarrana Dam and related works.</li>
    <li><strong><a href="https://tinyurl.com/4cewe8mb" target="_blank" class="text-blue-600 hover:underline">Monitoring of civil works supervision</a></strong> for the <strong>Chuza, San Rafael, Chisacá, and La Regadera reservoirs</strong>.</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.grupo-epm.com/site/aguasnacionales/" target="_blank" class="text-blue-600 hover:underline">
      AGUAS NACIONALES 
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Supervision for the technical, administrative, and contractual oversight</strong> of the supply, installation, and field testing of electromechanical equipment, civil works execution, and commissioning of the Bello wastewater treatment plant.</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold">
  <a href="https://www.adr.gov.co" target="_blank" class="text-blue-600 hover:underline">
    AGENCIA DE DESARROLLO RURAL – Irrigation Infrastructure Supervision
  </a>
</h3>
<p class="text-gray-500">
  Supervision of contracts for the diagnosis, rehabilitation, and/or improvement of small- and large-scale irrigation districts owned by the Rural Development Agency.
</p>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold">
  <a href="https://www.cvc.gov.co" target="_blank" class="text-blue-600 hover:underline">
    CVC – Feasibility Studies and Reservoir Design
  </a>
</h3>
<p class="text-gray-500">
  Comprehensive studies and technical designs for water regulation reservoirs, including pre-feasibility, feasibility, and detailed engineering phases.  
  These projects aim to enhance water resource management, flood control, and sustainable supply for agricultural, industrial, and domestic use.  
  The work involves hydrological and environmental assessments, structural design, and technical supervision to ensure optimal efficiency and long-term sustainability.
</p>


                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>

</div>

<div id="ProjectSubstationsPage" class="hide-page dark:bg-zinc-900 min-h-screen">
   
<!-- component -->
<div id="services" class="section bg:white dark:bg-zinc-900 relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-amber-400">Substaions Projects</h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Save time managing advertising &amp; Content for your business.</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.celsia.com/es/quienes-somos/la-nueva-era-de-la-energia/" target="_blank" class="text-blue-600 hover:underline">
  EPSA
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>EPSA Project </strong> – Comprehensive technical, administrative, and environmental advisory and supervision for the construction of a 34.5 kV transmission line connecting the Alto and Bajo Tulúa Hydroelectric Power Plants. The project involves overseeing the design and implementation of the high-voltage transmission infrastructure, ensuring adherence to industry standards, environmental regulations, and safety protocols. It also includes project management support, budgeting oversight, risk management, and monitoring of environmental impacts throughout the construction phase, contributing to the efficient and sustainable operation of the hydroelectric plants.</li>
  
</ul>




                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.epm.com.co/institucional/proyectos/" target="_blank" class="text-blue-600 hover:underline">
    EPM
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Design of 230 kV Substation at Playas Hydroelectric Plant</strong> – The project involves the design of a 230 kV substation as part of the infrastructure for the Playas Hydroelectric Plant.</li>
  <li><strong>Design of 115/13.2 kV Substation for Playas Hydroelectric Plant</strong> – This project focuses on the design of a 115/13.2 kV substation for the construction of the Playas Hydroelectric Plant.</li>
  <li><strong>Transmission Line Supervision for 110 kV Río Claro</strong> – Supervision of the transmission lines at 110 kV, covering distances of 39 and 61 kilometers.</li>
  <li><strong>Design of 230 kV Transmission Line from Playas to Guatapé to Substation Oriente</strong> – This project includes the design of a 56 km transmission line at 230 kV, connecting Playas to Guatapé and Substation Oriente.</li>

</ul>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.isa.co/es/grupo-isa/estructura-societaria/" target="_blank" class="text-blue-600 hover:underline">
  ISA
  </a>
</h3>
<p class="text-gray-600 mb-3">
Project Control Services for 500 and 230 kV Transmission Lines and Substations
These projects involve the oversight and control of construction for 500 kV and 230 kV transmission lines, a 230 kV underground line, and the construction of 500 kV and 230 kV substations, including GIS-type substations.
</p>
<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Transmission Line Supervision for 230 kV La Virginia - La Hermosa</strong> – Supervision of the 27 km 230 kV transmission line between La Virginia and La Hermosa.</li>
  <li><strong>Transmission Line for 230 kV Sabanalarga - Fundación</strong> – The construction and supervision of a 90 km 230 kV transmission line from Sabanalarga to Fundación.</li>
  <li><strong>Design and Supervision of 230 kV Transmission Line from Guatapé to Jaguas</strong> – This project includes both the design and supervision of an 18 km 230 kV transmission line connecting Guatapé to Jaguas.</li>
</ul>




                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.h-mv.com/Nosotros/nosotros.aspx?Id=42&Lang=es-CO" target="_blank" class="text-blue-600 hover:underline">
  
HMV
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Design of Civil Works for New Hope Substation (115 kV)</strong> – This project involves the design of the civil infrastructure for the 115 kV New Hope Substation, ensuring its proper setup for efficient energy distribution.</li>
  
</ul>

                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www.se.com/co/es/about-us/company-profile/" target="_blank" class="text-blue-600 hover:underline">
  
Schneider Electric de Colombia S.A.
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Design of Coveñas Substation (110/34.5/13.8 kV, SF6)</strong> – This project involves the design of a SF6-insulated substation to enhance power distribution capabilities in the Coveñas region.</li>
  <li><strong>Design of Dosquebradas Substation (115/33/13.2 kV)</strong> – Expert design services for a substation to improve electrical transmission and distribution in the Dosquebradas area.</li>
  <li><strong>Supervision of La Sierra Substation (230 kV)</strong> – Providing technical oversight and supervision for the construction and commissioning of the 230 kV La Sierra Substation.</li>
</ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
  <a href="https://www1.upme.gov.co/Entornoinstitucional/Paginas/quienes-somos.aspx" target="_blank" class="text-blue-600 hover:underline">
  UPME
  </a>
</h3>

<ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong>Oversight for the Design, Supply Procurement, Construction, Operation, and Maintenance of the Chivor and Norte 230 kV Substations and Associated Transmission Linest</strong> – This project includes comprehensive oversight of the design, procurement, construction, and ongoing operation and maintenance of the Chivor and Norte 230 kV substations and their corresponding transmission lines.</li>
  <li><strong>Oversight for the Design, Supply Procurement, Construction, Operation, and Maintenance of the Quimbo 230 kV Substation and Associated Transmission Linest</strong> – Providing full project oversight for the design, supply procurement, construction, operation, and maintenance of the Quimbo 230 kV substation and its linked transmission lines.</li>


</ul>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>

</div>


<div id="ProjectConstructionPage" class="hide-page dark:bg-zinc-900 min-h-screen">
   
<!-- component -->
<div id="services" class="section relative pt-20 pb-8 bg:white dark:bg-zinc-900 md:pt-16 md:pb-0 bg-white">
    <div class="container  xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-amber-400">Construction Projects</h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Save time managing advertising &amp; Content for your business.</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2  lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.airplan.aero/quienes-somos" target="_blank" class="text-blue-600 hover:underline">
    Airplan
    </a>
  </h3>
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Cargo Terminal Supervision – José María Córdova Airport</strong> – This project involved overseeing the construction of warehouses at the cargo terminal of José María Córdova International Airport in Rionegro, ensuring compliance with technical, administrative, and safety standards.</li>
</ul>


</div>
                
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.epm.com.co/institucional/sobre-epm/quienes-somos/direccionamiento-estrategico.html" target="_blank" class="text-blue-600 hover:underline">
      EPM
    </a>
  </h3>

  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>EPM Public Utilities Building – Design & Engineering Supervision</strong> – Comprehensive design, structural engineering, and technical advisory services for the construction of the Empresas Públicas de Medellín (EPM) headquarters. This project involved detailed planning, sustainable design considerations, and oversight to ensure the successful execution of one of Medellín’s most emblematic corporate buildings.</li>
    
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.meals.com.co/about/inspira" target="_blank" class="text-blue-600 hover:underline">
    Construction Supervision of CEDI Ibagué Helados
    </a>
  </h3>
 
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    
    <li><strong>Construction Supervision of CEDI Ibagué Helados</strong> – Comprehensive technical, administrative, and financial oversight of the construction of the CEDI Ibagué Helados distribution center. This project involved ensuring compliance with structural and architectural design specifications, adherence to safety and environmental regulations, and strict quality control throughout the construction phases. The supervision also covered budget management, risk mitigation strategies, and coordination between contractors and stakeholders to optimize efficiency and ensure the successful completion of the facility within the established timeline.</li>
    
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.grupo-epm.com/site/aguasnacionales/" target="_blank" class="text-blue-600 hover:underline">
      
Grupo Nutresa
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Civil Works Supervision</strong> Supervision and planning of maintenance and civil works projects across Grupo Nutresa’s facilities, ensuring quality, compliance, and efficient execution.</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.clinicamedellin.com/" target="_blank" class="text-blue-600 hover:underline">
      
    Clínica Medellín
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Expansion & Renovation Supervision</strong> We supervised the expansion and renovation of Clínica Medellín, ensuring the project met healthcare standards. Our responsibilities included managing contractors, maintaining timelines, and ensuring the quality of construction. The goal was to improve the facility’s capacity and services while complying with technical and safety regulation</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.fiscalia.gov.co/colombia/la-entidad/quienes-somos/mision-y-vision/" target="_blank" class="text-blue-600 hover:underline">
      
    Fiscalía General de la Nación
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Design and Construction Supervision of the Ibagué Headquarters</strong> We provided design, cost control, scheduling, and technical supervision for the construction of the new Fiscalía General de la Nación headquarters in Ibagué, Tolima. The project involved creating a modern facility for judicial functions, focusing on efficiency and functionality.

Our team ensured the design met all necessary requirements and standards, while overseeing the construction process to stay within budget and timeline. We provided continuous technical oversight, ensuring quality, compliance with regulations, and effective communication between all parties involved</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>

</div>



<div id="ProjectIndustrialPage" class="hide-page dark:bg-zinc-900 min-h-screen">
   
<div id="services" class="section relative pt-20 pb-8 bg:white dark:bg-zinc-900 md:pt-16 md:pb-0 bg-white">
    <div class="container  xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-amber-400">Industrial Projects</h2>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg>
            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Save time managing advertising &amp; Content for your business.</p>
        </header>
        <!-- End heading -->
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2  lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.cerromatoso.com.co/" target="_blank" class="text-blue-600 hover:underline">
    Cerro Matoso S.A.
    </a>
  </h3>
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Slag Pot Tilting System Design </strong> – Engineered an efficient mechanism for handling and tilting slag pots to optimize operations.</li>
    <li><strong>Sludge Pumping Station Design </strong> – Developed a pumping system for effective sludge management and disposal.</li>
  </ul>


</div>
                
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.kimberly-clark.com/en-us/company/about-us" target="_blank" class="text-blue-600 hover:underline">
    KYMBERLY CLARK
    </a>
  </h3>

  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>
Effluent Treatment Sludge Hopper Discharge System Upgrade</strong> – Engineering design for the modification of the concrete sludge hopper discharge system to enhance the efficiency and reliability of the effluent water treatment process. The project aimed to improve structural integrity, optimize flow management, and ensure compliance with environmental regulations.</li>
    
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-badge-ad" viewBox="0 0 16 16">
                            <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.postobon.com/la-compania/quienes-somos" target="_blank" class="text-blue-600 hover:underline">
    Postobón
    </a>
  </h3>
 
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    
    <li><strong>Comprehensive Flood Hazard Assessment
    </strong> – We conducted an extensive flood hazard assessment for Quebrada La Mosca, focusing on Postobón’s property in Guarne. This study involved hydrological and hydraulic modeling to delineate floodplains, evaluate water flow patterns, and determine flood risk levels. The project included the development of a flood hazard map to identify vulnerable areas, inform land-use planning, and support mitigation strategies. Our findings provided critical insights for infrastructure resilience, ensuring Postobón’s operations remain safeguarded against potential flood impacts.</li>
    
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.uniban.com/sobre-nosotros/" target="_blank" class="text-blue-600 hover:underline">
      
    UNIBAN
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Fixed Crane Installation Design</strong> We carried out the studies, calculations, and design for the civil works required to install a fixed crane at UNIBAN’s facilities, ensuring structural stability and operational efficiency.</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.enka.com.co/la-empresa/quienes-somos/" target="_blank" class="text-blue-600 hover:underline">
      
    ENKA
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
  <li><strong> Building Design & Oversight</strong> We conducted soil studies and provided structural design and construction oversight for multiple buildings.

</li>
  <li><strong>Water Conduction System</strong> We designed and supervised the construction of a water conduction system for efficient water management.</li>
  </ul>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block text-gray-900 mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-black mb-3">
    <a href="https://www.cryogas.com.co/Web/CO/Compania/Descripcion-General" target="_blank" class="text-blue-600 hover:underline">
      
    Cryogas
    </a>
  </h3>
  
  <ul class="text-gray-600 list-disc list-inside space-y-2">
    <li><strong>Air Processing Plant</strong> We executed the detailed engineering and provided oversight during the construction of an air processing plant in Barbosa, Antioquia, specializing in the extraction of oxygen, nitrogen, and argon in both liquid and gaseous forms.</li>
<li><strong>Air Fractionation Plant</strong> We designed and provided oversight for the installation of an air fractionation plant in Sibaté, Cundinamarca, ensuring efficient separation of gases for industrial use.</li>
</ul>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>

  </div>

<div id="locationspage" class="hide-page min-h-screen relative px-4 py-10 sm:mr-4 bg-black">
  <h1 class="text-center text-3xl font-bold tracking-wide text-gray-900">
    Locations
  </h1>
</div>
<div id="contactpage" class="hide-page  min-h-screen relative px-4 py-10 sm:mr-4">
  <div class="mt-24">
    <div class="mx-auto max-w-2x  text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Contact Us
      </h1>
    </div>
  </div>
  <div class="form-container min-h-fit  mt-[50vh] mb-10">
    <div class="flex items-center justify-start">
      <div class="mx-auto w-full max-w-lg">
        <p class="mt-3 ml-4 dark:text-white">Email us at <a href="mailto:info@SEDICTEXAS.com" class="text-amber-400 underline">info@SEDICTEXAS.com</a> or message us here:</p>

        <form action="" class="mt-10" id="contact-form">
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0">
              <input type="text" name="name"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" " />
              <label
                class="absolute top-3 -z-s0 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Name</label>
            </div>
            <div class="relative z-0">
              <input type="text" name="email"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" " />
              <label
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Email</label>
            </div>
            <div class="relative z-0">
              <input type="text" name="phone"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" " />
              <label
                class="absolute top-3 -z-s0 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Phone Number</label>
            </div>
            <div class="relative z-0">
              <input type="text" name="company"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" " />
              <label
                class="absolute top-3 -z-s0 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Company</label>
            </div>
            <div class="relative z-0 col-span-2">
              <textarea name="message" rows="5"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "></textarea>
              <label
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Leave
                Message</label>
            </div>
          </div>
          <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>


<div id="Documentationpage" class="hide-page dark:bg-zinc-900 min-h-screen">

</div>



<div id="privacypolicypage" class="min-h-screen hide-page py-10 px-20 bg-gray-100 dark:bg-zinc-900">
<div class="container mx-auto px-4 py-8 dark:text-gray-400">
        <h1 class="text-3xl font-bold mb-4 dark:text-gray-200 text-center">Privacy Policy</h1>

        <p class="mb-4">
            Thank you for visiting our website. Sedic Texas respects your privacy. Sedic Texas and its subsidiaries and
            affiliates own and operate this website. References in this policy to “Sedic Texas,” “we,” “our,” or “the
            Company” refer to Sedic Texas and its subsidiaries and affiliates. This policy applies to the information we
            collect from you when you visit our website at <a style="color:blue" href="https://www.SEDICTEXAS.com">www.SEDICTEXAS.com</a> (the “Site”).
            If you do not agree with any part of this policy, please do not use the Site or provide any personal
            information to us, as your use of the Site constitutes acceptance of this policy.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Information We May Collect</h2>

        <p class="mb-4">
            <strong>Personal Information:</strong> Personal information refers to details that identify or relate to an
            individual. We may collect your first and last name, email address, physical address, and/or telephone
            number.
        </p>

        <p class="mb-4">
            <strong>Information Collected by Cookies:</strong> Cookies are small data files stored on your device to
            enhance your experience on our Site. They help us recognize whether you’ve visited the Site before. Cookies
            also collect personal information like your IP address and details about your usage of the Site. You can set
            your browser to refuse cookies, but this may limit your experience on the Site.
        </p>

        <p class="mb-4">
            <strong>Usage Data:</strong> This includes technical, non-identifiable information, such as your browser
            type, collected via cookies and other tracking technologies. This helps us understand our audience and
            improve user engagement.
        </p>

        <p class="mb-4">
            <strong>Google Analytics:</strong> We use Google Analytics on our Site to measure and analyze usage. Your
            browser automatically sends certain information when you visit our Site. You may opt out of this service if
            you wish.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Why Do We Collect Information?</h2>

        <p class="mb-4">
            We collect information to:
        </p>
        <ul class="list-disc list-inside mb-4">
            <li>Respond to your inquiries and provide requested services.</li>
            <li>Send updates, corporate communications, and project descriptions.</li>
            <li>Support business operations, including customer service, IT, and data analysis.</li>
            <li>Investigate fraudulent activities or violations of our policies or applicable laws.</li>
            <li>Comply with legal requirements or court orders.</li>
            <li>Send marketing communications, newsletters, or advertisements.</li>
            <li>For any other purposes for which you have provided consent.</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">How Do We Share the Information We Collect?</h2>

        <p class="mb-4">
            Sedic Texas does not sell or rent your personal information to third parties for direct marketing purposes.
            We may disclose personal information as follows:
        </p>

        <ul class="list-disc list-inside mb-4">
            <li><strong>With Your Consent:</strong> We may share your information when you give your consent or when we
                notify you that the information will be shared in a specific way.</li>
            <li><strong>As Required by Law:</strong> We may disclose personal information to comply with legal
                obligations, court orders, or to protect the rights and safety of Sedic Texas, its customers, or others.
            </li>
            <li><strong>To Our Affiliates:</strong> We may share your information with our affiliates for business
                purposes.</li>
            <li><strong>To Service Providers:</strong> We may share your information with third parties who assist us in
                operating the Site or providing services.</li>
            <li><strong>Due to Changes in Ownership:</strong> In the event of a merger, sale, or acquisition, your
                information may be transferred to the new entity, subject to the same privacy standards.</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Retention of Information</h2>

        <p class="mb-4">
            We retain your information only as long as necessary to fulfill the purposes for which it was collected, or
            as required by law, regulation, or contractual obligations.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Security</h2>

        <p class="mb-4">
            We take reasonable precautions to protect your personal information from unauthorized access, loss, or
            misuse. Our security measures include encryption, secure networks, and limiting access to authorized
            personnel. However, no method of transmission or storage is completely secure, and we cannot guarantee
            absolute security.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Intellectual Property</h2>

        <p class="mb-4">
            The content on this website, including design, text, images, and other materials, is protected by U.S.
            copyright laws and belongs to Sedic Texas or is used with permission. You may not reproduce or distribute
            any content without prior written consent from Sedic Texas.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Disclaimer</h2>

        <p class="mb-4">
            While we strive for accuracy, Sedic Texas assumes no responsibility for any errors or omissions on this
            website. All materials are provided "as is" without warranty of any kind.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Your Privacy Rights</h2>

        <p class="mb-4">
            You may choose to withdraw your consent and opt out of receiving marketing communications from Sedic Texas.
            To unsubscribe, follow the instructions in the communication or contact us at info@SEDICTEXAS.com. You also
            have the right to request corrections or updates to your personal information.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Links to Other Websites</h2>

        <p class="mb-4">
            Our Site may contain links to third-party websites, which are not controlled by Sedic Texas. We are not
            responsible for the privacy practices or content of these external sites.
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Changes to This Policy</h2>

        <p class="mb-4">
            Sedic Texas reserves the right to update this privacy policy at any time. Please review this policy
            periodically to stay informed about any changes.
        </p>

        <p class="mb-4">
            Last updated: [Insert Date]
        </p>

        <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Contact Us</h2>

        <p class="mb-4">
            If you have any questions regarding this privacy policy, please contact us at info@SEDICTEXAS.com or by mail
            at Sedic Texas, [Insert Address].
        </p>
      </div>
    
    
</div>

<div id="termsconditionpage" class="min-h-screen hide-page  py-10 px-20 bg-white dark:bg-zinc-900">
  <div class="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-400">
    <h1 class="text-3xl font-bold mb-4 text-center dark:text-gray-200">Terms and Conditions</h1>

    <p class="mb-4">
      PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OR ACCESSING ANY PAGES OF THIS WEBSITE. By using or accessing this website, you acknowledge and agree to the terms and conditions outlined below. If you do not agree to these terms, please refrain from using this website. We reserve the right to modify these terms at any time by updating this posting. Continued use after changes signifies your acceptance of the updated terms. Please review these terms periodically for any changes.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Ownership</h2>
    <p class="mb-4">
      This website is owned and operated by SEDICTEXAS and its affiliates (“SEDICTEXAS,” “Company,” “we,” or “us”). Questions regarding the website or its operation can be directed to the contact information provided at the end of these terms.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Use of Website Materials</h2>
    <p class="mb-4">
      You are permitted to print or temporarily download materials from this website for personal, non-commercial, reference, and informational purposes, provided you do not modify the materials and retain all copyright and proprietary notices. This license does not allow for the resale or commercial use of website content, data extraction, or use of the site for the benefit of another business.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Links to Third-Party Websites</h2>
    <p class="mb-4">
      This website may contain links to third-party websites, which are the responsibility of those external entities. Use of these links is at your own risk, and we are not liable for the content or practices of these third-party websites. It is your responsibility to ensure compliance with applicable laws when accessing any linked content.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">User Content</h2>
    <p class="mb-4">
      We appreciate your interest in SEDICTEXAS; however, we request that you do not submit original creative materials such as designs, product ideas, or suggestions. Any material or information disclosed or submitted to us via this website (referred to as “Disclosures”), including emails or postings, will be considered non-confidential, with no obligation on our part to keep such information private.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">No Warranties</h2>
    <p class="mb-4">
      SEDICTEXAS strives to provide accurate and up-to-date information but does not guarantee the accuracy of the content on this website. We make no representations or warranties that the site will be error-free, free of defects, or free of harmful elements such as viruses.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Limitation of Liability</h2>
    <p class="mb-4">
      SEDICTEXAS is not liable for any direct, indirect, incidental, or consequential damages, including lost profits, resulting from the use or inability to use this website. Our total liability in any claim related to this website is limited to the amount you paid, if any, to access the site.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Jurisdiction and Governing Law</h2>
    <p class="mb-4">
      SEDICTEXAS operates this website from its facilities in Texas, USA. The laws of the State of Texas govern these terms, without regard to conflict-of-law principles.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Trademarks and Copyrights</h2>
    <p class="mb-4">
      No content on this website grants any right or license to use any trademarks or copyrighted materials of SEDICTEXAS or third parties, either by implication or otherwise.
    </p>

    <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Severability</h2>
    <p class="mb-4">
      If any provision of these terms is found to be invalid or unenforceable, the remainder of the terms will continue to be in effect.
    </p>

   <h2 class="text-2xl font-bold mb-2 dark:text-gray-300">Contact Information</h2>
<p class="mb-4">
    For any questions regarding these terms, feel free to reach out to us at <a href="mailto:info@sedictexas.com" class="text-blue-600 dark:text-blue-400">info@sedictexas.com</a> or call us at:
</p>
<p class="mb-4">
     512-270-0211
    
</p>

  </div>
</div>





<div class="bg-gray-100 dark:bg-zinc-800 ">
  <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
    <div class="p-5">
    <div class="mt-1 ">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        class="fill-amber-400 group-hover:fill-amber-400 dark:group-hover:fill-amber-400 text-gray-700" width="100px" height="80px"
        viewBox="0 0 450 450" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,500.000000) scale(0.1,-0.1)" stroke="none">
          <path d="M2803 4138 c-11 -13 -28 -46 -37 -74 l-17 -52 -67 24 c-64 23 -132
31 -145 18 -8 -8 134 -142 182 -171 l36 -23 -402 0 -403 0 0 -109 0 -109 193
-1 192 0 3 -79 3 -79 52 9 c29 5 80 6 114 3 l62 -6 3 77 3 77 193 -2 192 -2 0
60 c0 34 2 61 5 61 3 0 32 -13 63 -30 81 -42 130 -47 184 -21 57 27 91 78 92
137 1 63 -25 84 -104 84 -37 0 -60 -5 -63 -12 -3 -7 -6 23 -6 68 -1 101 -11
115 -81 122 -66 6 -66 -12 0 -47 37 -19 40 -22 15 -16 -16 3 -52 24 -80 45
-98 74 -146 87 -182 48z m75 -70 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0
14 -5 12 -12z m54 -13 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11
13 6 -2 11 -8 11 -13z m-202 -50 c30 -12 84 -41 120 -64 66 -43 139 -69 200
-71 59 -3 68 -1 73 18 3 9 5 -2 6 -25 1 -41 0 -42 -35 -49 -19 -3 -53 -4 -76
-1 l-40 5 28 -31 c22 -24 19 -23 -11 5 -21 21 -36 40 -33 44 4 3 27 2 51 -4
53 -11 107 -5 107 13 0 9 -13 11 -42 8 -24 -2 -66 2 -95 10 -29 8 -50 10 -47
5 14 -22 -23 -4 -61 30 -54 50 -119 88 -203 118 -37 13 -51 21 -32 18 19 -3
60 -16 90 -29z" />
          <path d="M2348 3367 c-82 -23 -147 -87 -183 -177 -26 -67 -32 -212 -10 -285
32 -112 83 -173 304 -367 49 -43 98 -97 119 -131 32 -52 36 -67 40 -140 3 -71
0 -88 -20 -126 -34 -66 -67 -86 -141 -86 -119 1 -165 57 -175 211 l-5 84 -73
0 -74 0 0 -62 c0 -74 22 -183 45 -228 53 -102 141 -150 278 -150 100 0 141 11
204 53 37 25 56 48 83 101 35 68 35 71 35 195 0 119 -2 129 -29 182 -37 75
-95 144 -181 215 -143 121 -205 186 -237 251 -28 58 -30 69 -26 140 8 130 53
183 156 183 110 0 158 -52 169 -181 l6 -69 73 0 74 0 0 50 c0 153 -68 279
-178 326 -50 22 -194 28 -254 11z" />
          <path d="M2432 3108 c-36 -46 -18 -144 38 -209 l39 -44 1 113 c0 62 -5 122
-10 133 -12 21 -52 26 -68 7z" />
          <path d="M2400 2327 c0 -138 7 -157 55 -157 32 0 35 3 45 41 18 66 0 121 -64
194 l-35 40 -1 -118z" />
        </g>
      </svg>
    </div>
      <h3 class="font-bold text-xl dark:text-white text-black-600">Sedic texas</h3>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mr-2 text-white fill-current">
        <g transform="scale(0.1, -0.1)" fill="#000000">
          <path
            d="M2803 4138 c-11 -13 -28 -46 -37 -74 l-17 -52 -67 24 c-64 23 -132 31 -145 18 -8 -8 134 -142 182 -171 l36 -23 -402 0 -403 0 0 -109 0 -109 193 -1 192 0 3 -79 3 -79 52 9 c29 5 80 6 114 3 l62 -6 3 77 3 77 193 -2 192 -2 0 60 c0 34 2 61 5 61 3 0 32 -13 63 -30 81 -42 130 -47 184 -21 57 27 91 78 92 137 1 63 -25 84 -104 84 -37 0 -60 -5 -63 -12 -3 -7 -6 23 -6 68 -1 101 -11 115 -81 122 -66 6 -66 -12 0 -47 37 -19 40 -22 15 -16 -16 3 -52 24 -80 45 -98 74 -146 87 -182 48z m75 -70 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m54 -13 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z m-202 -50 c30 -12 84 -41 120 -64 66 -43 139 -69 200 -71 59 -3 68 -1 73 18 3 9 5 -2 6 -25 1 -41 0 -42 -35 -49 -19 -3 -53 -4 -76 -1 l-40 5 28 -31 c22 -24 19 -23 -11 5 -21 21 -36 40 -33 44 4 3 27 2 51 -4 53 -11 107 -5 107 13 0 9 -13 11 -42 8 -24 -2 -66 2 -95 10 -29 8 -50 10 -47 5 14 -22 -23 -4 -61 30 -54 50 -119 88 -203 118 -37 13 -51 21 -32 18 19 -3 60 -16 90 -29z" />
          <path d=</svg>
    </div>

    <div class="p-5">
      <div class="text-sm uppercase text-indigo-600 font-bold">Resources</div>
      <button id="aboutlink2" class="my-3 hover:text-amber-400 dark:text-white block" href="/#">About <span class="text-teal-600 text-xs p-1"></span></button>
      <button id="serviceslink2" class="my-3 hover:text-amber-400   dark:text-white block" href="/#">Services <span class="text-teal-600 text-xs p-1"></span></button>
      <button id="Contactlink2" class="my-3 hover:text-amber-400  dark:text-white block" href="/#">Contact Us <span class="text-lime-500 text-xs p-1">New</span></button>
    </div>

    <div class="p-5">
      <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
      <button id="Documentationlink" class="my-3 hover:text-amber-400 dark:text-white block" href="/#">Documentation <span class="text-teal-600 text-s p-1"></span></button>
      <button id="privacypolicylink" class="my-3 hover:text-amber-400 dark:text-white block" href="/#">Privacy Policy <span class="text-teal-600 text-s p-1"></span></button>
      <button id="TermsConditionslink" class="my-3 hover:text-amber-400  dark:text-white block" href="/#">Terms & Conditions <span class="text-teal-600 text-s p-1"></span></button>
    </div>
    <div class="p-2 pt-5">
      <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
      <a class="my-3 dark:text-white  hover:text-amber-400 block"  href="https://tinyurl.com/work-building" target="_blank">1212 Guadalupe St Austin, TX <span class="text-teal-600 text-xs p-1"></span></a>
      <a class="my-3 dark:text-white hover:text-amber-400 block" href="tel:+15122700211">
  512-270-0211 
  <span class="text-teal-600 text-xs p-1"></span>
</a>

      <a href="mailto:info@SEDICTEXAS.com" class="text-amber-400 underline">info@SEDICTEXAS.com<span class="text-teal-600 text-s p-1"></span></a>
    </div>
  </div>
</div>

<div class="bg-gray-100 dark:bg-zinc-800 pt-2">
  <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
        max-w-screen-lg items-center">
    <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">

    <a href="https://es-la.facebook.com/SedicIngenierosConsultores" target="_blank" id="facebookLink">
      <button 
        class=" cursor-pointer rounded-md shadow-md shadow-transparent transition-all  duration-300 dark:hover:shadow-indigo-400 hover:shadow-indigo-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 92" fill="none">
          <rect x="0.138672" width="" height="" rx="15" fill="#EDF4FF" />
          <path
            d="M56.4927 48.6403L57.7973 40.3588H49.7611V34.9759C49.7611 32.7114 50.883 30.4987 54.4706 30.4987H58.1756V23.4465C56.018 23.1028 53.8378 22.9168 51.6527 22.8901C45.0385 22.8901 40.7204 26.8626 40.7204 34.0442V40.3588H33.3887V48.6403H40.7204V68.671H49.7611V48.6403H56.4927Z"
            fill="#337FFF" />
        </svg>
      </button>
      </a>

      <a href="https://www.linkedin.com/company/sedic-s-a/?originalSubdomain=co" target="_blank" id="linkedinLink">
  <button class="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 dark:hover:shadow-blue-400 hover:shadow-blue-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
      <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="none" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24.6975 21.5618C22.6561 21.5618 21 23.1674 21 25.1456V68.0091C21 69.9875 22.6563 71.5918 24.6975 71.5918H67.3325C69.3747 71.5918 71.03 69.9873 71.03 68.0086V25.1456C71.03 23.1674 69.3747 21.5618 67.3325 21.5618H24.6975ZM36.2032 40.9068V63.4304H28.7167V40.9068H36.2032ZM36.6967 33.9411C36.6967 36.1025 35.0717 37.8321 32.4615 37.8321L32.4609 37.8319H32.4124C29.8998 37.8319 28.2754 36.1023 28.2754 33.9409C28.2754 31.7304 29.9489 30.0491 32.5111 30.0491C35.0717 30.0491 36.6478 31.7304 36.6967 33.9411ZM47.833 63.4304H40.3471L40.3469 63.4312C40.3469 63.4312 40.4452 43.0205 40.3475 40.9075H47.8336V44.0957C48.8288 42.5613 50.6098 40.3787 54.5808 40.3787C59.5062 40.3787 63.1991 43.598 63.1991 50.516V63.4304H55.7133V51.3822C55.7133 48.354 54.6293 46.2887 51.921 46.2887C49.8524 46.2887 48.6206 47.6815 48.0796 49.0271C47.8819 49.5072 47.833 50.1813 47.833 50.8535V63.4304Z"
        fill="#006699" />
    </svg>
  </button>
</a>

    <button id="googleLink" class="w-12 h-12 flex items-center justify-center cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 dark:hover:shadow-blue-400 hover:shadow-blue-200">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 54 41" fill="none">
    <path d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z" fill="#4285F4" />
    <path d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227" fill="#34A853" />
    <path d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448" fill="#FBBC04" />
    <path d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429" fill="#EA4335" />
    <path d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z" fill="#C5221F" />
  </svg>
</button>

    </div>
    <div class=" dark:text-white my-5">© Copyright 2025. All Rights Reserved.</div>
  </div>
</div>

`


// Routing Logic
const homeRoute = document.querySelector("#home")
const aboutRoute = document.querySelector("#about")
const serviceRoute = document.querySelector("#service")
const blogRoute = document.querySelector("#blog")
const locationsRoute = document.querySelector("#locations")
const contactRoute = document.querySelector("#contact")
const backgroundImg = document.querySelector("#backgroundImage")
const aboutImg = document.querySelector("#aboutImage")
const serviceImg = document.querySelector("#serviceImage")
const blogImg = document.querySelector("#blogImage")
const locationsImg = document.querySelector("#locationsImage")
const contactImg = document.querySelector("#contactImage")

// Small Navigation Menu
const homeRoute2 = document.querySelector("#home2")
const aboutRoute2 = document.querySelector("#about2")
const serviceRoute2 = document.querySelector("#services2")
const blogRoute2 = document.querySelector("#blog2")
const locationsRoute2 = document.querySelector("#locations2")
const contactRoute2 = document.querySelector("#contact2")

// Navigation Route Pages
const homePageRoute = document.querySelector("#homepage")
const aboutPageRoute = document.querySelector("#aboutpage")
const servicePageRoute = document.querySelector("#servicepage")
const blogPageRoute = document.querySelector("#blogpage")
const locationsPageRoute = document.querySelector("#locationspage")
const contactPageRoute = document.querySelector("#contactpage")

//Wesbite Internal Links
const contactLink = document.querySelector("#contactlink")
const serviceLink = document.querySelector("#serviceslink")
const aboutLink = document.querySelector("#aboutlink")
const energyLink = document.querySelector("#projectEnergyLink")
const energyPage = document.querySelector("#projectEnergyPage")
const InfrastructureLink = document.querySelector("#projectInfrastructureLink")
const InfrastructurePage = document.querySelector("#ProjectInfrastructurePage")
const WaterSanitationLink = document.querySelector("#ProjectWaterSanitationLink")
const WaterSanitationPage = document.querySelector("#ProjectWaterSanitationPage")
const SubstationsLink = document.querySelector("#ProjectSubstationsLink")
const SubstationsPage = document.querySelector("#ProjectSubstationsPage")
const ConstructionLink = document.querySelector("#ProjectConstructionLink")
const ConstructionPage = document.querySelector("#ProjectConstructionPage")
const IndustrialLink = document.querySelector("#ProjectIndustrialLink")
const IndustrialPage = document.querySelector("#ProjectIndustrialPage")

// Footer Links
const serviceLink2 = document.querySelector("#serviceslink2")
const aboutLink2 = document.querySelector("#aboutlink2")
const contactLink2 = document.querySelector("#Contactlink2")
const DocumentationPage = document.querySelector("#Documentationpage")
const DocumentationLink = document.querySelector("#Documentationlink")
const privacypolicyPage = document.querySelector("#privacypolicypage")
const privacypolicyLink = document.querySelector("#privacypolicylink")
const TermsConditionsPage = document.querySelector("#termsconditionpage")
const TermsConditionsLink = document.querySelector("#TermsConditionslink")

// Routes Config
const routesConfig = [
  {
    triggerElement: homeRoute,
    pagesToHide: [aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: homePageRoute,
    imagesToHide: [aboutImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: backgroundImg,
    route: "/home" // URL route for this page
  },
  {
    triggerElement: aboutRoute,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: aboutPageRoute,
    imagesToHide: [backgroundImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: aboutImg,
    route: "/about" // URL route for this page

  },
  {
    triggerElement: serviceRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: servicePageRoute,
    imagesToHide: [backgroundImg, aboutImg, blogImg, locationsImg, contactImg],
    imageToShow: serviceImg,
    route: "/services" // URL route for this page
  },
  {
    triggerElement: blogRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: blogPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, locationsImg, contactImg],
    imageToShow: blogImg,
    route: "/projects" // URL route for this page

  },
  {
    triggerElement: locationsRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: locationsPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, contactImg],
    imageToShow: locationsImg
  },
  {
    triggerElement: contactRoute,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: contactPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg],
    imageToShow: contactImg,
    route: "/contact" // URL route for this page
  },
  {
    triggerElement: homeRoute2,
    pagesToHide: [aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: homePageRoute,
    imagesToHide: [aboutImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: backgroundImg,
    route: "/home" // URL route for this page
  },
  {
    triggerElement: aboutRoute2,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: aboutPageRoute,
    imagesToHide: [backgroundImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: aboutImg,
    route: "/about" // URL route for this page
  },
  {
    triggerElement: serviceRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: servicePageRoute,
    imagesToHide: [backgroundImg, aboutImg, blogImg, locationsImg, contactImg],
    imageToShow: serviceImg,
    route: "/services" // URL route for this page
  },
  {
    triggerElement: blogRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: blogPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, locationsImg, contactImg],
    imageToShow: blogImg,
    route: "/projects" // URL route for this page
  },
  {
    triggerElement: locationsRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: locationsPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, contactImg],
    imageToShow: locationsImg,
    
  },
  {
    triggerElement: contactRoute2,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: contactPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg],
    imageToShow: contactImg,
    route: "/contact" // URL route for this page
  },
  {
    triggerElement: contactLink,
    pagesToHide: [homePageRoute, aboutPageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: contactPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg],
    imageToShow: contactImg,
    route: "/contact" // URL route for this page
  },
  {
    triggerElement: serviceLink,
    pagesToHide: [homePageRoute, aboutPageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: servicePageRoute,
    imagesToHide: [backgroundImg, aboutImg, blogImg, locationsImg, contactImg],
    imageToShow: serviceImg,
    route: "/services" // URL route for this page

  },
  {
    triggerElement: aboutLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: aboutPageRoute,
    imagesToHide: [backgroundImg, serviceImg, blogImg, locationsImg, contactImg],
    imageToShow: aboutImg,
    route: "/about" // URL route for this page

  },
  {
    triggerElement: serviceLink2,
    pagesToHide: [homePageRoute, aboutPageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: servicePageRoute,
    imagesToHide: [backgroundImg, aboutImg, blogImg, locationsImg, contactImg ],
    imageToShow: serviceImg,
    route: "/services" // URL route for this page
  },
  {
    triggerElement: aboutLink2,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, aboutPageRoute, privacypolicyPage, TermsConditionsPage, contactPageRoute, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: aboutPageRoute,
    imagesToHide: [backgroundImg, serviceImg, blogImg, locationsImg ],
    imageToShow: aboutImg,
    route: "/about" // URL route for this page

  },
  {
    triggerElement: contactLink2,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, aboutPageRoute, privacypolicyPage, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: contactPageRoute,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg,  ],
    imageToShow: contactImg,
    route: "/contact" // URL route for this page
  },
  {
    triggerElement: DocumentationLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, TermsConditionsPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: DocumentationPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: DocumentationPage,
    route: "/documentation" // URL route for this page
  },
  {
    triggerElement: privacypolicyLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, TermsConditionsPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: privacypolicyPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: privacypolicyPage,
    route: "/privacypolicy" // URL route for this page
  },
  {
    triggerElement: TermsConditionsLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: TermsConditionsPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: TermsConditionsPage,
    route: "/terms-and-conditions", // Ensure this matches the actual URL path

  },
  {
    triggerElement: energyLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage,TermsConditionsPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: energyPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: energyPage,
    route: "/projects/energy" // URL route for this page
  },
  {
    triggerElement: InfrastructureLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage,TermsConditionsPage, energyPage, WaterSanitationPage, SubstationsPage, IndustrialPage],
    pageToShow: InfrastructurePage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: InfrastructurePage,
    route: "/projects/Infrastructure" // URL route for this page
  },
  {
    triggerElement: WaterSanitationLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage,TermsConditionsPage, energyPage, InfrastructurePage, SubstationsPage, ConstructionPage, IndustrialPage],
    pageToShow: WaterSanitationPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: WaterSanitationPage,
    route: "/projects/WaterSanitation" // URL route for this page
  },
  {
    triggerElement: SubstationsLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage,TermsConditionsPage, energyPage, InfrastructurePage, WaterSanitationPage, ConstructionPage, IndustrialPage],
    pageToShow: SubstationsPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: SubstationsPage,
    route: "/projects/Substations" // URL route for this page
    
  },
  {
    triggerElement: ConstructionLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage,TermsConditionsPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, IndustrialPage],
    pageToShow: ConstructionPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: ConstructionPage,
    route: "/projects/Construction" // URL route for this page

  },
  {
    triggerElement: IndustrialLink,
    pagesToHide: [homePageRoute, servicePageRoute, blogPageRoute, locationsPageRoute, contactPageRoute, aboutPageRoute, privacypolicyPage, DocumentationPage,TermsConditionsPage, energyPage, InfrastructurePage, WaterSanitationPage, SubstationsPage, ConstructionPage],
    pageToShow: IndustrialPage,
    imagesToHide: [backgroundImg, aboutImg, serviceImg, blogImg, locationsImg, contactImg ],
    imageToShow: IndustrialPage,
    route: "/projects/Industrial" // URL route for this page
  }


]

const menuIcon = document.querySelector("#toggleButton")
const closeIcon = document.querySelector("#closeButton")
const navigationMenu = document.querySelector("#navigation")

toggleNavigation(
  menuIcon,
  navigationMenu,
  closeIcon
)

setupRoutes(routesConfig, menuIcon, navigationMenu, closeIcon)


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
      console.log(contactForm);
      contactForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent default form submission
          handleFormSubmit(contactForm); // Call the function
      });
  }
});


// Coursel Slide
const slide1 = document.querySelector("#slideOne")
const slide2 = document.querySelector("#slideTwo")
const slide3 = document.querySelector("#slideThree")

const decrease = document.querySelector("#decreaseIndex")
const increase = document.querySelector("#increaseIndex")

const slidepos1 = document.querySelector("#slideOneIndicator")
const slidepos2 = document.querySelector("#slideTwoIndicator")
const slidepos3 = document.querySelector("#slideThreeIndicator")



carouselSlide(0, slide1, slide2, slide3, increase, decrease, slidepos1, slidepos2, slidepos3)
